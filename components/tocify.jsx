"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var antd_1 = require("antd");
var lodash_1 = require("lodash");
var Link = antd_1.Anchor.Link;
var Tocify = /** @class */ (function () {
    function Tocify() {
        var _this = this;
        this.tocItems = [];
        this.index = 0;
        this.reset = function () {
            _this.tocItems = [];
            _this.index = 0;
        };
        this.tocItems = [];
        this.index = 0;
    }
    Tocify.prototype.add = function (text, level) {
        var anchor = "toc" + level + ++this.index;
        var item = { anchor: anchor, level: level, text: text };
        var items = this.tocItems;
        if (items.length === 0) { // 第一个 item 直接 push
            items.push(item);
        }
        else {
            var lastItem = lodash_1.last(items); // 最后一个 item
            if (item.level > lastItem.level) { // item 是 lastItem 的 children
                for (var i = lastItem.level + 1; i <= 2; i++) {
                    var children = lastItem.children;
                    if (!children) { // 如果 children 不存在
                        lastItem.children = [item];
                        break;
                    }
                    lastItem = lodash_1.last(children); // 重置 lastItem 为 children 的最后一个 item
                    if (item.level <= lastItem.level) { // item level 小于或等于 lastItem level 都视为与 children 同级
                        children.push(item);
                        break;
                    }
                }
            }
            else { // 置于最顶级
                items.push(item);
            }
        }
        return anchor;
    };
    Tocify.prototype.renderToc = function (items) {
        var _this = this;
        return items.map(function (item) { return (<Link key={item.anchor} href={"#" + item.anchor} title={item.text}>
                {item.children && _this.renderToc(item.children)}
            </Link>); });
    };
    Tocify.prototype.render = function () {
        return (<antd_1.Anchor affix showInkInFixed>
                {this.renderToc(this.tocItems)}
            </antd_1.Anchor>);
    };
    return Tocify;
}());
exports.default = Tocify;
