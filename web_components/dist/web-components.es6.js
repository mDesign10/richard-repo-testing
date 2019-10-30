/*! Copyright (c) 2019 CommonTime Ltd */
/*! Build date: Tue Oct 29 2019 11:35:57 GMT+0000 (Greenwich Mean Time) */
/*! ================================= */

/*! Copyright (c) 2018 CommonTime Ltd */

(() => {
    
    "use strict";
    
    /**
     * Data grid column component, to be used in a data grid component
     * @attribute {string} key - The name of the key in the data source whose value to present in this column and use for sorting and searching
     * @attribute {string=string|number|date|datetime|boolean|url|controls} [data-type] - The data type of the data to be presented in this column
     * @attribute {string} [displayKey] - The name of the key in the data source whose value to use for presentation, but not for sorting and searching
     * @attribute {string} [cssKey] - Defines which key of the data should be used to obtain the CSS class for the data cell
     * @attribute {boolean} [sortable] - If enabled; this column becomes a sortable column in the data grid
     * @attribute {boolean} [editable] - If enabled; this column becomes an editable column when editing the row item
     * @attribute {string=""|asc|desc} [sort] - The initial sort order of this column if it is sortable
     * @attribute {string} [width] - The CSS width of this column; please specify the unit (e.g., %, px, etc)
     * @attribute {string} [edit-button-label] - An override for the edit button label if this column is of type "controls"
     * @attribute {string} [save-button-label] - An override for the save button label if this column is of type "controls"
     * @attribute {string} [cancel-button-label] - An override for the cancel button label if this column is of type "controls"
     */
    customElements.define("ct-data-col", class extends HTMLElement {
        
        constructor(self) {
            
            self = super(self);
            return self;
        }
    });
    
})();
/*! Copyright (c) 2019 CommonTime Ltd */
/*! Build date: Tue Oct 29 2019 11:35:57 GMT+0000 (Greenwich Mean Time) */
/*! ================================= */

/*! Copyright (c) 2018 CommonTime Ltd */

(() => {
    
    "use strict";
    
    /**
     * Data grid component
     * @container
     * @container-accepts ct-data-col
     * @attribute {string} [data-source] - The URL to the source of data for the grid
     * @attribute {string=GET|POST} [data-source-method] - The HTTP method to request the data source with
     * @attribute {string} [data-source-page-param] - The name of the parameter to use to specify the page number when requesting data from the data source
     * @attribute {string} [data-source-page-size-param] - The name of the parameter to use to specify the page size when requesting data from the data source
     * @attribute {string} [data-source-search-param] - The name of the parameter to use to specify the search filter when requesting data from the data source
     * @attribute {string} [data-source-sort-column-param] - The name of the parameter to use to specify the column to sort by when requesting data from the data source
     * @attribute {string} [data-source-sort-direction-param] - The name of the parameter to use to specify the sort direction by when requesting data from the data source
     * @attribute {string} [data-results-property] - The name of the property in the data source response which contains the data items
     * @attribute {string} [data-results-total-property] - The name of the property in the data source response which contains the total number of data items
     * @attribute {boolean} [show-search] - Whether to present the built-in search box for the data grid
     * @attribute {boolean} [show-pagination] - Whether to present the built-in pagination for the data grid
     * @attribute {integer} [page-size] - The number of items to present per page
     * @attribute {boolean} [use-local-interaction] - If enabled; sorting, searching and pagination will be done in memory on the client, otherwise further requests will be made to the data source
     * @attribute {boolean} [fixed-headers] - If enabled, the header row will be fixed in position and will not scroll with the table data
     * @attribute {string} [row-css-key] - Defines which key of the row data should be used to obtain the CSS class for the row
     * @attribute {string=None|Row|Cell} [selection-mode] - Defines whether rows, cells or nothing is selectable on the data grid
     * @event ready - Fired when the data grid has been initialised and rendered
     * @event data-error - Fired when an error occurs in the data grid, most likely related to obtaining data from the data source
     * @event data-rendered - Fired when data obtained from the data source has been rendered
     * @event selection - Fired when a row or cell has been selected in the data grid, subject to the selection-mode attribute
     * @event data-change - Fired when wishing to commit changes made to data using the inline editing functionality.
     */
    customElements.define("ct-data-grid", class CtDataGrid extends HTMLElement {
        
        injectStyles() {
            
            let $style = document.head.querySelector(`style[rel=${this.tagName.toLowerCase()}]`);
            if (!$style) {
                $style = document.createElement("style");
                $style.setAttribute("rel", this.tagName.toLowerCase());
                $style.textContent = `/*! Copyright (c) 2018 CommonTime Ltd */@keyframes ctDataGridSpin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}ct-data-grid{display:flex;position:relative;flex:1}ct-data-grid ct-data-col{display:none;position:absolute;top:-9999px;left:-9999px;width:0;height:0}ct-data-grid .ct-data-grid{position:relative;top:0;left:0;width:100%;height:auto;max-height:100%;display:flex;flex-direction:column}ct-data-grid .ct-data-grid .search-area{display:none;flex:0 0 auto;margin:0 0 20px 0}ct-data-grid .ct-data-grid .table-area{position:relative;min-height:.01%;overflow-x:auto;-webkit-overflow-scrolling:touch}ct-data-grid .ct-data-grid .table-area .table-container table{margin:0;width:100%}ct-data-grid .ct-data-grid .table-area .table-container table td,ct-data-grid .ct-data-grid .table-area .table-container table th{position:relative}ct-data-grid .ct-data-grid .table-area .table-container table th{user-select:none;white-space:nowrap}ct-data-grid .ct-data-grid .table-area .table-container table th.sortable{cursor:pointer}ct-data-grid .ct-data-grid .table-area .table-container table th.sortable:after{content:"\\f0dc";font-family:"FontAwesome";display:inline-block;vertical-align:middle;font-size:0.8em;width:20px;text-align:right;opacity:0.3}ct-data-grid .ct-data-grid .table-area .table-container table th.sortable.sort-asc:after{content:"\\f0de";opacity:1}ct-data-grid .ct-data-grid .table-area .table-container table th.sortable.sort-desc:after{content:"\\f0dd";opacity:1}ct-data-grid .ct-data-grid .table-area .table-container table td{padding:0}ct-data-grid .ct-data-grid .table-area .table-container table td .content{display:block;padding:8px}ct-data-grid .ct-data-grid .table-area .table-container table td .control{display:block;padding:5px}ct-data-grid .ct-data-grid .table-area .table-container table td .control input{line-height:normal}ct-data-grid .ct-data-grid .table-area .table-container table td .edit-controls{display:block;padding:7px}ct-data-grid .ct-data-grid .table-area .table-container table td .edit-controls button{margin:0 0 0 5px}ct-data-grid .ct-data-grid .table-area .table-container table td .edit-controls button:first-child{margin:0}ct-data-grid .ct-data-grid .table-area .table-container table td .message-detail{font-size:0.8em}ct-data-grid .ct-data-grid .table-area .table-container table td .edit-control{width:100%}ct-data-grid .ct-data-grid .table-area .table-container table td.message-info{padding-left:30px}ct-data-grid .ct-data-grid .table-area .table-container table td.message-info:before{content:"\\f05a";font-family:"FontAwesome";display:block;position:absolute;top:9px;left:9px}ct-data-grid .ct-data-grid .table-area .table-container table td.message-error{background:#f2dede;padding-left:30px}ct-data-grid .ct-data-grid .table-area .table-container table td.message-error:before{content:"\\f06a";font-family:"FontAwesome";display:block;position:absolute;top:9px;left:9px}ct-data-grid .ct-data-grid .table-area .table-container table.selection-mode-row tr.selected,ct-data-grid .ct-data-grid .table-area .table-container table.selection-mode-cell tr.selected{background-color:#d9edf7}ct-data-grid .ct-data-grid .table-area .table-container table.selection-mode-row td,ct-data-grid .ct-data-grid .table-area .table-container table.selection-mode-cell td{cursor:pointer}ct-data-grid .ct-data-grid .table-area .table-container table.selection-mode-cell td.selected{background-color:rgba(0,0,0,0.05)}ct-data-grid .ct-data-grid .table-area.fixed-headers{display:flex}ct-data-grid .ct-data-grid .table-area.fixed-headers .table-container{display:flex;flex:1}ct-data-grid .ct-data-grid .table-area.fixed-headers .table-container table{display:flex;flex-direction:column;table-layout:fixed;flex:1}ct-data-grid .ct-data-grid .table-area.fixed-headers .table-container table thead{display:block;flex:0 0 auto}ct-data-grid .ct-data-grid .table-area.fixed-headers .table-container table thead tr{display:flex}ct-data-grid .ct-data-grid .table-area.fixed-headers .table-container table tbody{display:block;flex:1 1 auto;overflow:auto}ct-data-grid .ct-data-grid .table-area.fixed-headers .table-container table tbody tr{display:flex}ct-data-grid .ct-data-grid .table-area.fixed-headers .table-container table tbody tr:first-child td{border-top:0}ct-data-grid .ct-data-grid .table-area.fixed-headers .table-container table td,ct-data-grid .ct-data-grid .table-area.fixed-headers .table-container table th{flex:1;overflow:hidden}ct-data-grid .ct-data-grid .table-area.fixed-headers .table-container table td .content,ct-data-grid .ct-data-grid .table-area.fixed-headers .table-container table th .content{text-overflow:ellipsis;overflow:hidden}ct-data-grid .ct-data-grid .pagination-area{flex:0 0 auto;display:none;user-select:none;margin:20px 0 0 0}ct-data-grid .ct-data-grid .loading{position:absolute;top:0;left:0;width:100%;height:100%;display:none}ct-data-grid .ct-data-grid.has-search .search-area{display:flex;justify-content:flex-end}ct-data-grid .ct-data-grid.has-search .search-area .search-bar .search-box{position:relative;width:400px}ct-data-grid .ct-data-grid.has-search .search-area .search-bar .search-box input.form-control{z-index:1;padding-right:24px}ct-data-grid .ct-data-grid.has-search .search-area .search-bar .search-box .clear-button{position:absolute;top:0;right:34px;width:24px;height:100%;padding:8px 0 0 0;text-align:center;z-index:2;cursor:pointer;opacity:0.5;font-size:0.8em}ct-data-grid .ct-data-grid.has-search .search-area .search-bar .search-box .clear-button:hover{opacity:1}ct-data-grid .ct-data-grid.has-pagination .pagination-area{display:flex;justify-content:center}ct-data-grid .ct-data-grid.has-pagination .pagination-area ul.pagination{display:block;margin:0}ct-data-grid .ct-data-grid.has-pagination .pagination-area ul.pagination .page-bookend .page-label{display:none}ct-data-grid .ct-data-grid.has-pagination .pagination-area ul.pagination li>a{min-width:40px;text-align:center;cursor:pointer}ct-data-grid .ct-data-grid.loading-data .loading{display:block}ct-data-grid .ct-data-grid.loading-data .loading .bg{width:100%;height:100%;background:#ffffff;opacity:0.5}ct-data-grid .ct-data-grid.loading-data .loading .spinner{position:absolute;top:50%;left:50%;width:32px;height:32px;border:1px solid #cccccc;border-radius:50%;margin:-16px 0 0 -16px;background:#ffffff}ct-data-grid .ct-data-grid.loading-data .loading .spinner:after{content:"";display:block;position:absolute;width:24px;height:24px;top:50%;left:50%;margin:-12px 0 0 -12px;border:3px solid rgba(0,0,0,0.2);border-left-color:#000000;border-radius:50%;transform:translateZ(0);animation:ctDataGridSpin 1.1s infinite linear}
                `;
                document.head.appendChild($style);
            }
        }
        
        generateHtml() {
            
            return `<div class="ct-data-grid">
                <div class="search-area"></div>
                <div class="table-area">
                    <div class="table-container"></div>
                    <div class="loading"></div>
                </div>
                <div class="pagination-area"></div>
            </div>`;
        }
        
        constructor(self) {
            
            self = super(self);
            
            self.localData = null;
            self.model = {
                cols: [],
                data: []
            };
            
            self.isReady = false;
            
            return self;
        }
        
        static get observedAttributes() {
            
            return [
                "data-source",
                "data-source-method",
                "data-source-page-param",
                "data-source-page-size-param",
                "data-source-search-param",
                "data-source-sort-column-param",
                "data-source-sort-direction-param",
                "data-results-property",
                "data-results-total-property",
                "show-search",
                "show-pagination",
                "page-size",
                "use-local-interaction",
                "fixed-headers",
                "row-css-key",
                "selection-mode"
            ];
        }
        
        connectedCallback() {
            
            const id = this.getAttribute("id") || `autoid${new Date().getTime()}`;
            
            const columnDefinitions = Array.from(this.querySelectorAll("ct-data-col"));
            columnDefinitions.forEach(x => {
                
                this.model.cols.push({
                    key: x.getAttribute("key"),
                    classes: x.getAttribute("class") || "",
                    displayKey: x.getAttribute("display-key"),
                    cssKey: x.getAttribute("css-key"),
                    heading: x.textContent,
                    dataType: (x.getAttribute("data-type") || "string"),
                    sortable: x.hasAttribute("sortable") && x.getAttribute("sortable") !== "false",
                    sort: x.getAttribute("sort"),
                    width: x.getAttribute("width"),
                    editable: x.hasAttribute("editable") && x.getAttribute("editable") !== "false",
                    isControls: x.getAttribute("data-type") === "controls",
                    editButtonLabel: x.getAttribute("edit-button-label") || "Edit",
                    saveButtonLabel: x.getAttribute("save-button-label") || "Save",
                    cancelButtonLabel: x.getAttribute("cancel-button-label") || "Cancel"
                });
            });
            
            this.id = id;
            
            this.injectStyles();
            this.innerHTML = this.generateHtml();
            
            columnDefinitions.forEach(x => {
                
                this.appendChild(x);
            });
            
            this.$element = this.querySelector(".ct-data-grid");
            this.$searchArea = this.querySelector(".search-area");
            this.$tableArea = this.querySelector(".table-area");
            this.$tableContainer = this.querySelector(".table-container");
            this.$paginationArea = this.querySelector(".pagination-area");
            this.$loading = this.querySelector(".loading");
            
            this._initialize();
            this._raiseEvent("ready");
            
            this.isReady = true;
        }
        
        attributeChangedCallback(attrName, oldValue, newValue) {
            
            if (!this.isReady) return;
            if (oldValue === newValue) return;
            
            let requiresUiRepaint = false;
            let requiresDataRepaint = false;
            let requiresDataFetch = false;
            
            switch (attrName.toLowerCase()) {
                
                case "data-source":
                case "data-source-method":
                case "data-source-page-param":
                case "data-source-page-size-param":
                case "data-source-search-param":
                case "data-source-sort-column-param":
                case "data-source-sort-direction-param":
                case "data-results-property":
                case "data-results-total-property":
                    this._processDataSourceAttributes();
                    this._processInteractionAttributes();
                    requiresDataFetch = true;
                    break;
                
                case "show-search":
                    this._processSearchAttributes();
                    requiresUiRepaint = true;
                    requiresDataRepaint = true;
                    break;
                
                case "show-pagination":
                    this._processPaginationAttributes();
                    requiresUiRepaint = true;
                    requiresDataFetch = true;
                    break;
                
                case "page-size":
                    this._processPaginationAttributes();
                    requiresDataFetch = true;
                    break;
                
                case "use-local-interaction":
                    this._processInteractionAttributes();
                    requiresDataFetch = true;
                    break;
                
                case "fixed-headers":
                    this._processPresentationAttributes();
                    requiresUiRepaint = true;
                    requiresDataRepaint = true;
                    break;
                
                case "row-css-key":
                    this._processPresentationAttributes();
                    requiresDataRepaint = true;
                    break;
                
                case "selection-mode":
                    this._processInteractionAttributes();
                    requiresUiRepaint = true;
                    requiresDataRepaint = true;
                    break;
            }
            
            if (requiresUiRepaint) {
                
                this._render(true);
            }
            
            if (requiresDataRepaint || requiresDataFetch) {
                
                const suppressDataFetch = !requiresDataFetch;
                this._buildDataRows(suppressDataFetch);
            }
        }
        
        // === Internal functions === //
        
        _initialize() {
            
            this._processDataSourceAttributes();
            this._processSearchAttributes();
            this._processPaginationAttributes();
            this._processInteractionAttributes();
            this._processPresentationAttributes();
            
            this.searchQuery = "";
            
            this.sortBy = null;
            this.sortDirection = null;
            
            this.pageNumber = 1;
            this.unfilteredTotalResults = 0;
            this.totalResults = 0;
            
            this.selectedValue = null;
            
            this._render();
        }
        
        _processDataSourceAttributes() {
            
            this.dataSourceUrl = this.getAttribute("data-source");
            this.dataSourceMethod = this.getAttribute("data-source-method") || "GET";
            this.dataSourcePageParam = this.getAttribute("data-source-page-param") || "page";
            this.dataSourcePageSizeParam = this.getAttribute("data-source-page-size-param") || "limit";
            this.dataSourceSearchParam = this.getAttribute("data-source-search-param") || "query";
            this.dataSourceSortColumnParam = this.getAttribute("data-source-sort-column-param") || "sort";
            this.dataSourceSortDirectionParam = this.getAttribute("data-source-sort-direction-param") || "dir";
            this.dataResultsProperty = this.getAttribute("data-results-property") || "data";
            this.dataResultsTotalProperty = this.getAttribute("data-results-total-property") || "totalResults";
            this.useDataSource = !!this.dataSourceUrl;
            this.dataSourceParams = null;
        }
        
        _processInteractionAttributes() {
            
            this.useLocalInteraction = !this.useDataSource || (this.hasAttribute("use-local-interaction") && this.getAttribute("use-local-interaction").toLowerCase() !== "false");
            this.selectionMode = (this.getAttribute("selection-mode") || "none").toLowerCase();
        }
        
        _processSearchAttributes() {
            
            this.showSearch = this.hasAttribute("show-search") && this.getAttribute("show-search").toLowerCase() !== "false";
        }
        
        _processPaginationAttributes() {
            
            this.showPagination = !this.hasAttribute("show-pagination") || this.getAttribute("show-pagination").toLowerCase() !== "false";
            this.pageSize = parseInt(this.getAttribute("page-size")) || 0;
        }
        
        _processPresentationAttributes() {
            
            this.fixedHeaders = this.hasAttribute("fixed-headers") && this.getAttribute("fixed-headers").toLowerCase() !== "false";
            this.rowCssKey = this.getAttribute("row-css-key") || "";
            
            if (this.$tableArea) {
                
                this.$tableArea.classList.toggle("fixed-headers", this.fixedHeaders);
            }
        }
        
        _render(suppressDataFetch = false) {
            
            CtDataGrid._removeChildren(this.$tableContainer);
            
            this._buildSearchArea();
            
            this._buildTable(suppressDataFetch);
            
            this.$tableContainer.appendChild(this.$table);
        }
        
        // === Sourcing or preparing data === //
        
        _loadDataFromUrl() {
            
            const ths = this;
            
            return new Promise((resolve) => {
                
                ths._setLoading(true);
                
                ths.dataSourceParams = {};
                
                if (!this.useLocalInteraction) {
                    
                    if (ths.searchQuery) {
                        ths.dataSourceParams[ths.dataSourceSearchParam] = ths.searchQuery;
                    }
                    
                    if (ths.sortBy !== null) {
                        ths.dataSourceParams[ths.dataSourceSortColumnParam] = ths.sortBy;
                        ths.dataSourceParams[ths.dataSourceSortDirectionParam] = ths.sortDirection;
                    }
                    
                    if (ths.pageSize && ths.pageNumber) {
                        ths.dataSourceParams[ths.dataSourcePageSizeParam] = ths.pageSize;
                        ths.dataSourceParams[ths.dataSourcePageParam] = ths.pageNumber;
                    }
                }
                
                ths._sendRequest(ths.dataSourceMethod, ths.dataSourceUrl, ths.dataSourceParams)
                    .then((response) => {
                        
                        const data = CtDataGrid._getProperty(response, ths.dataResultsProperty);
                        if (!Array.isArray(data)) {
                            
                            ths._setLoading(false);
                            ths._setMessage("error", `Incorrect data retrieved, must be array; was ${typeof(data)}`);
                            ths._raiseEvent("data-error");
                            resolve(false);
                        }
                        
                        const totalResults = CtDataGrid._getProperty(response, ths.dataResultsTotalProperty);
                        ths.unfilteredTotalResults = totalResults || data.length;
                        ths.totalResults = totalResults || data.length;
                        
                        ths._setLoading(false);
                        ths._setData(data);
                        
                        resolve(true);
                        
                    }, (error) => {
                        
                        ths._setLoading(false);
                        ths._setMessage("error", "Error loading data...", error);
                        ths._raiseEvent("data-error");
                        
                        resolve(false);
                    });
            });
        }
        
        _prepareLocalData() {
            
            return new Promise((resolve) => {
                
                let workingData = Array.from(this.localData || []); // copy to preserve original
                
                workingData = this._searchLocal(workingData); // search
                
                this.totalResults = workingData.length;
                
                workingData = this._sortLocal(workingData); // sort
                workingData = this._paginateLocal(workingData); // paginate
                
                this._setData(workingData);
                
                resolve(true);
            });
        }
        
        // === Drawing the data grid === //
        
        _buildTable(suppressDataFetch = false) {
            
            this.$table = document.createElement("table");
            this.$table.classList.add("table", "table-striped", "table-hover");
            
            switch (this.selectionMode) {
                
                case "row":
                    this.$table.classList.add("selection-mode-row");
                    break;
                
                case "cell":
                    this.$table.classList.add("selection-mode-cell");
                    break;
            }
            
            if (this.fixedHeaders) {
                this.$tableArea.classList.add("fixed-headers");
            }
            
            this.$thead = document.createElement("thead");
            this.$table.appendChild(this.$thead);
            
            const $htr = document.createElement("tr");
            this.model.cols.forEach(c => this._buildColumnHeader($htr, c));
            this.$thead.appendChild($htr);
            
            this.$tbody = document.createElement("tbody");
            this.$table.appendChild(this.$tbody);
            
            if (this.useDataSource && suppressDataFetch === false) {
                this._buildDataRows();
            }
        }
        
        _buildColumnHeader($row, column) {
            
            const $th = document.createElement("th");
            
            if (column.key) {
                
                $th.setAttribute("key", column.key);
            }
            
            if (column.classes !== undefined && column.classes !== null) {
                
                column.classes.toString().split(" ").forEach(x => {
                    if (x) $th.classList.add(x);
                });
            }
            
            if (column.isControls) {
                
                $th.classList.add("edit-controls");
            }
            
            if (column.width !== null) {
                
                if (this.fixedHeaders) $th.style.flex = `1 1 ${column.width}`;
                else $th.style.width = column.width;
            }
            
            if (column.sortable && !column.isControls) {
                
                $th.classList.add("sortable");
                
                if (column.key === this.sortBy) {
    
                    this._changeSort($th, this.sortDirection, true);
                    
                } else if (!this.sortBy) {
                    
                    if (column.sort && column.sort.toString().toLowerCase() === "asc") {
                        this._changeSort($th, "asc", true);
                    }
                    
                    if (column.sort && column.sort.toString().toLowerCase() === "desc") {
                        this._changeSort($th, "desc", true);
                    }
                }
                
                $th.addEventListener("click", () => {
                    
                    this._changeSort($th);
                });
            }
            
            $th.textContent = column.heading;
            
            $row.appendChild($th);
        }
        
        _buildDataRows(suppressDataFetch = false) {
            
            let promise;
            
            if (!suppressDataFetch) {
                
                if (this.useDataSource && this.useLocalInteraction && this.localData === null) {
                    
                    promise = this._loadDataFromUrl()
                        .then(() => {
                            
                            this.localData = this.model.data;
                            this.unfilteredTotalResults = this.localData.length;
                            this.totalResults = this.localData.length;
                            return this._prepareLocalData();
                        });
                    
                } else {
                    
                    promise = (this.useLocalInteraction)
                        ? this._prepareLocalData()
                        : this._loadDataFromUrl();
                }
                
            } else {
                
                promise = Promise.resolve(!!this.model.data);
            }
            
            promise.then((hasData) => {
                
                if (hasData) {
                    
                    CtDataGrid._removeChildren(this.$tbody);
                    
                    if (this.model.data.length > 0) {
                        this.model.data.forEach((r, idx) => this._buildDataRow(r, idx));
                    } else {
                        this._setMessage("info", "No data to display...");
                    }
                    
                    this._buildPagination();
                    this._raiseEvent("data-rendered");
                }
            });
        }
        
        _buildDataRow(row, rowIdx) {
            
            const originalItemIdx = this._applyIndexes(row).__idx;
            const $tr = document.createElement("tr");
            
            if (this.rowCssKey && row.hasOwnProperty(this.rowCssKey) && row[this.rowCssKey] !== undefined && row[this.rowCssKey] !== null) {
                
                const rowClasses = row[this.rowCssKey].toString().split(" ");
                rowClasses.forEach(x => {
                    if (x) $tr.classList.add(x);
                });
            }
            
            if (this._isEditItem(originalItemIdx)) {

                $tr.classList.add("editing");
            }
            
            this.model.cols.forEach((c, idx) => {
                
                this._buildDataCell($tr, c, idx, row, rowIdx, originalItemIdx);
            });
            
            if (this.selectionMode === "row") {
                
                $tr.addEventListener("click", () => this.__handleRowClick($tr, row, rowIdx));
            }
            
            this.$tbody.appendChild($tr);
        }
        
        _buildDataCell($row, column, columnIdx, row, rowIdx, itemIdx) {
            
            const $td = document.createElement("td");
    
            if (column.classes !== undefined && column.classes !== null) {
                column.classes.toString().split(" ").forEach(x => {
                    if (x) $td.classList.add(x);
                });
            }
            
            if (column.cssKey && row.hasOwnProperty(column.cssKey) && row[column.cssKey] !== undefined && row[column.cssKey] !== null) {
                const cellClasses = row[column.cssKey].toString().split(" ");
                cellClasses.forEach(x => {
                    if (x) $td.classList.add(x);
                });
            }
            
            if (column.width !== undefined) {
                if (this.fixedHeaders) $td.style.flex = `1 1 ${column.width}`;
                else $td.style.width = column.width;
            }
            
            $row.appendChild($td);
            
            if (this.selectionMode === "cell" && !column.isControls) {
                
                $td.addEventListener("click", () => this.__handleCellClick($td, row, rowIdx, column, columnIdx));
            }
            
            const $cellContent = document.createElement("div");
            
            let editMode = false;
            
            if (this.editManifest && this.editManifest.itemIndexes.length && (column.editable || column.isControls)) {
                
                editMode = (this.editManifest.itemIndexes.includes(itemIdx));
            }
            
            const cellContentClass = column.isControls
                ? "edit-controls"
                : editMode
                    ? "control"
                    : "content";
            $cellContent.classList.add(cellContentClass);
            
            if (editMode) {
                
                CtDataGrid._removeChildren($cellContent);
                
                if (column.isControls) {
                    
                    this._buildEditButtons($cellContent, column, false, itemIdx);
                    
                } else {
                    
                    this._buildEditControl($cellContent, column, row[column.key], this.editManifest[itemIdx]);
                }
                
            } else {
                
                if (column.isControls) {
                    
                    this._buildEditButtons($cellContent, column, true, itemIdx);
                    
                } else if (column.displayKey) {
                    
                    $cellContent.innerHTML = row[column.displayKey] || "";
                    
                } else {
                    
                    $cellContent.innerHTML = this._formatData(column, row[column.key]);
                }
            }
            
            $td.appendChild($cellContent);
        }
        
        _formatData(column, data) {
            
            let formattedData = "";
            
            switch ((column.dataType || "").toLowerCase()) {
                
                case "string":
                    (() => {
                        formattedData = data || "";
                    })();
                    break;
                
                case "number":
                    (() => {
                        const number = parseFloat(data);
                        if (!isNaN(number)) {
                            formattedData = number.toString();
                        }
                    })();
                    break;
                
                case "date":
                    (() => {
                        if (data !== undefined && data !== null && data !== "") {
                            
                            const date = CtDataGrid._parseDate(data);
                            if (date) {
                                formattedData = CtDataGrid._renderDate(date);
                            }
                        }
                    })();
                    break;
                
                case "datetime":
                    (() => {
                        if (data !== undefined && data !== null && data !== "") {
                            
                            const dateTimeValue = isNaN(data)
                                ? data.substring(0, 19)
                                : data;
                            const dateTime = CtDataGrid._parseDate(dateTimeValue);
                            if (dateTime) {
                                formattedData = `${CtDataGrid._renderDate(dateTime)} ${CtDataGrid._renderTime(dateTime)}`;
                            }
                        }
                    })();
                    break;
                
                case "boolean":
                    (() => {
                        if (data === true) {
                            formattedData = "Yes";
                        } else if (data === false) {
                            formattedData = "No";
                        }
                    })();
                    break;
                
                case "url":
                    (() => {
                        if (data) formattedData = `<a href="${data}" target="_${this.id}_${column.key}_link">Link</a>`;
                    })();
                    break;
            }
            
            return formattedData;
        }
        
        // === Editing items === //
        
        _buildEditButtons($cell, column, inEditMode, itemIdx) {
            
            if (inEditMode) {
                
                const $editButton = document.createElement("button");
                $editButton.classList.add("btn", "btn-xs", "btn-default", "edit-button");
                $editButton.innerHTML = `<span class="text">${column.editButtonLabel}</span>`;
                $editButton.addEventListener("click", (e) => {
                    
                    e.stopPropagation();
                    
                    this._addEditModeItems([itemIdx]);
                });
                $cell.appendChild($editButton);
                
            } else {
                
                const $saveButton = document.createElement("button");
                $saveButton.classList.add("btn", "btn-xs", "btn-default", "save-button");
                $saveButton.innerHTML = `<span class="text">${column.saveButtonLabel}</span>`;
                $saveButton.addEventListener("click", (e) => {
                    
                    e.stopPropagation();
                    
                    const changes = this._getEditChanges([itemIdx]);
                    this._removeEditModeItems([itemIdx]);
                    if (changes && changes.length) {
                        this._raiseEvent("data-change", changes[0]);
                    }
                });
                $cell.appendChild($saveButton);
                
                const $cancelButton = document.createElement("button");
                $cancelButton.classList.add("btn", "btn-xs", "btn-default", "cancel-button");
                $cancelButton.innerHTML = `<span class="text">${column.cancelButtonLabel}</span>`;
                $cancelButton.addEventListener("click", (e) => {
                    
                    e.stopPropagation();
                    
                    this._removeEditModeItems([itemIdx]);
                });
                $cell.appendChild($cancelButton);
            }
        }
        
        _buildEditControl($cell, column, data, editManifestEntry) {
            
            let getterFn;
            
            switch ((column.dataType || "").toLowerCase()) {
                
                default:
                case "string":
                case "url":
                    (() => {
                        const $textControl = document.createElement("input");
                        $textControl.setAttribute("type", "text");
                        $textControl.value = data;
                        $textControl.classList.add("edit-control", "edit-control-" + (column.dataType || "string"));
                        $cell.appendChild($textControl);
                        
                        getterFn = () => $textControl.value;
                    })();
                    break;
                
                case "number":
                    (() => {
                        const $numberControl = document.createElement("input");
                        $numberControl.setAttribute("type", "number");
                        $numberControl.value = data;
                        $numberControl.classList.add("edit-control", "edit-control-number");
                        $cell.appendChild($numberControl);
                        
                        getterFn = () => parseInt($numberControl.value) || 0;
                    })();
                    break;
                
                case "date":
                    (() => {
                        const date = CtDataGrid._parseDate(data);
                        const $dateControl = document.createElement("input");
                        $dateControl.setAttribute("type", "date");
                        if (date) {
                            $dateControl.value = date.toISOString().substr(0, 10);
                        }
                        $dateControl.classList.add("edit-control", "edit-control-date");
                        $cell.appendChild($dateControl);
                        
                        getterFn = () => $dateControl.value;
                    })();
                    break;
                
                case "datetime":
                    (() => {
                        const dateTimeValue = isNaN(data)
                            ? data.substring(0, 19)
                            : data;
                        const dateTime = CtDataGrid._parseDate(dateTimeValue);
                        const $dateControl = document.createElement("input");
                        $dateControl.setAttribute("type", "date");
                        if (dateTime) {
                            $dateControl.value = dateTime.toISOString().substr(0, 10);
                        }
                        $dateControl.classList.add("edit-control", "edit-control-datetime", "edit-control-datetime-date");
                        $cell.appendChild($dateControl);
                        
                        const $timeControl = document.createElement("input");
                        $timeControl.setAttribute("type", "time");
                        if (dateTime) {
                            $timeControl.value = CtDataGrid._renderTime(dateTime);
                        }
                        $timeControl.classList.add("edit-control", "edit-control-datetime", "edit-control-datetime-time");
                        $cell.appendChild($timeControl);
                        
                        getterFn = () => `${$dateControl.value}T${$timeControl.value}`;
                    })();
                    break;
                
                case "boolean":
                    (() => {
                        const $checkboxControl = document.createElement("input");
                        $checkboxControl.setAttribute("type", "checkbox");
                        $checkboxControl.checked = (data === true);
                        $checkboxControl.classList.add("edit-control", "edit-control-boolean");
                        $cell.appendChild($checkboxControl);
                        
                        getterFn = () => $checkboxControl.checked;
                    })();
                    break;
            }
            
            if (typeof (getterFn) === "function") {
                editManifestEntry[column.key] = getterFn;
            }
        }
        
        _addEditModeItems(itemIndexes) {
            
            const editableColumns = this.model.cols.filter(x => x.editable);
            if (editableColumns.length === 0) {
                
                throw new Error("You cannot put a grid into edit mode which has no columns that are editable");
            }
            
            let hasChange = false;
            
            if (!this.editManifest) {
                
                this.editManifest = {
                    itemIndexes: []
                };
            }
            
            itemIndexes.forEach(x => {
                
                if (!this._isEditItem(x)) {
                    
                    this.editManifest.itemIndexes.push(x);
                    this.editManifest[x] = {};
                    hasChange = true;
                }
            });
            
            if (hasChange) {
                
                this._buildDataRows(true);
            }
        }
        
        _isEditItem(itemIndex) {
            
            if (!this.editManifest) return false;
            
            return this.editManifest.itemIndexes.includes(itemIndex);
        }
        
        _getEditChanges(itemIndexes = null) {
            
            if (!this.editManifest) return [];
            
            const changes = [];
            
            this.editManifest.itemIndexes.forEach(x => {
                
                if (itemIndexes === null || itemIndexes.includes(x)) {
                    
                    const originalItem = Object.assign({}, (this.localData || this.model.data)[x]);
                    const changedItem = Object.assign({}, originalItem);
                    const itemEditDetails = this.editManifest[x];
                    
                    for (let key in itemEditDetails) {
                        if (itemEditDetails.hasOwnProperty(key)) {
                            changedItem[key] = itemEditDetails[key]();
                        }
                    }
                    
                    const hasChanged = (JSON.stringify(originalItem) !== JSON.stringify(changedItem));
                    
                    changes.push({
                        __idx: x,
                        oldValue: originalItem,
                        newValue: changedItem,
                        hasChanged: hasChanged
                    });
                }
            });
            
            return changes;
        }
        
        _removeEditModeItems(itemIndexes) {
            
            if (!this.editManifest) return;
            
            let hasChange = false;
            
            itemIndexes.forEach(x => {
                
                if (this._isEditItem(x)) {
                    
                    delete this.editManifest[x];
                    hasChange = true;
                }
            });
            
            if (hasChange) {
                
                this.editManifest.itemIndexes = this.editManifest.itemIndexes.filter(x => {
                    return !itemIndexes.includes(x);
                });
                
                this._buildDataRows(true);
            }
        }
        
        _removeAllEditModeItems() {
            
            if (!this.editManifest) return;
            
            this._removeEditModeItems(this.editManifest.itemIndexes);
        }
        
        // === Selection === //
        
        __handleRowClick($tr, row, rowIdx) {
            
            const rowData = this._applyIndexes(row);
            if (this._isEditItem(rowData.__idx)) return;
            
            const $activeRows = Array.from(this.$table.querySelectorAll(".selected"));
            $activeRows.forEach(($row) => {
                $row.classList.remove("selected");
            });
            $tr.classList.add("selected");
            
            this.selectedValue = {
                rowData: rowData,
                rowIndex: rowIdx
            };
            this._raiseEvent("selection", this.selectedValue);
        }
        
        __handleCellClick($td, row, rowIdx, column, colIdx) {
            
            const rowData = this._applyIndexes(row);
            if (this._isEditItem(rowData.__idx)) return;
            
            const $activeRows = Array.from(this.$table.querySelectorAll(".selected"));
            $activeRows.forEach(($row) => {
                $row.classList.remove("selected");
            });
            $td.parentNode.classList.add("selected");
            $td.classList.add("selected");
            
            this.selectedValue = {
                rowData: rowData,
                rowIndex: rowIdx,
                columnKey: column.key,
                columnIndex: colIdx,
                cellData: row[column.key]
            };
            this._raiseEvent("selection", this.selectedValue);
        }
        
        // === Searching === //
        
        _buildSearchArea() {
            
            CtDataGrid._removeChildren(this.$searchArea);
            
            if (this.showSearch) {
                
                this.$element.classList.add("has-search");
                
                this.$searchArea.innerHTML = `
                    <div class="search-bar">
                        <div class="search-box">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Search..." />
                                <span class="input-group-btn">
                                    <button class="btn btn-default search-button" type="button"><i class="fa fa-search"></i></button>                        
                                </span>
                            </div>
                            <span class="clear-button">
                                <i class="fa fa-remove"></i>
                            </span>
                        </div>
                    </div>
                `;
                
                const $textbox = this.$searchArea.querySelector("input.form-control");
                const $searchButton = this.$searchArea.querySelector("button.search-button");
                const $clearButton = this.$searchArea.querySelector("span.clear-button");
                $clearButton.style.display = "none";
                
                const performSearch = () => {
                    
                    const searchQuery = $textbox.value;
                    this._changeSearch(searchQuery);
                };
                
                $textbox.addEventListener("keyup", (e) => {
                    
                    if (e.keyCode === 13) { // enter key
                        performSearch();
                    }
                    $clearButton.style.display = ($textbox.value.length === 0) ? "none" : "inline";
                });
                
                $clearButton.addEventListener("click", () => {
                    
                    $textbox.value = "";
                    $clearButton.style.display = "none";
                    performSearch();
                });
                
                $searchButton.addEventListener("click", () => {
                    
                    performSearch();
                });
                
            } else {
                
                this.$element.classList.remove("has-search");
            }
        }
        
        _changeSearch(searchQuery, updateSearchBox = false) {
            
            this.searchQuery = searchQuery;
            this.pageNumber = 1; // reset page number when performing a search
            
            if (updateSearchBox && this.showSearch) {
                
                const $textbox = this.$searchArea.querySelector("input.form-control");
                if ($textbox) {
                    
                    $textbox.value = searchQuery;
                }
            }
            
            this._buildDataRows();
        }
        
        _searchLocal(data) {
            
            const searchQuery = (this.searchQuery || "").trim().toUpperCase();
            
            if (searchQuery.length > 0) {
                
                const keyColumnMappings = {};
                this.model.cols.forEach(x => {
                    keyColumnMappings[x.key] = x;
                });
                
                data = data.filter(x => {
                    
                    for (const key in x) {
                        
                        if (x.hasOwnProperty(key)) {
                            
                            const column = keyColumnMappings[key];
                            if (column) {
                                
                                const dataAsPresented = this._formatData(column, (x[key] || ""));
                                if (dataAsPresented.toUpperCase().indexOf(searchQuery) > -1) {
                                    return true;
                                }
                            }
                        }
                    }
                    return false;
                });
            }
            
            return data;
        }
        
        // === Sorting === //
        
        _changeSort($th, newDirection = "switch", suppressSorting = false) {
    
            const $currentSortColumns = Array.from(this.$table.querySelectorAll("th.sortable.sort-asc, th.sortable.sort-desc"));
            
            let columnKey = "";
            
            if ($th === null) {
    
                $currentSortColumns.forEach(x => x.classList.remove("sort-asc", "sort-desc"));
                
            } else {
                
                columnKey = $th.getAttribute("key");
    
                if (newDirection === "switch") {
        
                    newDirection = $th.classList.contains("sort-asc") ?
                        "desc" :
                        "asc";
                }
                
                $currentSortColumns.forEach(x => x.classList.remove("sort-asc", "sort-desc"));
    
                if (newDirection && newDirection.toString().toLowerCase() === "asc") {
                    $th.classList.add("sort-asc");
                }
                if (newDirection && newDirection.toString().toLowerCase() === "desc") {
                    $th.classList.add("sort-desc");
                }
            }
            
            this.sortBy = columnKey;
            this.sortDirection = newDirection;
            
            if (suppressSorting !== true) {
                
                this._buildDataRows();
            }
        }
        
        _sortLocal(data) {
            
            const sortBy = this.sortBy;
            const reverse = (this.sortDirection === "desc");
            
            const column = this.model.cols.find(x => x.key === sortBy);
            if (column && column.sortable && !column.isControls) {
    
                switch ((column.dataType || "").toLowerCase()) {
        
                    case "string":
                    case "url":
                    default:
                        data.sort((a, b) => {
                
                            const aValue = (a[sortBy] || "").toString().toUpperCase();
                            const bValue = (b[sortBy] || "").toString().toUpperCase();
                            return aValue.localeCompare(bValue);
                        });
                        break;
        
                    case "number":
                        data.sort((a, b) => {
                
                            const numA = (a[sortBy] || 0);
                            const numB = (b[sortBy] || 0);
                
                            if (numA < numB) return -1;
                            if (numA > numB) return 1;
                            return 0;
                        });
                        break;
        
                    case "date":
                    case "datetime":
                        data.sort((a, b) => {
                
                            let epochA = (a[sortBy] === undefined || a[sortBy] === null || a[sortBy] === "")
                                ? Number.MIN_SAFE_INTEGER
                                : CtDataGrid._parseDate(a[sortBy]).getTime();
                
                            let epochB = (b[sortBy] === undefined || b[sortBy] === null || b[sortBy] === "")
                                ? Number.MIN_SAFE_INTEGER
                                : CtDataGrid._parseDate(b[sortBy]).getTime();
                
                            if (isNaN(epochA)) epochA = Number.MIN_SAFE_INTEGER;
                            if (isNaN(epochB)) epochB = Number.MIN_SAFE_INTEGER;
                
                            if (epochA < epochB) return -1;
                            if (epochA > epochB) return 1;
                            return 0;
                        });
                        break;
        
                    case "boolean":
                        const map = (bool) => {
                            if (bool === true) return 0;
                            if (bool === false) return 1;
                            return reverse ? -1 : 2;
                        };
                        data.sort((a, b) => {
                
                            const boolA = map(a[sortBy]);
                            const boolB = map(b[sortBy]);
                
                            if (boolA < boolB) return -1;
                            if (boolA > boolB) return 1;
                            return 0;
                        });
                        break;
                }
    
                if (reverse) {
                    data.reverse();
                }
            }
            
            return data;
        }
        
        // === Pagination === //
        
        _buildPagination() {
            
            CtDataGrid._removeChildren(this.$paginationArea);
            
            if (this.showPagination && this.pageSize > 0 && this.totalResults > 0) {
                
                this.$element.classList.add("has-pagination");
                
                const visiblePageCount = 5;
                const totalPages = this._getTotalPages();
                
                let startPage = 1;
                let endPage = Math.min(visiblePageCount, totalPages);
                
                if (totalPages > visiblePageCount) {
                    
                    const centerPageIndex = Math.ceil(visiblePageCount / 2);
                    const centerPagePadding = centerPageIndex - 1;
                    
                    if (this.pageNumber > centerPageIndex) {
                        
                        startPage = (this.pageNumber - centerPagePadding);
                        endPage = (this.pageNumber + centerPagePadding);
                        
                        if (endPage > totalPages) {
                            endPage = totalPages;
                            startPage = endPage - visiblePageCount + 1;
                        }
                    }
                }
                
                this.$paginationArea.innerHTML = `
                    <nav>
                        <ul class="pagination pagination-sm"></ul>
                    </nav>
                `;
                
                if (totalPages > 1) {
                    
                    const $paginationHost = this.$paginationArea.querySelector(".pagination");
                    
                    const buildPaginationItem = ({ html, active = false, enabled = true, handler = null, css = null }) => {
                        
                        const $page = document.createElement("li");
                        if (active) $page.classList.add("active");
                        if (!enabled) $page.classList.add("disabled");
                        if (css) css.split(" ").forEach(x => $page.classList.add(x));
                        
                        const $number = document.createElement("a");
                        $number.innerHTML = html;
                        
                        if (enabled && typeof (handler) === "function") {
                            $number.addEventListener("click", handler);
                        }
                        
                        $page.appendChild($number);
                        
                        $paginationHost.appendChild($page);
                        
                        return $number;
                    };
                    
                    buildPaginationItem({
                        html: `<span class="page-icon fa fa-step-backward"></span><span class="page-label"> First</span>`,
                        enabled: (this.pageNumber > 1),
                        handler: () => this._changePage(1),
                        css: "page-first page-bookend"
                    });
                    
                    buildPaginationItem({
                        html: `<span class="page-icon fa fa-chevron-left"></span><span class="page-label"> Previous</span>`,
                        enabled: (this.pageNumber > 1),
                        handler: () => this._changePage((this.pageNumber - 1)),
                        css: "page-prev page-bookend"
                    });
                    
                    for (let i = startPage; i <= endPage; i++) {
                        
                        buildPaginationItem({
                            html: `<span class="page-label">${i}</span>`,
                            active: (this.pageNumber === i),
                            handler: () => this._changePage(i)
                        });
                    }
                    
                    buildPaginationItem({
                        html: `<span class="page-label">Next </span><span class="page-icon fa fa-chevron-right"></span>`,
                        enabled: (this.pageNumber < totalPages),
                        handler: () => this._changePage((this.pageNumber + 1)),
                        css: "page-next page-bookend"
                    });
                    
                    buildPaginationItem({
                        html: `<span class="page-label">Last </span><span class="page-icon fa fa-step-forward"></span>`,
                        enabled: (this.pageNumber < totalPages),
                        handler: () => this._changePage(totalPages),
                        css: "page-last page-bookend"
                    });
                }
                
            } else {
                
                this.$element.classList.remove("has-pagination");
            }
        }
        
        _changePage(pageNumber) {
            
            const totalPages = this._getTotalPages();
            
            if (!isNaN(pageNumber)) pageNumber = parseInt(pageNumber);
            
            if (typeof (pageNumber) === "string") {
                
                switch (pageNumber.toLowerCase()) {
                    
                    case "first":
                        pageNumber = 1;
                        break;
                    
                    case "previous":
                        pageNumber = this.pageNumber - 1;
                        break;
                    
                    case "next":
                        pageNumber = this.pageNumber + 1;
                        break;
                    
                    case "last":
                        pageNumber = totalPages;
                        break;
                }
            }
            
            if (typeof (pageNumber) === "number") {
                
                if (pageNumber < 1) pageNumber = 1;
                if (pageNumber > totalPages && totalPages > 0) pageNumber = totalPages;
                
                this.pageNumber = pageNumber;
                
                this._buildDataRows();
                
                if (this.fixedHeaders) {
                    this.$table.querySelector("tbody").scrollTop = 0;
                }
                
            } else {
                
                throw new Error(`Invalid page number: "${pageNumber}"`);
            }
        }
        
        _paginateLocal(data) {
            
            if (this.pageSize === 0) return data;
            this.totalResults = data.length; // update number of results based on incoming data rows
            
            const totalPages = this._getTotalPages();
            if (totalPages > 0) {
                if (this.pageNumber < 1) this.pageNumber = 1;
                if (this.pageNumber > totalPages) this.pageNumber = totalPages;
            }
            
            const startIndex = (this.pageSize * (this.pageNumber - 1));
            const endIndex = startIndex + this.pageSize;
            
            return data.slice(startIndex, Math.min(endIndex, this.totalResults));
        }
        
        _getTotalPages() {
            
            return Math.ceil((this.totalResults / this.pageSize));
        }
        
        // === Utility functions === //
        
        _sendRequest(method, url, postData) {
            
            return new Promise((resolve, reject) => {
                
                const httpMethod = (method || "GET").toUpperCase();
                let sendUrl = url;
                
                const xhr = new XMLHttpRequest();
                xhr.onreadystatechange = () => {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            const response = JSON.parse(xhr.response.toString());
                            resolve(response);
                        } else if (xhr.status === 0) {
                            reject(`Could not access ${url}`);
                        } else {
                            reject(`Error code ${xhr.status} on "${url}"`);
                        }
                    }
                };
                xhr.onerror = () => {
                    reject(`There was a problem accessing ${url}`);
                };
                
                if (httpMethod === "GET") {
                    
                    let separator = sendUrl.indexOf("?") === -1 ? "?" : "&";
                    
                    Object.keys(postData)
                        .filter(param => {
                            return postData[param];
                        })
                        .forEach(param => {
                            sendUrl += `${separator}${param}=${encodeURIComponent(postData[param])}`;
                            separator = "&";
                        });
                }
                
                xhr.open(httpMethod, sendUrl, true);
                
                if (httpMethod === "GET") {
                    
                    xhr.send();
                    
                } else {
                    
                    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                    xhr.send(JSON.stringify(postData));
                }
            });
        }
        
        _setData(data = []) {
            
            this.model.data = data;
        }
    
        _applyIndexes(data) {
        
            let wasSingleItem = (data instanceof Array === false);
            if (wasSingleItem) {
                data = [data];
            }
        
            let copyOfData = JSON.parse(JSON.stringify(data));
        
            const sourceData = this.localData || this.model.data || [];
            data.forEach((x, idx) => {
            
                const idxInSource = sourceData.indexOf(x);
                if (idxInSource !== -1) {
                    copyOfData[idx].__idx = idxInSource;
                }
            });
        
            return (wasSingleItem)
                ? copyOfData[0]
                : copyOfData;
        }
        
        _setLoading(isLoading) {
            
            if (isLoading) {
                
                this.$element.classList.add("loading-data");
                this.$loading.innerHTML = `<div class="bg"></div><div class="spinner"></div>`;
                
            } else {
                
                this.$element.classList.remove("loading-data");
                CtDataGrid._removeChildren(this.$loading);
            }
        }
        
        _setMessage(type, message, detail) {
            
            CtDataGrid._removeChildren(this.$tbody);
            
            const $errorTr = document.createElement("tr");
            this.$tbody.appendChild($errorTr);
            
            const $messageTd = document.createElement("td");
            $messageTd.classList.add(`message-${type}`);
            $messageTd.setAttribute("colspan", this.model.cols.length.toString());
            $errorTr.appendChild($messageTd);
            
            const $messageText = document.createElement("div");
            $messageText.classList.add("content");
            $messageText.textContent = message;
            
            if (detail) {
                $messageText.innerHTML += `<div class="message-detail">${detail}</div>`;
            }
            
            $messageTd.appendChild($messageText);
        }
        
        _raiseEvent(name, detail) {
            
            const args = detail ? { detail } : null;
            const event = new CustomEvent(name, args);
            setTimeout(() => {
                this.dispatchEvent(event);
            }, 0);
        }
        
        // === Static functions === //
        
        static _parseDate(dateString) {
    
            let date = null;
            
            if (/[0-9]{4}-[0-9]{2}-[0-9]{2}/.test(dateString)) {
                
                date = new Date(dateString);
                
                if (isNaN(date.valueOf())) {
                    
                    const altDateString = dateString.replace(/-/g, "/").replace("T", " ");
                    date = new Date(altDateString);
                }
                
            } else {
                
                date = new Date(dateString);
            }
            
            if (!date || isNaN(date.valueOf())) return null;
            
            return date;
        }
        
        static _renderDate(date) {
            
            if (!date || isNaN(date.valueOf())) return "";
            
            return new Date(date.getTime() + (date.getTimezoneOffset() * 60 * 1000)).toLocaleDateString("en-GB");
        }
        
        static _renderTime(date) {
    
            if (!date || isNaN(date.valueOf())) return "";
    
            return new Date(date.getTime() + (date.getTimezoneOffset() * 60 * 1000)).toLocaleTimeString("en-GB");
        }
        
        static _getProperty(obj, propertyPath) {
            
            // convert array-notation to dot-notation and remove leading dots
            propertyPath = propertyPath
                .replace(/\[(\w+)]/g, ".$1")
                .replace(/^\./, "");
            
            let property = obj;
            let remainingPath = propertyPath;
            
            while (property && remainingPath.length > 0) {
                
                const idx = remainingPath.indexOf(".");
                if (idx > -1) {
                    const nextPathPart = remainingPath.substring(0, idx);
                    property = property[nextPathPart];
                    remainingPath = remainingPath.substring(idx + 1);
                } else {
                    property = property[remainingPath];
                    remainingPath = "";
                }
            }
            
            return property;
        }
        
        static _removeChildren(el) {
            
            while (el.firstChild) {
                el.removeChild(el.firstChild);
            }
        }
        
        // === API functions === //
        
        /**
         * Set the data for the data grid explicitly if not using a data-source
         * @param {object[]} data - The data array
         */
        setData(data) {
            
            if (this.useDataSource) {
                
                throw new Error("Cannot set data on a data grid which uses a data source");
            }
            
            if (Array.isArray(data)) {
                
                this.localData = data;
                this.unfilteredTotalResults = data.length;
                this.totalResults = data.length;
                
                this._setData(data);
                this._buildDataRows();
            }
        }
        
        /**
         * Obtains search information for the data grid
         * @returns {object} - Information about the search criteria of the data grid
         */
        getSearch() {
            
            return {
                query: this.searchQuery || "",
                totalResults: this.totalResults,
                unfilteredTotalResults: this.unfilteredTotalResults
            };
        }
        
        /**
         * Set the search criteria for the data grid
         * @param {string} query - The search query text
         */
        setSearch(query) {
    
            if (query === null || query === undefined) query = "";
            if (typeof (query) !== "string") query = query.toString();
            
            this._changeSearch(query, true);
        }
        
        /**
         * Obtains sorting information for the data grid
         * @returns {object} - Information about the sort state of the data grid
         */
        getSort() {
            
            return {
                column: this.sortBy,
                direction: this.sortDirection
            };
        }
        
        /**
         * Set the sort column and sort direction for the data grid
         * @param {string} columnKey - The key of the column to sort by
         * @param {string} direction - The direction to sort by, "asc", "desc" or "switch"
         */
        setSort(columnKey, direction = "switch") {
    
            if (columnKey === null) {
                const initiallySortedColumn = this.model.cols.find(x => !!x.sort);
                if (initiallySortedColumn) {
                    columnKey = initiallySortedColumn.key;
                    direction = initiallySortedColumn.sort;
                }
            }
            
            if (!columnKey) {
                
                this._changeSort(null);
                
            } else {
    
                const col = this.model.cols.filter(x => x.key === columnKey)[0];
                if (!col) {
        
                    throw new Error(`Unable to sort by column "${columnKey}" - data grid does not have a column with that key`);
                }
    
                if (!col.sortable) {
        
                    throw new Error(`Unable to sort by column "${columnKey}" - that column is not defined as sortable`);
                }
    
                const $th = this.$table.querySelector(`th[key="${columnKey}"]`);
                this._changeSort($th, direction);
            }
        }
        
        /**
         * Obtains pagination information for the data grid
         * @returns {object} - Information about the pagination state of the data grid
         */
        getPage() {
            
            if (!this.pageSize) {
                
                return null;
            }
            
            const totalPages = this._getTotalPages();
            
            return {
                number: this.pageNumber,
                total: this._getTotalPages(),
                pageSize: this.pageSize,
                isFirst: (this.pageNumber === 1),
                hasPrevious: (this.pageNumber > 1),
                hasNext: (this.pageNumber < totalPages),
                isLast: (this.pageNumber === totalPages)
            };
        }
        
        /**
         * Set the page number or page change instruction
         * @param {number|string} page - The page number, or an instruction of "first", "previous", "next" or "last"
         */
        setPage(page) {
            
            if (!this.pageSize) {
                
                throw new Error("Cannot change page on a data grid which doesn't use pagination");
            }
    
            if (page === null) page = 1;
            
            this._changePage(page);
        }
        
        /**
         * Returns a collection of data items visible to the current page of the data grid
         * @returns {object[]} - A collection of objects representing the visible data items
         */
        getVisibleData() {
            
            return this._applyIndexes(this.model.data || []);
        }
        
        /**
         * Put a row or collection or rows into edit
         * @param {object|number|object[]|number[]|} itemOrItems - The rows to edit, as a single or collection of indexes or data items to be edited
         */
        edit(itemOrItems) {
            
            if (itemOrItems === undefined || itemOrItems === null) {
                
                throw new Error("You must specify the indexes or items of data to put into edit mode");
            }
            
            if ((itemOrItems instanceof Array) === false) {
                
                itemOrItems = [itemOrItems];
            }
            
            const itemIndexes = itemOrItems.map(x => {
                
                return (typeof (x) === "number")
                    ? x
                    : (this.localData || this.model.data || []).indexOf(x);
            }).filter(x => x !== -1);
            
            this._addEditModeItems(itemIndexes);
        }
        
        /**
         * Switches any rows in edit mode to be not in edit mode and returns the data changes
         * @returns {object[]} - A collection of objects containing the original and changed data items along with their index in the original collection
         */
        finishedEdit() {
            
            const changes = this._getEditChanges();
            
            this._removeAllEditModeItems();
            
            return changes;
        }
        
        /**
         * Get the value of the selected row or cell, subject to the selection-mode attribute
         * @model {events=select}
         * @returns {object} An object containing the selected row/cell info
         */
        get value() {
            
            return this.selectedValue;
        }
    });
    
})();
