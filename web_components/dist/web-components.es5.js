/*! Copyright (c) 2019 CommonTime Ltd */
/*! Build date: Tue Oct 29 2019 11:35:57 GMT+0000 (Greenwich Mean Time) */
/*! ================================= */

"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*! Copyright (c) 2018 CommonTime Ltd */

(function () {

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

    customElements.define("ct-data-col", function (_HTMLElement) {
        _inherits(_class, _HTMLElement);

        function _class(self) {
            var _this, _ret;

            _classCallCheck(this, _class);

            self = (_this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, self)), _this);
            return _ret = self, _possibleConstructorReturn(_this, _ret);
        }

        return _class;
    }(HTMLElement));
})();
/*! Copyright (c) 2019 CommonTime Ltd */
/*! Build date: Tue Oct 29 2019 11:35:57 GMT+0000 (Greenwich Mean Time) */
/*! ================================= */

"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*! Copyright (c) 2018 CommonTime Ltd */

(function () {

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

    customElements.define("ct-data-grid", function (_HTMLElement) {
        _inherits(CtDataGrid, _HTMLElement);

        _createClass(CtDataGrid, [{
            key: "injectStyles",
            value: function injectStyles() {

                var $style = document.head.querySelector("style[rel=" + this.tagName.toLowerCase() + "]");
                if (!$style) {
                    $style = document.createElement("style");
                    $style.setAttribute("rel", this.tagName.toLowerCase());
                    $style.textContent = "/*! Copyright (c) 2018 CommonTime Ltd */@keyframes ctDataGridSpin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}ct-data-grid{display:flex;position:relative;flex:1}ct-data-grid ct-data-col{display:none;position:absolute;top:-9999px;left:-9999px;width:0;height:0}ct-data-grid .ct-data-grid{position:relative;top:0;left:0;width:100%;height:auto;max-height:100%;display:flex;flex-direction:column}ct-data-grid .ct-data-grid .search-area{display:none;flex:0 0 auto;margin:0 0 20px 0}ct-data-grid .ct-data-grid .table-area{position:relative;min-height:.01%;overflow-x:auto;-webkit-overflow-scrolling:touch}ct-data-grid .ct-data-grid .table-area .table-container table{margin:0;width:100%}ct-data-grid .ct-data-grid .table-area .table-container table td,ct-data-grid .ct-data-grid .table-area .table-container table th{position:relative}ct-data-grid .ct-data-grid .table-area .table-container table th{user-select:none;white-space:nowrap}ct-data-grid .ct-data-grid .table-area .table-container table th.sortable{cursor:pointer}ct-data-grid .ct-data-grid .table-area .table-container table th.sortable:after{content:\"\\f0dc\";font-family:\"FontAwesome\";display:inline-block;vertical-align:middle;font-size:0.8em;width:20px;text-align:right;opacity:0.3}ct-data-grid .ct-data-grid .table-area .table-container table th.sortable.sort-asc:after{content:\"\\f0de\";opacity:1}ct-data-grid .ct-data-grid .table-area .table-container table th.sortable.sort-desc:after{content:\"\\f0dd\";opacity:1}ct-data-grid .ct-data-grid .table-area .table-container table td{padding:0}ct-data-grid .ct-data-grid .table-area .table-container table td .content{display:block;padding:8px}ct-data-grid .ct-data-grid .table-area .table-container table td .control{display:block;padding:5px}ct-data-grid .ct-data-grid .table-area .table-container table td .control input{line-height:normal}ct-data-grid .ct-data-grid .table-area .table-container table td .edit-controls{display:block;padding:7px}ct-data-grid .ct-data-grid .table-area .table-container table td .edit-controls button{margin:0 0 0 5px}ct-data-grid .ct-data-grid .table-area .table-container table td .edit-controls button:first-child{margin:0}ct-data-grid .ct-data-grid .table-area .table-container table td .message-detail{font-size:0.8em}ct-data-grid .ct-data-grid .table-area .table-container table td .edit-control{width:100%}ct-data-grid .ct-data-grid .table-area .table-container table td.message-info{padding-left:30px}ct-data-grid .ct-data-grid .table-area .table-container table td.message-info:before{content:\"\\f05a\";font-family:\"FontAwesome\";display:block;position:absolute;top:9px;left:9px}ct-data-grid .ct-data-grid .table-area .table-container table td.message-error{background:#f2dede;padding-left:30px}ct-data-grid .ct-data-grid .table-area .table-container table td.message-error:before{content:\"\\f06a\";font-family:\"FontAwesome\";display:block;position:absolute;top:9px;left:9px}ct-data-grid .ct-data-grid .table-area .table-container table.selection-mode-row tr.selected,ct-data-grid .ct-data-grid .table-area .table-container table.selection-mode-cell tr.selected{background-color:#d9edf7}ct-data-grid .ct-data-grid .table-area .table-container table.selection-mode-row td,ct-data-grid .ct-data-grid .table-area .table-container table.selection-mode-cell td{cursor:pointer}ct-data-grid .ct-data-grid .table-area .table-container table.selection-mode-cell td.selected{background-color:rgba(0,0,0,0.05)}ct-data-grid .ct-data-grid .table-area.fixed-headers{display:flex}ct-data-grid .ct-data-grid .table-area.fixed-headers .table-container{display:flex;flex:1}ct-data-grid .ct-data-grid .table-area.fixed-headers .table-container table{display:flex;flex-direction:column;table-layout:fixed;flex:1}ct-data-grid .ct-data-grid .table-area.fixed-headers .table-container table thead{display:block;flex:0 0 auto}ct-data-grid .ct-data-grid .table-area.fixed-headers .table-container table thead tr{display:flex}ct-data-grid .ct-data-grid .table-area.fixed-headers .table-container table tbody{display:block;flex:1 1 auto;overflow:auto}ct-data-grid .ct-data-grid .table-area.fixed-headers .table-container table tbody tr{display:flex}ct-data-grid .ct-data-grid .table-area.fixed-headers .table-container table tbody tr:first-child td{border-top:0}ct-data-grid .ct-data-grid .table-area.fixed-headers .table-container table td,ct-data-grid .ct-data-grid .table-area.fixed-headers .table-container table th{flex:1;overflow:hidden}ct-data-grid .ct-data-grid .table-area.fixed-headers .table-container table td .content,ct-data-grid .ct-data-grid .table-area.fixed-headers .table-container table th .content{text-overflow:ellipsis;overflow:hidden}ct-data-grid .ct-data-grid .pagination-area{flex:0 0 auto;display:none;user-select:none;margin:20px 0 0 0}ct-data-grid .ct-data-grid .loading{position:absolute;top:0;left:0;width:100%;height:100%;display:none}ct-data-grid .ct-data-grid.has-search .search-area{display:flex;justify-content:flex-end}ct-data-grid .ct-data-grid.has-search .search-area .search-bar .search-box{position:relative;width:400px}ct-data-grid .ct-data-grid.has-search .search-area .search-bar .search-box input.form-control{z-index:1;padding-right:24px}ct-data-grid .ct-data-grid.has-search .search-area .search-bar .search-box .clear-button{position:absolute;top:0;right:34px;width:24px;height:100%;padding:8px 0 0 0;text-align:center;z-index:2;cursor:pointer;opacity:0.5;font-size:0.8em}ct-data-grid .ct-data-grid.has-search .search-area .search-bar .search-box .clear-button:hover{opacity:1}ct-data-grid .ct-data-grid.has-pagination .pagination-area{display:flex;justify-content:center}ct-data-grid .ct-data-grid.has-pagination .pagination-area ul.pagination{display:block;margin:0}ct-data-grid .ct-data-grid.has-pagination .pagination-area ul.pagination .page-bookend .page-label{display:none}ct-data-grid .ct-data-grid.has-pagination .pagination-area ul.pagination li>a{min-width:40px;text-align:center;cursor:pointer}ct-data-grid .ct-data-grid.loading-data .loading{display:block}ct-data-grid .ct-data-grid.loading-data .loading .bg{width:100%;height:100%;background:#ffffff;opacity:0.5}ct-data-grid .ct-data-grid.loading-data .loading .spinner{position:absolute;top:50%;left:50%;width:32px;height:32px;border:1px solid #cccccc;border-radius:50%;margin:-16px 0 0 -16px;background:#ffffff}ct-data-grid .ct-data-grid.loading-data .loading .spinner:after{content:\"\";display:block;position:absolute;width:24px;height:24px;top:50%;left:50%;margin:-12px 0 0 -12px;border:3px solid rgba(0,0,0,0.2);border-left-color:#000000;border-radius:50%;transform:translateZ(0);animation:ctDataGridSpin 1.1s infinite linear}\n                ";
                    document.head.appendChild($style);
                }
            }
        }, {
            key: "generateHtml",
            value: function generateHtml() {

                return "<div class=\"ct-data-grid\">\n                <div class=\"search-area\"></div>\n                <div class=\"table-area\">\n                    <div class=\"table-container\"></div>\n                    <div class=\"loading\"></div>\n                </div>\n                <div class=\"pagination-area\"></div>\n            </div>";
            }
        }]);

        function CtDataGrid(self) {
            var _this, _ret;

            _classCallCheck(this, CtDataGrid);

            self = (_this = _possibleConstructorReturn(this, (CtDataGrid.__proto__ || Object.getPrototypeOf(CtDataGrid)).call(this, self)), _this);

            self.localData = null;
            self.model = {
                cols: [],
                data: []
            };

            self.isReady = false;

            return _ret = self, _possibleConstructorReturn(_this, _ret);
        }

        _createClass(CtDataGrid, [{
            key: "connectedCallback",
            value: function connectedCallback() {
                var _this2 = this;

                var id = this.getAttribute("id") || "autoid" + new Date().getTime();

                var columnDefinitions = Array.from(this.querySelectorAll("ct-data-col"));
                columnDefinitions.forEach(function (x) {

                    _this2.model.cols.push({
                        key: x.getAttribute("key"),
                        classes: x.getAttribute("class") || "",
                        displayKey: x.getAttribute("display-key"),
                        cssKey: x.getAttribute("css-key"),
                        heading: x.textContent,
                        dataType: x.getAttribute("data-type") || "string",
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

                columnDefinitions.forEach(function (x) {

                    _this2.appendChild(x);
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
        }, {
            key: "attributeChangedCallback",
            value: function attributeChangedCallback(attrName, oldValue, newValue) {

                if (!this.isReady) return;
                if (oldValue === newValue) return;

                var requiresUiRepaint = false;
                var requiresDataRepaint = false;
                var requiresDataFetch = false;

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

                    var suppressDataFetch = !requiresDataFetch;
                    this._buildDataRows(suppressDataFetch);
                }
            }

            // === Internal functions === //

        }, {
            key: "_initialize",
            value: function _initialize() {

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
        }, {
            key: "_processDataSourceAttributes",
            value: function _processDataSourceAttributes() {

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
        }, {
            key: "_processInteractionAttributes",
            value: function _processInteractionAttributes() {

                this.useLocalInteraction = !this.useDataSource || this.hasAttribute("use-local-interaction") && this.getAttribute("use-local-interaction").toLowerCase() !== "false";
                this.selectionMode = (this.getAttribute("selection-mode") || "none").toLowerCase();
            }
        }, {
            key: "_processSearchAttributes",
            value: function _processSearchAttributes() {

                this.showSearch = this.hasAttribute("show-search") && this.getAttribute("show-search").toLowerCase() !== "false";
            }
        }, {
            key: "_processPaginationAttributes",
            value: function _processPaginationAttributes() {

                this.showPagination = !this.hasAttribute("show-pagination") || this.getAttribute("show-pagination").toLowerCase() !== "false";
                this.pageSize = parseInt(this.getAttribute("page-size")) || 0;
            }
        }, {
            key: "_processPresentationAttributes",
            value: function _processPresentationAttributes() {

                this.fixedHeaders = this.hasAttribute("fixed-headers") && this.getAttribute("fixed-headers").toLowerCase() !== "false";
                this.rowCssKey = this.getAttribute("row-css-key") || "";

                if (this.$tableArea) {

                    this.$tableArea.classList.toggle("fixed-headers", this.fixedHeaders);
                }
            }
        }, {
            key: "_render",
            value: function _render() {
                var suppressDataFetch = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;


                CtDataGrid._removeChildren(this.$tableContainer);

                this._buildSearchArea();

                this._buildTable(suppressDataFetch);

                this.$tableContainer.appendChild(this.$table);
            }

            // === Sourcing or preparing data === //

        }, {
            key: "_loadDataFromUrl",
            value: function _loadDataFromUrl() {
                var _this3 = this;

                var ths = this;

                return new Promise(function (resolve) {

                    ths._setLoading(true);

                    ths.dataSourceParams = {};

                    if (!_this3.useLocalInteraction) {

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

                    ths._sendRequest(ths.dataSourceMethod, ths.dataSourceUrl, ths.dataSourceParams).then(function (response) {

                        var data = CtDataGrid._getProperty(response, ths.dataResultsProperty);
                        if (!Array.isArray(data)) {

                            ths._setLoading(false);
                            ths._setMessage("error", "Incorrect data retrieved, must be array; was " + (typeof data === "undefined" ? "undefined" : _typeof(data)));
                            ths._raiseEvent("data-error");
                            resolve(false);
                        }

                        var totalResults = CtDataGrid._getProperty(response, ths.dataResultsTotalProperty);
                        ths.unfilteredTotalResults = totalResults || data.length;
                        ths.totalResults = totalResults || data.length;

                        ths._setLoading(false);
                        ths._setData(data);

                        resolve(true);
                    }, function (error) {

                        ths._setLoading(false);
                        ths._setMessage("error", "Error loading data...", error);
                        ths._raiseEvent("data-error");

                        resolve(false);
                    });
                });
            }
        }, {
            key: "_prepareLocalData",
            value: function _prepareLocalData() {
                var _this4 = this;

                return new Promise(function (resolve) {

                    var workingData = Array.from(_this4.localData || []); // copy to preserve original

                    workingData = _this4._searchLocal(workingData); // search

                    _this4.totalResults = workingData.length;

                    workingData = _this4._sortLocal(workingData); // sort
                    workingData = _this4._paginateLocal(workingData); // paginate

                    _this4._setData(workingData);

                    resolve(true);
                });
            }

            // === Drawing the data grid === //

        }, {
            key: "_buildTable",
            value: function _buildTable() {
                var _this5 = this;

                var suppressDataFetch = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;


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

                var $htr = document.createElement("tr");
                this.model.cols.forEach(function (c) {
                    return _this5._buildColumnHeader($htr, c);
                });
                this.$thead.appendChild($htr);

                this.$tbody = document.createElement("tbody");
                this.$table.appendChild(this.$tbody);

                if (this.useDataSource && suppressDataFetch === false) {
                    this._buildDataRows();
                }
            }
        }, {
            key: "_buildColumnHeader",
            value: function _buildColumnHeader($row, column) {
                var _this6 = this;

                var $th = document.createElement("th");

                if (column.key) {

                    $th.setAttribute("key", column.key);
                }

                if (column.classes !== undefined && column.classes !== null) {

                    column.classes.toString().split(" ").forEach(function (x) {
                        if (x) $th.classList.add(x);
                    });
                }

                if (column.isControls) {

                    $th.classList.add("edit-controls");
                }

                if (column.width !== null) {

                    if (this.fixedHeaders) $th.style.flex = "1 1 " + column.width;else $th.style.width = column.width;
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

                    $th.addEventListener("click", function () {

                        _this6._changeSort($th);
                    });
                }

                $th.textContent = column.heading;

                $row.appendChild($th);
            }
        }, {
            key: "_buildDataRows",
            value: function _buildDataRows() {
                var _this7 = this;

                var suppressDataFetch = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;


                var promise = void 0;

                if (!suppressDataFetch) {

                    if (this.useDataSource && this.useLocalInteraction && this.localData === null) {

                        promise = this._loadDataFromUrl().then(function () {

                            _this7.localData = _this7.model.data;
                            _this7.unfilteredTotalResults = _this7.localData.length;
                            _this7.totalResults = _this7.localData.length;
                            return _this7._prepareLocalData();
                        });
                    } else {

                        promise = this.useLocalInteraction ? this._prepareLocalData() : this._loadDataFromUrl();
                    }
                } else {

                    promise = Promise.resolve(!!this.model.data);
                }

                promise.then(function (hasData) {

                    if (hasData) {

                        CtDataGrid._removeChildren(_this7.$tbody);

                        if (_this7.model.data.length > 0) {
                            _this7.model.data.forEach(function (r, idx) {
                                return _this7._buildDataRow(r, idx);
                            });
                        } else {
                            _this7._setMessage("info", "No data to display...");
                        }

                        _this7._buildPagination();
                        _this7._raiseEvent("data-rendered");
                    }
                });
            }
        }, {
            key: "_buildDataRow",
            value: function _buildDataRow(row, rowIdx) {
                var _this8 = this;

                var originalItemIdx = this._applyIndexes(row).__idx;
                var $tr = document.createElement("tr");

                if (this.rowCssKey && row.hasOwnProperty(this.rowCssKey) && row[this.rowCssKey] !== undefined && row[this.rowCssKey] !== null) {

                    var rowClasses = row[this.rowCssKey].toString().split(" ");
                    rowClasses.forEach(function (x) {
                        if (x) $tr.classList.add(x);
                    });
                }

                if (this._isEditItem(originalItemIdx)) {

                    $tr.classList.add("editing");
                }

                this.model.cols.forEach(function (c, idx) {

                    _this8._buildDataCell($tr, c, idx, row, rowIdx, originalItemIdx);
                });

                if (this.selectionMode === "row") {

                    $tr.addEventListener("click", function () {
                        return _this8.__handleRowClick($tr, row, rowIdx);
                    });
                }

                this.$tbody.appendChild($tr);
            }
        }, {
            key: "_buildDataCell",
            value: function _buildDataCell($row, column, columnIdx, row, rowIdx, itemIdx) {
                var _this9 = this;

                var $td = document.createElement("td");

                if (column.classes !== undefined && column.classes !== null) {
                    column.classes.toString().split(" ").forEach(function (x) {
                        if (x) $td.classList.add(x);
                    });
                }

                if (column.cssKey && row.hasOwnProperty(column.cssKey) && row[column.cssKey] !== undefined && row[column.cssKey] !== null) {
                    var cellClasses = row[column.cssKey].toString().split(" ");
                    cellClasses.forEach(function (x) {
                        if (x) $td.classList.add(x);
                    });
                }

                if (column.width !== undefined) {
                    if (this.fixedHeaders) $td.style.flex = "1 1 " + column.width;else $td.style.width = column.width;
                }

                $row.appendChild($td);

                if (this.selectionMode === "cell" && !column.isControls) {

                    $td.addEventListener("click", function () {
                        return _this9.__handleCellClick($td, row, rowIdx, column, columnIdx);
                    });
                }

                var $cellContent = document.createElement("div");

                var editMode = false;

                if (this.editManifest && this.editManifest.itemIndexes.length && (column.editable || column.isControls)) {

                    editMode = this.editManifest.itemIndexes.includes(itemIdx);
                }

                var cellContentClass = column.isControls ? "edit-controls" : editMode ? "control" : "content";
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
        }, {
            key: "_formatData",
            value: function _formatData(column, data) {
                var _this10 = this;

                var formattedData = "";

                switch ((column.dataType || "").toLowerCase()) {

                    case "string":
                        (function () {
                            formattedData = data || "";
                        })();
                        break;

                    case "number":
                        (function () {
                            var number = parseFloat(data);
                            if (!isNaN(number)) {
                                formattedData = number.toString();
                            }
                        })();
                        break;

                    case "date":
                        (function () {
                            if (data !== undefined && data !== null && data !== "") {

                                var date = CtDataGrid._parseDate(data);
                                if (date) {
                                    formattedData = CtDataGrid._renderDate(date);
                                }
                            }
                        })();
                        break;

                    case "datetime":
                        (function () {
                            if (data !== undefined && data !== null && data !== "") {

                                var dateTimeValue = isNaN(data) ? data.substring(0, 19) : data;
                                var dateTime = CtDataGrid._parseDate(dateTimeValue);
                                if (dateTime) {
                                    formattedData = CtDataGrid._renderDate(dateTime) + " " + CtDataGrid._renderTime(dateTime);
                                }
                            }
                        })();
                        break;

                    case "boolean":
                        (function () {
                            if (data === true) {
                                formattedData = "Yes";
                            } else if (data === false) {
                                formattedData = "No";
                            }
                        })();
                        break;

                    case "url":
                        (function () {
                            if (data) formattedData = "<a href=\"" + data + "\" target=\"_" + _this10.id + "_" + column.key + "_link\">Link</a>";
                        })();
                        break;
                }

                return formattedData;
            }

            // === Editing items === //

        }, {
            key: "_buildEditButtons",
            value: function _buildEditButtons($cell, column, inEditMode, itemIdx) {
                var _this11 = this;

                if (inEditMode) {

                    var $editButton = document.createElement("button");
                    $editButton.classList.add("btn", "btn-xs", "btn-default", "edit-button");
                    $editButton.innerHTML = "<span class=\"text\">" + column.editButtonLabel + "</span>";
                    $editButton.addEventListener("click", function (e) {

                        e.stopPropagation();

                        _this11._addEditModeItems([itemIdx]);
                    });
                    $cell.appendChild($editButton);
                } else {

                    var $saveButton = document.createElement("button");
                    $saveButton.classList.add("btn", "btn-xs", "btn-default", "save-button");
                    $saveButton.innerHTML = "<span class=\"text\">" + column.saveButtonLabel + "</span>";
                    $saveButton.addEventListener("click", function (e) {

                        e.stopPropagation();

                        var changes = _this11._getEditChanges([itemIdx]);
                        _this11._removeEditModeItems([itemIdx]);
                        if (changes && changes.length) {
                            _this11._raiseEvent("data-change", changes[0]);
                        }
                    });
                    $cell.appendChild($saveButton);

                    var $cancelButton = document.createElement("button");
                    $cancelButton.classList.add("btn", "btn-xs", "btn-default", "cancel-button");
                    $cancelButton.innerHTML = "<span class=\"text\">" + column.cancelButtonLabel + "</span>";
                    $cancelButton.addEventListener("click", function (e) {

                        e.stopPropagation();

                        _this11._removeEditModeItems([itemIdx]);
                    });
                    $cell.appendChild($cancelButton);
                }
            }
        }, {
            key: "_buildEditControl",
            value: function _buildEditControl($cell, column, data, editManifestEntry) {

                var getterFn = void 0;

                switch ((column.dataType || "").toLowerCase()) {

                    default:
                    case "string":
                    case "url":
                        (function () {
                            var $textControl = document.createElement("input");
                            $textControl.setAttribute("type", "text");
                            $textControl.value = data;
                            $textControl.classList.add("edit-control", "edit-control-" + (column.dataType || "string"));
                            $cell.appendChild($textControl);

                            getterFn = function getterFn() {
                                return $textControl.value;
                            };
                        })();
                        break;

                    case "number":
                        (function () {
                            var $numberControl = document.createElement("input");
                            $numberControl.setAttribute("type", "number");
                            $numberControl.value = data;
                            $numberControl.classList.add("edit-control", "edit-control-number");
                            $cell.appendChild($numberControl);

                            getterFn = function getterFn() {
                                return parseInt($numberControl.value) || 0;
                            };
                        })();
                        break;

                    case "date":
                        (function () {
                            var date = CtDataGrid._parseDate(data);
                            var $dateControl = document.createElement("input");
                            $dateControl.setAttribute("type", "date");
                            if (date) {
                                $dateControl.value = date.toISOString().substr(0, 10);
                            }
                            $dateControl.classList.add("edit-control", "edit-control-date");
                            $cell.appendChild($dateControl);

                            getterFn = function getterFn() {
                                return $dateControl.value;
                            };
                        })();
                        break;

                    case "datetime":
                        (function () {
                            var dateTimeValue = isNaN(data) ? data.substring(0, 19) : data;
                            var dateTime = CtDataGrid._parseDate(dateTimeValue);
                            var $dateControl = document.createElement("input");
                            $dateControl.setAttribute("type", "date");
                            if (dateTime) {
                                $dateControl.value = dateTime.toISOString().substr(0, 10);
                            }
                            $dateControl.classList.add("edit-control", "edit-control-datetime", "edit-control-datetime-date");
                            $cell.appendChild($dateControl);

                            var $timeControl = document.createElement("input");
                            $timeControl.setAttribute("type", "time");
                            if (dateTime) {
                                $timeControl.value = CtDataGrid._renderTime(dateTime);
                            }
                            $timeControl.classList.add("edit-control", "edit-control-datetime", "edit-control-datetime-time");
                            $cell.appendChild($timeControl);

                            getterFn = function getterFn() {
                                return $dateControl.value + "T" + $timeControl.value;
                            };
                        })();
                        break;

                    case "boolean":
                        (function () {
                            var $checkboxControl = document.createElement("input");
                            $checkboxControl.setAttribute("type", "checkbox");
                            $checkboxControl.checked = data === true;
                            $checkboxControl.classList.add("edit-control", "edit-control-boolean");
                            $cell.appendChild($checkboxControl);

                            getterFn = function getterFn() {
                                return $checkboxControl.checked;
                            };
                        })();
                        break;
                }

                if (typeof getterFn === "function") {
                    editManifestEntry[column.key] = getterFn;
                }
            }
        }, {
            key: "_addEditModeItems",
            value: function _addEditModeItems(itemIndexes) {
                var _this12 = this;

                var editableColumns = this.model.cols.filter(function (x) {
                    return x.editable;
                });
                if (editableColumns.length === 0) {

                    throw new Error("You cannot put a grid into edit mode which has no columns that are editable");
                }

                var hasChange = false;

                if (!this.editManifest) {

                    this.editManifest = {
                        itemIndexes: []
                    };
                }

                itemIndexes.forEach(function (x) {

                    if (!_this12._isEditItem(x)) {

                        _this12.editManifest.itemIndexes.push(x);
                        _this12.editManifest[x] = {};
                        hasChange = true;
                    }
                });

                if (hasChange) {

                    this._buildDataRows(true);
                }
            }
        }, {
            key: "_isEditItem",
            value: function _isEditItem(itemIndex) {

                if (!this.editManifest) return false;

                return this.editManifest.itemIndexes.includes(itemIndex);
            }
        }, {
            key: "_getEditChanges",
            value: function _getEditChanges() {
                var _this13 = this;

                var itemIndexes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;


                if (!this.editManifest) return [];

                var changes = [];

                this.editManifest.itemIndexes.forEach(function (x) {

                    if (itemIndexes === null || itemIndexes.includes(x)) {

                        var originalItem = Object.assign({}, (_this13.localData || _this13.model.data)[x]);
                        var changedItem = Object.assign({}, originalItem);
                        var itemEditDetails = _this13.editManifest[x];

                        for (var key in itemEditDetails) {
                            if (itemEditDetails.hasOwnProperty(key)) {
                                changedItem[key] = itemEditDetails[key]();
                            }
                        }

                        var hasChanged = JSON.stringify(originalItem) !== JSON.stringify(changedItem);

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
        }, {
            key: "_removeEditModeItems",
            value: function _removeEditModeItems(itemIndexes) {
                var _this14 = this;

                if (!this.editManifest) return;

                var hasChange = false;

                itemIndexes.forEach(function (x) {

                    if (_this14._isEditItem(x)) {

                        delete _this14.editManifest[x];
                        hasChange = true;
                    }
                });

                if (hasChange) {

                    this.editManifest.itemIndexes = this.editManifest.itemIndexes.filter(function (x) {
                        return !itemIndexes.includes(x);
                    });

                    this._buildDataRows(true);
                }
            }
        }, {
            key: "_removeAllEditModeItems",
            value: function _removeAllEditModeItems() {

                if (!this.editManifest) return;

                this._removeEditModeItems(this.editManifest.itemIndexes);
            }

            // === Selection === //

        }, {
            key: "__handleRowClick",
            value: function __handleRowClick($tr, row, rowIdx) {

                var rowData = this._applyIndexes(row);
                if (this._isEditItem(rowData.__idx)) return;

                var $activeRows = Array.from(this.$table.querySelectorAll(".selected"));
                $activeRows.forEach(function ($row) {
                    $row.classList.remove("selected");
                });
                $tr.classList.add("selected");

                this.selectedValue = {
                    rowData: rowData,
                    rowIndex: rowIdx
                };
                this._raiseEvent("selection", this.selectedValue);
            }
        }, {
            key: "__handleCellClick",
            value: function __handleCellClick($td, row, rowIdx, column, colIdx) {

                var rowData = this._applyIndexes(row);
                if (this._isEditItem(rowData.__idx)) return;

                var $activeRows = Array.from(this.$table.querySelectorAll(".selected"));
                $activeRows.forEach(function ($row) {
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

        }, {
            key: "_buildSearchArea",
            value: function _buildSearchArea() {
                var _this15 = this;

                CtDataGrid._removeChildren(this.$searchArea);

                if (this.showSearch) {

                    this.$element.classList.add("has-search");

                    this.$searchArea.innerHTML = "\n                    <div class=\"search-bar\">\n                        <div class=\"search-box\">\n                            <div class=\"input-group\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" />\n                                <span class=\"input-group-btn\">\n                                    <button class=\"btn btn-default search-button\" type=\"button\"><i class=\"fa fa-search\"></i></button>                        \n                                </span>\n                            </div>\n                            <span class=\"clear-button\">\n                                <i class=\"fa fa-remove\"></i>\n                            </span>\n                        </div>\n                    </div>\n                ";

                    var $textbox = this.$searchArea.querySelector("input.form-control");
                    var $searchButton = this.$searchArea.querySelector("button.search-button");
                    var $clearButton = this.$searchArea.querySelector("span.clear-button");
                    $clearButton.style.display = "none";

                    var performSearch = function performSearch() {

                        var searchQuery = $textbox.value;
                        _this15._changeSearch(searchQuery);
                    };

                    $textbox.addEventListener("keyup", function (e) {

                        if (e.keyCode === 13) {
                            // enter key
                            performSearch();
                        }
                        $clearButton.style.display = $textbox.value.length === 0 ? "none" : "inline";
                    });

                    $clearButton.addEventListener("click", function () {

                        $textbox.value = "";
                        $clearButton.style.display = "none";
                        performSearch();
                    });

                    $searchButton.addEventListener("click", function () {

                        performSearch();
                    });
                } else {

                    this.$element.classList.remove("has-search");
                }
            }
        }, {
            key: "_changeSearch",
            value: function _changeSearch(searchQuery) {
                var updateSearchBox = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


                this.searchQuery = searchQuery;
                this.pageNumber = 1; // reset page number when performing a search

                if (updateSearchBox && this.showSearch) {

                    var $textbox = this.$searchArea.querySelector("input.form-control");
                    if ($textbox) {

                        $textbox.value = searchQuery;
                    }
                }

                this._buildDataRows();
            }
        }, {
            key: "_searchLocal",
            value: function _searchLocal(data) {
                var _this16 = this;

                var searchQuery = (this.searchQuery || "").trim().toUpperCase();

                if (searchQuery.length > 0) {

                    var keyColumnMappings = {};
                    this.model.cols.forEach(function (x) {
                        keyColumnMappings[x.key] = x;
                    });

                    data = data.filter(function (x) {

                        for (var key in x) {

                            if (x.hasOwnProperty(key)) {

                                var column = keyColumnMappings[key];
                                if (column) {

                                    var dataAsPresented = _this16._formatData(column, x[key] || "");
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

        }, {
            key: "_changeSort",
            value: function _changeSort($th) {
                var newDirection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "switch";
                var suppressSorting = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;


                var $currentSortColumns = Array.from(this.$table.querySelectorAll("th.sortable.sort-asc, th.sortable.sort-desc"));

                var columnKey = "";

                if ($th === null) {

                    $currentSortColumns.forEach(function (x) {
                        return x.classList.remove("sort-asc", "sort-desc");
                    });
                } else {

                    columnKey = $th.getAttribute("key");

                    if (newDirection === "switch") {

                        newDirection = $th.classList.contains("sort-asc") ? "desc" : "asc";
                    }

                    $currentSortColumns.forEach(function (x) {
                        return x.classList.remove("sort-asc", "sort-desc");
                    });

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
        }, {
            key: "_sortLocal",
            value: function _sortLocal(data) {

                var sortBy = this.sortBy;
                var reverse = this.sortDirection === "desc";

                var column = this.model.cols.find(function (x) {
                    return x.key === sortBy;
                });
                if (column && column.sortable && !column.isControls) {

                    switch ((column.dataType || "").toLowerCase()) {

                        case "string":
                        case "url":
                        default:
                            data.sort(function (a, b) {

                                var aValue = (a[sortBy] || "").toString().toUpperCase();
                                var bValue = (b[sortBy] || "").toString().toUpperCase();
                                return aValue.localeCompare(bValue);
                            });
                            break;

                        case "number":
                            data.sort(function (a, b) {

                                var numA = a[sortBy] || 0;
                                var numB = b[sortBy] || 0;

                                if (numA < numB) return -1;
                                if (numA > numB) return 1;
                                return 0;
                            });
                            break;

                        case "date":
                        case "datetime":
                            data.sort(function (a, b) {

                                var epochA = a[sortBy] === undefined || a[sortBy] === null || a[sortBy] === "" ? Number.MIN_SAFE_INTEGER : CtDataGrid._parseDate(a[sortBy]).getTime();

                                var epochB = b[sortBy] === undefined || b[sortBy] === null || b[sortBy] === "" ? Number.MIN_SAFE_INTEGER : CtDataGrid._parseDate(b[sortBy]).getTime();

                                if (isNaN(epochA)) epochA = Number.MIN_SAFE_INTEGER;
                                if (isNaN(epochB)) epochB = Number.MIN_SAFE_INTEGER;

                                if (epochA < epochB) return -1;
                                if (epochA > epochB) return 1;
                                return 0;
                            });
                            break;

                        case "boolean":
                            var map = function map(bool) {
                                if (bool === true) return 0;
                                if (bool === false) return 1;
                                return reverse ? -1 : 2;
                            };
                            data.sort(function (a, b) {

                                var boolA = map(a[sortBy]);
                                var boolB = map(b[sortBy]);

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

        }, {
            key: "_buildPagination",
            value: function _buildPagination() {
                var _this17 = this;

                CtDataGrid._removeChildren(this.$paginationArea);

                if (this.showPagination && this.pageSize > 0 && this.totalResults > 0) {

                    this.$element.classList.add("has-pagination");

                    var visiblePageCount = 5;
                    var totalPages = this._getTotalPages();

                    var startPage = 1;
                    var endPage = Math.min(visiblePageCount, totalPages);

                    if (totalPages > visiblePageCount) {

                        var centerPageIndex = Math.ceil(visiblePageCount / 2);
                        var centerPagePadding = centerPageIndex - 1;

                        if (this.pageNumber > centerPageIndex) {

                            startPage = this.pageNumber - centerPagePadding;
                            endPage = this.pageNumber + centerPagePadding;

                            if (endPage > totalPages) {
                                endPage = totalPages;
                                startPage = endPage - visiblePageCount + 1;
                            }
                        }
                    }

                    this.$paginationArea.innerHTML = "\n                    <nav>\n                        <ul class=\"pagination pagination-sm\"></ul>\n                    </nav>\n                ";

                    if (totalPages > 1) {

                        var $paginationHost = this.$paginationArea.querySelector(".pagination");

                        var buildPaginationItem = function buildPaginationItem(_ref) {
                            var html = _ref.html,
                                _ref$active = _ref.active,
                                active = _ref$active === undefined ? false : _ref$active,
                                _ref$enabled = _ref.enabled,
                                enabled = _ref$enabled === undefined ? true : _ref$enabled,
                                _ref$handler = _ref.handler,
                                handler = _ref$handler === undefined ? null : _ref$handler,
                                _ref$css = _ref.css,
                                css = _ref$css === undefined ? null : _ref$css;


                            var $page = document.createElement("li");
                            if (active) $page.classList.add("active");
                            if (!enabled) $page.classList.add("disabled");
                            if (css) css.split(" ").forEach(function (x) {
                                return $page.classList.add(x);
                            });

                            var $number = document.createElement("a");
                            $number.innerHTML = html;

                            if (enabled && typeof handler === "function") {
                                $number.addEventListener("click", handler);
                            }

                            $page.appendChild($number);

                            $paginationHost.appendChild($page);

                            return $number;
                        };

                        buildPaginationItem({
                            html: "<span class=\"page-icon fa fa-step-backward\"></span><span class=\"page-label\"> First</span>",
                            enabled: this.pageNumber > 1,
                            handler: function handler() {
                                return _this17._changePage(1);
                            },
                            css: "page-first page-bookend"
                        });

                        buildPaginationItem({
                            html: "<span class=\"page-icon fa fa-chevron-left\"></span><span class=\"page-label\"> Previous</span>",
                            enabled: this.pageNumber > 1,
                            handler: function handler() {
                                return _this17._changePage(_this17.pageNumber - 1);
                            },
                            css: "page-prev page-bookend"
                        });

                        var _loop = function _loop(i) {

                            buildPaginationItem({
                                html: "<span class=\"page-label\">" + i + "</span>",
                                active: _this17.pageNumber === i,
                                handler: function handler() {
                                    return _this17._changePage(i);
                                }
                            });
                        };

                        for (var i = startPage; i <= endPage; i++) {
                            _loop(i);
                        }

                        buildPaginationItem({
                            html: "<span class=\"page-label\">Next </span><span class=\"page-icon fa fa-chevron-right\"></span>",
                            enabled: this.pageNumber < totalPages,
                            handler: function handler() {
                                return _this17._changePage(_this17.pageNumber + 1);
                            },
                            css: "page-next page-bookend"
                        });

                        buildPaginationItem({
                            html: "<span class=\"page-label\">Last </span><span class=\"page-icon fa fa-step-forward\"></span>",
                            enabled: this.pageNumber < totalPages,
                            handler: function handler() {
                                return _this17._changePage(totalPages);
                            },
                            css: "page-last page-bookend"
                        });
                    }
                } else {

                    this.$element.classList.remove("has-pagination");
                }
            }
        }, {
            key: "_changePage",
            value: function _changePage(pageNumber) {

                var totalPages = this._getTotalPages();

                if (!isNaN(pageNumber)) pageNumber = parseInt(pageNumber);

                if (typeof pageNumber === "string") {

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

                if (typeof pageNumber === "number") {

                    if (pageNumber < 1) pageNumber = 1;
                    if (pageNumber > totalPages && totalPages > 0) pageNumber = totalPages;

                    this.pageNumber = pageNumber;

                    this._buildDataRows();

                    if (this.fixedHeaders) {
                        this.$table.querySelector("tbody").scrollTop = 0;
                    }
                } else {

                    throw new Error("Invalid page number: \"" + pageNumber + "\"");
                }
            }
        }, {
            key: "_paginateLocal",
            value: function _paginateLocal(data) {

                if (this.pageSize === 0) return data;
                this.totalResults = data.length; // update number of results based on incoming data rows

                var totalPages = this._getTotalPages();
                if (totalPages > 0) {
                    if (this.pageNumber < 1) this.pageNumber = 1;
                    if (this.pageNumber > totalPages) this.pageNumber = totalPages;
                }

                var startIndex = this.pageSize * (this.pageNumber - 1);
                var endIndex = startIndex + this.pageSize;

                return data.slice(startIndex, Math.min(endIndex, this.totalResults));
            }
        }, {
            key: "_getTotalPages",
            value: function _getTotalPages() {

                return Math.ceil(this.totalResults / this.pageSize);
            }

            // === Utility functions === //

        }, {
            key: "_sendRequest",
            value: function _sendRequest(method, url, postData) {

                return new Promise(function (resolve, reject) {

                    var httpMethod = (method || "GET").toUpperCase();
                    var sendUrl = url;

                    var xhr = new XMLHttpRequest();
                    xhr.onreadystatechange = function () {
                        if (xhr.readyState === 4) {
                            if (xhr.status === 200) {
                                var response = JSON.parse(xhr.response.toString());
                                resolve(response);
                            } else if (xhr.status === 0) {
                                reject("Could not access " + url);
                            } else {
                                reject("Error code " + xhr.status + " on \"" + url + "\"");
                            }
                        }
                    };
                    xhr.onerror = function () {
                        reject("There was a problem accessing " + url);
                    };

                    if (httpMethod === "GET") {

                        var separator = sendUrl.indexOf("?") === -1 ? "?" : "&";

                        Object.keys(postData).filter(function (param) {
                            return postData[param];
                        }).forEach(function (param) {
                            sendUrl += "" + separator + param + "=" + encodeURIComponent(postData[param]);
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
        }, {
            key: "_setData",
            value: function _setData() {
                var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];


                this.model.data = data;
            }
        }, {
            key: "_applyIndexes",
            value: function _applyIndexes(data) {

                var wasSingleItem = data instanceof Array === false;
                if (wasSingleItem) {
                    data = [data];
                }

                var copyOfData = JSON.parse(JSON.stringify(data));

                var sourceData = this.localData || this.model.data || [];
                data.forEach(function (x, idx) {

                    var idxInSource = sourceData.indexOf(x);
                    if (idxInSource !== -1) {
                        copyOfData[idx].__idx = idxInSource;
                    }
                });

                return wasSingleItem ? copyOfData[0] : copyOfData;
            }
        }, {
            key: "_setLoading",
            value: function _setLoading(isLoading) {

                if (isLoading) {

                    this.$element.classList.add("loading-data");
                    this.$loading.innerHTML = "<div class=\"bg\"></div><div class=\"spinner\"></div>";
                } else {

                    this.$element.classList.remove("loading-data");
                    CtDataGrid._removeChildren(this.$loading);
                }
            }
        }, {
            key: "_setMessage",
            value: function _setMessage(type, message, detail) {

                CtDataGrid._removeChildren(this.$tbody);

                var $errorTr = document.createElement("tr");
                this.$tbody.appendChild($errorTr);

                var $messageTd = document.createElement("td");
                $messageTd.classList.add("message-" + type);
                $messageTd.setAttribute("colspan", this.model.cols.length.toString());
                $errorTr.appendChild($messageTd);

                var $messageText = document.createElement("div");
                $messageText.classList.add("content");
                $messageText.textContent = message;

                if (detail) {
                    $messageText.innerHTML += "<div class=\"message-detail\">" + detail + "</div>";
                }

                $messageTd.appendChild($messageText);
            }
        }, {
            key: "_raiseEvent",
            value: function _raiseEvent(name, detail) {
                var _this18 = this;

                var args = detail ? { detail: detail } : null;
                var event = new CustomEvent(name, args);
                setTimeout(function () {
                    _this18.dispatchEvent(event);
                }, 0);
            }

            // === Static functions === //

        }, {
            key: "setData",


            // === API functions === //

            /**
             * Set the data for the data grid explicitly if not using a data-source
             * @param {object[]} data - The data array
             */
            value: function setData(data) {

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

        }, {
            key: "getSearch",
            value: function getSearch() {

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

        }, {
            key: "setSearch",
            value: function setSearch(query) {

                if (query === null || query === undefined) query = "";
                if (typeof query !== "string") query = query.toString();

                this._changeSearch(query, true);
            }

            /**
             * Obtains sorting information for the data grid
             * @returns {object} - Information about the sort state of the data grid
             */

        }, {
            key: "getSort",
            value: function getSort() {

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

        }, {
            key: "setSort",
            value: function setSort(columnKey) {
                var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "switch";


                if (columnKey === null) {
                    var initiallySortedColumn = this.model.cols.find(function (x) {
                        return !!x.sort;
                    });
                    if (initiallySortedColumn) {
                        columnKey = initiallySortedColumn.key;
                        direction = initiallySortedColumn.sort;
                    }
                }

                if (!columnKey) {

                    this._changeSort(null);
                } else {

                    var col = this.model.cols.filter(function (x) {
                        return x.key === columnKey;
                    })[0];
                    if (!col) {

                        throw new Error("Unable to sort by column \"" + columnKey + "\" - data grid does not have a column with that key");
                    }

                    if (!col.sortable) {

                        throw new Error("Unable to sort by column \"" + columnKey + "\" - that column is not defined as sortable");
                    }

                    var $th = this.$table.querySelector("th[key=\"" + columnKey + "\"]");
                    this._changeSort($th, direction);
                }
            }

            /**
             * Obtains pagination information for the data grid
             * @returns {object} - Information about the pagination state of the data grid
             */

        }, {
            key: "getPage",
            value: function getPage() {

                if (!this.pageSize) {

                    return null;
                }

                var totalPages = this._getTotalPages();

                return {
                    number: this.pageNumber,
                    total: this._getTotalPages(),
                    pageSize: this.pageSize,
                    isFirst: this.pageNumber === 1,
                    hasPrevious: this.pageNumber > 1,
                    hasNext: this.pageNumber < totalPages,
                    isLast: this.pageNumber === totalPages
                };
            }

            /**
             * Set the page number or page change instruction
             * @param {number|string} page - The page number, or an instruction of "first", "previous", "next" or "last"
             */

        }, {
            key: "setPage",
            value: function setPage(page) {

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

        }, {
            key: "getVisibleData",
            value: function getVisibleData() {

                return this._applyIndexes(this.model.data || []);
            }

            /**
             * Put a row or collection or rows into edit
             * @param {object|number|object[]|number[]|} itemOrItems - The rows to edit, as a single or collection of indexes or data items to be edited
             */

        }, {
            key: "edit",
            value: function edit(itemOrItems) {
                var _this19 = this;

                if (itemOrItems === undefined || itemOrItems === null) {

                    throw new Error("You must specify the indexes or items of data to put into edit mode");
                }

                if (itemOrItems instanceof Array === false) {

                    itemOrItems = [itemOrItems];
                }

                var itemIndexes = itemOrItems.map(function (x) {

                    return typeof x === "number" ? x : (_this19.localData || _this19.model.data || []).indexOf(x);
                }).filter(function (x) {
                    return x !== -1;
                });

                this._addEditModeItems(itemIndexes);
            }

            /**
             * Switches any rows in edit mode to be not in edit mode and returns the data changes
             * @returns {object[]} - A collection of objects containing the original and changed data items along with their index in the original collection
             */

        }, {
            key: "finishedEdit",
            value: function finishedEdit() {

                var changes = this._getEditChanges();

                this._removeAllEditModeItems();

                return changes;
            }

            /**
             * Get the value of the selected row or cell, subject to the selection-mode attribute
             * @model {events=select}
             * @returns {object} An object containing the selected row/cell info
             */

        }, {
            key: "value",
            get: function get() {

                return this.selectedValue;
            }
        }], [{
            key: "_parseDate",
            value: function _parseDate(dateString) {

                var date = null;

                if (/[0-9]{4}-[0-9]{2}-[0-9]{2}/.test(dateString)) {

                    date = new Date(dateString);

                    if (isNaN(date.valueOf())) {

                        var altDateString = dateString.replace(/-/g, "/").replace("T", " ");
                        date = new Date(altDateString);
                    }
                } else {

                    date = new Date(dateString);
                }

                if (!date || isNaN(date.valueOf())) return null;

                return date;
            }
        }, {
            key: "_renderDate",
            value: function _renderDate(date) {

                if (!date || isNaN(date.valueOf())) return "";

                return new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000).toLocaleDateString("en-GB");
            }
        }, {
            key: "_renderTime",
            value: function _renderTime(date) {

                if (!date || isNaN(date.valueOf())) return "";

                return new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000).toLocaleTimeString("en-GB");
            }
        }, {
            key: "_getProperty",
            value: function _getProperty(obj, propertyPath) {

                // convert array-notation to dot-notation and remove leading dots
                propertyPath = propertyPath.replace(/\[(\w+)]/g, ".$1").replace(/^\./, "");

                var property = obj;
                var remainingPath = propertyPath;

                while (property && remainingPath.length > 0) {

                    var idx = remainingPath.indexOf(".");
                    if (idx > -1) {
                        var nextPathPart = remainingPath.substring(0, idx);
                        property = property[nextPathPart];
                        remainingPath = remainingPath.substring(idx + 1);
                    } else {
                        property = property[remainingPath];
                        remainingPath = "";
                    }
                }

                return property;
            }
        }, {
            key: "_removeChildren",
            value: function _removeChildren(el) {

                while (el.firstChild) {
                    el.removeChild(el.firstChild);
                }
            }
        }, {
            key: "observedAttributes",
            get: function get() {

                return ["data-source", "data-source-method", "data-source-page-param", "data-source-page-size-param", "data-source-search-param", "data-source-sort-column-param", "data-source-sort-direction-param", "data-results-property", "data-results-total-property", "show-search", "show-pagination", "page-size", "use-local-interaction", "fixed-headers", "row-css-key", "selection-mode"];
            }
        }]);

        return CtDataGrid;
    }(HTMLElement));
})();