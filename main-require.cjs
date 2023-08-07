/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "fontkit":
/*!**************************!*\
  !*** external "fontkit" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("fontkit");

/***/ }),

/***/ "image-size":
/*!*****************************!*\
  !*** external "image-size" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("image-size");

/***/ }),

/***/ "sax":
/*!**********************!*\
  !*** external "sax" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("sax");

/***/ }),

/***/ "node:path":
/*!****************************!*\
  !*** external "node:path" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:path");

/***/ }),

/***/ "node:url":
/*!***************************!*\
  !*** external "node:url" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("node:url");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setFontDir": () => (/* binding */ setFontDir),
/* harmony export */   "setFontFamilyMappings": () => (/* binding */ setFontFamilyMappings),
/* harmony export */   "preloadFonts": () => (/* binding */ preloadFonts),
/* harmony export */   "getConfig": () => (/* binding */ getConfig),
/* harmony export */   "getFonts": () => (/* binding */ getFonts),
/* harmony export */   "config": () => (/* binding */ config)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var fontkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fontkit */ "fontkit");



const _config = {}
const fonts = {}

const setFontDir = function (dir) {
  _config.fontDir = dir
  return this
}

const setFontFamilyMappings = function (map) {
  _config.fontFamilyMappings = map
  return this
}

// TODO: make async
const preloadFonts = () => {
  var map = _config.fontFamilyMappings

  for (const [ font, file ] of Object.entries(map)) {
    const filename = path__WEBPACK_IMPORTED_MODULE_0__.join(_config.fontDir, file)

    try {
      fonts[font] = fontkit__WEBPACK_IMPORTED_MODULE_1__.openSync(filename)
    } catch (e) {
      console.warn(`Could not load font file for ${font}`, e)
    }
  }
  return undefined
}

const getConfig = () => _config
const getFonts = () => fonts

const config = {
  setFontDir,
  setFontFamilyMappings,
  preloadFonts,
  getConfig,
  getFonts
}


/***/ }),

/***/ "./src/dom/Attr.js":
/*!*************************!*\
  !*** ./src/dom/Attr.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Attr": () => (/* binding */ Attr)
/* harmony export */ });
/* harmony import */ var _Node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node.js */ "./src/dom/Node.js");
/* harmony import */ var _utils_namespaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/namespaces.js */ "./src/utils/namespaces.js");



class Attr extends _Node_js__WEBPACK_IMPORTED_MODULE_0__.Node {
  constructor (name, props, ns) {
    super(name, { nodeValue: '', ...props }, ns)

    // Follow spec and lowercase nodeName for html
    this.nodeName = ns === _utils_namespaces_js__WEBPACK_IMPORTED_MODULE_1__.html ? name.toLowerCase() : name
    this.nodeType = _Node_js__WEBPACK_IMPORTED_MODULE_0__.Node.ATTRIBUTE_NODE
    this.ownerElement = null
  }

  get value () {
    return this.nodeValue
  }

  set value (val) {
    this.nodeValue = val
  }

  get name () {
    return this.nodeName
  }
}


/***/ }),

/***/ "./src/dom/CharacterData.js":
/*!**********************************!*\
  !*** ./src/dom/CharacterData.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CharacterData": () => (/* binding */ CharacterData)
/* harmony export */ });
/* harmony import */ var _Node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node.js */ "./src/dom/Node.js");
/* harmony import */ var _utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/objectCreationUtils.js */ "./src/utils/objectCreationUtils.js");
/* harmony import */ var _mixins_NonDocumentTypeChildNode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mixins/NonDocumentTypeChildNode.js */ "./src/dom/mixins/NonDocumentTypeChildNode.js");
/* harmony import */ var _mixins_ChildNode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mixins/ChildNode.js */ "./src/dom/mixins/ChildNode.js");





class CharacterData extends _Node_js__WEBPACK_IMPORTED_MODULE_0__.Node {
  constructor (name, props) {
    super(name, props)

    this.data = this.nodeValue
  }

  appendData (data) {
    this.data += data
  }

  deleteData (offset, count) {
    this.data = this.data.slice(0, offset) + this.data.slice(0, offset + count)
  }

  insertData (offset, data) {
    this.data = this.data.slice(0, offset) + data + this.data.slice(offset)
  }

  replaceData (offset, count, data) {
    this.deleteData(offset, count)
    this.insertData(offset, data)
  }

  substringData (offset, count) {
    this.data = this.data.substr(offset, count)
  }

  get length () {
    return this.data.length
  }
}

(0,_utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_1__.mixin)(_mixins_NonDocumentTypeChildNode_js__WEBPACK_IMPORTED_MODULE_2__.NonDocumentTypeChildNode, CharacterData)
;(0,_utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_1__.mixin)(_mixins_ChildNode_js__WEBPACK_IMPORTED_MODULE_3__.ChildNode, CharacterData)


/***/ }),

/***/ "./src/dom/Comment.js":
/*!****************************!*\
  !*** ./src/dom/Comment.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Comment": () => (/* binding */ Comment)
/* harmony export */ });
/* harmony import */ var _CharacterData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CharacterData.js */ "./src/dom/CharacterData.js");
/* harmony import */ var _Node_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Node.js */ "./src/dom/Node.js");


class Comment extends _CharacterData_js__WEBPACK_IMPORTED_MODULE_0__.CharacterData {
  constructor (name, props) {
    super(name, props)
    this.nodeType = _Node_js__WEBPACK_IMPORTED_MODULE_1__.Node.COMMENT_NODE
  }
}


/***/ }),

/***/ "./src/dom/CustomEvent.js":
/*!********************************!*\
  !*** ./src/dom/CustomEvent.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomEvent": () => (/* binding */ CustomEvent)
/* harmony export */ });
/* harmony import */ var _Event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Event.js */ "./src/dom/Event.js");

class CustomEvent extends _Event_js__WEBPACK_IMPORTED_MODULE_0__.Event {
  constructor (name, props = {}) {
    super(name)
    this.detail = props.detail || null
    this.cancelable = props.cancelable || false
  }
}


/***/ }),

/***/ "./src/dom/Document.js":
/*!*****************************!*\
  !*** ./src/dom/Document.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOMImplementation": () => (/* binding */ DOMImplementation),
/* harmony export */   "Document": () => (/* binding */ Document)
/* harmony export */ });
/* harmony import */ var _Node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node.js */ "./src/dom/Node.js");
/* harmony import */ var _Comment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Comment.js */ "./src/dom/Comment.js");
/* harmony import */ var _Text_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Text.js */ "./src/dom/Text.js");
/* harmony import */ var _Attr_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Attr.js */ "./src/dom/Attr.js");
/* harmony import */ var _DocumentFragment_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DocumentFragment.js */ "./src/dom/DocumentFragment.js");
/* harmony import */ var _html_HTMLLinkElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./html/HTMLLinkElement.js */ "./src/dom/html/HTMLLinkElement.js");
/* harmony import */ var _html_HTMLScriptElement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./html/HTMLScriptElement.js */ "./src/dom/html/HTMLScriptElement.js");
/* harmony import */ var _html_HTMLImageElement_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./html/HTMLImageElement.js */ "./src/dom/html/HTMLImageElement.js");
/* harmony import */ var _html_HTMLElement_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./html/HTMLElement.js */ "./src/dom/html/HTMLElement.js");
/* harmony import */ var _mixins_elementAccess_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mixins/elementAccess.js */ "./src/dom/mixins/elementAccess.js");
/* harmony import */ var _utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/objectCreationUtils.js */ "./src/utils/objectCreationUtils.js");
/* harmony import */ var _svg_SVGSVGElement_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./svg/SVGSVGElement.js */ "./src/dom/svg/SVGSVGElement.js");
/* harmony import */ var _svg_SVGPathElement_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./svg/SVGPathElement.js */ "./src/dom/svg/SVGPathElement.js");
/* harmony import */ var _svg_SVGTextContentElement_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./svg/SVGTextContentElement.js */ "./src/dom/svg/SVGTextContentElement.js");
/* harmony import */ var _svg_SVGGraphicsElement_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./svg/SVGGraphicsElement.js */ "./src/dom/svg/SVGGraphicsElement.js");
/* harmony import */ var _mixins_ParentNode_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mixins/ParentNode.js */ "./src/dom/mixins/ParentNode.js");
/* harmony import */ var _utils_namespaces_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/namespaces.js */ "./src/utils/namespaces.js");
/* harmony import */ var _DocumentType_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./DocumentType.js */ "./src/dom/DocumentType.js");
/* harmony import */ var _mixins_NonElementParentNode_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mixins/NonElementParentNode.js */ "./src/dom/mixins/NonElementParentNode.js");
/* harmony import */ var _svg_SVGRectElement_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./svg/SVGRectElement.js */ "./src/dom/svg/SVGRectElement.js");
/* harmony import */ var _svg_SVGCircleElement_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./svg/SVGCircleElement.js */ "./src/dom/svg/SVGCircleElement.js");
/* harmony import */ var _svg_SVGLineElement_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./svg/SVGLineElement.js */ "./src/dom/svg/SVGLineElement.js");
/* harmony import */ var _svg_SVGEllipseElement_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./svg/SVGEllipseElement.js */ "./src/dom/svg/SVGEllipseElement.js");
/* harmony import */ var _svg_SVGForeignObjectElement_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./svg/SVGForeignObjectElement.js */ "./src/dom/svg/SVGForeignObjectElement.js");
/* harmony import */ var _svg_SVGImageElement_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./svg/SVGImageElement.js */ "./src/dom/svg/SVGImageElement.js");


























function getChildByTagName (parent, name) {
  for (let child = parent.firstChild; child != null; child = child.nextSibling) {
    if (child.nodeType === _Node_js__WEBPACK_IMPORTED_MODULE_0__.Node.ELEMENT_NODE && child.nodeName === name) {
      return child
    }
  }
  return null
}

const getSVGElementForName = (name) => {
  switch (name.toLowerCase()) {
  case 'svg':
    return _svg_SVGSVGElement_js__WEBPACK_IMPORTED_MODULE_11__.SVGSVGElement
  case 'path':
    return _svg_SVGPathElement_js__WEBPACK_IMPORTED_MODULE_12__.SVGPathElement
  case 'circle':
    return _svg_SVGCircleElement_js__WEBPACK_IMPORTED_MODULE_20__.SVGCircleElement
  case 'ellipse':
    return _svg_SVGEllipseElement_js__WEBPACK_IMPORTED_MODULE_22__.SVGEllipseElement
  case 'line':
    return _svg_SVGLineElement_js__WEBPACK_IMPORTED_MODULE_21__.SVGLineElement
  case 'rect':
    return _svg_SVGRectElement_js__WEBPACK_IMPORTED_MODULE_19__.SVGRectElement
  case 'foreignObject':
    return _svg_SVGForeignObjectElement_js__WEBPACK_IMPORTED_MODULE_23__.SVGForeignObjectElement
  case 'image':
    return _svg_SVGImageElement_js__WEBPACK_IMPORTED_MODULE_24__.SVGImageElement
  case 'text':
  case 'tspan':
  case 'tref':
  case 'altglyph':
  case 'textpath':
    return _svg_SVGTextContentElement_js__WEBPACK_IMPORTED_MODULE_13__.SVGTextContentElement
  default:
    return _svg_SVGGraphicsElement_js__WEBPACK_IMPORTED_MODULE_14__.SVGGraphicsElement
  }
}

const getHTMLElementForName = (name) => {
  switch (name.toLowerCase()) {
  case 'img':
    return _html_HTMLImageElement_js__WEBPACK_IMPORTED_MODULE_7__.HTMLImageElement
  case 'link':
    return _html_HTMLLinkElement_js__WEBPACK_IMPORTED_MODULE_5__.HTMLLinkElement
  case 'script':
    return _html_HTMLScriptElement_js__WEBPACK_IMPORTED_MODULE_6__.HTMLScriptElement
  default:
    return _html_HTMLElement_js__WEBPACK_IMPORTED_MODULE_8__.HTMLElement
  }
}

const getElementForNamespace = (ns, name) => {
  switch (ns) {
  case _utils_namespaces_js__WEBPACK_IMPORTED_MODULE_16__.svg:
    return getSVGElementForName(name)
  case _utils_namespaces_js__WEBPACK_IMPORTED_MODULE_16__.html:
  case null:
  case '':
  default:
    return getHTMLElementForName(name)
  }
}

// Feature/version pairs that DOMImplementation.hasFeature() returns true for.  It returns false for anything else.
const supportedFeatures = {
  xml: { '': true, '1.0': true, '2.0': true },
  core: { '': true, '2.0': true },
  html: { '': true, '1.0': true, '2.0': true },
  xhtml: { '': true, '1.0': true, '2.0': true } // HTML
}

const DOMImplementation = {
  hasFeature (feature, version) {
    const f = supportedFeatures[(feature || '').toLowerCase()]
    return (f && f[version || '']) || false
  },

  createDocumentType (qualifiedName, publicId, systemId) {
    return new _DocumentType_js__WEBPACK_IMPORTED_MODULE_17__.DocumentType(qualifiedName, { publicId, systemId, ownerDocument: this })
  },

  createDocument (namespace, qualifiedName, doctype) {
    const doc = new Document(namespace)
    if (doctype) {
      if (doctype.ownerDocument) {
        throw new Error('the object is in the wrong Document, a call to importNode is required')
      }
      doctype.ownerDocument = doc
      doc.appendChild(doctype)
    }
    if (qualifiedName) {
      doc.appendChild(doc.createElementNS(namespace, qualifiedName))
    }
    return doc
  },

  createHTMLDocument (titleText = '') {
    const d = new Document(_utils_namespaces_js__WEBPACK_IMPORTED_MODULE_16__.html)
    const root = d.createElement('html')
    const head = d.createElement('head')
    const title = d.createElement('title')
    title.appendChild(d.createTextNode(titleText))
    head.appendChild(title)
    root.appendChild(head)
    root.appendChild(d.createElement('body'))

    d.appendChild(root)
    return d
  }
}

class Document extends _Node_js__WEBPACK_IMPORTED_MODULE_0__.Node {
  constructor (ns) {
    super('#document', {}, ns)
    this.nodeType = _Node_js__WEBPACK_IMPORTED_MODULE_0__.Node.DOCUMENT_NODE
    this.implementation = DOMImplementation
    this.defaultView = null
  }

  // https://dom.spec.whatwg.org/#dom-document-createattribute
  createAttribute (localName) {
    if (this.namespaceURI === _utils_namespaces_js__WEBPACK_IMPORTED_MODULE_16__.html) {
      localName = localName.toLowerCase()
    }
    return this.createAttributeNS(null, localName, true)
  }

  createAttributeNS (ns, qualifiedName, local = false) {
    return new _Attr_js__WEBPACK_IMPORTED_MODULE_3__.Attr(qualifiedName, { ownerDocument: this, local }, ns)
  }

  createComment (text) {
    return new _Comment_js__WEBPACK_IMPORTED_MODULE_1__.Comment('#comment', { nodeValue: text, ownerDocument: this })
  }

  createDocumentFragment (name) {
    return new _DocumentFragment_js__WEBPACK_IMPORTED_MODULE_4__.DocumentFragment('#document-fragment', { ownerDocument: this })
  }

  createElement (localName) {
    return this.createElementNS(this.namespaceURI, localName, true)
  }

  createElementNS (ns, qualifiedName, local = false) {
    const Element = getElementForNamespace(ns, qualifiedName)

    return new Element(qualifiedName, {
      ownerDocument: this,
      local
    }, ns)
  }

  createTextNode (text) {
    return new _Text_js__WEBPACK_IMPORTED_MODULE_2__.Text('#text', { nodeValue: text, ownerDocument: this })
  }

  get compatMode () {
    return 'CSS1Compat' // always be in standards-mode
  }

  get body () {
    return getChildByTagName(this.documentElement, 'BODY')
  }

  get head () {
    return getChildByTagName(this.documentElement, 'HEAD')
  }

  get documentElement () {
    return this.lastChild
  }
}

(0,_utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_10__.mixin)(_mixins_elementAccess_js__WEBPACK_IMPORTED_MODULE_9__.elementAccess, Document)
;(0,_utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_10__.mixin)(_mixins_ParentNode_js__WEBPACK_IMPORTED_MODULE_15__.ParentNode, Document)
;(0,_utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_10__.mixin)(_mixins_NonElementParentNode_js__WEBPACK_IMPORTED_MODULE_18__.NonElementParentNode, Document)


/***/ }),

/***/ "./src/dom/DocumentFragment.js":
/*!*************************************!*\
  !*** ./src/dom/DocumentFragment.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentFragment": () => (/* binding */ DocumentFragment)
/* harmony export */ });
/* harmony import */ var _Node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node.js */ "./src/dom/Node.js");
/* harmony import */ var _utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/objectCreationUtils.js */ "./src/utils/objectCreationUtils.js");
/* harmony import */ var _mixins_elementAccess_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mixins/elementAccess.js */ "./src/dom/mixins/elementAccess.js");
/* harmony import */ var _mixins_ParentNode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mixins/ParentNode.js */ "./src/dom/mixins/ParentNode.js");
/* harmony import */ var _mixins_NonElementParentNode_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mixins/NonElementParentNode.js */ "./src/dom/mixins/NonElementParentNode.js");





class DocumentFragment extends _Node_js__WEBPACK_IMPORTED_MODULE_0__.Node {
  constructor (name, props) {
    super(name, props)
    this.nodeType = _Node_js__WEBPACK_IMPORTED_MODULE_0__.Node.DOCUMENT_FRAGMENT_NODE
  }
}

(0,_utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_1__.mixin)(_mixins_elementAccess_js__WEBPACK_IMPORTED_MODULE_2__.elementAccess, DocumentFragment)
;(0,_utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_1__.mixin)(_mixins_ParentNode_js__WEBPACK_IMPORTED_MODULE_3__.ParentNode, DocumentFragment)
;(0,_utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_1__.mixin)(_mixins_NonElementParentNode_js__WEBPACK_IMPORTED_MODULE_4__.NonElementParentNode, DocumentFragment)


/***/ }),

/***/ "./src/dom/DocumentType.js":
/*!*********************************!*\
  !*** ./src/dom/DocumentType.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentType": () => (/* binding */ DocumentType)
/* harmony export */ });
/* harmony import */ var _Node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node.js */ "./src/dom/Node.js");
/* harmony import */ var _utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/objectCreationUtils.js */ "./src/utils/objectCreationUtils.js");
/* harmony import */ var _mixins_ChildNode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mixins/ChildNode.js */ "./src/dom/mixins/ChildNode.js");




class DocumentType extends _Node_js__WEBPACK_IMPORTED_MODULE_0__.Node {
  constructor (name, props) {
    super(name, props)

    this.nodeType = _Node_js__WEBPACK_IMPORTED_MODULE_0__.Node.DOCUMENT_TYPE_NODE
    this.name = name

    const { publicId, systemId } = props
    this.publicId = publicId || ''
    this.systemId = systemId || ''
  }
}

(0,_utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_1__.mixin)(_mixins_ChildNode_js__WEBPACK_IMPORTED_MODULE_2__.ChildNode, DocumentType)


/***/ }),

/***/ "./src/dom/Element.js":
/*!****************************!*\
  !*** ./src/dom/Element.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Element": () => (/* binding */ Element)
/* harmony export */ });
/* harmony import */ var _Node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node.js */ "./src/dom/Node.js");
/* harmony import */ var _mixins_ParentNode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mixins/ParentNode.js */ "./src/dom/mixins/ParentNode.js");
/* harmony import */ var _mixins_elementAccess_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mixins/elementAccess.js */ "./src/dom/mixins/elementAccess.js");
/* harmony import */ var _html_HTMLParser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html/HTMLParser.js */ "./src/dom/html/HTMLParser.js");
/* harmony import */ var _DocumentFragment_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DocumentFragment.js */ "./src/dom/DocumentFragment.js");
/* harmony import */ var _utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/objectCreationUtils.js */ "./src/utils/objectCreationUtils.js");
/* harmony import */ var _utils_tagUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/tagUtils.js */ "./src/utils/tagUtils.js");
/* harmony import */ var _utils_mapUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/mapUtils.js */ "./src/utils/mapUtils.js");
/* harmony import */ var _utils_strUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/strUtils.js */ "./src/utils/strUtils.js");
/* harmony import */ var _mixins_NonDocumentTypeChildNode_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mixins/NonDocumentTypeChildNode.js */ "./src/dom/mixins/NonDocumentTypeChildNode.js");
/* harmony import */ var _mixins_ChildNode_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mixins/ChildNode.js */ "./src/dom/mixins/ChildNode.js");
/* harmony import */ var _utils_namespaces_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/namespaces.js */ "./src/utils/namespaces.js");














const validateAndExtract = (ns, name) => {
  let prefix = null
  let localname = name

  if (!ns) ns = null

  if (name.includes(':')) {
    [ prefix, localname ] = name.split(':')
  }

  if (!ns && prefix) {
    throw new Error('Namespace Error')
  }

  if (prefix === 'xml' && ns !== _utils_namespaces_js__WEBPACK_IMPORTED_MODULE_11__.xml) {
    throw new Error('Namespace Error')
  }

  if ((prefix === 'xmlns' || name === 'xmlns') && ns !== _utils_namespaces_js__WEBPACK_IMPORTED_MODULE_11__.xmlns) {
    throw new Error('Namespace Error')
  }

  if (prefix !== 'xmlns' && name !== 'xmlns' && ns === _utils_namespaces_js__WEBPACK_IMPORTED_MODULE_11__.xmlns) {
    throw new Error('Namespace Error')
  }

  return [ ns, prefix, localname ]
}

const getAttributeByNsAndLocalName = (el, ns, localName) => {
  if (!ns) ns = null
  return [ ...el.attrs ].find((node) => node.localName === localName && node.namespaceURI === ns)
}

const getAttributeByQualifiedName = (el, qualifiedName) => {
  if (el.namespaceURI === _utils_namespaces_js__WEBPACK_IMPORTED_MODULE_11__.html && el.ownerDocument.namespaceURI === _utils_namespaces_js__WEBPACK_IMPORTED_MODULE_11__.html) {
    qualifiedName = qualifiedName.toLowerCase()
  }

  return [ ...el.attrs ].find((node) => node.name === qualifiedName)
}

// This Proxy proxies all access to node.style to the css saved in the attribute
const getStyleProxy = (node) => {

  return new Proxy(node, {
    get (target, key) {
      const styles = target.getAttribute('style') || ''
      const styleMap = (0,_utils_mapUtils_js__WEBPACK_IMPORTED_MODULE_7__.cssToMap)(styles)

      if (key === 'cssText') {
        return styles
      }

      if (key === 'setProperty') {
        return function (propertyName, value = '', priority = '') {
          node.style[propertyName] = value + (priority ? ` !${priority}` : '')
        }
      }

      key = (0,_utils_strUtils_js__WEBPACK_IMPORTED_MODULE_8__.decamelize)(key)
      if (!styleMap.has(key)) return ''

      return styleMap.get(key)
    },
    set (target, key, value) {
      key = (0,_utils_strUtils_js__WEBPACK_IMPORTED_MODULE_8__.decamelize)(key)

      if (key === 'css-text') {
        // ensure correct spacing and syntax by converting back and forth
        target.setAttribute('style', (0,_utils_mapUtils_js__WEBPACK_IMPORTED_MODULE_7__.mapToCss)((0,_utils_mapUtils_js__WEBPACK_IMPORTED_MODULE_7__.cssToMap)(value)))
        return true
      } else {
        value = (0,_utils_strUtils_js__WEBPACK_IMPORTED_MODULE_8__.hexToRGB)(value.toString())
        const styles = target.getAttribute('style') || ''
        const styleMap = (0,_utils_mapUtils_js__WEBPACK_IMPORTED_MODULE_7__.cssToMap)(styles)
        styleMap.set(key, value)

        target.setAttribute('style', (0,_utils_mapUtils_js__WEBPACK_IMPORTED_MODULE_7__.mapToCss)(styleMap))

        return true
      }
    }
  })
}

// https://dom.spec.whatwg.org/#dom-element-setattributens
class Element extends _Node_js__WEBPACK_IMPORTED_MODULE_0__.Node {
  constructor (name, props, ns) {
    super(name, props, ns)

    this.style = getStyleProxy(this)
    this.tagName = this.nodeName
  }

  getAttribute (qualifiedName) {
    const attr = this.getAttributeNode(qualifiedName)
    return attr ? attr.value : null
  }

  getAttributeNode (qualifiedName) {
    return getAttributeByQualifiedName(this, qualifiedName)
  }

  getAttributeNodeNS (ns, localName) {
    return getAttributeByNsAndLocalName(this, ns, localName)
  }

  getAttributeNS (ns, localName) {
    const attr = this.getAttributeNodeNS(ns, localName)
    return attr ? attr.value : null
  }

  getBoundingClientRect () {
    throw new Error('Only implemented for SVG Elements')
  }

  hasAttribute (qualifiedName) {
    const attr = this.getAttributeNode(qualifiedName)
    return !!attr
  }

  hasAttributeNS (ns, localName) {
    const attr = this.getAttributeNodeNS(ns, localName)
    return !!attr
  }

  matches (query) {
    return this.matchWithScope(query, this)
  }

  removeAttribute (qualifiedName) {
    const attr = this.getAttributeNode(qualifiedName)
    if (attr) {
      this.removeAttributeNode(attr)
    }
    return attr
  }

  removeAttributeNode (node) {
    if (!this.attrs.delete(node)) throw new Error('Attribute cannot be removed because it was not found on the element')
    return node
  }

  // call is: d.removeAttributeNS('http://www.mozilla.org/ns/specialspace', 'align', 'center');
  removeAttributeNS (ns, localName) {
    const attr = this.getAttributeNodeNS(ns, localName)
    if (attr) {
      this.removeAttributeNode(attr)
    }
    return attr
  }

  /* The setAttribute(qualifiedName, value) method, when invoked, must run these steps:

    If qualifiedName does not match the Name production in XML, then throw an "InvalidCharacterError" DOMException.

    If this is in the HTML namespace and its node document is an HTML document, then set qualifiedName to qualifiedName in ASCII lowercase.

    Let attribute be the first attribute in this’s attribute list whose qualified name is qualifiedName, and null otherwise.

    If attribute is null, create an attribute whose local name is qualifiedName, value is value, and node document is this’s node document, then append this attribute to this, and then return.

    Change attribute to value.
  */
  setAttribute (qualifiedName, value) {
    // We have to do that here because we cannot check if `this` is in the correct namespace
    // when doing it in createAttribute
    if (this.namespaceURI === _utils_namespaces_js__WEBPACK_IMPORTED_MODULE_11__.html && this.ownerDocument.namespaceURI === _utils_namespaces_js__WEBPACK_IMPORTED_MODULE_11__.html) {
      qualifiedName = qualifiedName.toLowerCase()
    }

    let attr = this.getAttributeNode(qualifiedName)
    if (!attr) {
      // Because createAttribute lowercases the attribute in an html doc we have to use createAttributeNS
      attr = this.ownerDocument.createAttributeNS(null, qualifiedName, true)
      this.setAttributeNode(attr)
    }

    attr.value = value
  }

  /*
    Let namespace, prefix, and localName be the result of passing namespace and qualifiedName to validate and extract.

    Set an attribute value for this using localName, value, and also prefix and namespace.

    If prefix is not given, set it to null.
    If namespace is not given, set it to null.
    Let attribute be the result of getting an attribute given namespace, localName, and element.
    If attribute is null, create an attribute whose namespace is namespace, namespace prefix is prefix, local name is localName, value is value, and node document is element’s node document, then append this attribute to element, and then return.

    Change attribute to value.
  */

  setAttributeNode (node) {
    this.attrs.add(node)
    node.ownerElement = this
  }

  // call is: d.setAttributeNS('http://www.mozilla.org/ns/specialspace', 'spec:align', 'center');
  setAttributeNS (namespace, name, value) {

    // eslint-disable-next-line
    const [ ns, prefix, localName ] = validateAndExtract(namespace, name)

    let attr = this.getAttributeNodeNS(ns, localName)
    if (!attr) {
      attr = this.ownerDocument.createAttributeNS(ns, name)
      this.setAttributeNode(attr) // setAttributeNodeNS is a synonym of setAttributeNode
    }

    attr.value = value

    this.attrs.add(attr)
  }

  get attributes () {
    return [ ...this.attrs ]
  }

  get className () {
    return this.getAttribute('class')
  }

  set className (c) {
    this.setAttribute('class', c)
  }

  get id () {
    return this.getAttribute('id') || ''
  }

  set id (id) {
    return this.setAttribute('id', id)
  }

  get innerHTML () {

    return this.childNodes.map(node => {
      if (node.nodeType === _Node_js__WEBPACK_IMPORTED_MODULE_0__.Node.TEXT_NODE) return (0,_utils_strUtils_js__WEBPACK_IMPORTED_MODULE_8__.htmlEntities)(node.data)
      if (node.nodeType === _Node_js__WEBPACK_IMPORTED_MODULE_0__.Node.CDATA_SECTION_NODE) return (0,_utils_strUtils_js__WEBPACK_IMPORTED_MODULE_8__.cdata)(node.data)
      if (node.nodeType === _Node_js__WEBPACK_IMPORTED_MODULE_0__.Node.COMMENT_NODE) return (0,_utils_strUtils_js__WEBPACK_IMPORTED_MODULE_8__.comment)(node.data)
      return node.outerHTML
    }).join('')
  }

  set innerHTML (str) {
    while (this.firstChild) {
      this.removeChild(this.firstChild)
    }
    // The parser adds the html to this
    (0,_html_HTMLParser_js__WEBPACK_IMPORTED_MODULE_3__.HTMLParser)(str, this)
  }

  get outerHTML () {
    return (0,_utils_tagUtils_js__WEBPACK_IMPORTED_MODULE_6__.tag)(this)
  }

  set outerHTML (str) {
    var well = new _DocumentFragment_js__WEBPACK_IMPORTED_MODULE_4__.DocumentFragment()
    ;(0,_html_HTMLParser_js__WEBPACK_IMPORTED_MODULE_3__.HTMLParser)(str, well)
    this.parentNode.insertBefore(well, this)
    this.parentNode.removeChild(this)
  }

}

(0,_utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_5__.mixin)(_mixins_ParentNode_js__WEBPACK_IMPORTED_MODULE_1__.ParentNode, Element)
;(0,_utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_5__.mixin)(_mixins_elementAccess_js__WEBPACK_IMPORTED_MODULE_2__.elementAccess, Element)
;(0,_utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_5__.mixin)(_mixins_NonDocumentTypeChildNode_js__WEBPACK_IMPORTED_MODULE_9__.NonDocumentTypeChildNode, Element)
;(0,_utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_5__.mixin)(_mixins_ChildNode_js__WEBPACK_IMPORTED_MODULE_10__.ChildNode, Element)


/***/ }),

/***/ "./src/dom/Event.js":
/*!**************************!*\
  !*** ./src/dom/Event.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Event": () => (/* binding */ Event)
/* harmony export */ });
class Event {
  constructor (type) {
    this.type = type
    this.cancelable = false
    this.defaultPrevented = false
    this.target = null
  }

  preventDefault () {
    if (this.cancelable) {
      this.defaultPrevented = true
    }
  }
}


/***/ }),

/***/ "./src/dom/EventTarget.js":
/*!********************************!*\
  !*** ./src/dom/EventTarget.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventTarget": () => (/* binding */ EventTarget)
/* harmony export */ });
const $ = Symbol('private properties')

class EventTarget {
  constructor () {
    this[$] = {}
    this[$].listeners = {}
  }

  addEventListener (type, callback) {
    if (!(type in this[$].listeners)) {
      this[$].listeners[type] = []
    }
    this[$].listeners[type].push(callback)
  }

  dispatchEvent (event) {
    if (!(event.type in this[$].listeners)) { return true }

    var stack = this[$].listeners[event.type]
    event.target = this

    stack.forEach(function (el) {
      el(event)
    })

    return !event.defaultPrevented
  }

  removeEventListener (type, callback) {
    if (!(type in this[$].listeners)) {
      return
    }

    var stack = this[$].listeners[type]
    for (var i = 0, il = stack.length; i < il; i++) {
      if (stack[i] === callback) {
        stack.splice(i, 1)
        return
      }
    }
  }

}


/***/ }),

/***/ "./src/dom/Node.js":
/*!*************************!*\
  !*** ./src/dom/Node.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Node": () => (/* binding */ Node)
/* harmony export */ });
/* harmony import */ var _utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/objectCreationUtils.js */ "./src/utils/objectCreationUtils.js");
/* harmony import */ var _EventTarget_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventTarget.js */ "./src/dom/EventTarget.js");
/* harmony import */ var _utils_tagUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/tagUtils.js */ "./src/utils/tagUtils.js");
/* harmony import */ var _utils_namespaces_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/namespaces.js */ "./src/utils/namespaces.js");






const nodeTypes = {
  ELEMENT_NODE: 1,
  ATTRIBUTE_NODE: 2,
  TEXT_NODE: 3,
  CDATA_SECTION_NODE: 4,
  ENTITY_REFERENCE_NODE: 5,
  ENTITY_NODE: 6,
  PROCESSING_INSTRUCTION_NODE: 7,
  COMMENT_NODE: 8,
  DOCUMENT_NODE: 9,
  DOCUMENT_TYPE_NODE: 10,
  DOCUMENT_FRAGMENT_NODE: 11,
  NOTATION_NODE: 12
}

class Node extends _EventTarget_js__WEBPACK_IMPORTED_MODULE_1__.EventTarget {
  constructor (name = '', props = {}, ns = null) {
    super()

    // If props.local is true, the element was Node was created with the non-namespace function
    // that means whatever was passed as name is the local name even though it might look like a prefix
    if (name.includes(':') && !props.local) {
      ;[ this.prefix, this.localName ] = name.split(':')
    } else {
      this.localName = name
      this.prefix = null
    }

    // Follow spec and uppercase nodeName for html
    this.nodeName = ns === _utils_namespaces_js__WEBPACK_IMPORTED_MODULE_3__.html ? name.toUpperCase() : name

    this.namespaceURI = ns
    this.nodeType = Node.ELEMENT_NODE
    this.nodeValue = props.nodeValue != null ? props.nodeValue : null
    this.childNodes = []

    this.attrs = props.attrs || new Set()

    this.ownerDocument = props.ownerDocument || null
    this.parentNode = null

    // this.namespaces = {}
    // if (this.prefix) {
    //   this.namespaces[this.prefix] = ns
    // } else {
    //   this.namespaces.default = ns
    // }

    if (props.childNodes) {
      for (let i = 0, il = props.childNodes.length; i < il; ++i) {
        this.appendChild(props.childNodes[i])
      }
    }
  }

  appendChild (node) {
    return this.insertBefore(node)
  }

  cloneNode (deep = false) {
    const clone = (0,_utils_tagUtils_js__WEBPACK_IMPORTED_MODULE_2__.cloneNode)(this)

    if (deep) {
      this.childNodes.forEach(function (el) {
        const node = el.cloneNode(deep)
        clone.appendChild(node)
      })
    }

    return clone
  }

  contains (node) {
    if (node === this) return false

    while (node.parentNode) {
      if (node === this) return true
      node = node.parentNode
    }
    return false
  }

  getRootNode () {
    if (!this.parentNode || this.nodeType === Node.DOCUMENT_NODE) return this
    return this.parentNode.getRootNode()
  }

  hasChildNodes () {
    return !!this.childNodes.length
  }

  insertBefore (node, before) {
    let index = this.childNodes.indexOf(before)
    if (index === -1) {
      index = this.childNodes.length
    }

    if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      let child
      let oldChild = before
      while ((child = node.childNodes.pop())) {
        this.insertBefore(child, oldChild)
        oldChild = child
      }
      return node
    }

    if (node.parentNode) {
      node.parentNode.removeChild(node)
    }

    node.parentNode = this
    // Object.setPrototypeOf(node.namespaces.prototype, this.namespaces.prototype)

    this.childNodes.splice(index, 0, node)
    return node
  }

  isDefaultNamespace (namespaceURI) {
    switch (this.nodeType) {
    case Node.ELEMENT_NODE:
      if (!this.prefix) {
        return this.namespaceURI === namespaceURI
      }

      if (this.hasAttribute('xmlns')) {
        return this.getAttribute('xmlns')
      }

      // EntityReferences may have to be skipped to get to it
      if (this.parentNode) {
        return this.parentNode.isDefaultNamespace(namespaceURI)
      }

      return false
    case Node.DOCUMENT_NODE:
      return this.documentElement.isDefaultNamespace(namespaceURI)
    case Node.ENTITY_NODE:
    case Node.NOTATION_NODE:
    case Node.DOCUMENT_TYPE_NODE:
    case Node.DOCUMENT_FRAGMENT_NODE:
      return false
    case Node.ATTRIBUTE_NODE:
      if (this.ownerElement) {
        return this.ownerElement.isDefaultNamespace(namespaceURI)
      }
      return false
    default:
      // EntityReferences may have to be skipped to get to it
      if (this.parentNode) {
        return this.parentNode.isDefaultNamespace(namespaceURI)
      }
      return false
    }
  }

  isEqualNode (node) {
    this.normalize()
    node.normalize()

    let bool = this.nodeName === node.nodeName
    bool = bool && this.localName === node.localName
    bool = bool && this.namespaceURI === node.namespaceURI
    bool = bool && this.prefix === node.prefix
    bool = bool && this.nodeValue === node.nodeValue

    bool = bool && this.childNodes.length === node.childNodes.length

    // dont check children recursively when the count doesnt event add up
    if (!bool) return false

    bool = bool && !this.childNodes.reduce((last, curr, index) => {
      return last && curr.isEqualNode(node.childNodes[index])
    }, true)

    // FIXME: Use attr nodes
    /* bool = bool && ![ ...this.attrs.entries() ].reduce((last, curr, index) => {
      const [ key, val ] = node.attrs.entries()
      return last && curr[0] === key && curr[1] === val
    }, true) */

    /*
    TODO:
    For two DocumentType nodes to be equal, the following conditions must also be satisfied:

    The following string attributes are equal: publicId, systemId, internalSubset.
    The entities NamedNodeMaps are equal.
    The notations NamedNodeMaps are equal.
    */

    if (this.nodeType === Node.DOCUMENT_TYPE_NODE && node.nodeType === Node.DOCUMENT_TYPE_NODE) {
      bool = bool && this.publicId === node.publicId
      bool = bool && this.systemId === node.systemId
      bool = bool && this.internalSubset === node.internalSubset
    }

    return bool
  }

  isSameNode (node) {
    return this === node
  }

  lookupNamespacePrefix (namespaceURI, originalElement) {
    if (this.namespaceURI && this.namespaceURI === namespaceURI && this.prefix
         && originalElement.lookupNamespaceURI(this.prefix) === namespaceURI) {
      return this.prefix
    }

    for (const [ key, val ] of this.attrs.entries()) {
      if (!key.includes(':')) continue

      const [ attrPrefix, name ] = key.split(':')
      if (attrPrefix === 'xmlns' && val === namespaceURI && originalElement.lookupNamespaceURI(name) === namespaceURI) {
        return name
      }
    }

    // EntityReferences may have to be skipped to get to it
    if (this.parentNode) {
      return this.parentNode.lookupNamespacePrefix(namespaceURI, originalElement)
    }
    return null
  }

  lookupNamespaceURI (prefix) {
    switch (this.nodeType) {
    case Node.ELEMENT_NODE:
      if (this.namespaceURI != null && this.prefix === prefix) {
        // Note: prefix could be "null" in this case we are looking for default namespace
        return this.namespaceURI
      }

      for (const [ key, val ] of this.attrs.entries()) {
        if (!key.includes(':')) continue

        const [ attrPrefix, name ] = key.split(':')
        if (attrPrefix === 'xmlns' && name === prefix) {
          if (val != null) {
            return val
          }
          return null
          // FIXME: Look up if prefix or attrPrefix
        } else if (name === 'xmlns' && prefix == null) {
          if (val != null) {
            return val
          }
          return null
        }
      }

      // EntityReferences may have to be skipped to get to it
      if (this.parentNode) {
        return this.parentNode.lookupNamespaceURI(prefix)
      }
      return null
    case Node.DOCUMENT_NODE:
      return this.documentElement.lookupNamespaceURI(prefix)
    case Node.ENTITY_NODE:
    case Node.NOTATION_NODE:
    case Node.DOCUMENT_TYPE_NODE:
    case Node.DOCUMENT_FRAGMENT_NODE:
      return null
    case Node.ATTRIBUTE_NODE:
      if (this.ownerElement) {
        return this.ownerElement.lookupNamespaceURI(prefix)
      }
      return null
    default:
      // EntityReferences may have to be skipped to get to it
      if (this.parentNode) {
        return this.parentNode.lookupNamespaceURI(prefix)
      }
      return null
    }
  }

  lookupPrefix (namespaceURI) {
    if (!namespaceURI) {
      return null
    }

    const type = this.nodeType

    switch (type) {
    case Node.ELEMENT_NODE:
      return this.lookupNamespacePrefix(namespaceURI, this)
    case Node.DOCUMENT_NODE:
      return this.documentElement.lookupNamespacePrefix(namespaceURI)
    case Node.ENTITY_NODE :
    case Node.NOTATION_NODE:
    case Node.DOCUMENT_FRAGMENT_NODE:
    case Node.DOCUMENT_TYPE_NODE:
      return null // type is unknown
    case Node.ATTRIBUTE_NODE:
      if (this.ownerElement) {
        return this.ownerElement.lookupNamespacePrefix(namespaceURI)
      }
      return null
    default:
      // EntityReferences may have to be skipped to get to it
      if (this.parentNode) {
        return this.parentNode.lookupNamespacePrefix(namespaceURI)
      }
      return null
    }
  }

  normalize () {
    const childNodes = []
    for (const node of this.childNodes) {
      const last = childNodes.shift()
      if (!last) {
        if (node.data) {
          childNodes.unshift(node)
        }
        continue
      }

      if (node.nodeType === Node.TEXT_NODE) {
        if (!node.data) {
          childNodes.unshift(last)
          continue
        }

        if (last.nodeType === Node.TEXT_NODE) {
          const merged = this.ownerDocument.createTextNode(last.data + node.data)
          childNodes.push(merged)
          continue
        }

        childNodes.push(last, node)
      }
    }

    childNodes.forEach(node => {
      node.parentNode = this
    })
    this.childNodes = childNodes
    // this.childNodes = this.childNodes.forEach((textNodes, node) => {
    //   // FIXME: If first node is an empty textnode, what do we do? -> spec
    //   if (!textNodes) return [ node ]
    //   var last = textNodes.pop()

    //   if (node.nodeType === Node.TEXT_NODE) {
    //     if (!node.data) return textNodes

    //     if (last.nodeType === Node.TEXT_NODE) {
    //       const merged = this.ownerDocument.createTextNode(last.data + ' ' + node.data)
    //       textNodes.push(merged)
    //       return textNodes.concat(merged)
    //     }
    //   } else {
    //     textNodes.push(last, node)
    //   }

    //   return textNodes
    // }, null)
  }

  removeChild (node) {

    node.parentNode = null
    // Object.setPrototypeOf(node, null)
    const index = this.childNodes.indexOf(node)
    if (index === -1) return node
    this.childNodes.splice(index, 1)
    return node
  }

  replaceChild (newChild, oldChild) {
    const before = oldChild.nextSibling
    this.removeChild(oldChild)
    this.insertBefore(newChild, before)
    return oldChild
  }

  get nextSibling () {
    const child = this.parentNode && this.parentNode.childNodes[this.parentNode.childNodes.indexOf(this) + 1]
    return child || null
  }

  get previousSibling () {
    const child = this.parentNode && this.parentNode.childNodes[this.parentNode.childNodes.indexOf(this) - 1]
    return child || null
  }

  get textContent () {
    if (this.nodeType === Node.TEXT_NODE) return this.data
    if (this.nodeType === Node.CDATA_SECTION_NODE) return this.data
    if (this.nodeType === Node.COMMENT_NODE) return this.data

    return this.childNodes.reduce(function (last, current) {
      return last + current.textContent
    }, '')
  }

  set textContent (text) {
    if (this.nodeType === Node.TEXT_NODE || this.nodeType === Node.CDATA_SECTION_NODE || this.nodeType === Node.COMMENT_NODE) {
      this.data = text
      return
    }
    this.childNodes = []
    this.appendChild(this.ownerDocument.createTextNode(text))
  }

  get lastChild () {
    return this.childNodes[this.childNodes.length - 1] || null
  }

  get firstChild () {
    return this.childNodes[0] || null
  }
}

(0,_utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_0__.extendStatic)(Node, nodeTypes)
;(0,_utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_0__.extend)(Node, nodeTypes)


/***/ }),

/***/ "./src/dom/NodeFilter.js":
/*!*******************************!*\
  !*** ./src/dom/NodeFilter.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NodeFilter": () => (/* binding */ NodeFilter)
/* harmony export */ });
/* harmony import */ var _utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/objectCreationUtils.js */ "./src/utils/objectCreationUtils.js");


class NodeFilter {
  acceptNode () {
    return NodeFilter.FILTER_ACCEPT
  }
}

(0,_utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_0__.extendStatic)(NodeFilter, {
  FILTER_ACCEPT: 1,
  FILTER_REJECT: 2,
  FILTER_IGNORE: 4,
  SHOW_ALL: -1,
  SHOW_ELEMENT: 1,
  SHOW_TEXT: 4,
  SHOW_ENTITY_REFERENCE: 16,
  SHOW_ENTITY: 32,
  SHOW_PROCESSING_INSTRUCTION: 64,
  SHOW_COMMENT: 128,
  SHOW_DOCUMENT: 256,
  SHOW_DOCUMENT_TYPE: 512,
  SHOW_DOCUMENT_FRAGMENT: 1024,
  SHOW_NOTATION: 2048
})


/***/ }),

/***/ "./src/dom/Text.js":
/*!*************************!*\
  !*** ./src/dom/Text.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Text": () => (/* binding */ Text)
/* harmony export */ });
/* harmony import */ var _CharacterData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CharacterData.js */ "./src/dom/CharacterData.js");
/* harmony import */ var _Node_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Node.js */ "./src/dom/Node.js");



class Text extends _CharacterData_js__WEBPACK_IMPORTED_MODULE_0__.CharacterData {
  constructor (name, props) {
    super(name, props)
    this.nodeType = _Node_js__WEBPACK_IMPORTED_MODULE_1__.Node.TEXT_NODE
  }
}


/***/ }),

/***/ "./src/dom/Window.js":
/*!***************************!*\
  !*** ./src/dom/Window.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Window": () => (/* binding */ Window)
/* harmony export */ });
/* harmony import */ var _utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/objectCreationUtils.js */ "./src/utils/objectCreationUtils.js");
/* harmony import */ var _EventTarget_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventTarget.js */ "./src/dom/EventTarget.js");
/* harmony import */ var _Node_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Node.js */ "./src/dom/Node.js");
/* harmony import */ var _Document_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Document.js */ "./src/dom/Document.js");
/* harmony import */ var _DocumentFragment_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DocumentFragment.js */ "./src/dom/DocumentFragment.js");
/* harmony import */ var _Text_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Text.js */ "./src/dom/Text.js");
/* harmony import */ var _CustomEvent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CustomEvent.js */ "./src/dom/CustomEvent.js");
/* harmony import */ var _Event_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Event.js */ "./src/dom/Event.js");
/* harmony import */ var _Element_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Element.js */ "./src/dom/Element.js");
/* harmony import */ var _Attr_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Attr.js */ "./src/dom/Attr.js");
/* harmony import */ var _html_HTMLImageElement_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./html/HTMLImageElement.js */ "./src/dom/html/HTMLImageElement.js");
/* harmony import */ var _html_HTMLLinkElement_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./html/HTMLLinkElement.js */ "./src/dom/html/HTMLLinkElement.js");
/* harmony import */ var _html_HTMLScriptElement_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./html/HTMLScriptElement.js */ "./src/dom/html/HTMLScriptElement.js");
/* harmony import */ var _html_HTMLElement_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./html/HTMLElement.js */ "./src/dom/html/HTMLElement.js");
/* harmony import */ var _svg_SVGPoint_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./svg/SVGPoint.js */ "./src/dom/svg/SVGPoint.js");
/* harmony import */ var _svg_SVGMatrix_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./svg/SVGMatrix.js */ "./src/dom/svg/SVGMatrix.js");
/* harmony import */ var _svg_SVGElement_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./svg/SVGElement.js */ "./src/dom/svg/SVGElement.js");
/* harmony import */ var _svg_SVGSVGElement_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./svg/SVGSVGElement.js */ "./src/dom/svg/SVGSVGElement.js");
/* harmony import */ var _svg_SVGPathElement_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./svg/SVGPathElement.js */ "./src/dom/svg/SVGPathElement.js");
/* harmony import */ var _svg_SVGGraphicsElement_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./svg/SVGGraphicsElement.js */ "./src/dom/svg/SVGGraphicsElement.js");
/* harmony import */ var _svg_SVGTextContentElement_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./svg/SVGTextContentElement.js */ "./src/dom/svg/SVGTextContentElement.js");
/* harmony import */ var _utils_strUtils_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../utils/strUtils.js */ "./src/utils/strUtils.js");
/* harmony import */ var _utils_defaults_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../utils/defaults.js */ "./src/utils/defaults.js");
























class Window extends _EventTarget_js__WEBPACK_IMPORTED_MODULE_1__.EventTarget {
  constructor () {
    super()
    this.document = new _Document_js__WEBPACK_IMPORTED_MODULE_3__.Document()
    this.document.defaultView = this
    this.self = this
    const doc = this.document
    this.Image = class {
      constructor (width, height) {
        const img = doc.createElement('img')
        if (width != null) img.setAttribute('width', width)
        if (height != null) img.setAttribute('height', height)
        return img
      }
    }
  }

  getComputedStyle (node) {
    return {
      // FIXME: Currently this function treats every given attr
      // as inheritable from its parents which is ofc not always true
      // but good enough for svg.js
      getPropertyValue (attr) {
        let value
        let cur = node

        do {
          value = cur.style[attr] || cur.getAttribute(attr)
        } while (
          value == null
          && (cur = cur.parentNode)
          && cur.nodeType === 1
        )

        return value || _utils_defaults_js__WEBPACK_IMPORTED_MODULE_22__[(0,_utils_strUtils_js__WEBPACK_IMPORTED_MODULE_21__.camelCase)(attr)] || null
      }
    }
  }
}

let lastTime = 0
const requestAnimationFrame = callback => {
  const now = new globalThis.Date().getTime()
  const timeToCall = Math.max(0, 16 - (now - lastTime))
  return globalThis.setTimeout(() => {
    lastTime = now + timeToCall
    callback(lastTime)
  }, timeToCall)
}

const nowOffset = globalThis.Date.now()
const performance = {
  now: () => Date.now() - nowOffset
}

const winProps = {
  Window,
  Document: _Document_js__WEBPACK_IMPORTED_MODULE_3__.Document,
  DocumentFragment: _DocumentFragment_js__WEBPACK_IMPORTED_MODULE_4__.DocumentFragment,
  Node: _Node_js__WEBPACK_IMPORTED_MODULE_2__.Node,
  EventTarget: _EventTarget_js__WEBPACK_IMPORTED_MODULE_1__.EventTarget,
  Text: _Text_js__WEBPACK_IMPORTED_MODULE_5__.Text,
  Attr: _Attr_js__WEBPACK_IMPORTED_MODULE_9__.Attr,
  Element: _Element_js__WEBPACK_IMPORTED_MODULE_8__.Element,
  CustomEvent: _CustomEvent_js__WEBPACK_IMPORTED_MODULE_6__.CustomEvent,
  Event: _Event_js__WEBPACK_IMPORTED_MODULE_7__.Event,
  HTMLElement: _html_HTMLElement_js__WEBPACK_IMPORTED_MODULE_13__.HTMLElement,
  HTMLLinkElement: _html_HTMLLinkElement_js__WEBPACK_IMPORTED_MODULE_11__.HTMLLinkElement,
  HTMLScriptElement: _html_HTMLScriptElement_js__WEBPACK_IMPORTED_MODULE_12__.HTMLScriptElement,
  HTMLImageElement: _html_HTMLImageElement_js__WEBPACK_IMPORTED_MODULE_10__.HTMLImageElement,
  // Image: HTMLImageElement, // is set on construction
  SVGMatrix: _svg_SVGMatrix_js__WEBPACK_IMPORTED_MODULE_15__.SVGMatrix,
  SVGPoint: _svg_SVGPoint_js__WEBPACK_IMPORTED_MODULE_14__.SVGPoint,
  SVGElement: _svg_SVGElement_js__WEBPACK_IMPORTED_MODULE_16__.SVGElement,
  SVGSVGElement: _svg_SVGSVGElement_js__WEBPACK_IMPORTED_MODULE_17__.SVGSVGElement,
  SVGPathElement: _svg_SVGPathElement_js__WEBPACK_IMPORTED_MODULE_18__.SVGPathElement,
  SVGGraphicsElement: _svg_SVGGraphicsElement_js__WEBPACK_IMPORTED_MODULE_19__.SVGGraphicsElement,
  SVGTextContentElement: _svg_SVGTextContentElement_js__WEBPACK_IMPORTED_MODULE_20__.SVGTextContentElement,
  setTimeout: globalThis.setTimeout,
  clearTimeout: globalThis.clearTimeout,
  pageXOffset: 0,
  pageYOffset: 0,
  Date: globalThis.Date,
  requestAnimationFrame,
  cancelAnimationFrame: globalThis.clearTimeout,
  performance
}

;(0,_utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_0__.extend)(Window, winProps)


/***/ }),

/***/ "./src/dom/html/HTMLElement.js":
/*!*************************************!*\
  !*** ./src/dom/html/HTMLElement.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLElement": () => (/* binding */ HTMLElement)
/* harmony export */ });
/* harmony import */ var _Element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Element.js */ "./src/dom/Element.js");


class HTMLElement extends _Element_js__WEBPACK_IMPORTED_MODULE_0__.Element {}


/***/ }),

/***/ "./src/dom/html/HTMLImageElement.js":
/*!******************************************!*\
  !*** ./src/dom/html/HTMLImageElement.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLImageElement": () => (/* binding */ HTMLImageElement)
/* harmony export */ });
/* harmony import */ var image_size__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! image-size */ "image-size");
/* harmony import */ var _Event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Event.js */ "./src/dom/Event.js");
/* harmony import */ var _HTMLElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HTMLElement.js */ "./src/dom/html/HTMLElement.js");



// import { getFileBufferFromURL } from '../../utils/fileUrlToBuffer.js'
// import path from 'path'

class HTMLImageElement extends _HTMLElement_js__WEBPACK_IMPORTED_MODULE_2__.HTMLElement {
  constructor (...args) {
    super(...args)
    this.naturalWidth = 0
    this.naturalHeight = 0
    this.complete = false
  }
}

Object.defineProperties(HTMLImageElement.prototype, {
  src: {
    get () {
      return this.getAttribute('src')
    },
    set (val) {
      this.setAttribute('src', val)
      // const url = path.resolve(this.ownerDocument.defaultView.location, val)
      // getFileBufferFromURL(url, (buffer) => {
      image_size__WEBPACK_IMPORTED_MODULE_0__(val, (err, size) => {
        if (err) {
          this.dispatchEvent(new _Event_js__WEBPACK_IMPORTED_MODULE_1__.Event('error'))
          return
        }
        this.naturalWidth = size.width
        this.naturalHeight = size.height
        this.complete = true
        this.dispatchEvent(new _Event_js__WEBPACK_IMPORTED_MODULE_1__.Event('load'))
      })
      // })
    }
  },
  height: {
    get () {
      return this.getAttribute('height') || this.naturalHeight
    },
    set (val) {
      this.setAttribute('height', val)
    }
  },
  width: {
    get () {
      return this.getAttribute('width') || this.naturalWidth
    },
    set (val) {
      this.setAttribute('width', val)
    }
  }
})


/***/ }),

/***/ "./src/dom/html/HTMLLinkElement.js":
/*!*****************************************!*\
  !*** ./src/dom/html/HTMLLinkElement.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLLinkElement": () => (/* binding */ HTMLLinkElement)
/* harmony export */ });
/* harmony import */ var _HTMLElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLElement.js */ "./src/dom/html/HTMLElement.js");


class HTMLLinkElement extends _HTMLElement_js__WEBPACK_IMPORTED_MODULE_0__.HTMLElement {}

Object.defineProperties(HTMLLinkElement.prototype, {
  href: {
    get () {
      return this.getAttribute('href')
    },
    set (val) {
      this.setAttribute('href', val)
    }
  },
  rel: {
    get () {
      return this.getAttribute('rel')
    },
    set (val) {
      this.setAttribute('rel', val)
    }
  },
  type: {
    get () {
      return this.getAttribute('type')
    },
    set (val) {
      this.setAttribute('type', val)
    }
  }
})


/***/ }),

/***/ "./src/dom/html/HTMLParser.js":
/*!************************************!*\
  !*** ./src/dom/html/HTMLParser.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLParser": () => (/* binding */ HTMLParser)
/* harmony export */ });
/* harmony import */ var sax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sax */ "sax");


// TODO: Its an XMLParser not HTMLParser!!
const HTMLParser = function (str, el) {
  let currentTag = el
  // const namespaces = { xmlns: el.getAttribute('xmlns') }
  let document = el.ownerDocument
  let cdata = null

  // sax expects a root element but we also missuse it to parse fragments
  if (el.nodeType !== el.DOCUMENT_NODE) {
    str = '<svgdom:wrapper xmlns:svgdom="svgdom:rocks">' + str + '</svgdom:wrapper>'
  } else {
    document = el
  }

  const parser = sax__WEBPACK_IMPORTED_MODULE_0__.parser(true, {
    // lowercase: true,
    xmlns: true,
    strictEntities: true
  })

  parser.onerror = (e) => {
    throw e
  }

  parser.ondoctype = (str) => {
    if (currentTag !== document) {
      throw new Error('Doctype can only be appended to document')
    }
    currentTag.appendChild(document.implementation.createDocumentType())
  }

  parser.ontext = (str) => currentTag.appendChild(document.createTextNode(str))
  parser.oncomment = (str) => currentTag.appendChild(document.createComment(str))

  // parser.onopennamespace = ns => {
  //   namespaces[ns.prefix] = ns.uri
  // }
  // parser.onclosenamespace = ns => {
  //   delete namespaces[ns.prefix]
  // }

  parser.onopentag = node => {
    if (node.name === 'svgdom:wrapper') return

    const attrs = node.attributes

    const uri = node.uri || currentTag.lookupNamespaceURI(node.prefix || null)

    var newElement = document.createElementNS(uri, node.name)

    for (const [ name, node ] of Object.entries(attrs)) {
      newElement.setAttributeNS(node.uri, name, node.value)
    }

    currentTag.appendChild(newElement)
    currentTag = newElement
  }

  parser.onclosetag = tagName => {
    if (tagName === 'svgdom:wrapper') return

    currentTag = currentTag.parentNode
  }

  parser.onopencdata = () => {
    cdata = document.createCDATASection('')
  }

  parser.oncdata = (str) => {
    cdata.appendData(str)
  }

  parser.onclosecdata = () => {
    currentTag.appendChild(cdata)
  }

  parser.write(str)
}


/***/ }),

/***/ "./src/dom/html/HTMLScriptElement.js":
/*!*******************************************!*\
  !*** ./src/dom/html/HTMLScriptElement.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLScriptElement": () => (/* binding */ HTMLScriptElement)
/* harmony export */ });
/* harmony import */ var _HTMLElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLElement.js */ "./src/dom/html/HTMLElement.js");


class HTMLScriptElement extends _HTMLElement_js__WEBPACK_IMPORTED_MODULE_0__.HTMLElement {}

Object.defineProperties(HTMLScriptElement.prototype, {
  src: {
    get () {
      return this.getAttribute('src')
    },
    set (val) {
      this.setAttribute('src', val)
    }
  },
  type: {
    get () {
      return this.getAttribute('type')
    },
    set (val) {
      this.setAttribute('type', val)
    }
  }
})


/***/ }),

/***/ "./src/dom/mixins/ChildNode.js":
/*!*************************************!*\
  !*** ./src/dom/mixins/ChildNode.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChildNode": () => (/* binding */ ChildNode)
/* harmony export */ });
/* harmony import */ var _utils_nodesToNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/nodesToNode.js */ "./src/utils/nodesToNode.js");


// https://dom.spec.whatwg.org/#interface-childnode
// Todo: check if this is contained in nodes or siblings are contained (viablePreviousSibling, viableNextSibling)
const ChildNode = {
  before (...nodes) {
    if (!this.parentNode) return
    const node = (0,_utils_nodesToNode_js__WEBPACK_IMPORTED_MODULE_0__.nodesToNode)(nodes, this.ownerDocument)
    this.parentNode.insertBefore(node, this)
  },
  after (...nodes) {
    if (!this.parentNode) return
    const node = (0,_utils_nodesToNode_js__WEBPACK_IMPORTED_MODULE_0__.nodesToNode)(nodes, this.ownerDocument)
    this.parentNode.insertBefore(node, this.nextSibling)
  },
  replaceWith (...nodes) {
    if (!this.parentNode) return
    const next = this.nextSibling
    const node = (0,_utils_nodesToNode_js__WEBPACK_IMPORTED_MODULE_0__.nodesToNode)(nodes, this.ownerDocument)
    this.parentNode.insertBefore(node, next)
    this.remove()
  },
  remove () {
    if (!this.parentNode) return
    this.parentNode.removeChild(this)
  }
}


/***/ }),

/***/ "./src/dom/mixins/NonDocumentTypeChildNode.js":
/*!****************************************************!*\
  !*** ./src/dom/mixins/NonDocumentTypeChildNode.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NonDocumentTypeChildNode": () => (/* binding */ NonDocumentTypeChildNode)
/* harmony export */ });
const NonDocumentTypeChildNode = {

}

Object.defineProperties(NonDocumentTypeChildNode, {
  previousElementSibling: {
    get () {
      let node
      while ((node = this.previousSibling)) {
        if (node.nodeType === node.ELEMENT_NODE) {
          return node
        }
      }
      return null
    }
  },

  nextElementSibling: {
    get () {
      let node
      while ((node = this.nextSibling)) {
        if (node.nodeType === node.ELEMENT_NODE) {
          return node
        }
      }
      return null
    }
  }
})


/***/ }),

/***/ "./src/dom/mixins/NonElementParentNode.js":
/*!************************************************!*\
  !*** ./src/dom/mixins/NonElementParentNode.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NonElementParentNode": () => (/* binding */ NonElementParentNode)
/* harmony export */ });
/* harmony import */ var _utils_NodeIterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/NodeIterator.js */ "./src/utils/NodeIterator.js");
/* harmony import */ var _NodeFilter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../NodeFilter.js */ "./src/dom/NodeFilter.js");



// https://dom.spec.whatwg.org/#interface-nonelementparentnode
const NonElementParentNode = {
  getElementById (id) {
    const iter = new _utils_NodeIterator_js__WEBPACK_IMPORTED_MODULE_0__.NodeIterator(this, _NodeFilter_js__WEBPACK_IMPORTED_MODULE_1__.NodeFilter.SHOW_ELEMENT, (node) => id === node.id ? _NodeFilter_js__WEBPACK_IMPORTED_MODULE_1__.NodeFilter.FILTER_ACCEPT : _NodeFilter_js__WEBPACK_IMPORTED_MODULE_1__.NodeFilter.FILTER_IGNORE, false)
    for (const node of iter) {
      return node
    }
    return null
  }
}


/***/ }),

/***/ "./src/dom/mixins/ParentNode.js":
/*!**************************************!*\
  !*** ./src/dom/mixins/ParentNode.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParentNode": () => (/* binding */ ParentNode)
/* harmony export */ });
/* harmony import */ var _other_CssQuery_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../other/CssQuery.js */ "./src/other/CssQuery.js");
/* harmony import */ var _utils_NodeIterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/NodeIterator.js */ "./src/utils/NodeIterator.js");
/* harmony import */ var _NodeFilter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NodeFilter.js */ "./src/dom/NodeFilter.js");
/* harmony import */ var _utils_nodesToNode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/nodesToNode.js */ "./src/utils/nodesToNode.js");





// https://dom.spec.whatwg.org/#parentnode
const ParentNode = {
  matchWithScope (query, scope) {
    return new _other_CssQuery_js__WEBPACK_IMPORTED_MODULE_0__.CssQuery(query).matches(this, scope)
  },

  query (query, scope, single = false) {

    const iter = new _utils_NodeIterator_js__WEBPACK_IMPORTED_MODULE_1__.NodeIterator(scope, _NodeFilter_js__WEBPACK_IMPORTED_MODULE_2__.NodeFilter.SHOW_ELEMENT, (node) => node.matchWithScope(query, scope) ? _NodeFilter_js__WEBPACK_IMPORTED_MODULE_2__.NodeFilter.FILTER_ACCEPT : _NodeFilter_js__WEBPACK_IMPORTED_MODULE_2__.NodeFilter.FILTER_IGNORE, false)

    const nodes = []
    for (const node of iter) {
      nodes.push(node)
      if (single) return nodes
    }

    return nodes
  },

  querySelectorAll (query) {
    return this.query(query, this)
  },

  querySelector (query) {
    return this.query(query, this, true)[0] || null
  },

  closest (query) {
    const cssQuery = new _other_CssQuery_js__WEBPACK_IMPORTED_MODULE_0__.CssQuery(query)
    let node = this
    while (node) {
      if (cssQuery.matches(node, this)) {
        return node
      }
      node = node.parentNode
    }
    return null
  },

  prepend (...nodes) {
    const node = (0,_utils_nodesToNode_js__WEBPACK_IMPORTED_MODULE_3__.nodesToNode)(nodes, this.ownerDocument)

    this.insertBefore(node, this.firstChild)
  },

  append (...nodes) {
    const node = (0,_utils_nodesToNode_js__WEBPACK_IMPORTED_MODULE_3__.nodesToNode)(nodes, this.ownerDocument)
    this.appendChild(node)
  },

  replaceChildren (...nodes) {
    while (this.firstChild) {
      this.removeChild(this.firstChild)
    }
    this.append(...nodes)
  }
}

Object.defineProperties(ParentNode, {
  children: {
    get () {
      return this.childNodes.filter(function (node) { return node.nodeType === node.ELEMENT_NODE })
    }
  },
  firstElementChild: {
    get () {
      for (const node of this.childNodes) {
        if (node && node.nodeType === node.ELEMENT_NODE) {
          return node
        }
      }
      return null
    }
  },
  lastElementChild: {
    get () {
      for (const node of this.childNodes.slice().reverse()) {
        if (node && node.nodeType === node.ELEMENT_NODE) {
          return node
        }
      }
      return null
    }
  },
  childElementCount: {
    get () {
      return this.children.length
    }
  }
})




/***/ }),

/***/ "./src/dom/mixins/elementAccess.js":
/*!*****************************************!*\
  !*** ./src/dom/mixins/elementAccess.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "elementAccess": () => (/* binding */ elementAccess)
/* harmony export */ });
/* harmony import */ var _NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../NodeFilter.js */ "./src/dom/NodeFilter.js");
/* harmony import */ var _utils_NodeIterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/NodeIterator.js */ "./src/utils/NodeIterator.js");



const hasClass = (node, name) => {
  const classList = node.className.split(/\s+/)
  return classList.includes(name)
}

const elementAccess = {
  getElementsByTagName (name) {
    // const document = this.ownerDocument
    const iter = new _utils_NodeIterator_js__WEBPACK_IMPORTED_MODULE_1__.NodeIterator(this, _NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__.NodeFilter.SHOW_ELEMENT, (node) => node.nodeName === name ? _NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__.NodeFilter.FILTER_ACCEPT : _NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__.NodeFilter.FILTER_IGNORE, false)
    // const iter = document.createNodeIterator(this, 1, (node) => node.nodeName === name ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_IGNORE)
    return [ ...iter ]
  },

  getElementsByTagNameNS (ns, name) {
    // const document = this.ownerDocument
    const iter = new _utils_NodeIterator_js__WEBPACK_IMPORTED_MODULE_1__.NodeIterator(this, _NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__.NodeFilter.SHOW_ELEMENT, (node) => node.isNamespace(ns) && node.nodeName === name ? _NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__.NodeFilter.FILTER_ACCEPT : _NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__.NodeFilter.FILTER_IGNORE, false)
    // const iter = document.createNodeIterator(this, 1, (node) => node.isNamespace(ns) && node.nodeName === name ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_IGNORE)
    return [ ...iter ]
  },

  getElementsByClassName (name) {
    // const document = this.ownerDocument
    const iter = new _utils_NodeIterator_js__WEBPACK_IMPORTED_MODULE_1__.NodeIterator(this, _NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__.NodeFilter.SHOW_ELEMENT, (node) => hasClass(node, name) ? _NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__.NodeFilter.FILTER_ACCEPT : _NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__.NodeFilter.FILTER_IGNORE, false)
    // const iter = document.createNodeIterator(this, 1, (node) => hasClass(node, name) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_IGNORE)
    return [ ...iter ]
  }
}




/***/ }),

/***/ "./src/dom/svg/SVGAnimatedLength.js":
/*!******************************************!*\
  !*** ./src/dom/svg/SVGAnimatedLength.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SVGAnimatedLength": () => (/* binding */ SVGAnimatedLength)
/* harmony export */ });
/* harmony import */ var _SVGLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SVGLength.js */ "./src/dom/svg/SVGLength.js");
// @ts-check


class SVGAnimatedLength {
  baseVal

  constructor(element, attributeName) {
    this.baseVal = new _SVGLength_js__WEBPACK_IMPORTED_MODULE_0__.SVGLength(element, attributeName)
  }

  get animVal() {
    throw new Error('animVal is not implemented')
  }
}


/***/ }),

/***/ "./src/dom/svg/SVGCircleElement.js":
/*!*****************************************!*\
  !*** ./src/dom/svg/SVGCircleElement.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SVGCircleElement": () => (/* binding */ SVGCircleElement)
/* harmony export */ });
/* harmony import */ var _SVGAnimatedLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SVGAnimatedLength.js */ "./src/dom/svg/SVGAnimatedLength.js");
/* harmony import */ var _SVGGraphicsElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SVGGraphicsElement.js */ "./src/dom/svg/SVGGraphicsElement.js");
// @ts-check



class SVGCircleElement extends _SVGGraphicsElement_js__WEBPACK_IMPORTED_MODULE_1__.SVGGraphicsElement {
  cx = new _SVGAnimatedLength_js__WEBPACK_IMPORTED_MODULE_0__.SVGAnimatedLength(this, 'cx')
  cy = new _SVGAnimatedLength_js__WEBPACK_IMPORTED_MODULE_0__.SVGAnimatedLength(this, 'cy')
  r = new _SVGAnimatedLength_js__WEBPACK_IMPORTED_MODULE_0__.SVGAnimatedLength(this, 'r')
}


/***/ }),

/***/ "./src/dom/svg/SVGElement.js":
/*!***********************************!*\
  !*** ./src/dom/svg/SVGElement.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SVGElement": () => (/* binding */ SVGElement)
/* harmony export */ });
/* harmony import */ var _Element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Element.js */ "./src/dom/Element.js");

class SVGElement extends _Element_js__WEBPACK_IMPORTED_MODULE_0__.Element {
  get ownerSVGElement () {
    let parent = this
    while ((parent = parent.parentNode)) {
      if ('svg' == parent.nodeName) {
        return parent
      }
    }
    return null
  }

  get viewportElement () {
    let parent = this
    while ((parent = parent.parentNode)) {
      // TODO: and others
      if ([ 'svg', 'symbol' ].includes(parent.nodeName)) {
        return parent
      }
    }
    return null
  }
}


/***/ }),

/***/ "./src/dom/svg/SVGEllipseElement.js":
/*!******************************************!*\
  !*** ./src/dom/svg/SVGEllipseElement.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SVGEllipseElement": () => (/* binding */ SVGEllipseElement)
/* harmony export */ });
/* harmony import */ var _SVGAnimatedLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SVGAnimatedLength.js */ "./src/dom/svg/SVGAnimatedLength.js");
/* harmony import */ var _SVGGraphicsElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SVGGraphicsElement.js */ "./src/dom/svg/SVGGraphicsElement.js");
// @ts-check



class SVGEllipseElement extends _SVGGraphicsElement_js__WEBPACK_IMPORTED_MODULE_1__.SVGGraphicsElement {
  cx = new _SVGAnimatedLength_js__WEBPACK_IMPORTED_MODULE_0__.SVGAnimatedLength(this, 'cx')
  cy = new _SVGAnimatedLength_js__WEBPACK_IMPORTED_MODULE_0__.SVGAnimatedLength(this, 'cy')
  rx = new _SVGAnimatedLength_js__WEBPACK_IMPORTED_MODULE_0__.SVGAnimatedLength(this, 'rx')
  ry = new _SVGAnimatedLength_js__WEBPACK_IMPORTED_MODULE_0__.SVGAnimatedLength(this, 'ry')
}


/***/ }),

/***/ "./src/dom/svg/SVGForeignObjectElement.js":
/*!************************************************!*\
  !*** ./src/dom/svg/SVGForeignObjectElement.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SVGForeignObjectElement": () => (/* binding */ SVGForeignObjectElement)
/* harmony export */ });
/* harmony import */ var _SVGAnimatedLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SVGAnimatedLength.js */ "./src/dom/svg/SVGAnimatedLength.js");
/* harmony import */ var _SVGGraphicsElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SVGGraphicsElement.js */ "./src/dom/svg/SVGGraphicsElement.js");
// @ts-check




class SVGForeignObjectElement extends _SVGGraphicsElement_js__WEBPACK_IMPORTED_MODULE_1__.SVGGraphicsElement {
  x = new _SVGAnimatedLength_js__WEBPACK_IMPORTED_MODULE_0__.SVGAnimatedLength(this, 'x')
  y = new _SVGAnimatedLength_js__WEBPACK_IMPORTED_MODULE_0__.SVGAnimatedLength(this, 'y')
  width = new _SVGAnimatedLength_js__WEBPACK_IMPORTED_MODULE_0__.SVGAnimatedLength(this, 'width')
  height = new _SVGAnimatedLength_js__WEBPACK_IMPORTED_MODULE_0__.SVGAnimatedLength(this, 'height')
}


/***/ }),

/***/ "./src/dom/svg/SVGGraphicsElement.js":
/*!*******************************************!*\
  !*** ./src/dom/svg/SVGGraphicsElement.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SVGGraphicsElement": () => (/* binding */ SVGGraphicsElement)
/* harmony export */ });
/* harmony import */ var _SVGElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SVGElement.js */ "./src/dom/svg/SVGElement.js");
/* harmony import */ var _utils_bboxUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/bboxUtils.js */ "./src/utils/bboxUtils.js");
/* harmony import */ var _utils_regex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/regex.js */ "./src/utils/regex.js");
/* harmony import */ var _SVGMatrix_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SVGMatrix.js */ "./src/dom/svg/SVGMatrix.js");





// Map matrix array to object
function arrayToMatrix (a) {
  return { a: a[0], b: a[1], c: a[2], d: a[3], e: a[4], f: a[5] }
}

class SVGGraphicsElement extends _SVGElement_js__WEBPACK_IMPORTED_MODULE_0__.SVGElement {
  // TODO: https://www.w3.org/TR/SVG2/coords.html#ComputingAViewportsTransform
  generateViewBoxMatrix () {
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox
    if (![ 'marker', 'symbol', 'pattern', 'svg', 'view' ].includes(this.nodeName)) {
      return new _SVGMatrix_js__WEBPACK_IMPORTED_MODULE_3__.SVGMatrix()
    }

    let view = (this.getAttribute('viewBox') || '').split(_utils_regex_js__WEBPACK_IMPORTED_MODULE_2__.delimiter).map(parseFloat).filter(el => !isNaN(el))
    const width = parseFloat(this.getAttribute('width')) || 0
    const height = parseFloat(this.getAttribute('height')) || 0
    const x = parseFloat(this.getAttribute('x')) || 0
    const y = parseFloat(this.getAttribute('y')) || 0

    // TODO: If no width and height is given, width and height of the outer svg element is used
    if (!width || !height) {
      return new _SVGMatrix_js__WEBPACK_IMPORTED_MODULE_3__.SVGMatrix().translate(x, y)
    }

    if (view.length !== 4) {
      view = [ 0, 0, width, height ]
    }

    // first apply x and y if nested, then viewbox scale, then viewBox move
    return new _SVGMatrix_js__WEBPACK_IMPORTED_MODULE_3__.SVGMatrix().translate(x, y).scale(width / view[2], height / view[3]).translate(-view[0], -view[1])
  }

  getBBox () {
    return (0,_utils_bboxUtils_js__WEBPACK_IMPORTED_MODULE_1__.getSegments)(this).bbox()
  }

  // TODO: This method actually exists on all Elements
  getBoundingClientRect () {
    // The bounding client rect takes the screen ctm of the element
    // and converts the bounding box with it

    // however, normal bounding consists of:
    // - all children transformed
    // - the viewbox of the element if available

    // The boundingClientRect is not affected by its own viewbox
    // So we apply only our own transformations and parents screenCTM

    let m = this.matrixify()

    if (this.parentNode && this.parentNode.nodeName !== '#document') {
      m = this.parentNode.getScreenCTM().multiply(m)
    }

    // let m = this.getScreenCTM()

    // There are a few extra rules regarding rbox and the <svg> element
    // Namely this is:
    // BBox is calculated as normal for container elements
    // Rbox is calculated with the width and height of the <svg>
    // This could be also true for symbols so this is a:
    // Todo: ...
    return (0,_utils_bboxUtils_js__WEBPACK_IMPORTED_MODULE_1__.getSegments)(this, false, true).transform(m).bbox()
  }

  getCTM () {
    let m = this.matrixify()

    let node = this
    while ((node = node.parentNode)) {
      if ([ 'svg', 'symbol', 'image', 'pattern', 'marker' ].indexOf(node.nodeName) > -1) break
      m = m.multiply(node.matrixify())
      if (node.nodeName === '#document') return this.getScreenCTM()
    }

    return node.generateViewBoxMatrix().multiply(m)
  }

  getInnerMatrix () {
    let m = this.matrixify()

    if ([ 'svg', 'symbol', 'image', 'pattern', 'marker' ].indexOf(this.nodeName) > -1) {
      m = this.generateViewBoxMatrix().multiply(m)
    }
    return m
  }

  getScreenCTM () {
    // ref: https://bugzilla.mozilla.org/show_bug.cgi?id=1344537
    // We follow Chromes behavior and include the viewbox in the screenCTM
    const m = this.getInnerMatrix()

    // TODO: We have to loop until document, however html elements dont have getScreenCTM implemented
    // they also dont have a transform attribute. Therefore we need a different way of figuring out their (css) transform
    if (this.parentNode && this.parentNode instanceof SVGGraphicsElement) {
      return this.parentNode.getScreenCTM().multiply(m)
    }

    return m
  }

  matrixify () {
    const matrix = (this.getAttribute('transform') || '').trim()
      // split transformations
      .split(_utils_regex_js__WEBPACK_IMPORTED_MODULE_2__.transforms).slice(0, -1).map(function (str) {
        // generate key => value pairs
        const kv = str.trim().split('(')
        return [ kv[0].trim(), kv[1].split(_utils_regex_js__WEBPACK_IMPORTED_MODULE_2__.delimiter).map(function (str) { return parseFloat(str.trim()) }) ]
      })
      // merge every transformation into one matrix
      .reduce(function (matrix, transform) {

        if (transform[0] === 'matrix') return matrix.multiply(arrayToMatrix(transform[1]))
        return matrix[transform[0]].apply(matrix, transform[1])

      }, new _SVGMatrix_js__WEBPACK_IMPORTED_MODULE_3__.SVGMatrix())

    return matrix
  }

  get transform () {
    throw new Error('Not implemented')
  }

}


/***/ }),

/***/ "./src/dom/svg/SVGImageElement.js":
/*!****************************************!*\
  !*** ./src/dom/svg/SVGImageElement.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SVGImageElement": () => (/* binding */ SVGImageElement)
/* harmony export */ });
/* harmony import */ var _SVGAnimatedLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SVGAnimatedLength.js */ "./src/dom/svg/SVGAnimatedLength.js");
/* harmony import */ var _SVGGraphicsElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SVGGraphicsElement.js */ "./src/dom/svg/SVGGraphicsElement.js");



class SVGImageElement extends _SVGGraphicsElement_js__WEBPACK_IMPORTED_MODULE_1__.SVGGraphicsElement {
  x = new _SVGAnimatedLength_js__WEBPACK_IMPORTED_MODULE_0__.SVGAnimatedLength(this, 'x')
  y = new _SVGAnimatedLength_js__WEBPACK_IMPORTED_MODULE_0__.SVGAnimatedLength(this, 'y')
  width = new _SVGAnimatedLength_js__WEBPACK_IMPORTED_MODULE_0__.SVGAnimatedLength(this, 'width')
  height = new _SVGAnimatedLength_js__WEBPACK_IMPORTED_MODULE_0__.SVGAnimatedLength(this, 'height')
}


/***/ }),

/***/ "./src/dom/svg/SVGLength.js":
/*!**********************************!*\
  !*** ./src/dom/svg/SVGLength.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SVGLength": () => (/* binding */ SVGLength)
/* harmony export */ });
/* harmony import */ var _utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/objectCreationUtils.js */ "./src/utils/objectCreationUtils.js");
// @ts-check
// @ts-ignore


const unitTypes = {
  SVG_LENGTHTYPE_UNKNOWN: 0,
  SVG_LENGTHTYPE_NUMBER: 1,
  SVG_LENGTHTYPE_PERCENTAGE: 2,
  SVG_LENGTHTYPE_EMS: 3,
  SVG_LENGTHTYPE_EXS: 4,
  SVG_LENGTHTYPE_PX: 5,
  SVG_LENGTHTYPE_CM: 6,
  SVG_LENGTHTYPE_MM: 7,
  SVG_LENGTHTYPE_IN: 8,
  SVG_LENGTHTYPE_PT: 9,
  SVG_LENGTHTYPE_PC: 10,
}

const unitByString = {
  ['']: unitTypes.SVG_LENGTHTYPE_NUMBER,
  ['%']: unitTypes.SVG_LENGTHTYPE_PERCENTAGE,
  ['em']: unitTypes.SVG_LENGTHTYPE_EMS,
  ['ex']: unitTypes.SVG_LENGTHTYPE_EXS,
  ['px']: unitTypes.SVG_LENGTHTYPE_PX,
  ['cm']: unitTypes.SVG_LENGTHTYPE_CM,
  ['mm']: unitTypes.SVG_LENGTHTYPE_MM,
  ['in']: unitTypes.SVG_LENGTHTYPE_IN,
  ['pt']: unitTypes.SVG_LENGTHTYPE_PT,
  ['pc']: unitTypes.SVG_LENGTHTYPE_PC,
}

const unitStringByConstant = new Map(
  Object.entries(unitByString).map(([unitString, unitConstant]) => [
    unitConstant,
    unitString,
  ])
)

const unitFactors = new Map([
  [unitTypes.SVG_LENGTHTYPE_NUMBER, 1],
  [unitTypes.SVG_LENGTHTYPE_PERCENTAGE, NaN],
  [unitTypes.SVG_LENGTHTYPE_EMS, NaN],
  [unitTypes.SVG_LENGTHTYPE_EXS, NaN],
  [unitTypes.SVG_LENGTHTYPE_PX, 1],
  [unitTypes.SVG_LENGTHTYPE_CM, 6],
  [unitTypes.SVG_LENGTHTYPE_MM, 96 / 25.4],
  [unitTypes.SVG_LENGTHTYPE_IN, 96],
  [unitTypes.SVG_LENGTHTYPE_PT, 4 / 3],
  [unitTypes.SVG_LENGTHTYPE_PC, 16],
])

const valuePattern = /^\s*([+-]?[0-9]*[.]?[0-9]+(?:e[+-]?[0-9]+)?)(em|ex|px|in|cm|mm|pt|pc|%)?\s*$/i;

class SVGLength {
  element
  attributeName

  /**
   * @param {Element} element
   * @param {string} attributeName
   */
  constructor(element, attributeName) {
    this.element = element
    this.attributeName = attributeName
  }

  get unitType() {
    return parseValue(this.element.getAttribute(this.attributeName))[1]
  }

  get value() {
    const [value, unit] = parseValue(
      this.element.getAttribute(this.attributeName)
    )
    return value * getUnitFactor(unit)
  }

  set value(value) {
    const unitFactor = getUnitFactor(this.unitType)
    this.element.setAttribute(
      this.attributeName,
      value / unitFactor + unitString(this)
    )
  }

  get valueInSpecifiedUnits() {
    return parseValue(this.element.getAttribute(this.attributeName))[0]
  }

  set valueInSpecifiedUnits(value) {
    this.element.setAttribute(this.attributeName, value + unitString(this))
  }

  get valueAsString() {
    // Do not simply use getAttribute() as this function has to return a string
    // that is a valid representation of the used value.
    return this.valueInSpecifiedUnits + unitString(this)
  }

  set valueAsString(valueString) {
    const [value, unit] = parseValue(valueString, false)
    const unitString = unitStringByConstant.get(unit) || ''
    this.element.setAttribute(this.attributeName, value + unitString)
  }
}

/**
 * @param {string|null} valueString
 * @param {boolean} fallback  If set to `false` causes an error to be thrown if
 * `valueString` can not be parsed properly. Otherwise the returned value falls
 * back to 0 and the unit falls back to `SVG_LENGTHTYPE_NUMBER`.
 * @return {[number, number]}  Value and unit. For unknown units, if the
 * attribute is not of the correct format or if the attribute is not present on
 * the element, value 0 and unit SVG_LENGTHTYPE_NUMBER are returned.
 */
function parseValue(valueString, fallback = true) {
  const [, rawValue, rawUnit] = (valueString || '').match(valuePattern) || []
  const unit = unitByString[(rawUnit || '').toLowerCase()]
  if (rawValue !== undefined && unit !== undefined) {
    return [parseFloat(rawValue), unit]
  }
  if (fallback) {
    // For unknown units or unparsable attributes, browsers fall back to value 0
    return [0, unitTypes.SVG_LENGTHTYPE_NUMBER]
  }
  throw new Error('An invalid or illegal string was specified')
}

/**
 * @param {number} unit  Unit constant
 */
function getUnitFactor(unit) {
  const unitFactor = unitFactors.get(unit)
  if (unitFactor === undefined) {
    throw new Error(unitFactor + ' is not a known unit constant')
  }
  if (isNaN(unitFactor)) {
    throw new Error(`Unit ${unitStringByConstant.get(unit)} is not supported`)
  }
  return unitFactor
}

/**
 * @param {SVGLength} svgLength
 * @return {string}
 */
function unitString(svgLength) {
  return unitStringByConstant.get(svgLength.unitType) || ''
}

(0,_utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_0__.extendStatic)(SVGLength, unitTypes)


/***/ }),

/***/ "./src/dom/svg/SVGLineElement.js":
/*!***************************************!*\
  !*** ./src/dom/svg/SVGLineElement.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SVGLineElement": () => (/* binding */ SVGLineElement)
/* harmony export */ });
/* harmony import */ var _SVGAnimatedLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SVGAnimatedLength.js */ "./src/dom/svg/SVGAnimatedLength.js");
/* harmony import */ var _SVGGraphicsElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SVGGraphicsElement.js */ "./src/dom/svg/SVGGraphicsElement.js");
// @ts-check



class SVGLineElement extends _SVGGraphicsElement_js__WEBPACK_IMPORTED_MODULE_1__.SVGGraphicsElement {
  x1 = new _SVGAnimatedLength_js__WEBPACK_IMPORTED_MODULE_0__.SVGAnimatedLength(this, 'x1')
  y1 = new _SVGAnimatedLength_js__WEBPACK_IMPORTED_MODULE_0__.SVGAnimatedLength(this, 'y1')
  x2 = new _SVGAnimatedLength_js__WEBPACK_IMPORTED_MODULE_0__.SVGAnimatedLength(this, 'x2')
  y2 = new _SVGAnimatedLength_js__WEBPACK_IMPORTED_MODULE_0__.SVGAnimatedLength(this, 'y2')
}


/***/ }),

/***/ "./src/dom/svg/SVGMatrix.js":
/*!**********************************!*\
  !*** ./src/dom/svg/SVGMatrix.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "matrixFactory": () => (/* binding */ matrixFactory),
/* harmony export */   "SVGMatrix": () => (/* binding */ SVGMatrix)
/* harmony export */ });
const radians = function (d) {
  return d % 360 * Math.PI / 180
}

function matrixFactory (a, b, c, d, e, f) {
  var r = new SVGMatrix()
  r.a = a
  r.b = b
  r.c = c
  r.d = d
  r.e = e
  r.f = f
  return r
}

class SVGMatrix {
  constructor () {
    this.a = this.d = 1
    this.b = this.c = this.e = this.f = 0
  }

  inverse () {
    // Get the current parameters out of the matrix
    var a = this.a
    var b = this.b
    var c = this.c
    var d = this.d
    var e = this.e
    var f = this.f

    // Invert the 2x2 matrix in the top left
    var det = a * d - b * c
    if (!det) throw new Error('Cannot invert ' + this)

    // Calculate the top 2x2 matrix
    var na = d / det
    var nb = -b / det
    var nc = -c / det
    var nd = a / det

    // Apply the inverted matrix to the top right
    var ne = -(na * e + nc * f)
    var nf = -(nb * e + nd * f)

    // Construct the inverted matrix
    this.a = na
    this.b = nb
    this.c = nc
    this.d = nd
    this.e = ne
    this.f = nf

    return this
  }

  multiply (m) {
    var r = new SVGMatrix()
    r.a = this.a * m.a + this.c * m.b + this.e * 0
    r.b = this.b * m.a + this.d * m.b + this.f * 0
    r.c = this.a * m.c + this.c * m.d + this.e * 0
    r.d = this.b * m.c + this.d * m.d + this.f * 0
    r.e = this.a * m.e + this.c * m.f + this.e * 1
    r.f = this.b * m.e + this.d * m.f + this.f * 1
    return r
  }

  rotate (r, x, y) {
    r = r % 360 * Math.PI / 180
    return this.multiply(matrixFactory(
      Math.cos(r),
      Math.sin(r),
      -Math.sin(r),
      Math.cos(r),
      x ? -Math.cos(r) * x + Math.sin(r) * y + x : 0,
      y ? -Math.sin(r) * x - Math.cos(r) * y + y : 0
    ))
  }

  scale (scaleX, scaleY = scaleX) {
    return this.multiply(matrixFactory(scaleX, 0, 0, scaleY, 0, 0))
  }

  skew (x, y) {
    return this.multiply(matrixFactory(1, Math.tan(radians(y)), Math.tan(radians(x)), 1, 0, 0))
  }

  skewX (x) {
    return this.skew(x, 0)
  }

  skewY (y) {
    return this.skew(0, y)
  }

  toString () {
    return 'SVGMatrix'
  }

  translate (x = 0, y = 0) {
    return this.multiply(matrixFactory(1, 0, 0, 1, x, y))
  }

}


/***/ }),

/***/ "./src/dom/svg/SVGPathElement.js":
/*!***************************************!*\
  !*** ./src/dom/svg/SVGPathElement.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SVGPathElement": () => (/* binding */ SVGPathElement)
/* harmony export */ });
/* harmony import */ var _SVGGraphicsElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SVGGraphicsElement.js */ "./src/dom/svg/SVGGraphicsElement.js");
/* harmony import */ var _utils_pathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/pathUtils.js */ "./src/utils/pathUtils.js");



class SVGPathElement extends _SVGGraphicsElement_js__WEBPACK_IMPORTED_MODULE_0__.SVGGraphicsElement {
  getPointAtLength (len) {
    return _utils_pathUtils_js__WEBPACK_IMPORTED_MODULE_1__.pointAtLength(this.getAttribute('d'), len)
  }

  getTotalLength () {
    return _utils_pathUtils_js__WEBPACK_IMPORTED_MODULE_1__.length(this.getAttribute('d'))
  }
}


/***/ }),

/***/ "./src/dom/svg/SVGPoint.js":
/*!*********************************!*\
  !*** ./src/dom/svg/SVGPoint.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SVGPoint": () => (/* binding */ SVGPoint)
/* harmony export */ });
class SVGPoint {
  constructor () {
    this.x = 0
    this.y = 0
  }

  matrixTransform (m) {
    var r = new SVGPoint()
    r.x = m.a * this.x + m.c * this.y + m.e * 1
    r.y = m.b * this.x + m.d * this.y + m.f * 1
    return r
  }
}


/***/ }),

/***/ "./src/dom/svg/SVGRectElement.js":
/*!***************************************!*\
  !*** ./src/dom/svg/SVGRectElement.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SVGRectElement": () => (/* binding */ SVGRectElement)
/* harmony export */ });
/* harmony import */ var _SVGGraphicsElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SVGGraphicsElement.js */ "./src/dom/svg/SVGGraphicsElement.js");
/* harmony import */ var _SVGAnimatedLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SVGAnimatedLength.js */ "./src/dom/svg/SVGAnimatedLength.js");
// @ts-check



class SVGRectElement extends _SVGGraphicsElement_js__WEBPACK_IMPORTED_MODULE_0__.SVGGraphicsElement {
  x = new _SVGAnimatedLength_js__WEBPACK_IMPORTED_MODULE_1__.SVGAnimatedLength(this, 'x')
  y = new _SVGAnimatedLength_js__WEBPACK_IMPORTED_MODULE_1__.SVGAnimatedLength(this, 'y')
  width = new _SVGAnimatedLength_js__WEBPACK_IMPORTED_MODULE_1__.SVGAnimatedLength(this, 'width')
  height = new _SVGAnimatedLength_js__WEBPACK_IMPORTED_MODULE_1__.SVGAnimatedLength(this, 'height')
  rx = new _SVGAnimatedLength_js__WEBPACK_IMPORTED_MODULE_1__.SVGAnimatedLength(this, 'rx')
  ry = new _SVGAnimatedLength_js__WEBPACK_IMPORTED_MODULE_1__.SVGAnimatedLength(this, 'ry')
}


/***/ }),

/***/ "./src/dom/svg/SVGSVGElement.js":
/*!**************************************!*\
  !*** ./src/dom/svg/SVGSVGElement.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SVGSVGElement": () => (/* binding */ SVGSVGElement)
/* harmony export */ });
/* harmony import */ var _SVGGraphicsElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SVGGraphicsElement.js */ "./src/dom/svg/SVGGraphicsElement.js");
/* harmony import */ var _other_Box_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../other/Box.js */ "./src/other/Box.js");
/* harmony import */ var _SVGMatrix_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SVGMatrix.js */ "./src/dom/svg/SVGMatrix.js");
/* harmony import */ var _SVGPoint_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SVGPoint.js */ "./src/dom/svg/SVGPoint.js");





class SVGSVGElement extends _SVGGraphicsElement_js__WEBPACK_IMPORTED_MODULE_0__.SVGGraphicsElement {
  createSVGMatrix () {
    return new _SVGMatrix_js__WEBPACK_IMPORTED_MODULE_2__.SVGMatrix()
  }

  createSVGPoint () {
    return new _SVGPoint_js__WEBPACK_IMPORTED_MODULE_3__.SVGPoint()
  }

  createSVGRect () {
    return new _other_Box_js__WEBPACK_IMPORTED_MODULE_1__.Box()
  }

}


/***/ }),

/***/ "./src/dom/svg/SVGTextContentElement.js":
/*!**********************************************!*\
  !*** ./src/dom/svg/SVGTextContentElement.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SVGTextContentElement": () => (/* binding */ SVGTextContentElement)
/* harmony export */ });
/* harmony import */ var _SVGAnimatedLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SVGAnimatedLength.js */ "./src/dom/svg/SVGAnimatedLength.js");
/* harmony import */ var _SVGGraphicsElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SVGGraphicsElement.js */ "./src/dom/svg/SVGGraphicsElement.js");



class SVGTextContentElement extends _SVGGraphicsElement_js__WEBPACK_IMPORTED_MODULE_1__.SVGGraphicsElement {
  textWidth = new _SVGAnimatedLength_js__WEBPACK_IMPORTED_MODULE_0__.SVGAnimatedLength(this, 'textWidth')

  getComputedTextLength () {
    return this.getBBox().width
  }
}


/***/ }),

/***/ "./src/factories.js":
/*!**************************!*\
  !*** ./src/factories.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDocument": () => (/* binding */ createDocument),
/* harmony export */   "createHTMLDocument": () => (/* binding */ createHTMLDocument),
/* harmony export */   "createSVGDocument": () => (/* binding */ createSVGDocument),
/* harmony export */   "createWindow": () => (/* binding */ createWindow),
/* harmony export */   "createHTMLWindow": () => (/* binding */ createHTMLWindow),
/* harmony export */   "createSVGWindow": () => (/* binding */ createSVGWindow)
/* harmony export */ });
/* harmony import */ var _dom_Window_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/Window.js */ "./src/dom/Window.js");
/* harmony import */ var _dom_Document_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/Document.js */ "./src/dom/Document.js");
/* harmony import */ var _utils_namespaces_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/namespaces.js */ "./src/utils/namespaces.js");




const { createDocument, createHTMLDocument } = _dom_Document_js__WEBPACK_IMPORTED_MODULE_1__.DOMImplementation

const createWindow = (...args) => {
  const window = new _dom_Window_js__WEBPACK_IMPORTED_MODULE_0__.Window()
  const document = createDocument(...args)
  window.document = document
  document.defaultView = window
  return window
}

const createHTMLWindow = (title) => {
  const window = new _dom_Window_js__WEBPACK_IMPORTED_MODULE_0__.Window()
  const document = _dom_Document_js__WEBPACK_IMPORTED_MODULE_1__.DOMImplementation.createHTMLDocument(title)
  window.document = document
  document.defaultView = window
  return window
}

const createSVGWindow = () => {
  return createWindow(_utils_namespaces_js__WEBPACK_IMPORTED_MODULE_2__.svg, 'svg')
}

const createSVGDocument = () => {
  return createDocument(_utils_namespaces_js__WEBPACK_IMPORTED_MODULE_2__.svg, 'svg')
}




/***/ }),

/***/ "./src/other/Box.js":
/*!**************************!*\
  !*** ./src/other/Box.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Box": () => (/* binding */ Box),
/* harmony export */   "NoBox": () => (/* binding */ NoBox)
/* harmony export */ });
/* harmony import */ var _utils_regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/regex.js */ "./src/utils/regex.js");
/* harmony import */ var _Point_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Point.js */ "./src/other/Point.js");



class Box {
  constructor (source) {
    var base = [ 0, 0, 0, 0 ]
    source = typeof source === 'string' ? source.split(_utils_regex_js__WEBPACK_IMPORTED_MODULE_0__.delimiter).map(parseFloat)
      : Array.isArray(source) ? source
      : typeof source === 'object' ? [
        source.left != null ? source.left : source.x,
        source.top != null ? source.top : source.y,
        source.width,
        source.height
      ]
      : arguments.length === 4 ? [].slice.call(arguments)
      : base

    this.x = this.left = source[0]
    this.y = this.top = source[1]
    this.width = source[2]
    this.height = source[3]
    this.right = this.left + this.width
    this.bottom = this.top + this.height
  }

  // Merge rect box with another, return a new instance
  merge (box) {
    if (box instanceof NoBox) return new Box(this)

    var x = Math.min(this.x, box.x)
    var y = Math.min(this.y, box.y)

    return new Box(
      x, y,
      Math.max(this.x + this.width, box.x + box.width) - x,
      Math.max(this.y + this.height, box.y + box.height) - y
    )
  }

  transform (m) {
    var xMin = Infinity
    var xMax = -Infinity
    var yMin = Infinity
    var yMax = -Infinity

    var pts = [
      new _Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(this.x, this.y),
      new _Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(this.x + this.width, this.y),
      new _Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(this.x, this.y + this.height),
      new _Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(this.x + this.width, this.y + this.height)
    ]

    pts.forEach(function (p) {
      p = p.transform(m)
      xMin = Math.min(xMin, p.x)
      xMax = Math.max(xMax, p.x)
      yMin = Math.min(yMin, p.y)
      yMax = Math.max(yMax, p.y)
    })

    return new Box(
      xMin, yMin,
      xMax - xMin,
      yMax - yMin
    )
  }
}

class NoBox extends Box {
  // NoBox has no valid values so it cant be merged
  merge (box) {
    return box instanceof NoBox ? new NoBox() : new Box(box)
  }

  transform (m) {
    return new NoBox()
  }
}


/***/ }),

/***/ "./src/other/CssQuery.js":
/*!*******************************!*\
  !*** ./src/other/CssQuery.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CssQuery": () => (/* binding */ CssQuery),
/* harmony export */   "CssQueryNode": () => (/* binding */ CssQueryNode)
/* harmony export */ });
/* harmony import */ var _utils_strUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/strUtils.js */ "./src/utils/strUtils.js");
/* harmony import */ var _utils_regex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/regex.js */ "./src/utils/regex.js");
/* harmony import */ var _utils_namespaces_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/namespaces.js */ "./src/utils/namespaces.js");




class CssQuery {
  constructor (query) {
    if (CssQuery.cache.has(query)) {
      this.queries = CssQuery.cache.get(query)
      return
    }

    let queries = (0,_utils_strUtils_js__WEBPACK_IMPORTED_MODULE_0__.splitNotInBrackets)(query, ',')

    queries = queries.map(query => {

      let roundBrackets = 0
      let squareBrackets = 0

      // this is the same as above but easier
      query = query.replace(/[()[\]>~+]/g, function (ch) {
        if (ch === '(') ++roundBrackets
        else if (ch === ')') --roundBrackets
        else if (ch === '[') ++squareBrackets
        else if (ch === ']') --squareBrackets

        if ('()[]'.indexOf(ch) > -1) return ch
        if (squareBrackets || roundBrackets) return ch

        return ' ' + ch + ' '
      })

      // split at space and remove empty results
      query = (0,_utils_strUtils_js__WEBPACK_IMPORTED_MODULE_0__.splitNotInBrackets)(query, ' ').filter(el => !!el.length)

      const pairs = []

      let relation = '%'

      // generate querynode relation tuples
      for (let i = 0, il = query.length; i < il; ++i) {

        if ('>~+%'.indexOf(query[i]) > -1) {
          relation = query[i]
          continue
        }

        pairs.push([ relation, query[i] ])
        relation = '%'

      }

      return pairs

    })

    this.queries = queries

    // to prevent memory leaks we have to manage our cache.
    // we delete everything which is older than 50 entries
    if (CssQuery.cacheKeys.length > 50) {
      CssQuery.cache.delete(CssQuery.cacheKeys.shift())
    }
    CssQuery.cache.set(query, queries)
    CssQuery.cacheKeys.push(query)

  }

  matches (node, scope) {
    for (let i = this.queries.length; i--;) {
      if (this.matchHelper(this.queries[i], node, scope)) {
        return true
      }
    }
    return false
  }

  matchHelper (query, node, scope) {
    query = query.slice()
    const last = query.pop()

    if (!new CssQueryNode(last[1]).matches(node, scope)) { return false }

    if (!query.length) return true

    if (last[0] === ',') return true

    if (last[0] === '+') {
      return !!node.previousSibling && this.matchHelper(query, node.previousSibling, scope)
    }

    if (last[0] === '>') {
      return !!node.parentNode && this.matchHelper(query, node.parentNode, scope)
    }

    if (last[0] === '~') {
      while ((node = node.previousSibling)) {
        if (this.matchHelper(query, node, scope)) { return true }
      }
      return false
    }

    if (last[0] === '%') {
      while ((node = node.parentNode)) {
        if (this.matchHelper(query, node, scope)) { return true }
      }
      return false
    }

  }
}

CssQuery.cache = new Map()
CssQuery.cacheKeys = []

// check if [node] is the [nth] child of [arr] where nth can also be a formula
const nth = (node, arr, nth) => {

  if (nth === 'even') nth = '2n'
  else if (nth === 'odd') nth = '2n+1'

  // check for eval chars
  if (/[^\d\-n+*/]+/.test(nth)) return false

  nth = nth.replace('n', '*n')

  // eval nth to get the index
  for (var i, n = 0, nl = arr.length; n < nl; ++n) {
    /* eslint no-eval: off */
    i = eval(nth)

    if (i > nl) break
    if (arr[i - 1] === node) return true
  }

  return false
}

const lower = a => a.toLowerCase()

// checks if a and b are equal. Is insensitive when i is true
const eq = (a, b, i) => i ? lower(a) === lower(b) : a === b

// [i] (prebound) is true if insensitive matching is required
// [a] (prebound) is the value the attr is compared to
// [b] (passed)   is the value of the attribute
const attributeMatcher = {
  '=': (i, a, b) => eq(a, b, i),
  '~=': (i, a, b) => b.split(_utils_regex_js__WEBPACK_IMPORTED_MODULE_1__.delimiter).filter(el => eq(el, a, i)).length > 0,
  '|=': (i, a, b) => eq(b.split(_utils_regex_js__WEBPACK_IMPORTED_MODULE_1__.delimiter)[0], a, i),
  '^=': (i, a, b) => i ? lower(b).startsWith(lower(a)) : b.startsWith(a),
  '$=': (i, a, b) => i ? lower(b).endsWith(lower(a)) : b.endsWith(a),
  '*=': (i, a, b) => i ? lower(b).includes(lower(a)) : b.includes(a),
  '*': (i, a, b) => b != null
}

const getAttributeValue = (prefix, name, node) => {
  if (!prefix || prefix === '*') {
    return node.getAttribute(name)
  }
  return node.getAttribute(prefix + ':' + name)
}

// [a] (prebound) [a]rgument of the pseudo selector
// [n] (passed)   [n]ode
// [s] (passed)   [s]cope - the element this query is scoped to
const pseudoMatcher = {
  'first-child': (a, n) => n.parentNode && n.parentNode.firstChild === n,
  'last-child': (a, n) => n.parentNode && n.parentNode.lastChild === n,
  'nth-child': (a, n) => n.parentNode && nth(n, n.parentNode.childNodes, a),
  'nth-last-child': (a, n) => n.parentNode && nth(n, n.parentNode.childNodes.slice().reverse(), a),
  'first-of-type': (a, n) => n.parentNode && n.parentNode.childNodes.filter(el => el.nodeName === n.nodeName)[0] === n,
  'last-of-type': (a, n) => n.parentNode && n.parentNode.childNodes.filter(el => el.nodeName === n.nodeName).pop() === n,
  'nth-of-type': (a, n) => n.parentNode && nth(n, n.parentNode.childNodes.filter(el => el.nodeName === n.nodeName), a),
  'nth-last-of-type': (a, n) => n.parentNode && nth(n, n.parentNode.childNodes.filter(el => el.nodeName === n.nodeName).reverse(), a),
  'only-child': (a, n) => n.parentNode && n.parentNode.childNodes.length === 1,
  'only-of-type': (a, n) => n.parentNode && n.parentNode.childNodes.filter(el => el.nodeName === n.nodeName).length === 1,
  root: (a, n) => n.ownerDocument.documentElement === n,
  not: (a, n, s) => !(new CssQuery(a)).matches(n, s),
  matches: (a, n, s) => (new CssQuery(a)).matches(n, s),
  scope: (a, n, s) => n === s
}

class CssQueryNode {
  constructor (node) {
    this.tag = ''
    this.id = ''
    this.classList = []
    this.attrs = []
    this.pseudo = []

    // match the tag name
    let matches = node.match(/^[\w-]+|^\*/)
    if (matches) {
      this.tag = matches[0]
      node = node.slice(this.tag.length)
    }

    // match pseudo classes
    while ((matches = /:([\w-]+)(?:\((.+)\))?/g.exec(node))) {
      this.pseudo.push(pseudoMatcher[matches[1]].bind(this, (0,_utils_strUtils_js__WEBPACK_IMPORTED_MODULE_0__.removeQuotes)(matches[2] || '')))
      node = node.slice(0, matches.index) + node.slice(matches.index + matches[0].length)
    }

    // match attributes
    while ((matches = /\[([\w-*]+\|)?([\w-]+)(([=^~$|*]+)(.+?)( +[iI])?)?\]/g.exec(node))) {
      const prefix = matches[1] ? matches[1].split('|')[0] : null
      this.attrs.push({
        name: matches[2],
        getValue: getAttributeValue.bind(this, prefix, matches[2]),
        matcher: attributeMatcher[matches[4] || '*'].bind(
          this,
          !!matches[6], // case insensitive yes/no
          (0,_utils_strUtils_js__WEBPACK_IMPORTED_MODULE_0__.removeQuotes)((matches[5] || '').trim()) // attribute value
        )
      })
      node = node.slice(0, matches.index) + node.slice(matches.index + matches[0].length)
    }

    // match the id
    matches = node.match(/#([\w-]+)/)
    if (matches) {
      this.id = matches[1]
      node = node.slice(0, matches.index) + node.slice(matches.index + matches[0].length)
    }

    // match classes
    while ((matches = /\.([\w-]+)/g.exec(node))) {
      this.classList.push(matches[1])
      node = node.slice(0, matches.index) + node.slice(matches.index + matches[0].length)
    }
  }

  matches (node, scope) {
    let i

    if (node.nodeType !== 1) return false

    // Always this extra code for html -.-
    if (node.namespaceURI === _utils_namespaces_js__WEBPACK_IMPORTED_MODULE_2__.html) {
      this.tag = this.tag.toUpperCase()
    }

    if (this.tag && this.tag !== node.nodeName && this.tag !== '*') { return false }

    if (this.id && this.id !== node.id) {
      return false
    }

    const classList = (node.getAttribute('class') || '').split(_utils_regex_js__WEBPACK_IMPORTED_MODULE_1__.delimiter).filter(el => !!el.length)
    if (this.classList.filter(className => classList.indexOf(className) < 0).length) {
      return false
    }

    for (i = this.attrs.length; i--;) {
      const attrValue = this.attrs[i].getValue(node)
      if (attrValue === null || !this.attrs[i].matcher(attrValue)) {
        return false
      }
    }

    for (i = this.pseudo.length; i--;) {
      if (!this.pseudo[i](node, scope)) {
        return false
      }
    }

    return true
  }

}


/***/ }),

/***/ "./src/other/Point.js":
/*!****************************!*\
  !*** ./src/other/Point.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Point": () => (/* binding */ Point)
/* harmony export */ });
/* harmony import */ var _dom_svg_SVGPoint_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom/svg/SVGPoint.js */ "./src/dom/svg/SVGPoint.js");


class Point {
  // Initialize
  constructor (x, y) {
    const base = { x: 0, y: 0 }

    // ensure source as object
    const source = Array.isArray(x)
      ? { x: x[0], y: x[1] }
      : typeof x === 'object'
        ? { x: x.x, y: x.y }
        : x != null
          ? { x: x, y: (y != null ? y : x) }
          : base // If y has no value, then x is used has its value

    // merge source
    this.x = source.x
    this.y = source.y
  }

  abs () {
    return Math.sqrt(this.absQuad())
  }

  absQuad () {
    return this.x * this.x + this.y * this.y
  }

  add (x, y) {
    const p = new Point(x, y)
    return new Point(this.x + p.x, this.y + p.y)
  }

  angleTo (p) {
    let sign = Math.sign(this.x * p.y - this.y * p.x)
    sign = sign || 1
    return sign * Math.acos(Math.round((this.dot(p) / (this.abs() * p.abs())) * 1000000) / 1000000)
  }

  // Clone point
  clone () {
    return new Point(this)
  }

  closeTo (p, eta = 0.00001) {
    return this.equals(p) || (Math.abs(this.x - p.x) < eta && Math.abs(this.y - p.y) < eta)
  }

  div (factor) {
    return new Point(this.x / factor, this.y / factor)
  }

  dot (p) {
    return this.x * p.x + this.y * p.y
  }

  equals (p) {
    return this.x === p.x && this.y === p.y
  }

  mul (factor) {
    return new Point(this.x * factor, this.y * factor)
  }

  // Convert to native SVGPoint
  native () {
    // create new point
    const point = new _dom_svg_SVGPoint_js__WEBPACK_IMPORTED_MODULE_0__.SVGPoint()

    // update with current values
    point.x = this.x
    point.y = this.y

    return point
  }

  normal () {
    return new Point(this.y, -this.x)
  }

  normalize () {
    const abs = this.abs()
    if (!abs) throw new Error('Can\'t normalize vector of zero length')
    return this.div(abs)
  }

  reflectAt (p) {
    return p.add(p.sub(this))
  }

  sub (x, y) {
    const p = new Point(x, y)
    return new Point(this.x - p.x, this.y - p.y)
  }

  toArray () {
    return [ this.x, this.y ]
  }

  toPath () {
    return [ 'M', this.x, this.y ].join(' ')
  }

  // transform point with matrix
  transform (matrix) {
    return new Point(this.native().matrixTransform(matrix))
  }

  transformO (matrix) {
    const { x, y } = this.native().matrixTransform(matrix)
    this.x = x
    this.y = y
  }

}


/***/ }),

/***/ "./src/utils/NodeIterator.js":
/*!***********************************!*\
  !*** ./src/utils/NodeIterator.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NodeIterator": () => (/* binding */ NodeIterator)
/* harmony export */ });
/* harmony import */ var _dom_NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom/NodeFilter.js */ "./src/dom/NodeFilter.js");


const showThisNode = (whatToShow, node) => {
  if (whatToShow === _dom_NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__.NodeFilter.SHOW_ALL) return true
  if (whatToShow & _dom_NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__.NodeFilter.SHOW_ELEMENT && node.nodeType === node.ELEMENT_NODE) return true
  if (whatToShow & _dom_NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__.NodeFilter.SHOW_TEXT && node.nodeType === node.TEXT_NODE) return true
  if (whatToShow & _dom_NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__.NodeFilter.SHOW_ENTITY_REFERENCE && node.nodeType === node.ENTITY_REFERENCE_NODE) return true
  if (whatToShow & _dom_NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__.NodeFilter.SHOW_ENTITY && node.nodeType === node.ENTITY_NODE) return true
  if (whatToShow & _dom_NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__.NodeFilter.SHOW_PROCESSING_INSTRUCTION && node.nodeType === node.PROCESSING_INSTRUCTION_NODE) return true
  if (whatToShow & _dom_NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__.NodeFilter.SHOW_COMMENT && node.nodeType === node.COMMENT_NODE) return true
  if (whatToShow & _dom_NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__.NodeFilter.SHOW_DOCUMENT && node.nodeType === node.DOCUMENT_NODE) return true
  if (whatToShow & _dom_NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__.NodeFilter.SHOW_DOCUMENT_TYPE && node.nodeType === node.DOCUMENT_TYPE_NODE) return true
  if (whatToShow & _dom_NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__.NodeFilter.SHOW_DOCUMENT_FRAGMENT && node.nodeType === node.DOCUMENT_FRAGMENT_NODE) return true
  if (whatToShow & _dom_NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__.NodeFilter.SHOW_NOTATION && node.nodeType === node.NOTATION_NODE) return true
  return false
}

class NodeIterator {
  constructor (root, whatToShow = _dom_NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__.NodeFilter.SHOW_ALL, filter = () => _dom_NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__.NodeFilter.FILTER_ACCEPT, includeParent = true) {
    this.root = includeParent ? { childNodes: [ root ] } : root
    this.whatToShow = whatToShow
    this.filter = filter
  }

  * [Symbol.iterator] () {
    const nodes = this.root.childNodes

    for (const node of nodes) {
      if (!showThisNode(this.whatToShow, node)) continue

      const filterRet = this.filter(node)

      if (filterRet === _dom_NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__.NodeFilter.FILTER_REJECT) continue
      if (filterRet === _dom_NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__.NodeFilter.FILTER_ACCEPT) {
        yield node
      }

      yield * new NodeIterator(node, this.whatToShow, this.filter, false)
    }

    return this
  }
}


/***/ }),

/***/ "./src/utils/PointCloud.js":
/*!*********************************!*\
  !*** ./src/utils/PointCloud.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PointCloud": () => (/* binding */ PointCloud)
/* harmony export */ });
/* harmony import */ var _other_Box_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../other/Box.js */ "./src/other/Box.js");


class PointCloud extends Array {
  constructor (...args) {
    if (args.length === 1 && typeof args[0] === 'number') {
      super(args.shift())
    } else {
      super()
    }

    // except multiple point arrays as input and merge them into one
    args.reduce((last, curr) => {
      last.push(...curr)
      return this
    }, this)
  }

  bbox () {
    if (!this.length) {
      return new _other_Box_js__WEBPACK_IMPORTED_MODULE_0__.NoBox()
    }

    let xMin = Infinity
    let xMax = -Infinity
    let yMin = Infinity
    let yMax = -Infinity

    this.forEach(function (p) {
      xMin = Math.min(xMin, p.x)
      xMax = Math.max(xMax, p.x)
      yMin = Math.min(yMin, p.y)
      yMax = Math.max(yMax, p.y)
    })

    return new _other_Box_js__WEBPACK_IMPORTED_MODULE_0__.Box(
      xMin, yMin,
      xMax - xMin,
      yMax - yMin
    )
  }

  merge (cloud) {
    return new PointCloud(this, cloud)
  }

  transform (m) {
    return new PointCloud(this.map((p) => p.transform(m)))
  }

}


/***/ }),

/***/ "./src/utils/bboxUtils.js":
/*!********************************!*\
  !*** ./src/utils/bboxUtils.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSegments": () => (/* binding */ getSegments)
/* harmony export */ });
/* harmony import */ var _pathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pathUtils.js */ "./src/utils/pathUtils.js");
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./regex.js */ "./src/utils/regex.js");
/* harmony import */ var _textUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./textUtils.js */ "./src/utils/textUtils.js");
/* harmony import */ var _other_Box_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../other/Box.js */ "./src/other/Box.js");
/* harmony import */ var _NodeIterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NodeIterator.js */ "./src/utils/NodeIterator.js");
/* harmony import */ var _dom_NodeFilter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom/NodeFilter.js */ "./src/dom/NodeFilter.js");







const applyTransformation = (segments, node, applyTransformations) => {
  if (node.matrixify && applyTransformations) {
    return segments.transform(node.matrixify())
  }
  return segments
}

const getSegments = (node, applyTransformations, rbox = false) => {
  const segments = getPathSegments(node, rbox)
  return applyTransformation(segments, node, applyTransformations)
}

const getPathSegments = (node, rbox) => {
  if (node.nodeType !== 1) return new _pathUtils_js__WEBPACK_IMPORTED_MODULE_0__.PathSegmentArray()
  const length = node.childNodes.length
  const result = new _pathUtils_js__WEBPACK_IMPORTED_MODULE_0__.PathSegmentArray()
  switch (node.nodeName) {
  case 'rect':
  case 'image':
  case 'pattern':
  case 'mask':
  case 'foreignObject':
    // Create Path from rect and create PointCloud from Path
    return _pathUtils_js__WEBPACK_IMPORTED_MODULE_0__.getPathSegments(_pathUtils_js__WEBPACK_IMPORTED_MODULE_0__.pathFrom.rect(node))
  case 'svg':
  case 'symbol':
    // return pathUtils.getPathSegments(pathUtils.pathFrom.rect(node))
    if (rbox) {
      return _pathUtils_js__WEBPACK_IMPORTED_MODULE_0__.getPathSegments(_pathUtils_js__WEBPACK_IMPORTED_MODULE_0__.pathFrom.rect(node))
    }
  // ATTENTION: FALL THROUGH
  // Because normal bbox is calculated by the content of the element and not its width and height
  // eslint-disable-next-line
  case 'g':
  case 'clipPath':
  case 'a':
  case 'marker':
    // Iterate through all children and get the point cloud of each
    // Then transform it with viewbox matrix if needed
    for (let i = 0; i < length; i++) {
      const child = node.childNodes[i]
      if (!child.matrixify) {
        continue
      }
      result.push(...getSegments(child, true).transform(child.generateViewBoxMatrix()))
    }
    return result
  case 'circle':
    return _pathUtils_js__WEBPACK_IMPORTED_MODULE_0__.getPathSegments(_pathUtils_js__WEBPACK_IMPORTED_MODULE_0__.pathFrom.circle(node))
  case 'ellipse':
    return _pathUtils_js__WEBPACK_IMPORTED_MODULE_0__.getPathSegments(_pathUtils_js__WEBPACK_IMPORTED_MODULE_0__.pathFrom.ellipse(node))
  case 'line':
    return _pathUtils_js__WEBPACK_IMPORTED_MODULE_0__.getPathSegments(_pathUtils_js__WEBPACK_IMPORTED_MODULE_0__.pathFrom.line(node))
  case 'polyline':
  case 'polygon':
    return _pathUtils_js__WEBPACK_IMPORTED_MODULE_0__.getPathSegments(_pathUtils_js__WEBPACK_IMPORTED_MODULE_0__.pathFrom.polyline(node))
  case 'path':
  case 'glyph':
  case 'missing-glyph':
    return _pathUtils_js__WEBPACK_IMPORTED_MODULE_0__.getPathSegments(node.getAttribute('d'))
  case 'use': {
    // Get reference from element
    const ref = node.getAttribute('href') || node.getAttribute('xlink:href')
    // Get the actual referenced Node
    const refNode = node.getRootNode().querySelector(ref)
    // Get the BBox of the referenced element and apply the viewbox of <use>
    // TODO: Do we need to apply the transformations of the element?
    // Check bbox of transformed element which is reused with <use>
    return getSegments(refNode).transform(node.generateViewBoxMatrix())
  }
  case 'tspan':
  case 'text':
  case 'altGlyph': {
    const box = getTextBBox(node)

    if (box instanceof _other_Box_js__WEBPACK_IMPORTED_MODULE_3__.NoBox) {
      return new _pathUtils_js__WEBPACK_IMPORTED_MODULE_0__.PathSegmentArray()
    }

    return _pathUtils_js__WEBPACK_IMPORTED_MODULE_0__.getPathSegments(_pathUtils_js__WEBPACK_IMPORTED_MODULE_0__.pathFrom.box(box))
  }
  default:
    return new _pathUtils_js__WEBPACK_IMPORTED_MODULE_0__.PathSegmentArray()
  }
}

const getTextBBox = (node) => {
  const textRoot = findTextRoot(node)
  const boxes = getTextBBoxes(node, textRoot)
  return boxes.filter(isNotEmptyBox).reduce((last, curr) => last.merge(curr), new _other_Box_js__WEBPACK_IMPORTED_MODULE_3__.NoBox())
}

const findTextRoot = (node) => {
  while (node.parentNode) {
    if ((node.nodeName === 'text' && node.parentNode.nodeName === 'text')
    || ((node.nodeName === 'tspan' || node.nodeName === 'textPath') && [ 'tspan', 'text', 'textPath' ].includes(node.parentNode.nodeName))) {
      node = node.parentNode
    } else {
      break
    }
  }

  return node
}

// This function takes a node of which the bbox needs to be calculated
// In order to position the box correctly, we need to know were the parent and were the siblings *before* our node are
// Thats why a textRoot is passed which is the most outer textElement needed to calculate all boxes
// When the iterator hits the element we need the bbox of, it is terminated and this function is called again
// only for the substree of our node and without textRoor but instead pos, dx and dy are known
const getTextBBoxes = function (target, textRoot = target, pos = { x: 0, y: 0 }, dx = [ 0 ], dy = [ 0 ], boxes = []) {

  // Create NodeIterator. Only show elemnts and text and skip descriptive elements
  // TODO: make an instanceof check for DescriptiveElement instead of testing one by one
  // Only title is skipped atm
  const iter = new _NodeIterator_js__WEBPACK_IMPORTED_MODULE_4__.NodeIterator(textRoot, _dom_NodeFilter_js__WEBPACK_IMPORTED_MODULE_5__.NodeFilter.SHOW_ELEMENT | _dom_NodeFilter_js__WEBPACK_IMPORTED_MODULE_5__.NodeFilter.SHOW_TEXT, (node) => {
    if (node.nodeName === 'title') return _dom_NodeFilter_js__WEBPACK_IMPORTED_MODULE_5__.NodeFilter.FILTER_IGNORE
    return _dom_NodeFilter_js__WEBPACK_IMPORTED_MODULE_5__.NodeFilter.FILTER_ACCEPT
  })

  // Iterate trough all nodes top to bottom, left to right
  for (const node of iter) {

    // If we hit our target, we gathered all positional information we need to move the bbox to the correct spot
    if (node === target && node !== textRoot) {
      return getTextBBoxes(node, node, pos, dx, dy)
    }

    // Traverse trough this node updating positions and add boxes
    getPositionDetailsFor(node, pos, dx, dy, boxes)
  }

  return boxes
}

const isNotEmptyBox = box => box.x !== 0 || box.y !== 0 || box.width !== 0 || box.height !== 0

// This function either updates pos, dx and dy (when its an element) or calculates the boxes for text with the passed arguments
// All arguments are passed by reference so dont overwrite them (treat them as const!)
// TODO: Break this into two functions?
const getPositionDetailsFor = (node, pos, dx, dy, boxes) => {
  if (node.nodeType === node.ELEMENT_NODE) {
    const x = parseFloat(node.getAttribute('x'))
    const y = parseFloat(node.getAttribute('y'))

    pos.x = isNaN(x) ? pos.x : x
    pos.y = isNaN(y) ? pos.y : y

    const dx0 = (node.getAttribute('dx') || '').split(_regex_js__WEBPACK_IMPORTED_MODULE_1__.delimiter).filter(num => num !== '').map(parseFloat)
    const dy0 = (node.getAttribute('dy') || '').split(_regex_js__WEBPACK_IMPORTED_MODULE_1__.delimiter).filter(num => num !== '').map(parseFloat)

    // TODO: eventually replace only as much values as we have text chars (node.textContent.length) because we could end up adding to much
    // replace initial values with node values if present
    dx.splice(0, dx0.length, ...dx0)
    dy.splice(0, dy0.length, ...dy0)
  } else {
    // get text data
    const data = node.data

    let j = 0
    const jl = data.length
    const details = getFontDetails(node)

    // if it is more than one dx/dy single letters are moved by the amount (https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/dx)
    if (dy.length || dx.length) {
      for (;j < jl; j++) {
        // Calculate a box for a single letter
        boxes.push(_textUtils_js__WEBPACK_IMPORTED_MODULE_2__.textBBox(data.substr(j, 1), pos.x, pos.y, details))

        // Add the next position to current one
        pos.x += dx.shift() || 0
        pos.y += dy.shift() || 0

        if (!dy.length && !dx.length) break
      }
    }

    // in case it was only one dx/dy or no more dx/dy move the rest of the text
    boxes.push(_textUtils_js__WEBPACK_IMPORTED_MODULE_2__.textBBox(data.substr(j), pos.x, pos.y, details))
    pos.x += boxes[boxes.length - 1].width
  }
}

/*
// this function is passing dx and dy values by references. Dont assign new values to it
const textIterator = function (node, pos = { x: 0, y: 0 }, dx = [ 0 ], dy = [ 0 ]) {

  var x = parseFloat(node.getAttribute('x'))
  var y = parseFloat(node.getAttribute('y'))

  pos.x = isNaN(x) ? pos.x : x
  pos.y = isNaN(y) ? pos.y : y

  var dx0 = (node.getAttribute('dx') || '').split(regex.delimiter).filter(num => num !== '').map(parseFloat)
  var dy0 = (node.getAttribute('dy') || '').split(regex.delimiter).filter(num => num !== '').map(parseFloat)
  var boxes = []
  var data = ''

  // TODO: eventually replace only as much values as we have text chars (node.textContent.length) because we could end up adding to much
  // replace initial values with node values if present
  dx.splice(0, dx0.length, ...dx0)
  dy.splice(0, dy0.length, ...dy0)

  var i = 0
  var il = node.childNodes.length

  // iterate through all children
  for (; i < il; ++i) {

    // shift next child
    pos.x += dx.shift() || 0
    pos.y += dy.shift() || 0

    // text
    if (node.childNodes[i].nodeType === node.TEXT_NODE) {

      // get text data
      data = node.childNodes[i].data

      let j = 0
      const jl = data.length

      // if it is more than one dx/dy single letters are moved by the amount (https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/dx)
      if (dy.length || dx.length) {
        for (;j < jl; j++) {
          boxes.push(textUtils.textBBox(data.substr(j, 1), pos.x, pos.y, getFontDetails(node)))

          pos.x += dx.shift() || 0
          pos.y += dy.shift() || 0

          if (!dy.length && !dx.length) break
        }
      }

      // in case it was only one dx/dy or no more dx/dy move the rest of the text

      boxes.push(textUtils.textBBox(data.substr(j), pos.x, pos.y, getFontDetails(node)))
      pos.x += boxes[boxes.length - 1].width

    // element
    } else {
      // in case of element, recursively call function again with new start values
      boxes = boxes.concat(textIterator(node.childNodes[i], pos, dx, dy))
    }
  }

  return boxes
} */

const getFontDetails = (node) => {
  if (node.nodeType === node.TEXT_NODE) node = node.parentNode

  let fontSize = null
  let fontFamily = null
  let textAnchor = null
  let dominantBaseline = null

  const textContentElements = [
    'text',
    'tspan',
    'tref',
    'textPath',
    'altGlyph',
    'g'
  ]

  do {
    // TODO: stop on
    if (!fontSize) { fontSize = node.style.fontSize || node.getAttribute('font-size') }
    if (!fontFamily) { fontFamily = node.style.fontFamily || node.getAttribute('font-family') }
    if (!textAnchor) { textAnchor = node.style.textAnchor || node.getAttribute('text-anchor') }
    if (!dominantBaseline) { dominantBaseline = node.style.dominantBaseline || node.getAttribute('dominant-baseline') }
    // TODO: check for alignment-baseline in tspan, tref, textPath, altGlyph
    // TODO: alignment-adjust, baseline-shift
    /*
    if(!alignmentBaseline)
    alignmentBaseline = this.style.alignmentBaseline || this.getAttribute('alignment-baseline')
    */

  } while (
    (node = node.parentNode)
    && node.nodeType === node.ELEMENT_NODE
    && (textContentElements.includes(node.nodeName))
  )

  return {
    fontFamily,
    fontSize,
    textAnchor: textAnchor || 'start',
    // TODO: use central for writing-mode === horizontal https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/dominant-baseline
    dominantBaseline: dominantBaseline || 'alphabetical'
    // fontFamilyMappings: this.ownerDocument.fontFamilyMappings,
    // fontDir: this.ownerDocument.fontDir,
    // preloaded: this.ownerDocument._preloaded
  }
}


/***/ }),

/***/ "./src/utils/defaults.js":
/*!*******************************!*\
  !*** ./src/utils/defaults.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fontSize": () => (/* binding */ fontSize),
/* harmony export */   "fontFamily": () => (/* binding */ fontFamily),
/* harmony export */   "fontDir": () => (/* binding */ fontDir),
/* harmony export */   "fontFamilyMappings": () => (/* binding */ fontFamilyMappings)
/* harmony export */ });
/* harmony import */ var node_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node:path */ "node:path");
/* harmony import */ var node_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node:url */ "node:url");



const __dirname = (0,node_path__WEBPACK_IMPORTED_MODULE_0__.dirname)((0,node_url__WEBPACK_IMPORTED_MODULE_1__.fileURLToPath)("file:///home/mrf/spectrum/svgdom/src/utils/defaults.js"))

const fontSize = 16
const fontFamily = 'sans-serif'
const fontDir = (0,node_path__WEBPACK_IMPORTED_MODULE_0__.join)(__dirname, '../../', 'fonts/')
const fontFamilyMappings = {
  'sans-serif': 'OpenSans-Regular.ttf',
  'Open Sans': 'OpenSans-Regular.ttf'
}


/***/ }),

/***/ "./src/utils/mapUtils.js":
/*!*******************************!*\
  !*** ./src/utils/mapUtils.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "objectToMap": () => (/* binding */ objectToMap),
/* harmony export */   "mapToObject": () => (/* binding */ mapToObject),
/* harmony export */   "mapMap": () => (/* binding */ mapMap),
/* harmony export */   "mapToCss": () => (/* binding */ mapToCss),
/* harmony export */   "cssToMap": () => (/* binding */ cssToMap)
/* harmony export */ });
/* harmony import */ var _utils_strUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/strUtils.js */ "./src/utils/strUtils.js");


const objectToMap = function (obj) {
  if (obj instanceof Map) return new Map(obj)
  return Object.keys(obj).reduce((map, key) => map.set(key, obj[key]), new Map())
}

const mapToObject = function (map) {
  var obj = {}
  map.forEach(function (value, key) {
    obj[key] = value
  })
  return obj
}

const mapMap = function (map, cb) {
  var arr = []
  map.forEach(function (value, key) {
    arr.push(cb(value, key))
  })
  return arr
}

const mapToCss = function (myMap) {
  return mapMap(myMap, function (value, key) {
    if (!value) return false
    return (0,_utils_strUtils_js__WEBPACK_IMPORTED_MODULE_0__.decamelize)(key) + ': ' + value
  }).filter(function (el) { return !!el }).join('; ') + ';' || 0
}

const cssToMap = function (css) {
  return new Map(css.split(/\s*;\s*/).filter(function (el) { return !!el }).map(function (el) {
    return el.split(/\s*:\s*/)
  }))
}


/***/ }),

/***/ "./src/utils/namespaces.js":
/*!*********************************!*\
  !*** ./src/utils/namespaces.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svg": () => (/* binding */ svg),
/* harmony export */   "xlink": () => (/* binding */ xlink),
/* harmony export */   "html": () => (/* binding */ html),
/* harmony export */   "mathml": () => (/* binding */ mathml),
/* harmony export */   "xml": () => (/* binding */ xml),
/* harmony export */   "xmlns": () => (/* binding */ xmlns)
/* harmony export */ });

const svg = 'http://www.w3.org/2000/svg'
const xlink = 'http://www.w3.org/1999/xlink'
const html = 'http://www.w3.org/1999/xhtml'
const mathml = 'http://www.w3.org/1998/Math/MathML'
const xml = 'http://www.w3.org/XML/1998/namespace'
const xmlns = 'http://www.w3.org/2000/xmlns/'


/***/ }),

/***/ "./src/utils/nodesToNode.js":
/*!**********************************!*\
  !*** ./src/utils/nodesToNode.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nodesToNode": () => (/* binding */ nodesToNode)
/* harmony export */ });
const nodesToNode = (nodes, document) => {
  nodes = nodes.map((node) => {
    if (typeof node === 'string') {
      return document.createTextNode(node)
    }
    return node
  })
  if (nodes.length === 1) { return nodes[0] }
  const node = document.createDocumentFragment()
  nodes.forEach(node.appendChild, node)
  return node
}


/***/ }),

/***/ "./src/utils/objectCreationUtils.js":
/*!******************************************!*\
  !*** ./src/utils/objectCreationUtils.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extend": () => (/* binding */ extend),
/* harmony export */   "extendStatic": () => (/* binding */ extendStatic),
/* harmony export */   "mixin": () => (/* binding */ mixin)
/* harmony export */ });
const extend = (...modules) => {
  var methods, key, i

  // Get object with extensions
  methods = modules.pop()

  for (i = modules.length - 1; i >= 0; i--) {
    for (key in methods) { modules[i].prototype[key] = methods[key] }
  }
}

const extendStatic = (...modules) => {
  var methods, key, i

  // Get object with extensions
  methods = modules.pop()

  for (i = modules.length - 1; i >= 0; i--) {
    for (key in methods) { modules[i][key] = methods[key] }
  }
}

// TODO: refactor so that it takes a class
const mixin = (mixin, _class) => {
  const descriptors = Object.getOwnPropertyDescriptors(mixin)
  // const all = Object.getOwnPropertyNames(mixin)

  // const propNames = Object.keys(descriptors)
  // const methodNames = all.filter(p => !propNames.includes(p))

  // for (const method of methodNames) {
  //   _class.prototype[method] = mixin[method]
  // }

  Object.defineProperties(_class.prototype, descriptors)
}


/***/ }),

/***/ "./src/utils/pathUtils.js":
/*!********************************!*\
  !*** ./src/utils/pathUtils.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pathParser": () => (/* binding */ pathParser),
/* harmony export */   "Arc": () => (/* binding */ Arc),
/* harmony export */   "pathBBox": () => (/* binding */ pathBBox),
/* harmony export */   "PathSegmentArray": () => (/* binding */ PathSegmentArray),
/* harmony export */   "getPathSegments": () => (/* binding */ getPathSegments),
/* harmony export */   "pointAtLength": () => (/* binding */ pointAtLength),
/* harmony export */   "length": () => (/* binding */ length),
/* harmony export */   "debug": () => (/* binding */ debug),
/* harmony export */   "getCloud": () => (/* binding */ getCloud),
/* harmony export */   "pathFrom": () => (/* binding */ pathFrom)
/* harmony export */ });
/* harmony import */ var _other_Box_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../other/Box.js */ "./src/other/Box.js");
/* harmony import */ var _other_Point_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../other/Point.js */ "./src/other/Point.js");
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./regex.js */ "./src/utils/regex.js");
/* harmony import */ var _dom_svg_SVGMatrix_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../dom/svg/SVGMatrix.js */ "./src/dom/svg/SVGMatrix.js");
/* harmony import */ var _PointCloud_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PointCloud.js */ "./src/utils/PointCloud.js");



// TODO: use own matrix implementation



const pathHandlers = {
  M (c, p, r, p0) {
    p.x = p0.x = c[0]
    p.y = p0.y = c[1]

    return new Move(p)
  },
  L (c, p) {
    const ret = new Line(p.x, p.y, c[0], c[1])// .offset(o)
    p.x = c[0]
    p.y = c[1]
    return ret
  },
  H (c, p) {
    return pathHandlers.L([ c[0], p.y ], p)
  },
  V (c, p) {
    return pathHandlers.L([ p.x, c[0] ], p)
  },
  Q (c, p, r) {
    const ret = Cubic.fromQuad(p, new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(c[0], c[1]), new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(c[2], c[3]))// .offset(o)
    p.x = c[2]
    p.y = c[3]

    const reflect = new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(c[0], c[1]).reflectAt(p)
    r.x = reflect.x
    r.y = reflect.y

    return ret
  },
  T (c, p, r, p0, reflectionIsPossible) {
    if (reflectionIsPossible) { c = [ r.x, r.y ].concat(c) } else { c = [ p.x, p.y ].concat(c) }
    return pathHandlers.Q(c, p, r)
  },
  C (c, p, r) {
    const ret = new Cubic(p, new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(c[0], c[1]), new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(c[2], c[3]), new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(c[4], c[5]))// .offset(o)
    p.x = c[4]
    p.y = c[5]
    const reflect = new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(c[2], c[3]).reflectAt(p)
    r.x = reflect.x
    r.y = reflect.y
    return ret
  },
  S (c, p, r, p0, reflectionIsPossible) {
    // reflection makes only sense if this command was preceeded by another beziere command (QTSC)
    if (reflectionIsPossible) { c = [ r.x, r.y ].concat(c) } else { c = [ p.x, p.y ].concat(c) }
    return pathHandlers.C(c, p, r)
  },
  Z (c, p, r, p0) {
    // FIXME: The behavior of Z depends on the command before
    return pathHandlers.L([ p0.x, p0.y ], p)
  },
  A (c, p, r) {
    const ret = new Arc(p, new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(c[5], c[6]), c[0], c[1], c[2], c[3], c[4])
    p.x = c[5]
    p.y = c[6]
    return ret
  }
}

const mlhvqtcsa = 'mlhvqtcsaz'.split('')

for (let i = 0, il = mlhvqtcsa.length; i < il; ++i) {
  pathHandlers[mlhvqtcsa[i]] = (function (i) {
    return function (c, p, r, p0, reflectionIsPossible) {
      if (i === 'H') c[0] = c[0] + p.x
      else if (i === 'V') c[0] = c[0] + p.y
      else if (i === 'A') {
        c[5] = c[5] + p.x
        c[6] = c[6] + p.y
      } else {
        for (let j = 0, jl = c.length; j < jl; ++j) {
          c[j] = c[j] + (j % 2 ? p.y : p.x)
        }
      }

      return pathHandlers[i](c, p, r, p0, reflectionIsPossible)
    }
  })(mlhvqtcsa[i].toUpperCase())
}

function pathRegReplace (a, b, c, d) {
  return c + d.replace(_regex_js__WEBPACK_IMPORTED_MODULE_2__.dots, ' .')
}

function isBeziere (obj) {
  return obj instanceof Cubic
}

const pathParser = (array) => {

  // prepare for parsing
  const paramCnt = { M: 2, L: 2, H: 1, V: 1, C: 6, S: 4, Q: 4, T: 2, A: 7, Z: 0 }

  array = array
    .replace(_regex_js__WEBPACK_IMPORTED_MODULE_2__.numbersWithDots, pathRegReplace) // convert 45.123.123 to 45.123 .123
    .replace(_regex_js__WEBPACK_IMPORTED_MODULE_2__.pathLetters, ' $& ') // put some room between letters and numbers
    .replace(_regex_js__WEBPACK_IMPORTED_MODULE_2__.hyphen, '$1 -') // add space before hyphen
    .trim() // trim
    .split(_regex_js__WEBPACK_IMPORTED_MODULE_2__.delimiter) // split into array

  // array now is an array containing all parts of a path e.g. ['M', '0', '0', 'L', '30', '30' ...]
  const arr = []
  const p = new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point()
  const p0 = new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point()
  const r = new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point()
  let index = 0
  const len = array.length
  let s

  do {
    // Test if we have a path letter
    if (_regex_js__WEBPACK_IMPORTED_MODULE_2__.isPathLetter.test(array[index])) {
      s = array[index]
      ++index
    // If last letter was a move command and we got no new, it defaults to [L]ine
    } else if (s === 'M') {
      s = 'L'
    } else if (s === 'm') {
      s = 'l'
    }

    arr.push(
      pathHandlers[s].call(null,
        array.slice(index, (index = index + paramCnt[s.toUpperCase()])).map(parseFloat),
        p, r, p0,
        isBeziere(arr[arr.length - 1])
      )
    )

  } while (len > index)

  return arr
}

class Move {
  constructor (p) {
    this.p1 = p.clone()
  }

  // FIXME: Use pointcloud
  bbox () {
    const p = this.p1
    return new _other_Box_js__WEBPACK_IMPORTED_MODULE_0__.Box(p.x, p.y, 0, 0)
  }

  getCloud () {
    return new _PointCloud_js__WEBPACK_IMPORTED_MODULE_4__.PointCloud([ this.p1 ])
  }

  length () { return 0 }

  toPath () {
    return [ 'M', this.p1.x, this.p1.y ].join(' ')
  }

  toPathFragment () {
    return [ 'M', this.p1.x, this.p1.y ]
  }

  transform (matrix) {
    this.p1.transformO(matrix)
    return this
  }
}

class Arc {
  constructor (p1, p2, rx, ry, φ, arc, sweep) {
    // https://www.w3.org/TR/SVG/implnote.html#ArcCorrectionOutOfRangeRadii
    if (!rx || !ry) return new Line(p1, p2)

    rx = Math.abs(rx)
    ry = Math.abs(ry)

    this.p1 = p1.clone()
    this.p2 = p2.clone()
    this.arc = arc ? 1 : 0
    this.sweep = sweep ? 1 : 0

    // Calculate cos and sin of angle phi
    const cosφ = Math.cos(φ / 180 * Math.PI)
    const sinφ = Math.sin(φ / 180 * Math.PI)

    // https://www.w3.org/TR/SVG/implnote.html#ArcConversionEndpointToCenter
    // (eq. 5.1)
    const p1_ = new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(
      (p1.x - p2.x) / 2,
      (p1.y - p2.y) / 2
    ).transform((0,_dom_svg_SVGMatrix_js__WEBPACK_IMPORTED_MODULE_3__.matrixFactory)(
      cosφ, -sinφ, sinφ, cosφ, 0, 0
    ))

    // (eq. 6.2)
    // Make sure the radius fit with the arc and correct if neccessary
    const ratio = (p1_.x ** 2 / rx ** 2) + (p1_.y ** 2 / ry ** 2)

    // (eq. 6.3)
    if (ratio > 1) {
      rx = Math.sqrt(ratio) * rx
      ry = Math.sqrt(ratio) * ry
    }

    // (eq. 5.2)
    const rxQuad = rx ** 2
    const ryQuad = ry ** 2

    const divisor1 = rxQuad * p1_.y ** 2
    const divisor2 = ryQuad * p1_.x ** 2
    const dividend = (rxQuad * ryQuad - divisor1 - divisor2)

    let c_
    if (Math.abs(dividend) < 1e-15) {
      c_ = new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(0, 0)
    } else {
      c_ = new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(
        rx * p1_.y / ry,
        -ry * p1_.x / rx
      ).mul(Math.sqrt(
        dividend / (divisor1 + divisor2)
      ))
    }

    if (this.arc === this.sweep) c_ = c_.mul(-1)

    // (eq. 5.3)
    const c = c_.transform((0,_dom_svg_SVGMatrix_js__WEBPACK_IMPORTED_MODULE_3__.matrixFactory)(
      cosφ, sinφ, -sinφ, cosφ, 0, 0
    )).add(new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(
      (p1.x + p2.x) / 2,
      (p1.y + p2.y) / 2
    ))

    const anglePoint = new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(
      (p1_.x - c_.x) / rx,
      (p1_.y - c_.y) / ry
    )

    /* For eq. 5.4 see angleTo function */

    // (eq. 5.5)
    const θ = new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(1, 0).angleTo(anglePoint)

    // (eq. 5.6)
    let Δθ = anglePoint.angleTo(new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(
      (-p1_.x - c_.x) / rx,
      (-p1_.y - c_.y) / ry
    ))

    Δθ = (Δθ % (2 * Math.PI))

    if (!sweep && Δθ > 0) Δθ -= 2 * Math.PI
    if (sweep && Δθ < 0) Δθ += 2 * Math.PI

    this.c = c
    this.theta = θ * 180 / Math.PI
    this.theta2 = (θ + Δθ) * 180 / Math.PI

    this.delta = Δθ * 180 / Math.PI
    this.rx = rx
    this.ry = ry
    this.phi = φ
    this.cosφ = cosφ
    this.sinφ = sinφ
  }

  static fromCenterForm (c, rx, ry, φ, θ, Δθ) {
    const cosφ = Math.cos(φ / 180 * Math.PI)
    const sinφ = Math.sin(φ / 180 * Math.PI)
    const m = (0,_dom_svg_SVGMatrix_js__WEBPACK_IMPORTED_MODULE_3__.matrixFactory)(cosφ, sinφ, -sinφ, cosφ, 0, 0)

    const p1 = new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(
      rx * Math.cos(θ / 180 * Math.PI),
      ry * Math.sin(θ / 180 * Math.PI)
    ).transform(m).add(c)

    const p2 = new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(
      rx * Math.cos((θ + Δθ) / 180 * Math.PI),
      ry * Math.sin((θ + Δθ) / 180 * Math.PI)
    ).transform(m).add(c)

    const arc = Math.abs(Δθ) > 180 ? 1 : 0
    const sweep = Δθ > 0 ? 1 : 0

    return new Arc(p1, p2, rx, ry, φ, arc, sweep)
  }

  bbox () {
    const cloud = this.getCloud()
    return cloud.bbox()
  }

  clone () {
    return new Arc(this.p1, this.p2, this.rx, this.ry, this.phi, this.arc, this.sweep)
  }

  getCloud () {
    if (this.p1.equals(this.p2)) return new _PointCloud_js__WEBPACK_IMPORTED_MODULE_4__.PointCloud([ this.p1 ])

    // arc could be rotated. the min and max values then dont lie on multiples of 90 degress but are shifted by the rotation angle
    // so we first calculate our 0/90 degree angle
    let θ01 = Math.atan(-this.sinφ / this.cosφ * this.ry / this.rx) * 180 / Math.PI
    let θ02 = Math.atan(this.cosφ / this.sinφ * this.ry / this.rx) * 180 / Math.PI
    let θ1 = this.theta
    let θ2 = this.theta2

    if (θ1 < 0 || θ2 < 0) {
      θ1 += 360
      θ2 += 360
    }

    if (θ2 < θ1) {
      const temp = θ1
      θ1 = θ2
      θ2 = temp

    }

    while (θ01 - 90 > θ01) θ01 -= 90
    while (θ01 < θ1) θ01 += 90
    while (θ02 - 90 > θ02) θ02 -= 90
    while (θ02 < θ1) θ02 += 90

    const angleToTest = [ θ01, θ02, (θ01 + 90), (θ02 + 90), (θ01 + 180), (θ02 + 180), (θ01 + 270), (θ02 + 270) ]

    const points = angleToTest.filter(function (angle) {
      return (angle > θ1 && angle < θ2)
    }).map(function (angle) {
      while (this.theta < angle) angle -= 360
      return this.pointAt(((angle - this.theta) % 360) / (this.delta)) // TODO: replace that call with pointAtAngle
    }.bind(this)).concat(this.p1, this.p2)

    return new _PointCloud_js__WEBPACK_IMPORTED_MODULE_4__.PointCloud(points)
  }

  length () {
    if (this.p1.equals(this.p2)) return 0

    const length = this.p2.sub(this.p1).abs()

    const ret = this.splitAt(0.5)
    const len1 = ret[0].p2.sub(ret[0].p1).abs()
    const len2 = ret[1].p2.sub(ret[1].p1).abs()

    if (len1 + len2 - length < 0.00001) {
      return len1 + len2
    }

    return ret[0].length() + ret[1].length()
  }

  pointAt (t) {
    if (this.p1.equals(this.p2)) return this.p1.clone()

    const tInAngle = (this.theta + t * this.delta) / 180 * Math.PI
    const sinθ = Math.sin(tInAngle)
    const cosθ = Math.cos(tInAngle)

    return new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(
      this.cosφ * this.rx * cosθ - this.sinφ * this.ry * sinθ + this.c.x,
      this.sinφ * this.ry * cosθ + this.cosφ * this.rx * sinθ + this.c.y
    )
  }

  splitAt (t) {
    const absDelta = Math.abs(this.delta)
    const delta1 = absDelta * t
    const delta2 = absDelta * (1 - t)

    const pointAtT = this.pointAt(t)

    return [
      new Arc(this.p1, pointAtT, this.rx, this.ry, this.phi, delta1 > 180, this.sweep),
      new Arc(pointAtT, this.p2, this.rx, this.ry, this.phi, delta2 > 180, this.sweep)
    ]
  }

  toPath () {
    return [ 'M', this.p1.x, this.p1.y, 'A', this.rx, this.ry, this.phi, this.arc, this.sweep, this.p2.x, this.p2.y ].join(' ')
  }

  toPathFragment () {
    return [ 'A', this.rx, this.ry, this.phi, this.arc, this.sweep, this.p2.x, this.p2.y ]
  }

  toString () {
    return `p1: ${this.p1.x.toFixed(4)} ${this.p1.y.toFixed(4)}, p2: ${this.p2.x.toFixed(4)} ${this.p2.y.toFixed(4)}, c: ${this.c.x.toFixed(4)} ${this.c.y.toFixed(4)} theta: ${this.theta.toFixed(4)}, theta2: ${this.theta2.toFixed(4)}, delta: ${this.delta.toFixed(4)}, large: ${this.arc}, sweep: ${this.sweep}`
  }

  transform (matrix) {
    return new Arc(this.p1.transform(matrix), this.p2.transform(matrix), this.rx, this.ry, this.phi, this.arc, this.sweep)
  }
}

class Cubic {
  constructor (p1, c1, c2, p2) {
    if (p1 instanceof _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point) {
      this.p1 = new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(p1)
      this.c1 = new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(c1)
      this.c2 = new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(c2)
      this.p2 = new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(p2)
    } else {
      this.p1 = new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(p1.p1)
      this.c1 = new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(p1.c1)
      this.c2 = new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(p1.c2)
      this.p2 = new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(p1.p2)
    }
  }

  static fromQuad (p1, c, p2) {
    const c1 = p1.mul(1 / 3).add(c.mul(2 / 3))
    const c2 = c.mul(2 / 3).add(p2.mul(1 / 3))
    return new Cubic(p1, c1, c2, p2)
  }

  bbox () {
    return this.getCloud().bbox()
  }

  findRoots () {
    return this.findRootsX().concat(this.findRootsY())
  }

  findRootsX () {
    return this.findRootsXY(this.p1.x, this.c1.x, this.c2.x, this.p2.x)
  }

  findRootsXY (p1, p2, p3, p4) {
    const a = 3 * (-p1 + 3 * p2 - 3 * p3 + p4)
    const b = 6 * (p1 - 2 * p2 + p3)
    const c = 3 * (p2 - p1)

    if (a === 0) return [ -c / b ].filter(function (el) { return el > 0 && el < 1 })

    if (b * b - 4 * a * c < 0) return []
    if (b * b - 4 * a * c === 0) return [ Math.round((-b / (2 * a)) * 100000) / 100000 ].filter(function (el) { return el > 0 && el < 1 })

    return [
      Math.round((-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a) * 100000) / 100000,
      Math.round((-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a) * 100000) / 100000
    ].filter(function (el) { return el > 0 && el < 1 })
  }

  findRootsY () {
    return this.findRootsXY(this.p1.y, this.c1.y, this.c2.y, this.p2.y)
  }

  flatness () {
    let ux = Math.pow(3 * this.c1.x - 2 * this.p1.x - this.p2.x, 2)
    let uy = Math.pow(3 * this.c1.y - 2 * this.p1.y - this.p2.y, 2)
    const vx = Math.pow(3 * this.c2.x - 2 * this.p2.x - this.p1.x, 2)
    const vy = Math.pow(3 * this.c2.y - 2 * this.p2.y - this.p1.y, 2)

    if (ux < vx) { ux = vx }
    if (uy < vy) { uy = vy }

    return ux + uy
  }

  getCloud () {
    const points = this.findRoots()
      .filter(root => root !== 0 && root !== 1)
      .map(root => this.pointAt(root))
      .concat(this.p1, this.p2)

    return new _PointCloud_js__WEBPACK_IMPORTED_MODULE_4__.PointCloud(points)
  }

  length () {
    return this.lengthAt()
  }

  lengthAt (t = 1) {
    const curves = this.splitAt(t)[0].makeFlat(t)

    let length = 0
    for (let i = 0, len = curves.length; i < len; ++i) {
      length += curves[i].p2.sub(curves[i].p1).abs()
    }

    return length
  }

  makeFlat (t) {
    if (this.flatness() > 0.15) {
      return this.splitAt(0.5)
        .map(function (el) { return el.makeFlat(t * 0.5) })
        .reduce(function (last, current) { return last.concat(current) }, [])
    } else {
      this.t_value = t
      return [ this ]
    }
  }

  pointAt (t) {
    return new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(
      (1 - t) * (1 - t) * (1 - t) * this.p1.x + 3 * (1 - t) * (1 - t) * t * this.c1.x + 3 * (1 - t) * t * t * this.c2.x + t * t * t * this.p2.x,
      (1 - t) * (1 - t) * (1 - t) * this.p1.y + 3 * (1 - t) * (1 - t) * t * this.c1.y + 3 * (1 - t) * t * t * this.c2.y + t * t * t * this.p2.y
    )
  }

  splitAt (z) {
    const x = this.splitAtScalar(z, 'x')
    const y = this.splitAtScalar(z, 'y')

    const a = new Cubic(
      new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(x[0][0], y[0][0]),
      new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(x[0][1], y[0][1]),
      new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(x[0][2], y[0][2]),
      new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(x[0][3], y[0][3])
    )

    const b = new Cubic(
      new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(x[1][0], y[1][0]),
      new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(x[1][1], y[1][1]),
      new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(x[1][2], y[1][2]),
      new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(x[1][3], y[1][3])
    )

    return [ a, b ]
  }

  splitAtScalar (z, p) {
    const p1 = this.p1[p]
    const p2 = this.c1[p]
    const p3 = this.c2[p]
    const p4 = this.p2[p]

    const t = z * z * z * p4 - 3 * z * z * (z - 1) * p3 + 3 * z * (z - 1) * (z - 1) * p2 - (z - 1) * (z - 1) * (z - 1) * p1

    return [
      [
        p1,
        z * p2 - (z - 1) * p1,
        z * z * p3 - 2 * z * (z - 1) * p2 + (z - 1) * (z - 1) * p1,
        t
      ],
      [
        t,
        z * z * p4 - 2 * z * (z - 1) * p3 + (z - 1) * (z - 1) * p2,
        z * p4 - (z - 1) * p3,
        p4
      ]
    ]
  }

  toPath () {
    return [ 'M', this.p1.x, this.p1.y ].concat(this.toPathFragment()).join(' ')
  }

  toPathFragment () {
    return [ 'C', this.c1.x, this.c1.y, this.c2.x, this.c2.y, this.p2.x, this.p2.y ]
  }

  transform (matrix) {
    this.p1.transformO(matrix)
    this.c1.transformO(matrix)
    this.c2.transformO(matrix)
    this.p2.transformO(matrix)
    return this
  }
}

class Line {
  constructor (x1, y1, x2, y2) {
    if (x1 instanceof Object) {
      this.p1 = new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(x1)
      this.p2 = new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(y1)
    } else {
      this.p1 = new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(x1, y1)
      this.p2 = new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(x2, y2)
    }
  }

  bbox () {
    return this.getCloud().bbox()
  }

  getCloud () {
    return new _PointCloud_js__WEBPACK_IMPORTED_MODULE_4__.PointCloud([ this.p1, this.p2 ])
  }

  length () {
    return this.p2.sub(this.p1).abs()
  }

  pointAt (t) {
    const vec = this.p2.sub(this.p1).mul(t)
    return this.p1.add(vec)
  }

  toPath () {
    return [ 'M', this.p1.x, this.p1.y, this.p2.x, this.p2.y ].join(' ')
  }

  toPathFragment () {
    return [ 'L', this.p2.x, this.p2.y ]
  }

  transform (matrix) {
    this.p1.transformO(matrix)
    this.p2.transformO(matrix)
    return this
  }
}

const pathBBox = function (d) {
  return pathParser(d).reduce((l, c) => l.merge(c.bbox()), new _other_Box_js__WEBPACK_IMPORTED_MODULE_0__.NoBox())
}

class PathSegmentArray extends Array {
  bbox () {
    return this.reduce((l, c) => l.merge(c.bbox()), new _other_Box_js__WEBPACK_IMPORTED_MODULE_0__.NoBox())
  }

  cloud () {
    return this.reduce(
      (cloud, segment) => segment.getCloud().merge(cloud),
      new _PointCloud_js__WEBPACK_IMPORTED_MODULE_4__.PointCloud()
    )
  }

  merge (other) {
    return this.concat(other)
    // return [ ...this, ...other ]
  }

  transform (matrix) {
    return this.map(segment => segment.transform(matrix))
  }
}

const getPathSegments = function (d) {
  return new PathSegmentArray(...pathParser(d))
}

const pointAtLength = function (d, len) {
  const segs = pathParser(d)

  const segLengths = segs.map(el => el.length())

  const length = segLengths.reduce((l, c) => l + c, 0)

  let i = 0

  let t = len / length

  // FIXME: Pop Move before using shortcut?
  // shortcut for trivial cases
  if (t >= 1) {
    // Check if there is a p2. If not, use p1
    if (segs[segs.length - 1].p2) {
      return segs[segs.length - 1].p2.native()
    } else {
      return segs[segs.length - 1].p1.native()
    }
  }

  if (t <= 0) return segs[0].p1.native()

  // remove move commands at the very end of the path
  while (segs[segs.length - 1] instanceof Move) segs.pop()

  let segEnd = 0

  for (const il = segLengths.length; i < il; ++i) {
    const k = segLengths[i] / length
    segEnd += k

    if (segEnd > t) {
      break
    }
  }

  const ratio = length / segLengths[i]
  t = ratio * (t - segEnd) + 1

  return segs[i].pointAt(t).native()
}

const length = function (d) {
  return pathParser(d)
    .reduce((l, c) => l + c.length(), 0)
}

const debug = function (node) {
  const parse = pathParser(node.getAttribute('d'))

  const ret = {
    paths: parse.map(el => el.toPath()),
    fragments: parse.map(el => el.toPathFragment().join(' ')),
    bboxs: parse.map(el => {
      const box = el.bbox()
      return [ box.x, box.y, box.width, box.height ]
    }),
    bbox: parse.reduce((l, c) => l.merge(c.bbox()), new _other_Box_js__WEBPACK_IMPORTED_MODULE_0__.NoBox()),
    bboxsTransformed: parse.map(el => {
      return el.getCloud().transform(node.matrixify()).bbox()
    })
  }

  return Object.assign({}, ret, {
    bboxTransformed: ret.bboxsTransformed.reduce((l, c) => l.merge(c), new _other_Box_js__WEBPACK_IMPORTED_MODULE_0__.NoBox())
  })
}

const getCloud = (d) => {
  return pathParser(d).reduce((cloud, segment) =>
    segment.getCloud().merge(cloud), new _PointCloud_js__WEBPACK_IMPORTED_MODULE_4__.PointCloud()
  )
}

const pathFrom = {
  box ({ x, y, width, height }) {
    return `M ${x} ${y} h ${width} v ${height} H ${x} V ${y}`
  },
  rect (node) {
    const width = parseFloat(node.getAttribute('width')) || 0
    const height = parseFloat(node.getAttribute('height')) || 0
    const x = parseFloat(node.getAttribute('x')) || 0
    const y = parseFloat(node.getAttribute('y')) || 0
    return `M ${x} ${y} h ${width} v ${height} H ${x} V ${y}`
  },
  circle (node) {
    const r = parseFloat(node.getAttribute('r')) || 0
    const x = parseFloat(node.getAttribute('cx')) || 0
    const y = parseFloat(node.getAttribute('cy')) || 0

    if (r === 0) return 'M0 0'

    return `M ${x - r} ${y} A ${r} ${r} 0 0 0 ${x + r} ${y} A ${r} ${r} 0 0 0 ${x - r} ${y}`
  },
  ellipse (node) {
    const rx = parseFloat(node.getAttribute('rx')) || 0
    const ry = parseFloat(node.getAttribute('ry')) || 0
    const x = parseFloat(node.getAttribute('cx')) || 0
    const y = parseFloat(node.getAttribute('cy')) || 0

    return `M ${x - rx} ${y} A ${rx} ${ry} 0 0 0 ${x + rx} ${y} A ${rx} ${ry} 0 0 0 ${x - rx} ${y}`
  },
  line (node) {
    const x1 = parseFloat(node.getAttribute('x1')) || 0
    const x2 = parseFloat(node.getAttribute('x2')) || 0
    const y1 = parseFloat(node.getAttribute('y1')) || 0
    const y2 = parseFloat(node.getAttribute('y2')) || 0

    return `M ${x1} ${y1} L ${x2} ${y2}`
  },
  polygon (node) {
    return `M ${node.getAttribute('points')} z`
  },
  polyline (node) {
    return `M ${node.getAttribute('points')}`
  }
}


/***/ }),

/***/ "./src/utils/regex.js":
/*!****************************!*\
  !*** ./src/utils/regex.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "transforms": () => (/* binding */ transforms),
/* harmony export */   "delimiter": () => (/* binding */ delimiter),
/* harmony export */   "hyphen": () => (/* binding */ hyphen),
/* harmony export */   "pathLetters": () => (/* binding */ pathLetters),
/* harmony export */   "isPathLetter": () => (/* binding */ isPathLetter),
/* harmony export */   "numbersWithDots": () => (/* binding */ numbersWithDots),
/* harmony export */   "dots": () => (/* binding */ dots)
/* harmony export */ });
// splits a transformation chain
const transforms = /\)\s*,?\s*/

// split at whitespace and comma
const delimiter = /[\s,]+/

// The following regex are used to parse the d attribute of a path

// Matches all hyphens which are not after an exponent
const hyphen = /([^e])-/gi

// Replaces and tests for all path letters
const pathLetters = /[MLHVCSQTAZ]/gi

// yes we need this one, too
const isPathLetter = /[MLHVCSQTAZ]/i

// matches 0.154.23.45
const numbersWithDots = /((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi

// matches .
const dots = /\./g


/***/ }),

/***/ "./src/utils/strUtils.js":
/*!*******************************!*\
  !*** ./src/utils/strUtils.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fullHex": () => (/* binding */ fullHex),
/* harmony export */   "hexToRGB": () => (/* binding */ hexToRGB),
/* harmony export */   "decamelize": () => (/* binding */ decamelize),
/* harmony export */   "camelCase": () => (/* binding */ camelCase),
/* harmony export */   "removeQuotes": () => (/* binding */ removeQuotes),
/* harmony export */   "htmlEntities": () => (/* binding */ htmlEntities),
/* harmony export */   "unhtmlEntities": () => (/* binding */ unhtmlEntities),
/* harmony export */   "cdata": () => (/* binding */ cdata),
/* harmony export */   "comment": () => (/* binding */ comment),
/* harmony export */   "splitNotInBrackets": () => (/* binding */ splitNotInBrackets)
/* harmony export */ });
// Ensure to six-based hex
const fullHex = function (hex) {
  return hex.length === 4
    ? [ '#',
      hex.substring(1, 2), hex.substring(1, 2),
      hex.substring(2, 3), hex.substring(2, 3),
      hex.substring(3, 4), hex.substring(3, 4)
    ].join('') : hex
}

const hexToRGB = function (valOrMap) {
  if (typeof valOrMap instanceof Map) {
    for (const [ key, val ] of valOrMap) {
      valOrMap.set(key, hexToRGB(val))
    }
    return valOrMap
  }

  if (!/#[0-9a-f]{3,6}/.test(valOrMap)) { return valOrMap }

  valOrMap = fullHex(valOrMap)

  return 'rgb(' + [
    parseInt(valOrMap.slice(1, 3), 16),
    parseInt(valOrMap.slice(3, 5), 16),
    parseInt(valOrMap.slice(5, 7), 16)
  ].join(',') + ')'
}

function decamelize (s) {
  return String(s).replace(/([a-z])([A-Z])/g, function (m, g1, g2) {
    return g1 + '-' + g2.toLowerCase()
  })
}

function camelCase (s) {
  return String(s).replace(/([a-z])-([a-z])/g, function (m, g1, g2) {
    return g1 + g2.toUpperCase()
  })
}

function removeQuotes (str) {
  if (str.startsWith('"') || str.startsWith("'")) {
    return str.slice(1, -1)
  }
  return str
}

function htmlEntities (str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function unhtmlEntities (str) {
  return String(str).replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace('&quot;', '"')
}

function cdata (str) {
  return `<![CDATA[${str}]]>`
}

function comment (str) {
  return `<!--${str}-->`
}

const splitNotInBrackets = (str, delimiter) => {
  var roundBrackets = 0

  var squareBrackets = 0

  var lastIndex = 0

  var split = []

  var ch; var i; var il

  for (i = 0, il = str.length; i < il; ++i) {
    ch = str.charAt(i)

    if (ch === delimiter && !roundBrackets && !squareBrackets) {
      split.push(str.slice(lastIndex, i).trim())
      lastIndex = i + 1
      continue
    }

    if (ch === '(') ++roundBrackets
    else if (ch === ')') --roundBrackets
    else if (ch === '[') ++squareBrackets
    else if (ch === ']') --squareBrackets
  }

  split.push(str.slice(lastIndex).trim())
  return split
}


/***/ }),

/***/ "./src/utils/tagUtils.js":
/*!*******************************!*\
  !*** ./src/utils/tagUtils.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tag": () => (/* binding */ tag),
/* harmony export */   "cloneNode": () => (/* binding */ cloneNode)
/* harmony export */ });
const htmlEntities = function (str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

var emptyElements = {
  br: true,
  hr: true,
  img: true,
  link: true
}

const tag = function (node) {
  const attrs = [ ...node.attrs ].map(function (node) {
    return (node.prefix ? node.prefix + ':' : '') + node.localName + '="' + htmlEntities(node.value) + '"'
  })

  const { prefix, localName } = node
  const qualifiedName = (prefix ? prefix + ':' : '') + localName

  return '<' + [].concat(qualifiedName, attrs).join(' ') + '>' + (emptyElements[qualifiedName.toLowerCase()] ? '' : node.innerHTML + '</' + qualifiedName + '>')
}

const cloneNode = function (node) {

  const { prefix, localName, namespaceURI: ns, nodeValue, ownerDocument } = node

  // Build up the correctly cased qualified name
  const qualifiedName = (prefix ? prefix + ':' : '') + localName

  // Check if node was created using non-namespace function which can lead to : in the localName.
  // This check allows false negatives because `local` only matters IF there are : in the localName
  // and we dont care about it when there are non
  const local = localName.includes(':')

  var clone = new node.constructor(qualifiedName, {
    attrs: new Set([ ...node.attrs ].map(node => node.cloneNode())),
    nodeValue,
    ownerDocument,
    local
  }, ns)

  return clone
}


/***/ }),

/***/ "./src/utils/textUtils.js":
/*!********************************!*\
  !*** ./src/utils/textUtils.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "textBBox": () => (/* binding */ textBBox)
/* harmony export */ });
/* harmony import */ var node_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node:path */ "node:path");
/* harmony import */ var fontkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fontkit */ "fontkit");
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaults.js */ "./src/utils/defaults.js");
/* harmony import */ var _other_Box_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../other/Box.js */ "./src/other/Box.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config.js */ "./src/config.js");






const textBBox = function (text, x, y, details) {

  if (!text) return new _other_Box_js__WEBPACK_IMPORTED_MODULE_3__.NoBox()

  const config = (0,_config_js__WEBPACK_IMPORTED_MODULE_4__.getConfig)()
  const preloaded = (0,_config_js__WEBPACK_IMPORTED_MODULE_4__.getFonts)()

  const families = (details.fontFamily || _defaults_js__WEBPACK_IMPORTED_MODULE_2__.fontFamily).split(/\s*,\s*/)
  const fontMap = Object.assign({}, _defaults_js__WEBPACK_IMPORTED_MODULE_2__.fontFamilyMappings, config.fontFamilyMappings)
  const fontSize = details.fontSize || _defaults_js__WEBPACK_IMPORTED_MODULE_2__.fontSize
  const fontDir = config.fontDir || _defaults_js__WEBPACK_IMPORTED_MODULE_2__.fontDir
  let fontFamily
  let font

  for (let i = 0, il = families.length; i < il; ++i) {
    if (fontMap[families[i]]) {
      fontFamily = families[i]
      break
    }
  }

  if (!fontFamily) {
    fontFamily = _defaults_js__WEBPACK_IMPORTED_MODULE_2__.fontFamily
  }

  if (preloaded[fontFamily]) {
    font = preloaded[fontFamily]
  } else {
    const filename = node_path__WEBPACK_IMPORTED_MODULE_0__.join(fontDir, fontMap[fontFamily])
    try {
      font = fontkit__WEBPACK_IMPORTED_MODULE_1__.openSync(filename)
    } catch (e) {
      console.warn(`Could not open font "${fontFamily}" in file "${filename}". ${e.toString()}`)
      return new _other_Box_js__WEBPACK_IMPORTED_MODULE_3__.NoBox()
    }

    preloaded[fontFamily] = font
  }

  const fontHeight = font.ascent - font.descent
  const lineHeight = fontHeight > font.unitsPerEm ? fontHeight : fontHeight + font.lineGap

  const height = lineHeight / font.unitsPerEm * fontSize
  const width = font.layout(text).glyphs.reduce((last, curr) => last + curr.advanceWidth, 0) / font.unitsPerEm * fontSize

  // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/text-anchor
  let xAdjust = 0
  if (details.textAnchor === 'end') {
    xAdjust = -width
  } else if (details.textAnchor === 'middle') {
    xAdjust = -width / 2
  }

  // https://www.w3.org/TR/2002/WD-css3-linebox-20020515/
  // 4.2. Baseline identifiers
  let yAdjust = font.ascent // alphabetic
  if (details.dominantBaseline === 'before-edge' || details.dominantBaseline === 'text-before-edge') {
    yAdjust = 0
  } else if (details.dominantBaseline === 'hanging') {
    yAdjust = font.ascent - font.xHeight - font.capHeight
  } else if (details.dominantBaseline === 'mathematical') {
    yAdjust = font.ascent - font.xHeight
  } else if (details.dominantBaseline === 'middle') {
    yAdjust = font.ascent - font.xHeight / 2
  } else if (details.dominantBaseline === 'central') {
    yAdjust = font.ascent / 2 + font.descent / 2
  } else if (details.dominantBaseline === 'ideographic') {
    yAdjust = font.ascent + font.descent
  }

  return new _other_Box_js__WEBPACK_IMPORTED_MODULE_3__.Box(x + xAdjust, y - yAdjust / font.unitsPerEm * fontSize, width, height)
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./main-module.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Attr": () => (/* reexport safe */ _src_dom_Attr_js__WEBPACK_IMPORTED_MODULE_1__.Attr),
/* harmony export */   "CharacterData": () => (/* reexport safe */ _src_dom_CharacterData_js__WEBPACK_IMPORTED_MODULE_2__.CharacterData),
/* harmony export */   "Comment": () => (/* reexport safe */ _src_dom_Comment_js__WEBPACK_IMPORTED_MODULE_3__.Comment),
/* harmony export */   "CustomEvent": () => (/* reexport safe */ _src_dom_CustomEvent_js__WEBPACK_IMPORTED_MODULE_4__.CustomEvent),
/* harmony export */   "DOMImplementation": () => (/* reexport safe */ _src_dom_Document_js__WEBPACK_IMPORTED_MODULE_5__.DOMImplementation),
/* harmony export */   "Document": () => (/* reexport safe */ _src_dom_Document_js__WEBPACK_IMPORTED_MODULE_5__.Document),
/* harmony export */   "DocumentFragment": () => (/* reexport safe */ _src_dom_DocumentFragment_js__WEBPACK_IMPORTED_MODULE_6__.DocumentFragment),
/* harmony export */   "Element": () => (/* reexport safe */ _src_dom_Element_js__WEBPACK_IMPORTED_MODULE_7__.Element),
/* harmony export */   "Event": () => (/* reexport safe */ _src_dom_Event_js__WEBPACK_IMPORTED_MODULE_8__.Event),
/* harmony export */   "EventTarget": () => (/* reexport safe */ _src_dom_EventTarget_js__WEBPACK_IMPORTED_MODULE_9__.EventTarget),
/* harmony export */   "Node": () => (/* reexport safe */ _src_dom_Node_js__WEBPACK_IMPORTED_MODULE_10__.Node),
/* harmony export */   "NodeFilter": () => (/* reexport safe */ _src_dom_NodeFilter_js__WEBPACK_IMPORTED_MODULE_11__.NodeFilter),
/* harmony export */   "Text": () => (/* reexport safe */ _src_dom_Text_js__WEBPACK_IMPORTED_MODULE_12__.Text),
/* harmony export */   "Window": () => (/* reexport safe */ _src_dom_Window_js__WEBPACK_IMPORTED_MODULE_13__.Window),
/* harmony export */   "HTMLElement": () => (/* reexport safe */ _src_dom_html_HTMLElement_js__WEBPACK_IMPORTED_MODULE_14__.HTMLElement),
/* harmony export */   "HTMLImageElement": () => (/* reexport safe */ _src_dom_html_HTMLImageElement_js__WEBPACK_IMPORTED_MODULE_15__.HTMLImageElement),
/* harmony export */   "HTMLLinkElement": () => (/* reexport safe */ _src_dom_html_HTMLLinkElement_js__WEBPACK_IMPORTED_MODULE_16__.HTMLLinkElement),
/* harmony export */   "HTMLParser": () => (/* reexport safe */ _src_dom_html_HTMLParser_js__WEBPACK_IMPORTED_MODULE_17__.HTMLParser),
/* harmony export */   "HTMLScriptElement": () => (/* reexport safe */ _src_dom_html_HTMLScriptElement_js__WEBPACK_IMPORTED_MODULE_18__.HTMLScriptElement),
/* harmony export */   "elementAccess": () => (/* reexport safe */ _src_dom_mixins_elementAccess_js__WEBPACK_IMPORTED_MODULE_19__.elementAccess),
/* harmony export */   "ParentNode": () => (/* reexport safe */ _src_dom_mixins_ParentNode_js__WEBPACK_IMPORTED_MODULE_20__.ParentNode),
/* harmony export */   "SVGElement": () => (/* reexport safe */ _src_dom_svg_SVGElement_js__WEBPACK_IMPORTED_MODULE_21__.SVGElement),
/* harmony export */   "SVGGraphicsElement": () => (/* reexport safe */ _src_dom_svg_SVGGraphicsElement_js__WEBPACK_IMPORTED_MODULE_22__.SVGGraphicsElement),
/* harmony export */   "SVGMatrix": () => (/* reexport safe */ _src_dom_svg_SVGMatrix_js__WEBPACK_IMPORTED_MODULE_23__.SVGMatrix),
/* harmony export */   "matrixFactory": () => (/* reexport safe */ _src_dom_svg_SVGMatrix_js__WEBPACK_IMPORTED_MODULE_23__.matrixFactory),
/* harmony export */   "SVGPathElement": () => (/* reexport safe */ _src_dom_svg_SVGPathElement_js__WEBPACK_IMPORTED_MODULE_24__.SVGPathElement),
/* harmony export */   "SVGPoint": () => (/* reexport safe */ _src_dom_svg_SVGPoint_js__WEBPACK_IMPORTED_MODULE_25__.SVGPoint),
/* harmony export */   "SVGSVGElement": () => (/* reexport safe */ _src_dom_svg_SVGSVGElement_js__WEBPACK_IMPORTED_MODULE_26__.SVGSVGElement),
/* harmony export */   "SVGTextContentElement": () => (/* reexport safe */ _src_dom_svg_SVGTextContentElement_js__WEBPACK_IMPORTED_MODULE_27__.SVGTextContentElement),
/* harmony export */   "config": () => (/* reexport safe */ _src_config_js__WEBPACK_IMPORTED_MODULE_28__.config),
/* harmony export */   "getConfig": () => (/* reexport safe */ _src_config_js__WEBPACK_IMPORTED_MODULE_28__.getConfig),
/* harmony export */   "getFonts": () => (/* reexport safe */ _src_config_js__WEBPACK_IMPORTED_MODULE_28__.getFonts),
/* harmony export */   "preloadFonts": () => (/* reexport safe */ _src_config_js__WEBPACK_IMPORTED_MODULE_28__.preloadFonts),
/* harmony export */   "setFontDir": () => (/* reexport safe */ _src_config_js__WEBPACK_IMPORTED_MODULE_28__.setFontDir),
/* harmony export */   "setFontFamilyMappings": () => (/* reexport safe */ _src_config_js__WEBPACK_IMPORTED_MODULE_28__.setFontFamilyMappings),
/* harmony export */   "createDocument": () => (/* reexport safe */ _src_factories_js__WEBPACK_IMPORTED_MODULE_29__.createDocument),
/* harmony export */   "createHTMLDocument": () => (/* reexport safe */ _src_factories_js__WEBPACK_IMPORTED_MODULE_29__.createHTMLDocument),
/* harmony export */   "createHTMLWindow": () => (/* reexport safe */ _src_factories_js__WEBPACK_IMPORTED_MODULE_29__.createHTMLWindow),
/* harmony export */   "createSVGDocument": () => (/* reexport safe */ _src_factories_js__WEBPACK_IMPORTED_MODULE_29__.createSVGDocument),
/* harmony export */   "createSVGWindow": () => (/* reexport safe */ _src_factories_js__WEBPACK_IMPORTED_MODULE_29__.createSVGWindow),
/* harmony export */   "createWindow": () => (/* reexport safe */ _src_factories_js__WEBPACK_IMPORTED_MODULE_29__.createWindow),
/* harmony export */   "defaults": () => (/* reexport module object */ _src_utils_defaults_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _src_utils_defaults_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/utils/defaults.js */ "./src/utils/defaults.js");
/* harmony import */ var _src_dom_Attr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/dom/Attr.js */ "./src/dom/Attr.js");
/* harmony import */ var _src_dom_CharacterData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/dom/CharacterData.js */ "./src/dom/CharacterData.js");
/* harmony import */ var _src_dom_Comment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/dom/Comment.js */ "./src/dom/Comment.js");
/* harmony import */ var _src_dom_CustomEvent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/dom/CustomEvent.js */ "./src/dom/CustomEvent.js");
/* harmony import */ var _src_dom_Document_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/dom/Document.js */ "./src/dom/Document.js");
/* harmony import */ var _src_dom_DocumentFragment_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/dom/DocumentFragment.js */ "./src/dom/DocumentFragment.js");
/* harmony import */ var _src_dom_Element_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/dom/Element.js */ "./src/dom/Element.js");
/* harmony import */ var _src_dom_Event_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/dom/Event.js */ "./src/dom/Event.js");
/* harmony import */ var _src_dom_EventTarget_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/dom/EventTarget.js */ "./src/dom/EventTarget.js");
/* harmony import */ var _src_dom_Node_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/dom/Node.js */ "./src/dom/Node.js");
/* harmony import */ var _src_dom_NodeFilter_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/dom/NodeFilter.js */ "./src/dom/NodeFilter.js");
/* harmony import */ var _src_dom_Text_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/dom/Text.js */ "./src/dom/Text.js");
/* harmony import */ var _src_dom_Window_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./src/dom/Window.js */ "./src/dom/Window.js");
/* harmony import */ var _src_dom_html_HTMLElement_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./src/dom/html/HTMLElement.js */ "./src/dom/html/HTMLElement.js");
/* harmony import */ var _src_dom_html_HTMLImageElement_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./src/dom/html/HTMLImageElement.js */ "./src/dom/html/HTMLImageElement.js");
/* harmony import */ var _src_dom_html_HTMLLinkElement_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./src/dom/html/HTMLLinkElement.js */ "./src/dom/html/HTMLLinkElement.js");
/* harmony import */ var _src_dom_html_HTMLParser_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./src/dom/html/HTMLParser.js */ "./src/dom/html/HTMLParser.js");
/* harmony import */ var _src_dom_html_HTMLScriptElement_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./src/dom/html/HTMLScriptElement.js */ "./src/dom/html/HTMLScriptElement.js");
/* harmony import */ var _src_dom_mixins_elementAccess_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./src/dom/mixins/elementAccess.js */ "./src/dom/mixins/elementAccess.js");
/* harmony import */ var _src_dom_mixins_ParentNode_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./src/dom/mixins/ParentNode.js */ "./src/dom/mixins/ParentNode.js");
/* harmony import */ var _src_dom_svg_SVGElement_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./src/dom/svg/SVGElement.js */ "./src/dom/svg/SVGElement.js");
/* harmony import */ var _src_dom_svg_SVGGraphicsElement_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./src/dom/svg/SVGGraphicsElement.js */ "./src/dom/svg/SVGGraphicsElement.js");
/* harmony import */ var _src_dom_svg_SVGMatrix_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./src/dom/svg/SVGMatrix.js */ "./src/dom/svg/SVGMatrix.js");
/* harmony import */ var _src_dom_svg_SVGPathElement_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./src/dom/svg/SVGPathElement.js */ "./src/dom/svg/SVGPathElement.js");
/* harmony import */ var _src_dom_svg_SVGPoint_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./src/dom/svg/SVGPoint.js */ "./src/dom/svg/SVGPoint.js");
/* harmony import */ var _src_dom_svg_SVGSVGElement_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./src/dom/svg/SVGSVGElement.js */ "./src/dom/svg/SVGSVGElement.js");
/* harmony import */ var _src_dom_svg_SVGTextContentElement_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./src/dom/svg/SVGTextContentElement.js */ "./src/dom/svg/SVGTextContentElement.js");
/* harmony import */ var _src_config_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./src/config.js */ "./src/config.js");
/* harmony import */ var _src_factories_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./src/factories.js */ "./src/factories.js");


































})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQSxhQUFhLDhDQUFHO0FBQ2hCOzs7Ozs7O1VDN0VBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTm1EOztBQUVsQjtBQUNTO0FBQ047QUFDSTtBQUNIO0FBQ1E7QUFDVDtBQUNGO0FBQ007QUFDUDtBQUNNO0FBQ047QUFDRTtBQUNVO0FBQ0s7QUFDRDtBQUNMO0FBQ087QUFDRjtBQUNIO0FBQ0g7QUFDUTtBQUNUO0FBQ0s7QUFDTjtBQUNLO0FBQ1E7O0FBRXZCO0FBQ0c7QUFDZiIsInNvdXJjZXMiOlsid2VicGFjazovL3N2Z2RvbS9leHRlcm5hbCBjb21tb25qcyBcImZvbnRraXRcIiIsIndlYnBhY2s6Ly9zdmdkb20vZXh0ZXJuYWwgY29tbW9uanMgXCJpbWFnZS1zaXplXCIiLCJ3ZWJwYWNrOi8vc3ZnZG9tL2V4dGVybmFsIGNvbW1vbmpzIFwic2F4XCIiLCJ3ZWJwYWNrOi8vc3ZnZG9tL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJub2RlOnBhdGhcIiIsIndlYnBhY2s6Ly9zdmdkb20vZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcIm5vZGU6dXJsXCIiLCJ3ZWJwYWNrOi8vc3ZnZG9tL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvZG9tL0F0dHIuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL2RvbS9DaGFyYWN0ZXJEYXRhLmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy9kb20vQ29tbWVudC5qcyIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvZG9tL0N1c3RvbUV2ZW50LmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy9kb20vRG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL2RvbS9Eb2N1bWVudEZyYWdtZW50LmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy9kb20vRG9jdW1lbnRUeXBlLmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy9kb20vRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvZG9tL0V2ZW50LmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy9kb20vRXZlbnRUYXJnZXQuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL2RvbS9Ob2RlLmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy9kb20vTm9kZUZpbHRlci5qcyIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvZG9tL1RleHQuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL2RvbS9XaW5kb3cuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL2RvbS9odG1sL0hUTUxFbGVtZW50LmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy9kb20vaHRtbC9IVE1MSW1hZ2VFbGVtZW50LmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy9kb20vaHRtbC9IVE1MTGlua0VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL2RvbS9odG1sL0hUTUxQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL2RvbS9odG1sL0hUTUxTY3JpcHRFbGVtZW50LmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy9kb20vbWl4aW5zL0NoaWxkTm9kZS5qcyIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvZG9tL21peGlucy9Ob25Eb2N1bWVudFR5cGVDaGlsZE5vZGUuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL2RvbS9taXhpbnMvTm9uRWxlbWVudFBhcmVudE5vZGUuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL2RvbS9taXhpbnMvUGFyZW50Tm9kZS5qcyIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvZG9tL21peGlucy9lbGVtZW50QWNjZXNzLmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy9kb20vc3ZnL1NWR0FuaW1hdGVkTGVuZ3RoLmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy9kb20vc3ZnL1NWR0NpcmNsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL2RvbS9zdmcvU1ZHRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvZG9tL3N2Zy9TVkdFbGxpcHNlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvZG9tL3N2Zy9TVkdGb3JlaWduT2JqZWN0RWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvZG9tL3N2Zy9TVkdHcmFwaGljc0VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL2RvbS9zdmcvU1ZHSW1hZ2VFbGVtZW50LmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy9kb20vc3ZnL1NWR0xlbmd0aC5qcyIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvZG9tL3N2Zy9TVkdMaW5lRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvZG9tL3N2Zy9TVkdNYXRyaXguanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL2RvbS9zdmcvU1ZHUGF0aEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL2RvbS9zdmcvU1ZHUG9pbnQuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL2RvbS9zdmcvU1ZHUmVjdEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL2RvbS9zdmcvU1ZHU1ZHRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvZG9tL3N2Zy9TVkdUZXh0Q29udGVudEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL2ZhY3Rvcmllcy5qcyIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvb3RoZXIvQm94LmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy9vdGhlci9Dc3NRdWVyeS5qcyIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvb3RoZXIvUG9pbnQuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL3V0aWxzL05vZGVJdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvdXRpbHMvUG9pbnRDbG91ZC5qcyIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvdXRpbHMvYmJveFV0aWxzLmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy91dGlscy9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvdXRpbHMvbWFwVXRpbHMuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL3V0aWxzL25hbWVzcGFjZXMuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL3V0aWxzL25vZGVzVG9Ob2RlLmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy91dGlscy9vYmplY3RDcmVhdGlvblV0aWxzLmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy91dGlscy9wYXRoVXRpbHMuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL3V0aWxzL3JlZ2V4LmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy91dGlscy9zdHJVdGlscy5qcyIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvdXRpbHMvdGFnVXRpbHMuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL3V0aWxzL3RleHRVdGlscy5qcyIsIndlYnBhY2s6Ly9zdmdkb20vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3ZnZG9tL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zdmdkb20vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zdmdkb20vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zdmdkb20vLi9tYWluLW1vZHVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmb250a2l0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltYWdlLXNpemVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2F4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGU6cGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlOnVybFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgKiBhcyBmb250a2l0IGZyb20gJ2ZvbnRraXQnXG5cbmNvbnN0IF9jb25maWcgPSB7fVxuY29uc3QgZm9udHMgPSB7fVxuXG5leHBvcnQgY29uc3Qgc2V0Rm9udERpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgX2NvbmZpZy5mb250RGlyID0gZGlyXG4gIHJldHVybiB0aGlzXG59XG5cbmV4cG9ydCBjb25zdCBzZXRGb250RmFtaWx5TWFwcGluZ3MgPSBmdW5jdGlvbiAobWFwKSB7XG4gIF9jb25maWcuZm9udEZhbWlseU1hcHBpbmdzID0gbWFwXG4gIHJldHVybiB0aGlzXG59XG5cbi8vIFRPRE86IG1ha2UgYXN5bmNcbmV4cG9ydCBjb25zdCBwcmVsb2FkRm9udHMgPSAoKSA9PiB7XG4gIHZhciBtYXAgPSBfY29uZmlnLmZvbnRGYW1pbHlNYXBwaW5nc1xuXG4gIGZvciAoY29uc3QgWyBmb250LCBmaWxlIF0gb2YgT2JqZWN0LmVudHJpZXMobWFwKSkge1xuICAgIGNvbnN0IGZpbGVuYW1lID0gcGF0aC5qb2luKF9jb25maWcuZm9udERpciwgZmlsZSlcblxuICAgIHRyeSB7XG4gICAgICBmb250c1tmb250XSA9IGZvbnRraXQub3BlblN5bmMoZmlsZW5hbWUpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS53YXJuKGBDb3VsZCBub3QgbG9hZCBmb250IGZpbGUgZm9yICR7Zm9udH1gLCBlKVxuICAgIH1cbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5leHBvcnQgY29uc3QgZ2V0Q29uZmlnID0gKCkgPT4gX2NvbmZpZ1xuZXhwb3J0IGNvbnN0IGdldEZvbnRzID0gKCkgPT4gZm9udHNcblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgc2V0Rm9udERpcixcbiAgc2V0Rm9udEZhbWlseU1hcHBpbmdzLFxuICBwcmVsb2FkRm9udHMsXG4gIGdldENvbmZpZyxcbiAgZ2V0Rm9udHNcbn1cbiIsImltcG9ydCB7IE5vZGUgfSBmcm9tICcuL05vZGUuanMnXG5pbXBvcnQgeyBodG1sIH0gZnJvbSAnLi4vdXRpbHMvbmFtZXNwYWNlcy5qcydcblxuZXhwb3J0IGNsYXNzIEF0dHIgZXh0ZW5kcyBOb2RlIHtcbiAgY29uc3RydWN0b3IgKG5hbWUsIHByb3BzLCBucykge1xuICAgIHN1cGVyKG5hbWUsIHsgbm9kZVZhbHVlOiAnJywgLi4ucHJvcHMgfSwgbnMpXG5cbiAgICAvLyBGb2xsb3cgc3BlYyBhbmQgbG93ZXJjYXNlIG5vZGVOYW1lIGZvciBodG1sXG4gICAgdGhpcy5ub2RlTmFtZSA9IG5zID09PSBodG1sID8gbmFtZS50b0xvd2VyQ2FzZSgpIDogbmFtZVxuICAgIHRoaXMubm9kZVR5cGUgPSBOb2RlLkFUVFJJQlVURV9OT0RFXG4gICAgdGhpcy5vd25lckVsZW1lbnQgPSBudWxsXG4gIH1cblxuICBnZXQgdmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGVWYWx1ZVxuICB9XG5cbiAgc2V0IHZhbHVlICh2YWwpIHtcbiAgICB0aGlzLm5vZGVWYWx1ZSA9IHZhbFxuICB9XG5cbiAgZ2V0IG5hbWUgKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGVOYW1lXG4gIH1cbn1cbiIsImltcG9ydCB7IE5vZGUgfSBmcm9tICcuL05vZGUuanMnXG5pbXBvcnQgeyBtaXhpbiB9IGZyb20gJy4uL3V0aWxzL29iamVjdENyZWF0aW9uVXRpbHMuanMnXG5pbXBvcnQgeyBOb25Eb2N1bWVudFR5cGVDaGlsZE5vZGUgfSBmcm9tICcuL21peGlucy9Ob25Eb2N1bWVudFR5cGVDaGlsZE5vZGUuanMnXG5pbXBvcnQgeyBDaGlsZE5vZGUgfSBmcm9tICcuL21peGlucy9DaGlsZE5vZGUuanMnXG5cbmV4cG9ydCBjbGFzcyBDaGFyYWN0ZXJEYXRhIGV4dGVuZHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yIChuYW1lLCBwcm9wcykge1xuICAgIHN1cGVyKG5hbWUsIHByb3BzKVxuXG4gICAgdGhpcy5kYXRhID0gdGhpcy5ub2RlVmFsdWVcbiAgfVxuXG4gIGFwcGVuZERhdGEgKGRhdGEpIHtcbiAgICB0aGlzLmRhdGEgKz0gZGF0YVxuICB9XG5cbiAgZGVsZXRlRGF0YSAob2Zmc2V0LCBjb3VudCkge1xuICAgIHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5zbGljZSgwLCBvZmZzZXQpICsgdGhpcy5kYXRhLnNsaWNlKDAsIG9mZnNldCArIGNvdW50KVxuICB9XG5cbiAgaW5zZXJ0RGF0YSAob2Zmc2V0LCBkYXRhKSB7XG4gICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhLnNsaWNlKDAsIG9mZnNldCkgKyBkYXRhICsgdGhpcy5kYXRhLnNsaWNlKG9mZnNldClcbiAgfVxuXG4gIHJlcGxhY2VEYXRhIChvZmZzZXQsIGNvdW50LCBkYXRhKSB7XG4gICAgdGhpcy5kZWxldGVEYXRhKG9mZnNldCwgY291bnQpXG4gICAgdGhpcy5pbnNlcnREYXRhKG9mZnNldCwgZGF0YSlcbiAgfVxuXG4gIHN1YnN0cmluZ0RhdGEgKG9mZnNldCwgY291bnQpIHtcbiAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEuc3Vic3RyKG9mZnNldCwgY291bnQpXG4gIH1cblxuICBnZXQgbGVuZ3RoICgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmxlbmd0aFxuICB9XG59XG5cbm1peGluKE5vbkRvY3VtZW50VHlwZUNoaWxkTm9kZSwgQ2hhcmFjdGVyRGF0YSlcbm1peGluKENoaWxkTm9kZSwgQ2hhcmFjdGVyRGF0YSlcbiIsImltcG9ydCB7IENoYXJhY3RlckRhdGEgfSBmcm9tICcuL0NoYXJhY3RlckRhdGEuanMnXG5pbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi9Ob2RlLmpzJ1xuZXhwb3J0IGNsYXNzIENvbW1lbnQgZXh0ZW5kcyBDaGFyYWN0ZXJEYXRhIHtcbiAgY29uc3RydWN0b3IgKG5hbWUsIHByb3BzKSB7XG4gICAgc3VwZXIobmFtZSwgcHJvcHMpXG4gICAgdGhpcy5ub2RlVHlwZSA9IE5vZGUuQ09NTUVOVF9OT0RFXG4gIH1cbn1cbiIsImltcG9ydCB7IEV2ZW50IH0gZnJvbSAnLi9FdmVudC5qcydcbmV4cG9ydCBjbGFzcyBDdXN0b21FdmVudCBleHRlbmRzIEV2ZW50IHtcbiAgY29uc3RydWN0b3IgKG5hbWUsIHByb3BzID0ge30pIHtcbiAgICBzdXBlcihuYW1lKVxuICAgIHRoaXMuZGV0YWlsID0gcHJvcHMuZGV0YWlsIHx8IG51bGxcbiAgICB0aGlzLmNhbmNlbGFibGUgPSBwcm9wcy5jYW5jZWxhYmxlIHx8IGZhbHNlXG4gIH1cbn1cbiIsImltcG9ydCB7IE5vZGUgfSBmcm9tICcuL05vZGUuanMnXG5pbXBvcnQgeyBDb21tZW50IH0gZnJvbSAnLi9Db21tZW50LmpzJ1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4vVGV4dC5qcydcbmltcG9ydCB7IEF0dHIgfSBmcm9tICcuL0F0dHIuanMnXG5pbXBvcnQgeyBEb2N1bWVudEZyYWdtZW50IH0gZnJvbSAnLi9Eb2N1bWVudEZyYWdtZW50LmpzJ1xuaW1wb3J0IHsgSFRNTExpbmtFbGVtZW50IH0gZnJvbSAnLi9odG1sL0hUTUxMaW5rRWxlbWVudC5qcydcbmltcG9ydCB7IEhUTUxTY3JpcHRFbGVtZW50IH0gZnJvbSAnLi9odG1sL0hUTUxTY3JpcHRFbGVtZW50LmpzJ1xuaW1wb3J0IHsgSFRNTEltYWdlRWxlbWVudCB9IGZyb20gJy4vaHRtbC9IVE1MSW1hZ2VFbGVtZW50LmpzJ1xuaW1wb3J0IHsgSFRNTEVsZW1lbnQgfSBmcm9tICcuL2h0bWwvSFRNTEVsZW1lbnQuanMnXG5pbXBvcnQgeyBlbGVtZW50QWNjZXNzIH0gZnJvbSAnLi9taXhpbnMvZWxlbWVudEFjY2Vzcy5qcydcbmltcG9ydCB7IG1peGluIH0gZnJvbSAnLi4vdXRpbHMvb2JqZWN0Q3JlYXRpb25VdGlscy5qcydcbmltcG9ydCB7IFNWR1NWR0VsZW1lbnQgfSBmcm9tICcuL3N2Zy9TVkdTVkdFbGVtZW50LmpzJ1xuaW1wb3J0IHsgU1ZHUGF0aEVsZW1lbnQgfSBmcm9tICcuL3N2Zy9TVkdQYXRoRWxlbWVudC5qcydcbmltcG9ydCB7IFNWR1RleHRDb250ZW50RWxlbWVudCB9IGZyb20gJy4vc3ZnL1NWR1RleHRDb250ZW50RWxlbWVudC5qcydcbmltcG9ydCB7IFNWR0dyYXBoaWNzRWxlbWVudCB9IGZyb20gJy4vc3ZnL1NWR0dyYXBoaWNzRWxlbWVudC5qcydcbmltcG9ydCB7IFBhcmVudE5vZGUgfSBmcm9tICcuL21peGlucy9QYXJlbnROb2RlLmpzJ1xuaW1wb3J0IHsgc3ZnLCBodG1sIH0gZnJvbSAnLi4vdXRpbHMvbmFtZXNwYWNlcy5qcydcbmltcG9ydCB7IERvY3VtZW50VHlwZSB9IGZyb20gJy4vRG9jdW1lbnRUeXBlLmpzJ1xuaW1wb3J0IHsgTm9uRWxlbWVudFBhcmVudE5vZGUgfSBmcm9tICcuL21peGlucy9Ob25FbGVtZW50UGFyZW50Tm9kZS5qcydcbmltcG9ydCB7IFNWR1JlY3RFbGVtZW50IH0gZnJvbSAnLi9zdmcvU1ZHUmVjdEVsZW1lbnQuanMnXG5pbXBvcnQgeyBTVkdDaXJjbGVFbGVtZW50IH0gZnJvbSAnLi9zdmcvU1ZHQ2lyY2xlRWxlbWVudC5qcydcbmltcG9ydCB7IFNWR0xpbmVFbGVtZW50IH0gZnJvbSAnLi9zdmcvU1ZHTGluZUVsZW1lbnQuanMnXG5pbXBvcnQgeyBTVkdFbGxpcHNlRWxlbWVudCB9IGZyb20gJy4vc3ZnL1NWR0VsbGlwc2VFbGVtZW50LmpzJ1xuaW1wb3J0IHsgU1ZHRm9yZWlnbk9iamVjdEVsZW1lbnQgfSBmcm9tICcuL3N2Zy9TVkdGb3JlaWduT2JqZWN0RWxlbWVudC5qcydcbmltcG9ydCB7IFNWR0ltYWdlRWxlbWVudCB9IGZyb20gJy4vc3ZnL1NWR0ltYWdlRWxlbWVudC5qcydcblxuZnVuY3Rpb24gZ2V0Q2hpbGRCeVRhZ05hbWUgKHBhcmVudCwgbmFtZSkge1xuICBmb3IgKGxldCBjaGlsZCA9IHBhcmVudC5maXJzdENoaWxkOyBjaGlsZCAhPSBudWxsOyBjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nKSB7XG4gICAgaWYgKGNoaWxkLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSAmJiBjaGlsZC5ub2RlTmFtZSA9PT0gbmFtZSkge1xuICAgICAgcmV0dXJuIGNoaWxkXG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbmNvbnN0IGdldFNWR0VsZW1lbnRGb3JOYW1lID0gKG5hbWUpID0+IHtcbiAgc3dpdGNoIChuYW1lLnRvTG93ZXJDYXNlKCkpIHtcbiAgY2FzZSAnc3ZnJzpcbiAgICByZXR1cm4gU1ZHU1ZHRWxlbWVudFxuICBjYXNlICdwYXRoJzpcbiAgICByZXR1cm4gU1ZHUGF0aEVsZW1lbnRcbiAgY2FzZSAnY2lyY2xlJzpcbiAgICByZXR1cm4gU1ZHQ2lyY2xlRWxlbWVudFxuICBjYXNlICdlbGxpcHNlJzpcbiAgICByZXR1cm4gU1ZHRWxsaXBzZUVsZW1lbnRcbiAgY2FzZSAnbGluZSc6XG4gICAgcmV0dXJuIFNWR0xpbmVFbGVtZW50XG4gIGNhc2UgJ3JlY3QnOlxuICAgIHJldHVybiBTVkdSZWN0RWxlbWVudFxuICBjYXNlICdmb3JlaWduT2JqZWN0JzpcbiAgICByZXR1cm4gU1ZHRm9yZWlnbk9iamVjdEVsZW1lbnRcbiAgY2FzZSAnaW1hZ2UnOlxuICAgIHJldHVybiBTVkdJbWFnZUVsZW1lbnRcbiAgY2FzZSAndGV4dCc6XG4gIGNhc2UgJ3RzcGFuJzpcbiAgY2FzZSAndHJlZic6XG4gIGNhc2UgJ2FsdGdseXBoJzpcbiAgY2FzZSAndGV4dHBhdGgnOlxuICAgIHJldHVybiBTVkdUZXh0Q29udGVudEVsZW1lbnRcbiAgZGVmYXVsdDpcbiAgICByZXR1cm4gU1ZHR3JhcGhpY3NFbGVtZW50XG4gIH1cbn1cblxuY29uc3QgZ2V0SFRNTEVsZW1lbnRGb3JOYW1lID0gKG5hbWUpID0+IHtcbiAgc3dpdGNoIChuYW1lLnRvTG93ZXJDYXNlKCkpIHtcbiAgY2FzZSAnaW1nJzpcbiAgICByZXR1cm4gSFRNTEltYWdlRWxlbWVudFxuICBjYXNlICdsaW5rJzpcbiAgICByZXR1cm4gSFRNTExpbmtFbGVtZW50XG4gIGNhc2UgJ3NjcmlwdCc6XG4gICAgcmV0dXJuIEhUTUxTY3JpcHRFbGVtZW50XG4gIGRlZmF1bHQ6XG4gICAgcmV0dXJuIEhUTUxFbGVtZW50XG4gIH1cbn1cblxuY29uc3QgZ2V0RWxlbWVudEZvck5hbWVzcGFjZSA9IChucywgbmFtZSkgPT4ge1xuICBzd2l0Y2ggKG5zKSB7XG4gIGNhc2Ugc3ZnOlxuICAgIHJldHVybiBnZXRTVkdFbGVtZW50Rm9yTmFtZShuYW1lKVxuICBjYXNlIGh0bWw6XG4gIGNhc2UgbnVsbDpcbiAgY2FzZSAnJzpcbiAgZGVmYXVsdDpcbiAgICByZXR1cm4gZ2V0SFRNTEVsZW1lbnRGb3JOYW1lKG5hbWUpXG4gIH1cbn1cblxuLy8gRmVhdHVyZS92ZXJzaW9uIHBhaXJzIHRoYXQgRE9NSW1wbGVtZW50YXRpb24uaGFzRmVhdHVyZSgpIHJldHVybnMgdHJ1ZSBmb3IuICBJdCByZXR1cm5zIGZhbHNlIGZvciBhbnl0aGluZyBlbHNlLlxuY29uc3Qgc3VwcG9ydGVkRmVhdHVyZXMgPSB7XG4gIHhtbDogeyAnJzogdHJ1ZSwgJzEuMCc6IHRydWUsICcyLjAnOiB0cnVlIH0sXG4gIGNvcmU6IHsgJyc6IHRydWUsICcyLjAnOiB0cnVlIH0sXG4gIGh0bWw6IHsgJyc6IHRydWUsICcxLjAnOiB0cnVlLCAnMi4wJzogdHJ1ZSB9LFxuICB4aHRtbDogeyAnJzogdHJ1ZSwgJzEuMCc6IHRydWUsICcyLjAnOiB0cnVlIH0gLy8gSFRNTFxufVxuXG5leHBvcnQgY29uc3QgRE9NSW1wbGVtZW50YXRpb24gPSB7XG4gIGhhc0ZlYXR1cmUgKGZlYXR1cmUsIHZlcnNpb24pIHtcbiAgICBjb25zdCBmID0gc3VwcG9ydGVkRmVhdHVyZXNbKGZlYXR1cmUgfHwgJycpLnRvTG93ZXJDYXNlKCldXG4gICAgcmV0dXJuIChmICYmIGZbdmVyc2lvbiB8fCAnJ10pIHx8IGZhbHNlXG4gIH0sXG5cbiAgY3JlYXRlRG9jdW1lbnRUeXBlIChxdWFsaWZpZWROYW1lLCBwdWJsaWNJZCwgc3lzdGVtSWQpIHtcbiAgICByZXR1cm4gbmV3IERvY3VtZW50VHlwZShxdWFsaWZpZWROYW1lLCB7IHB1YmxpY0lkLCBzeXN0ZW1JZCwgb3duZXJEb2N1bWVudDogdGhpcyB9KVxuICB9LFxuXG4gIGNyZWF0ZURvY3VtZW50IChuYW1lc3BhY2UsIHF1YWxpZmllZE5hbWUsIGRvY3R5cGUpIHtcbiAgICBjb25zdCBkb2MgPSBuZXcgRG9jdW1lbnQobmFtZXNwYWNlKVxuICAgIGlmIChkb2N0eXBlKSB7XG4gICAgICBpZiAoZG9jdHlwZS5vd25lckRvY3VtZW50KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndGhlIG9iamVjdCBpcyBpbiB0aGUgd3JvbmcgRG9jdW1lbnQsIGEgY2FsbCB0byBpbXBvcnROb2RlIGlzIHJlcXVpcmVkJylcbiAgICAgIH1cbiAgICAgIGRvY3R5cGUub3duZXJEb2N1bWVudCA9IGRvY1xuICAgICAgZG9jLmFwcGVuZENoaWxkKGRvY3R5cGUpXG4gICAgfVxuICAgIGlmIChxdWFsaWZpZWROYW1lKSB7XG4gICAgICBkb2MuYXBwZW5kQ2hpbGQoZG9jLmNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2UsIHF1YWxpZmllZE5hbWUpKVxuICAgIH1cbiAgICByZXR1cm4gZG9jXG4gIH0sXG5cbiAgY3JlYXRlSFRNTERvY3VtZW50ICh0aXRsZVRleHQgPSAnJykge1xuICAgIGNvbnN0IGQgPSBuZXcgRG9jdW1lbnQoaHRtbClcbiAgICBjb25zdCByb290ID0gZC5jcmVhdGVFbGVtZW50KCdodG1sJylcbiAgICBjb25zdCBoZWFkID0gZC5jcmVhdGVFbGVtZW50KCdoZWFkJylcbiAgICBjb25zdCB0aXRsZSA9IGQuY3JlYXRlRWxlbWVudCgndGl0bGUnKVxuICAgIHRpdGxlLmFwcGVuZENoaWxkKGQuY3JlYXRlVGV4dE5vZGUodGl0bGVUZXh0KSlcbiAgICBoZWFkLmFwcGVuZENoaWxkKHRpdGxlKVxuICAgIHJvb3QuYXBwZW5kQ2hpbGQoaGVhZClcbiAgICByb290LmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudCgnYm9keScpKVxuXG4gICAgZC5hcHBlbmRDaGlsZChyb290KVxuICAgIHJldHVybiBkXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50IGV4dGVuZHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yIChucykge1xuICAgIHN1cGVyKCcjZG9jdW1lbnQnLCB7fSwgbnMpXG4gICAgdGhpcy5ub2RlVHlwZSA9IE5vZGUuRE9DVU1FTlRfTk9ERVxuICAgIHRoaXMuaW1wbGVtZW50YXRpb24gPSBET01JbXBsZW1lbnRhdGlvblxuICAgIHRoaXMuZGVmYXVsdFZpZXcgPSBudWxsXG4gIH1cblxuICAvLyBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2RvbS1kb2N1bWVudC1jcmVhdGVhdHRyaWJ1dGVcbiAgY3JlYXRlQXR0cmlidXRlIChsb2NhbE5hbWUpIHtcbiAgICBpZiAodGhpcy5uYW1lc3BhY2VVUkkgPT09IGh0bWwpIHtcbiAgICAgIGxvY2FsTmFtZSA9IGxvY2FsTmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNyZWF0ZUF0dHJpYnV0ZU5TKG51bGwsIGxvY2FsTmFtZSwgdHJ1ZSlcbiAgfVxuXG4gIGNyZWF0ZUF0dHJpYnV0ZU5TIChucywgcXVhbGlmaWVkTmFtZSwgbG9jYWwgPSBmYWxzZSkge1xuICAgIHJldHVybiBuZXcgQXR0cihxdWFsaWZpZWROYW1lLCB7IG93bmVyRG9jdW1lbnQ6IHRoaXMsIGxvY2FsIH0sIG5zKVxuICB9XG5cbiAgY3JlYXRlQ29tbWVudCAodGV4dCkge1xuICAgIHJldHVybiBuZXcgQ29tbWVudCgnI2NvbW1lbnQnLCB7IG5vZGVWYWx1ZTogdGV4dCwgb3duZXJEb2N1bWVudDogdGhpcyB9KVxuICB9XG5cbiAgY3JlYXRlRG9jdW1lbnRGcmFnbWVudCAobmFtZSkge1xuICAgIHJldHVybiBuZXcgRG9jdW1lbnRGcmFnbWVudCgnI2RvY3VtZW50LWZyYWdtZW50JywgeyBvd25lckRvY3VtZW50OiB0aGlzIH0pXG4gIH1cblxuICBjcmVhdGVFbGVtZW50IChsb2NhbE5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVFbGVtZW50TlModGhpcy5uYW1lc3BhY2VVUkksIGxvY2FsTmFtZSwgdHJ1ZSlcbiAgfVxuXG4gIGNyZWF0ZUVsZW1lbnROUyAobnMsIHF1YWxpZmllZE5hbWUsIGxvY2FsID0gZmFsc2UpIHtcbiAgICBjb25zdCBFbGVtZW50ID0gZ2V0RWxlbWVudEZvck5hbWVzcGFjZShucywgcXVhbGlmaWVkTmFtZSlcblxuICAgIHJldHVybiBuZXcgRWxlbWVudChxdWFsaWZpZWROYW1lLCB7XG4gICAgICBvd25lckRvY3VtZW50OiB0aGlzLFxuICAgICAgbG9jYWxcbiAgICB9LCBucylcbiAgfVxuXG4gIGNyZWF0ZVRleHROb2RlICh0ZXh0KSB7XG4gICAgcmV0dXJuIG5ldyBUZXh0KCcjdGV4dCcsIHsgbm9kZVZhbHVlOiB0ZXh0LCBvd25lckRvY3VtZW50OiB0aGlzIH0pXG4gIH1cblxuICBnZXQgY29tcGF0TW9kZSAoKSB7XG4gICAgcmV0dXJuICdDU1MxQ29tcGF0JyAvLyBhbHdheXMgYmUgaW4gc3RhbmRhcmRzLW1vZGVcbiAgfVxuXG4gIGdldCBib2R5ICgpIHtcbiAgICByZXR1cm4gZ2V0Q2hpbGRCeVRhZ05hbWUodGhpcy5kb2N1bWVudEVsZW1lbnQsICdCT0RZJylcbiAgfVxuXG4gIGdldCBoZWFkICgpIHtcbiAgICByZXR1cm4gZ2V0Q2hpbGRCeVRhZ05hbWUodGhpcy5kb2N1bWVudEVsZW1lbnQsICdIRUFEJylcbiAgfVxuXG4gIGdldCBkb2N1bWVudEVsZW1lbnQgKCkge1xuICAgIHJldHVybiB0aGlzLmxhc3RDaGlsZFxuICB9XG59XG5cbm1peGluKGVsZW1lbnRBY2Nlc3MsIERvY3VtZW50KVxubWl4aW4oUGFyZW50Tm9kZSwgRG9jdW1lbnQpXG5taXhpbihOb25FbGVtZW50UGFyZW50Tm9kZSwgRG9jdW1lbnQpXG4iLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi9Ob2RlLmpzJ1xuaW1wb3J0IHsgbWl4aW4gfSBmcm9tICcuLi91dGlscy9vYmplY3RDcmVhdGlvblV0aWxzLmpzJ1xuaW1wb3J0IHsgZWxlbWVudEFjY2VzcyB9IGZyb20gJy4vbWl4aW5zL2VsZW1lbnRBY2Nlc3MuanMnXG5pbXBvcnQgeyBQYXJlbnROb2RlIH0gZnJvbSAnLi9taXhpbnMvUGFyZW50Tm9kZS5qcydcbmltcG9ydCB7IE5vbkVsZW1lbnRQYXJlbnROb2RlIH0gZnJvbSAnLi9taXhpbnMvTm9uRWxlbWVudFBhcmVudE5vZGUuanMnXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRGcmFnbWVudCBleHRlbmRzIE5vZGUge1xuICBjb25zdHJ1Y3RvciAobmFtZSwgcHJvcHMpIHtcbiAgICBzdXBlcihuYW1lLCBwcm9wcylcbiAgICB0aGlzLm5vZGVUeXBlID0gTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFXG4gIH1cbn1cblxubWl4aW4oZWxlbWVudEFjY2VzcywgRG9jdW1lbnRGcmFnbWVudClcbm1peGluKFBhcmVudE5vZGUsIERvY3VtZW50RnJhZ21lbnQpXG5taXhpbihOb25FbGVtZW50UGFyZW50Tm9kZSwgRG9jdW1lbnRGcmFnbWVudClcbiIsImltcG9ydCB7IE5vZGUgfSBmcm9tICcuL05vZGUuanMnXG5pbXBvcnQgeyBtaXhpbiB9IGZyb20gJy4uL3V0aWxzL29iamVjdENyZWF0aW9uVXRpbHMuanMnXG5pbXBvcnQgeyBDaGlsZE5vZGUgfSBmcm9tICcuL21peGlucy9DaGlsZE5vZGUuanMnXG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFR5cGUgZXh0ZW5kcyBOb2RlIHtcbiAgY29uc3RydWN0b3IgKG5hbWUsIHByb3BzKSB7XG4gICAgc3VwZXIobmFtZSwgcHJvcHMpXG5cbiAgICB0aGlzLm5vZGVUeXBlID0gTm9kZS5ET0NVTUVOVF9UWVBFX05PREVcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG5cbiAgICBjb25zdCB7IHB1YmxpY0lkLCBzeXN0ZW1JZCB9ID0gcHJvcHNcbiAgICB0aGlzLnB1YmxpY0lkID0gcHVibGljSWQgfHwgJydcbiAgICB0aGlzLnN5c3RlbUlkID0gc3lzdGVtSWQgfHwgJydcbiAgfVxufVxuXG5taXhpbihDaGlsZE5vZGUsIERvY3VtZW50VHlwZSlcbiIsImltcG9ydCB7IE5vZGUgfSBmcm9tICcuL05vZGUuanMnXG5cbmltcG9ydCB7IFBhcmVudE5vZGUgfSBmcm9tICcuL21peGlucy9QYXJlbnROb2RlLmpzJ1xuaW1wb3J0IHsgZWxlbWVudEFjY2VzcyB9IGZyb20gJy4vbWl4aW5zL2VsZW1lbnRBY2Nlc3MuanMnXG5pbXBvcnQgeyBIVE1MUGFyc2VyIH0gZnJvbSAnLi9odG1sL0hUTUxQYXJzZXIuanMnXG5pbXBvcnQgeyBEb2N1bWVudEZyYWdtZW50IH0gZnJvbSAnLi9Eb2N1bWVudEZyYWdtZW50LmpzJ1xuaW1wb3J0IHsgbWl4aW4gfSBmcm9tICcuLi91dGlscy9vYmplY3RDcmVhdGlvblV0aWxzLmpzJ1xuaW1wb3J0IHsgdGFnIH0gZnJvbSAnLi4vdXRpbHMvdGFnVXRpbHMuanMnXG5pbXBvcnQgeyBjc3NUb01hcCwgbWFwVG9Dc3MgfSBmcm9tICcuLi91dGlscy9tYXBVdGlscy5qcydcbmltcG9ydCB7IGhleFRvUkdCLCBkZWNhbWVsaXplLCBodG1sRW50aXRpZXMsIGNkYXRhLCBjb21tZW50IH0gZnJvbSAnLi4vdXRpbHMvc3RyVXRpbHMuanMnXG5pbXBvcnQgeyBOb25Eb2N1bWVudFR5cGVDaGlsZE5vZGUgfSBmcm9tICcuL21peGlucy9Ob25Eb2N1bWVudFR5cGVDaGlsZE5vZGUuanMnXG5pbXBvcnQgeyBDaGlsZE5vZGUgfSBmcm9tICcuL21peGlucy9DaGlsZE5vZGUuanMnXG5pbXBvcnQgeyBodG1sLCB4bWwsIHhtbG5zIH0gZnJvbSAnLi4vdXRpbHMvbmFtZXNwYWNlcy5qcydcblxuY29uc3QgdmFsaWRhdGVBbmRFeHRyYWN0ID0gKG5zLCBuYW1lKSA9PiB7XG4gIGxldCBwcmVmaXggPSBudWxsXG4gIGxldCBsb2NhbG5hbWUgPSBuYW1lXG5cbiAgaWYgKCFucykgbnMgPSBudWxsXG5cbiAgaWYgKG5hbWUuaW5jbHVkZXMoJzonKSkge1xuICAgIFsgcHJlZml4LCBsb2NhbG5hbWUgXSA9IG5hbWUuc3BsaXQoJzonKVxuICB9XG5cbiAgaWYgKCFucyAmJiBwcmVmaXgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05hbWVzcGFjZSBFcnJvcicpXG4gIH1cblxuICBpZiAocHJlZml4ID09PSAneG1sJyAmJiBucyAhPT0geG1sKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdOYW1lc3BhY2UgRXJyb3InKVxuICB9XG5cbiAgaWYgKChwcmVmaXggPT09ICd4bWxucycgfHwgbmFtZSA9PT0gJ3htbG5zJykgJiYgbnMgIT09IHhtbG5zKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdOYW1lc3BhY2UgRXJyb3InKVxuICB9XG5cbiAgaWYgKHByZWZpeCAhPT0gJ3htbG5zJyAmJiBuYW1lICE9PSAneG1sbnMnICYmIG5zID09PSB4bWxucykge1xuICAgIHRocm93IG5ldyBFcnJvcignTmFtZXNwYWNlIEVycm9yJylcbiAgfVxuXG4gIHJldHVybiBbIG5zLCBwcmVmaXgsIGxvY2FsbmFtZSBdXG59XG5cbmNvbnN0IGdldEF0dHJpYnV0ZUJ5TnNBbmRMb2NhbE5hbWUgPSAoZWwsIG5zLCBsb2NhbE5hbWUpID0+IHtcbiAgaWYgKCFucykgbnMgPSBudWxsXG4gIHJldHVybiBbIC4uLmVsLmF0dHJzIF0uZmluZCgobm9kZSkgPT4gbm9kZS5sb2NhbE5hbWUgPT09IGxvY2FsTmFtZSAmJiBub2RlLm5hbWVzcGFjZVVSSSA9PT0gbnMpXG59XG5cbmNvbnN0IGdldEF0dHJpYnV0ZUJ5UXVhbGlmaWVkTmFtZSA9IChlbCwgcXVhbGlmaWVkTmFtZSkgPT4ge1xuICBpZiAoZWwubmFtZXNwYWNlVVJJID09PSBodG1sICYmIGVsLm93bmVyRG9jdW1lbnQubmFtZXNwYWNlVVJJID09PSBodG1sKSB7XG4gICAgcXVhbGlmaWVkTmFtZSA9IHF1YWxpZmllZE5hbWUudG9Mb3dlckNhc2UoKVxuICB9XG5cbiAgcmV0dXJuIFsgLi4uZWwuYXR0cnMgXS5maW5kKChub2RlKSA9PiBub2RlLm5hbWUgPT09IHF1YWxpZmllZE5hbWUpXG59XG5cbi8vIFRoaXMgUHJveHkgcHJveGllcyBhbGwgYWNjZXNzIHRvIG5vZGUuc3R5bGUgdG8gdGhlIGNzcyBzYXZlZCBpbiB0aGUgYXR0cmlidXRlXG5jb25zdCBnZXRTdHlsZVByb3h5ID0gKG5vZGUpID0+IHtcblxuICByZXR1cm4gbmV3IFByb3h5KG5vZGUsIHtcbiAgICBnZXQgKHRhcmdldCwga2V5KSB7XG4gICAgICBjb25zdCBzdHlsZXMgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdzdHlsZScpIHx8ICcnXG4gICAgICBjb25zdCBzdHlsZU1hcCA9IGNzc1RvTWFwKHN0eWxlcylcblxuICAgICAgaWYgKGtleSA9PT0gJ2Nzc1RleHQnKSB7XG4gICAgICAgIHJldHVybiBzdHlsZXNcbiAgICAgIH1cblxuICAgICAgaWYgKGtleSA9PT0gJ3NldFByb3BlcnR5Jykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHByb3BlcnR5TmFtZSwgdmFsdWUgPSAnJywgcHJpb3JpdHkgPSAnJykge1xuICAgICAgICAgIG5vZGUuc3R5bGVbcHJvcGVydHlOYW1lXSA9IHZhbHVlICsgKHByaW9yaXR5ID8gYCAhJHtwcmlvcml0eX1gIDogJycpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAga2V5ID0gZGVjYW1lbGl6ZShrZXkpXG4gICAgICBpZiAoIXN0eWxlTWFwLmhhcyhrZXkpKSByZXR1cm4gJydcblxuICAgICAgcmV0dXJuIHN0eWxlTWFwLmdldChrZXkpXG4gICAgfSxcbiAgICBzZXQgKHRhcmdldCwga2V5LCB2YWx1ZSkge1xuICAgICAga2V5ID0gZGVjYW1lbGl6ZShrZXkpXG5cbiAgICAgIGlmIChrZXkgPT09ICdjc3MtdGV4dCcpIHtcbiAgICAgICAgLy8gZW5zdXJlIGNvcnJlY3Qgc3BhY2luZyBhbmQgc3ludGF4IGJ5IGNvbnZlcnRpbmcgYmFjayBhbmQgZm9ydGhcbiAgICAgICAgdGFyZ2V0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBtYXBUb0Nzcyhjc3NUb01hcCh2YWx1ZSkpKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSBoZXhUb1JHQih2YWx1ZS50b1N0cmluZygpKVxuICAgICAgICBjb25zdCBzdHlsZXMgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdzdHlsZScpIHx8ICcnXG4gICAgICAgIGNvbnN0IHN0eWxlTWFwID0gY3NzVG9NYXAoc3R5bGVzKVxuICAgICAgICBzdHlsZU1hcC5zZXQoa2V5LCB2YWx1ZSlcblxuICAgICAgICB0YXJnZXQuc2V0QXR0cmlidXRlKCdzdHlsZScsIG1hcFRvQ3NzKHN0eWxlTWFwKSlcblxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfSlcbn1cblxuLy8gaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNkb20tZWxlbWVudC1zZXRhdHRyaWJ1dGVuc1xuZXhwb3J0IGNsYXNzIEVsZW1lbnQgZXh0ZW5kcyBOb2RlIHtcbiAgY29uc3RydWN0b3IgKG5hbWUsIHByb3BzLCBucykge1xuICAgIHN1cGVyKG5hbWUsIHByb3BzLCBucylcblxuICAgIHRoaXMuc3R5bGUgPSBnZXRTdHlsZVByb3h5KHRoaXMpXG4gICAgdGhpcy50YWdOYW1lID0gdGhpcy5ub2RlTmFtZVxuICB9XG5cbiAgZ2V0QXR0cmlidXRlIChxdWFsaWZpZWROYW1lKSB7XG4gICAgY29uc3QgYXR0ciA9IHRoaXMuZ2V0QXR0cmlidXRlTm9kZShxdWFsaWZpZWROYW1lKVxuICAgIHJldHVybiBhdHRyID8gYXR0ci52YWx1ZSA6IG51bGxcbiAgfVxuXG4gIGdldEF0dHJpYnV0ZU5vZGUgKHF1YWxpZmllZE5hbWUpIHtcbiAgICByZXR1cm4gZ2V0QXR0cmlidXRlQnlRdWFsaWZpZWROYW1lKHRoaXMsIHF1YWxpZmllZE5hbWUpXG4gIH1cblxuICBnZXRBdHRyaWJ1dGVOb2RlTlMgKG5zLCBsb2NhbE5hbWUpIHtcbiAgICByZXR1cm4gZ2V0QXR0cmlidXRlQnlOc0FuZExvY2FsTmFtZSh0aGlzLCBucywgbG9jYWxOYW1lKVxuICB9XG5cbiAgZ2V0QXR0cmlidXRlTlMgKG5zLCBsb2NhbE5hbWUpIHtcbiAgICBjb25zdCBhdHRyID0gdGhpcy5nZXRBdHRyaWJ1dGVOb2RlTlMobnMsIGxvY2FsTmFtZSlcbiAgICByZXR1cm4gYXR0ciA/IGF0dHIudmFsdWUgOiBudWxsXG4gIH1cblxuICBnZXRCb3VuZGluZ0NsaWVudFJlY3QgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignT25seSBpbXBsZW1lbnRlZCBmb3IgU1ZHIEVsZW1lbnRzJylcbiAgfVxuXG4gIGhhc0F0dHJpYnV0ZSAocXVhbGlmaWVkTmFtZSkge1xuICAgIGNvbnN0IGF0dHIgPSB0aGlzLmdldEF0dHJpYnV0ZU5vZGUocXVhbGlmaWVkTmFtZSlcbiAgICByZXR1cm4gISFhdHRyXG4gIH1cblxuICBoYXNBdHRyaWJ1dGVOUyAobnMsIGxvY2FsTmFtZSkge1xuICAgIGNvbnN0IGF0dHIgPSB0aGlzLmdldEF0dHJpYnV0ZU5vZGVOUyhucywgbG9jYWxOYW1lKVxuICAgIHJldHVybiAhIWF0dHJcbiAgfVxuXG4gIG1hdGNoZXMgKHF1ZXJ5KSB7XG4gICAgcmV0dXJuIHRoaXMubWF0Y2hXaXRoU2NvcGUocXVlcnksIHRoaXMpXG4gIH1cblxuICByZW1vdmVBdHRyaWJ1dGUgKHF1YWxpZmllZE5hbWUpIHtcbiAgICBjb25zdCBhdHRyID0gdGhpcy5nZXRBdHRyaWJ1dGVOb2RlKHF1YWxpZmllZE5hbWUpXG4gICAgaWYgKGF0dHIpIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlTm9kZShhdHRyKVxuICAgIH1cbiAgICByZXR1cm4gYXR0clxuICB9XG5cbiAgcmVtb3ZlQXR0cmlidXRlTm9kZSAobm9kZSkge1xuICAgIGlmICghdGhpcy5hdHRycy5kZWxldGUobm9kZSkpIHRocm93IG5ldyBFcnJvcignQXR0cmlidXRlIGNhbm5vdCBiZSByZW1vdmVkIGJlY2F1c2UgaXQgd2FzIG5vdCBmb3VuZCBvbiB0aGUgZWxlbWVudCcpXG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG4gIC8vIGNhbGwgaXM6IGQucmVtb3ZlQXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cubW96aWxsYS5vcmcvbnMvc3BlY2lhbHNwYWNlJywgJ2FsaWduJywgJ2NlbnRlcicpO1xuICByZW1vdmVBdHRyaWJ1dGVOUyAobnMsIGxvY2FsTmFtZSkge1xuICAgIGNvbnN0IGF0dHIgPSB0aGlzLmdldEF0dHJpYnV0ZU5vZGVOUyhucywgbG9jYWxOYW1lKVxuICAgIGlmIChhdHRyKSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZU5vZGUoYXR0cilcbiAgICB9XG4gICAgcmV0dXJuIGF0dHJcbiAgfVxuXG4gIC8qIFRoZSBzZXRBdHRyaWJ1dGUocXVhbGlmaWVkTmFtZSwgdmFsdWUpIG1ldGhvZCwgd2hlbiBpbnZva2VkLCBtdXN0IHJ1biB0aGVzZSBzdGVwczpcblxuICAgIElmIHF1YWxpZmllZE5hbWUgZG9lcyBub3QgbWF0Y2ggdGhlIE5hbWUgcHJvZHVjdGlvbiBpbiBYTUwsIHRoZW4gdGhyb3cgYW4gXCJJbnZhbGlkQ2hhcmFjdGVyRXJyb3JcIiBET01FeGNlcHRpb24uXG5cbiAgICBJZiB0aGlzIGlzIGluIHRoZSBIVE1MIG5hbWVzcGFjZSBhbmQgaXRzIG5vZGUgZG9jdW1lbnQgaXMgYW4gSFRNTCBkb2N1bWVudCwgdGhlbiBzZXQgcXVhbGlmaWVkTmFtZSB0byBxdWFsaWZpZWROYW1lIGluIEFTQ0lJIGxvd2VyY2FzZS5cblxuICAgIExldCBhdHRyaWJ1dGUgYmUgdGhlIGZpcnN0IGF0dHJpYnV0ZSBpbiB0aGlz4oCZcyBhdHRyaWJ1dGUgbGlzdCB3aG9zZSBxdWFsaWZpZWQgbmFtZSBpcyBxdWFsaWZpZWROYW1lLCBhbmQgbnVsbCBvdGhlcndpc2UuXG5cbiAgICBJZiBhdHRyaWJ1dGUgaXMgbnVsbCwgY3JlYXRlIGFuIGF0dHJpYnV0ZSB3aG9zZSBsb2NhbCBuYW1lIGlzIHF1YWxpZmllZE5hbWUsIHZhbHVlIGlzIHZhbHVlLCBhbmQgbm9kZSBkb2N1bWVudCBpcyB0aGlz4oCZcyBub2RlIGRvY3VtZW50LCB0aGVuIGFwcGVuZCB0aGlzIGF0dHJpYnV0ZSB0byB0aGlzLCBhbmQgdGhlbiByZXR1cm4uXG5cbiAgICBDaGFuZ2UgYXR0cmlidXRlIHRvIHZhbHVlLlxuICAqL1xuICBzZXRBdHRyaWJ1dGUgKHF1YWxpZmllZE5hbWUsIHZhbHVlKSB7XG4gICAgLy8gV2UgaGF2ZSB0byBkbyB0aGF0IGhlcmUgYmVjYXVzZSB3ZSBjYW5ub3QgY2hlY2sgaWYgYHRoaXNgIGlzIGluIHRoZSBjb3JyZWN0IG5hbWVzcGFjZVxuICAgIC8vIHdoZW4gZG9pbmcgaXQgaW4gY3JlYXRlQXR0cmlidXRlXG4gICAgaWYgKHRoaXMubmFtZXNwYWNlVVJJID09PSBodG1sICYmIHRoaXMub3duZXJEb2N1bWVudC5uYW1lc3BhY2VVUkkgPT09IGh0bWwpIHtcbiAgICAgIHF1YWxpZmllZE5hbWUgPSBxdWFsaWZpZWROYW1lLnRvTG93ZXJDYXNlKClcbiAgICB9XG5cbiAgICBsZXQgYXR0ciA9IHRoaXMuZ2V0QXR0cmlidXRlTm9kZShxdWFsaWZpZWROYW1lKVxuICAgIGlmICghYXR0cikge1xuICAgICAgLy8gQmVjYXVzZSBjcmVhdGVBdHRyaWJ1dGUgbG93ZXJjYXNlcyB0aGUgYXR0cmlidXRlIGluIGFuIGh0bWwgZG9jIHdlIGhhdmUgdG8gdXNlIGNyZWF0ZUF0dHJpYnV0ZU5TXG4gICAgICBhdHRyID0gdGhpcy5vd25lckRvY3VtZW50LmNyZWF0ZUF0dHJpYnV0ZU5TKG51bGwsIHF1YWxpZmllZE5hbWUsIHRydWUpXG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZU5vZGUoYXR0cilcbiAgICB9XG5cbiAgICBhdHRyLnZhbHVlID0gdmFsdWVcbiAgfVxuXG4gIC8qXG4gICAgTGV0IG5hbWVzcGFjZSwgcHJlZml4LCBhbmQgbG9jYWxOYW1lIGJlIHRoZSByZXN1bHQgb2YgcGFzc2luZyBuYW1lc3BhY2UgYW5kIHF1YWxpZmllZE5hbWUgdG8gdmFsaWRhdGUgYW5kIGV4dHJhY3QuXG5cbiAgICBTZXQgYW4gYXR0cmlidXRlIHZhbHVlIGZvciB0aGlzIHVzaW5nIGxvY2FsTmFtZSwgdmFsdWUsIGFuZCBhbHNvIHByZWZpeCBhbmQgbmFtZXNwYWNlLlxuXG4gICAgSWYgcHJlZml4IGlzIG5vdCBnaXZlbiwgc2V0IGl0IHRvIG51bGwuXG4gICAgSWYgbmFtZXNwYWNlIGlzIG5vdCBnaXZlbiwgc2V0IGl0IHRvIG51bGwuXG4gICAgTGV0IGF0dHJpYnV0ZSBiZSB0aGUgcmVzdWx0IG9mIGdldHRpbmcgYW4gYXR0cmlidXRlIGdpdmVuIG5hbWVzcGFjZSwgbG9jYWxOYW1lLCBhbmQgZWxlbWVudC5cbiAgICBJZiBhdHRyaWJ1dGUgaXMgbnVsbCwgY3JlYXRlIGFuIGF0dHJpYnV0ZSB3aG9zZSBuYW1lc3BhY2UgaXMgbmFtZXNwYWNlLCBuYW1lc3BhY2UgcHJlZml4IGlzIHByZWZpeCwgbG9jYWwgbmFtZSBpcyBsb2NhbE5hbWUsIHZhbHVlIGlzIHZhbHVlLCBhbmQgbm9kZSBkb2N1bWVudCBpcyBlbGVtZW504oCZcyBub2RlIGRvY3VtZW50LCB0aGVuIGFwcGVuZCB0aGlzIGF0dHJpYnV0ZSB0byBlbGVtZW50LCBhbmQgdGhlbiByZXR1cm4uXG5cbiAgICBDaGFuZ2UgYXR0cmlidXRlIHRvIHZhbHVlLlxuICAqL1xuXG4gIHNldEF0dHJpYnV0ZU5vZGUgKG5vZGUpIHtcbiAgICB0aGlzLmF0dHJzLmFkZChub2RlKVxuICAgIG5vZGUub3duZXJFbGVtZW50ID0gdGhpc1xuICB9XG5cbiAgLy8gY2FsbCBpczogZC5zZXRBdHRyaWJ1dGVOUygnaHR0cDovL3d3dy5tb3ppbGxhLm9yZy9ucy9zcGVjaWFsc3BhY2UnLCAnc3BlYzphbGlnbicsICdjZW50ZXInKTtcbiAgc2V0QXR0cmlidXRlTlMgKG5hbWVzcGFjZSwgbmFtZSwgdmFsdWUpIHtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIGNvbnN0IFsgbnMsIHByZWZpeCwgbG9jYWxOYW1lIF0gPSB2YWxpZGF0ZUFuZEV4dHJhY3QobmFtZXNwYWNlLCBuYW1lKVxuXG4gICAgbGV0IGF0dHIgPSB0aGlzLmdldEF0dHJpYnV0ZU5vZGVOUyhucywgbG9jYWxOYW1lKVxuICAgIGlmICghYXR0cikge1xuICAgICAgYXR0ciA9IHRoaXMub3duZXJEb2N1bWVudC5jcmVhdGVBdHRyaWJ1dGVOUyhucywgbmFtZSlcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlTm9kZShhdHRyKSAvLyBzZXRBdHRyaWJ1dGVOb2RlTlMgaXMgYSBzeW5vbnltIG9mIHNldEF0dHJpYnV0ZU5vZGVcbiAgICB9XG5cbiAgICBhdHRyLnZhbHVlID0gdmFsdWVcblxuICAgIHRoaXMuYXR0cnMuYWRkKGF0dHIpXG4gIH1cblxuICBnZXQgYXR0cmlidXRlcyAoKSB7XG4gICAgcmV0dXJuIFsgLi4udGhpcy5hdHRycyBdXG4gIH1cblxuICBnZXQgY2xhc3NOYW1lICgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2NsYXNzJylcbiAgfVxuXG4gIHNldCBjbGFzc05hbWUgKGMpIHtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjKVxuICB9XG5cbiAgZ2V0IGlkICgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2lkJykgfHwgJydcbiAgfVxuXG4gIHNldCBpZCAoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpXG4gIH1cblxuICBnZXQgaW5uZXJIVE1MICgpIHtcblxuICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXMubWFwKG5vZGUgPT4ge1xuICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSByZXR1cm4gaHRtbEVudGl0aWVzKG5vZGUuZGF0YSlcbiAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLkNEQVRBX1NFQ1RJT05fTk9ERSkgcmV0dXJuIGNkYXRhKG5vZGUuZGF0YSlcbiAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLkNPTU1FTlRfTk9ERSkgcmV0dXJuIGNvbW1lbnQobm9kZS5kYXRhKVxuICAgICAgcmV0dXJuIG5vZGUub3V0ZXJIVE1MXG4gICAgfSkuam9pbignJylcbiAgfVxuXG4gIHNldCBpbm5lckhUTUwgKHN0cikge1xuICAgIHdoaWxlICh0aGlzLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5maXJzdENoaWxkKVxuICAgIH1cbiAgICAvLyBUaGUgcGFyc2VyIGFkZHMgdGhlIGh0bWwgdG8gdGhpc1xuICAgIEhUTUxQYXJzZXIoc3RyLCB0aGlzKVxuICB9XG5cbiAgZ2V0IG91dGVySFRNTCAoKSB7XG4gICAgcmV0dXJuIHRhZyh0aGlzKVxuICB9XG5cbiAgc2V0IG91dGVySFRNTCAoc3RyKSB7XG4gICAgdmFyIHdlbGwgPSBuZXcgRG9jdW1lbnRGcmFnbWVudCgpXG4gICAgSFRNTFBhcnNlcihzdHIsIHdlbGwpXG4gICAgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3ZWxsLCB0aGlzKVxuICAgIHRoaXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzKVxuICB9XG5cbn1cblxubWl4aW4oUGFyZW50Tm9kZSwgRWxlbWVudClcbm1peGluKGVsZW1lbnRBY2Nlc3MsIEVsZW1lbnQpXG5taXhpbihOb25Eb2N1bWVudFR5cGVDaGlsZE5vZGUsIEVsZW1lbnQpXG5taXhpbihDaGlsZE5vZGUsIEVsZW1lbnQpXG4iLCJleHBvcnQgY2xhc3MgRXZlbnQge1xuICBjb25zdHJ1Y3RvciAodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGVcbiAgICB0aGlzLmNhbmNlbGFibGUgPSBmYWxzZVxuICAgIHRoaXMuZGVmYXVsdFByZXZlbnRlZCA9IGZhbHNlXG4gICAgdGhpcy50YXJnZXQgPSBudWxsXG4gIH1cblxuICBwcmV2ZW50RGVmYXVsdCAoKSB7XG4gICAgaWYgKHRoaXMuY2FuY2VsYWJsZSkge1xuICAgICAgdGhpcy5kZWZhdWx0UHJldmVudGVkID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuIiwiY29uc3QgJCA9IFN5bWJvbCgncHJpdmF0ZSBwcm9wZXJ0aWVzJylcblxuZXhwb3J0IGNsYXNzIEV2ZW50VGFyZ2V0IHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXNbJF0gPSB7fVxuICAgIHRoaXNbJF0ubGlzdGVuZXJzID0ge31cbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXIgKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCEodHlwZSBpbiB0aGlzWyRdLmxpc3RlbmVycykpIHtcbiAgICAgIHRoaXNbJF0ubGlzdGVuZXJzW3R5cGVdID0gW11cbiAgICB9XG4gICAgdGhpc1skXS5saXN0ZW5lcnNbdHlwZV0ucHVzaChjYWxsYmFjaylcbiAgfVxuXG4gIGRpc3BhdGNoRXZlbnQgKGV2ZW50KSB7XG4gICAgaWYgKCEoZXZlbnQudHlwZSBpbiB0aGlzWyRdLmxpc3RlbmVycykpIHsgcmV0dXJuIHRydWUgfVxuXG4gICAgdmFyIHN0YWNrID0gdGhpc1skXS5saXN0ZW5lcnNbZXZlbnQudHlwZV1cbiAgICBldmVudC50YXJnZXQgPSB0aGlzXG5cbiAgICBzdGFjay5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgZWwoZXZlbnQpXG4gICAgfSlcblxuICAgIHJldHVybiAhZXZlbnQuZGVmYXVsdFByZXZlbnRlZFxuICB9XG5cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lciAodHlwZSwgY2FsbGJhY2spIHtcbiAgICBpZiAoISh0eXBlIGluIHRoaXNbJF0ubGlzdGVuZXJzKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdmFyIHN0YWNrID0gdGhpc1skXS5saXN0ZW5lcnNbdHlwZV1cbiAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBzdGFjay5sZW5ndGg7IGkgPCBpbDsgaSsrKSB7XG4gICAgICBpZiAoc3RhY2tbaV0gPT09IGNhbGxiYWNrKSB7XG4gICAgICAgIHN0YWNrLnNwbGljZShpLCAxKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgZXh0ZW5kLCBleHRlbmRTdGF0aWMgfSBmcm9tICcuLi91dGlscy9vYmplY3RDcmVhdGlvblV0aWxzLmpzJ1xuXG5pbXBvcnQgeyBFdmVudFRhcmdldCB9IGZyb20gJy4vRXZlbnRUYXJnZXQuanMnXG5pbXBvcnQgeyBjbG9uZU5vZGUgfSBmcm9tICcuLi91dGlscy90YWdVdGlscy5qcydcbmltcG9ydCB7IGh0bWwgfSBmcm9tICcuLi91dGlscy9uYW1lc3BhY2VzLmpzJ1xuXG5jb25zdCBub2RlVHlwZXMgPSB7XG4gIEVMRU1FTlRfTk9ERTogMSxcbiAgQVRUUklCVVRFX05PREU6IDIsXG4gIFRFWFRfTk9ERTogMyxcbiAgQ0RBVEFfU0VDVElPTl9OT0RFOiA0LFxuICBFTlRJVFlfUkVGRVJFTkNFX05PREU6IDUsXG4gIEVOVElUWV9OT0RFOiA2LFxuICBQUk9DRVNTSU5HX0lOU1RSVUNUSU9OX05PREU6IDcsXG4gIENPTU1FTlRfTk9ERTogOCxcbiAgRE9DVU1FTlRfTk9ERTogOSxcbiAgRE9DVU1FTlRfVFlQRV9OT0RFOiAxMCxcbiAgRE9DVU1FTlRfRlJBR01FTlRfTk9ERTogMTEsXG4gIE5PVEFUSU9OX05PREU6IDEyXG59XG5cbmV4cG9ydCBjbGFzcyBOb2RlIGV4dGVuZHMgRXZlbnRUYXJnZXQge1xuICBjb25zdHJ1Y3RvciAobmFtZSA9ICcnLCBwcm9wcyA9IHt9LCBucyA9IG51bGwpIHtcbiAgICBzdXBlcigpXG5cbiAgICAvLyBJZiBwcm9wcy5sb2NhbCBpcyB0cnVlLCB0aGUgZWxlbWVudCB3YXMgTm9kZSB3YXMgY3JlYXRlZCB3aXRoIHRoZSBub24tbmFtZXNwYWNlIGZ1bmN0aW9uXG4gICAgLy8gdGhhdCBtZWFucyB3aGF0ZXZlciB3YXMgcGFzc2VkIGFzIG5hbWUgaXMgdGhlIGxvY2FsIG5hbWUgZXZlbiB0aG91Z2ggaXQgbWlnaHQgbG9vayBsaWtlIGEgcHJlZml4XG4gICAgaWYgKG5hbWUuaW5jbHVkZXMoJzonKSAmJiAhcHJvcHMubG9jYWwpIHtcbiAgICAgIDtbIHRoaXMucHJlZml4LCB0aGlzLmxvY2FsTmFtZSBdID0gbmFtZS5zcGxpdCgnOicpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9jYWxOYW1lID0gbmFtZVxuICAgICAgdGhpcy5wcmVmaXggPSBudWxsXG4gICAgfVxuXG4gICAgLy8gRm9sbG93IHNwZWMgYW5kIHVwcGVyY2FzZSBub2RlTmFtZSBmb3IgaHRtbFxuICAgIHRoaXMubm9kZU5hbWUgPSBucyA9PT0gaHRtbCA/IG5hbWUudG9VcHBlckNhc2UoKSA6IG5hbWVcblxuICAgIHRoaXMubmFtZXNwYWNlVVJJID0gbnNcbiAgICB0aGlzLm5vZGVUeXBlID0gTm9kZS5FTEVNRU5UX05PREVcbiAgICB0aGlzLm5vZGVWYWx1ZSA9IHByb3BzLm5vZGVWYWx1ZSAhPSBudWxsID8gcHJvcHMubm9kZVZhbHVlIDogbnVsbFxuICAgIHRoaXMuY2hpbGROb2RlcyA9IFtdXG5cbiAgICB0aGlzLmF0dHJzID0gcHJvcHMuYXR0cnMgfHwgbmV3IFNldCgpXG5cbiAgICB0aGlzLm93bmVyRG9jdW1lbnQgPSBwcm9wcy5vd25lckRvY3VtZW50IHx8IG51bGxcbiAgICB0aGlzLnBhcmVudE5vZGUgPSBudWxsXG5cbiAgICAvLyB0aGlzLm5hbWVzcGFjZXMgPSB7fVxuICAgIC8vIGlmICh0aGlzLnByZWZpeCkge1xuICAgIC8vICAgdGhpcy5uYW1lc3BhY2VzW3RoaXMucHJlZml4XSA9IG5zXG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIHRoaXMubmFtZXNwYWNlcy5kZWZhdWx0ID0gbnNcbiAgICAvLyB9XG5cbiAgICBpZiAocHJvcHMuY2hpbGROb2Rlcykge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGlsID0gcHJvcHMuY2hpbGROb2Rlcy5sZW5ndGg7IGkgPCBpbDsgKytpKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQocHJvcHMuY2hpbGROb2Rlc1tpXSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhcHBlbmRDaGlsZCAobm9kZSkge1xuICAgIHJldHVybiB0aGlzLmluc2VydEJlZm9yZShub2RlKVxuICB9XG5cbiAgY2xvbmVOb2RlIChkZWVwID0gZmFsc2UpIHtcbiAgICBjb25zdCBjbG9uZSA9IGNsb25lTm9kZSh0aGlzKVxuXG4gICAgaWYgKGRlZXApIHtcbiAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBjb25zdCBub2RlID0gZWwuY2xvbmVOb2RlKGRlZXApXG4gICAgICAgIGNsb25lLmFwcGVuZENoaWxkKG5vZGUpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBjbG9uZVxuICB9XG5cbiAgY29udGFpbnMgKG5vZGUpIHtcbiAgICBpZiAobm9kZSA9PT0gdGhpcykgcmV0dXJuIGZhbHNlXG5cbiAgICB3aGlsZSAobm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICBpZiAobm9kZSA9PT0gdGhpcykgcmV0dXJuIHRydWVcbiAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBnZXRSb290Tm9kZSAoKSB7XG4gICAgaWYgKCF0aGlzLnBhcmVudE5vZGUgfHwgdGhpcy5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9OT0RFKSByZXR1cm4gdGhpc1xuICAgIHJldHVybiB0aGlzLnBhcmVudE5vZGUuZ2V0Um9vdE5vZGUoKVxuICB9XG5cbiAgaGFzQ2hpbGROb2RlcyAoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5jaGlsZE5vZGVzLmxlbmd0aFxuICB9XG5cbiAgaW5zZXJ0QmVmb3JlIChub2RlLCBiZWZvcmUpIHtcbiAgICBsZXQgaW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihiZWZvcmUpXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgaW5kZXggPSB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoXG4gICAgfVxuXG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSkge1xuICAgICAgbGV0IGNoaWxkXG4gICAgICBsZXQgb2xkQ2hpbGQgPSBiZWZvcmVcbiAgICAgIHdoaWxlICgoY2hpbGQgPSBub2RlLmNoaWxkTm9kZXMucG9wKCkpKSB7XG4gICAgICAgIHRoaXMuaW5zZXJ0QmVmb3JlKGNoaWxkLCBvbGRDaGlsZClcbiAgICAgICAgb2xkQ2hpbGQgPSBjaGlsZFxuICAgICAgfVxuICAgICAgcmV0dXJuIG5vZGVcbiAgICB9XG5cbiAgICBpZiAobm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSlcbiAgICB9XG5cbiAgICBub2RlLnBhcmVudE5vZGUgPSB0aGlzXG4gICAgLy8gT2JqZWN0LnNldFByb3RvdHlwZU9mKG5vZGUubmFtZXNwYWNlcy5wcm90b3R5cGUsIHRoaXMubmFtZXNwYWNlcy5wcm90b3R5cGUpXG5cbiAgICB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAwLCBub2RlKVxuICAgIHJldHVybiBub2RlXG4gIH1cblxuICBpc0RlZmF1bHROYW1lc3BhY2UgKG5hbWVzcGFjZVVSSSkge1xuICAgIHN3aXRjaCAodGhpcy5ub2RlVHlwZSkge1xuICAgIGNhc2UgTm9kZS5FTEVNRU5UX05PREU6XG4gICAgICBpZiAoIXRoaXMucHJlZml4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWVzcGFjZVVSSSA9PT0gbmFtZXNwYWNlVVJJXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmhhc0F0dHJpYnV0ZSgneG1sbnMnKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3htbG5zJylcbiAgICAgIH1cblxuICAgICAgLy8gRW50aXR5UmVmZXJlbmNlcyBtYXkgaGF2ZSB0byBiZSBza2lwcGVkIHRvIGdldCB0byBpdFxuICAgICAgaWYgKHRoaXMucGFyZW50Tm9kZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnROb2RlLmlzRGVmYXVsdE5hbWVzcGFjZShuYW1lc3BhY2VVUkkpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIGNhc2UgTm9kZS5ET0NVTUVOVF9OT0RFOlxuICAgICAgcmV0dXJuIHRoaXMuZG9jdW1lbnRFbGVtZW50LmlzRGVmYXVsdE5hbWVzcGFjZShuYW1lc3BhY2VVUkkpXG4gICAgY2FzZSBOb2RlLkVOVElUWV9OT0RFOlxuICAgIGNhc2UgTm9kZS5OT1RBVElPTl9OT0RFOlxuICAgIGNhc2UgTm9kZS5ET0NVTUVOVF9UWVBFX05PREU6XG4gICAgY2FzZSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREU6XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICBjYXNlIE5vZGUuQVRUUklCVVRFX05PREU6XG4gICAgICBpZiAodGhpcy5vd25lckVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3duZXJFbGVtZW50LmlzRGVmYXVsdE5hbWVzcGFjZShuYW1lc3BhY2VVUkkpXG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICBkZWZhdWx0OlxuICAgICAgLy8gRW50aXR5UmVmZXJlbmNlcyBtYXkgaGF2ZSB0byBiZSBza2lwcGVkIHRvIGdldCB0byBpdFxuICAgICAgaWYgKHRoaXMucGFyZW50Tm9kZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnROb2RlLmlzRGVmYXVsdE5hbWVzcGFjZShuYW1lc3BhY2VVUkkpXG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICBpc0VxdWFsTm9kZSAobm9kZSkge1xuICAgIHRoaXMubm9ybWFsaXplKClcbiAgICBub2RlLm5vcm1hbGl6ZSgpXG5cbiAgICBsZXQgYm9vbCA9IHRoaXMubm9kZU5hbWUgPT09IG5vZGUubm9kZU5hbWVcbiAgICBib29sID0gYm9vbCAmJiB0aGlzLmxvY2FsTmFtZSA9PT0gbm9kZS5sb2NhbE5hbWVcbiAgICBib29sID0gYm9vbCAmJiB0aGlzLm5hbWVzcGFjZVVSSSA9PT0gbm9kZS5uYW1lc3BhY2VVUklcbiAgICBib29sID0gYm9vbCAmJiB0aGlzLnByZWZpeCA9PT0gbm9kZS5wcmVmaXhcbiAgICBib29sID0gYm9vbCAmJiB0aGlzLm5vZGVWYWx1ZSA9PT0gbm9kZS5ub2RlVmFsdWVcblxuICAgIGJvb2wgPSBib29sICYmIHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPT09IG5vZGUuY2hpbGROb2Rlcy5sZW5ndGhcblxuICAgIC8vIGRvbnQgY2hlY2sgY2hpbGRyZW4gcmVjdXJzaXZlbHkgd2hlbiB0aGUgY291bnQgZG9lc250IGV2ZW50IGFkZCB1cFxuICAgIGlmICghYm9vbCkgcmV0dXJuIGZhbHNlXG5cbiAgICBib29sID0gYm9vbCAmJiAhdGhpcy5jaGlsZE5vZGVzLnJlZHVjZSgobGFzdCwgY3VyciwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiBsYXN0ICYmIGN1cnIuaXNFcXVhbE5vZGUobm9kZS5jaGlsZE5vZGVzW2luZGV4XSlcbiAgICB9LCB0cnVlKVxuXG4gICAgLy8gRklYTUU6IFVzZSBhdHRyIG5vZGVzXG4gICAgLyogYm9vbCA9IGJvb2wgJiYgIVsgLi4udGhpcy5hdHRycy5lbnRyaWVzKCkgXS5yZWR1Y2UoKGxhc3QsIGN1cnIsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBbIGtleSwgdmFsIF0gPSBub2RlLmF0dHJzLmVudHJpZXMoKVxuICAgICAgcmV0dXJuIGxhc3QgJiYgY3VyclswXSA9PT0ga2V5ICYmIGN1cnJbMV0gPT09IHZhbFxuICAgIH0sIHRydWUpICovXG5cbiAgICAvKlxuICAgIFRPRE86XG4gICAgRm9yIHR3byBEb2N1bWVudFR5cGUgbm9kZXMgdG8gYmUgZXF1YWwsIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBtdXN0IGFsc28gYmUgc2F0aXNmaWVkOlxuXG4gICAgVGhlIGZvbGxvd2luZyBzdHJpbmcgYXR0cmlidXRlcyBhcmUgZXF1YWw6IHB1YmxpY0lkLCBzeXN0ZW1JZCwgaW50ZXJuYWxTdWJzZXQuXG4gICAgVGhlIGVudGl0aWVzIE5hbWVkTm9kZU1hcHMgYXJlIGVxdWFsLlxuICAgIFRoZSBub3RhdGlvbnMgTmFtZWROb2RlTWFwcyBhcmUgZXF1YWwuXG4gICAgKi9cblxuICAgIGlmICh0aGlzLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX1RZUEVfTk9ERSAmJiBub2RlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX1RZUEVfTk9ERSkge1xuICAgICAgYm9vbCA9IGJvb2wgJiYgdGhpcy5wdWJsaWNJZCA9PT0gbm9kZS5wdWJsaWNJZFxuICAgICAgYm9vbCA9IGJvb2wgJiYgdGhpcy5zeXN0ZW1JZCA9PT0gbm9kZS5zeXN0ZW1JZFxuICAgICAgYm9vbCA9IGJvb2wgJiYgdGhpcy5pbnRlcm5hbFN1YnNldCA9PT0gbm9kZS5pbnRlcm5hbFN1YnNldFxuICAgIH1cblxuICAgIHJldHVybiBib29sXG4gIH1cblxuICBpc1NhbWVOb2RlIChub2RlKSB7XG4gICAgcmV0dXJuIHRoaXMgPT09IG5vZGVcbiAgfVxuXG4gIGxvb2t1cE5hbWVzcGFjZVByZWZpeCAobmFtZXNwYWNlVVJJLCBvcmlnaW5hbEVsZW1lbnQpIHtcbiAgICBpZiAodGhpcy5uYW1lc3BhY2VVUkkgJiYgdGhpcy5uYW1lc3BhY2VVUkkgPT09IG5hbWVzcGFjZVVSSSAmJiB0aGlzLnByZWZpeFxuICAgICAgICAgJiYgb3JpZ2luYWxFbGVtZW50Lmxvb2t1cE5hbWVzcGFjZVVSSSh0aGlzLnByZWZpeCkgPT09IG5hbWVzcGFjZVVSSSkge1xuICAgICAgcmV0dXJuIHRoaXMucHJlZml4XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBbIGtleSwgdmFsIF0gb2YgdGhpcy5hdHRycy5lbnRyaWVzKCkpIHtcbiAgICAgIGlmICgha2V5LmluY2x1ZGVzKCc6JykpIGNvbnRpbnVlXG5cbiAgICAgIGNvbnN0IFsgYXR0clByZWZpeCwgbmFtZSBdID0ga2V5LnNwbGl0KCc6JylcbiAgICAgIGlmIChhdHRyUHJlZml4ID09PSAneG1sbnMnICYmIHZhbCA9PT0gbmFtZXNwYWNlVVJJICYmIG9yaWdpbmFsRWxlbWVudC5sb29rdXBOYW1lc3BhY2VVUkkobmFtZSkgPT09IG5hbWVzcGFjZVVSSSkge1xuICAgICAgICByZXR1cm4gbmFtZVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEVudGl0eVJlZmVyZW5jZXMgbWF5IGhhdmUgdG8gYmUgc2tpcHBlZCB0byBnZXQgdG8gaXRcbiAgICBpZiAodGhpcy5wYXJlbnROb2RlKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXJlbnROb2RlLmxvb2t1cE5hbWVzcGFjZVByZWZpeChuYW1lc3BhY2VVUkksIG9yaWdpbmFsRWxlbWVudClcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGxvb2t1cE5hbWVzcGFjZVVSSSAocHJlZml4KSB7XG4gICAgc3dpdGNoICh0aGlzLm5vZGVUeXBlKSB7XG4gICAgY2FzZSBOb2RlLkVMRU1FTlRfTk9ERTpcbiAgICAgIGlmICh0aGlzLm5hbWVzcGFjZVVSSSAhPSBudWxsICYmIHRoaXMucHJlZml4ID09PSBwcmVmaXgpIHtcbiAgICAgICAgLy8gTm90ZTogcHJlZml4IGNvdWxkIGJlIFwibnVsbFwiIGluIHRoaXMgY2FzZSB3ZSBhcmUgbG9va2luZyBmb3IgZGVmYXVsdCBuYW1lc3BhY2VcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZXNwYWNlVVJJXG4gICAgICB9XG5cbiAgICAgIGZvciAoY29uc3QgWyBrZXksIHZhbCBdIG9mIHRoaXMuYXR0cnMuZW50cmllcygpKSB7XG4gICAgICAgIGlmICgha2V5LmluY2x1ZGVzKCc6JykpIGNvbnRpbnVlXG5cbiAgICAgICAgY29uc3QgWyBhdHRyUHJlZml4LCBuYW1lIF0gPSBrZXkuc3BsaXQoJzonKVxuICAgICAgICBpZiAoYXR0clByZWZpeCA9PT0gJ3htbG5zJyAmJiBuYW1lID09PSBwcmVmaXgpIHtcbiAgICAgICAgICBpZiAodmFsICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAvLyBGSVhNRTogTG9vayB1cCBpZiBwcmVmaXggb3IgYXR0clByZWZpeFxuICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICd4bWxucycgJiYgcHJlZml4ID09IG51bGwpIHtcbiAgICAgICAgICBpZiAodmFsICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBFbnRpdHlSZWZlcmVuY2VzIG1heSBoYXZlIHRvIGJlIHNraXBwZWQgdG8gZ2V0IHRvIGl0XG4gICAgICBpZiAodGhpcy5wYXJlbnROb2RlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudE5vZGUubG9va3VwTmFtZXNwYWNlVVJJKHByZWZpeClcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsXG4gICAgY2FzZSBOb2RlLkRPQ1VNRU5UX05PREU6XG4gICAgICByZXR1cm4gdGhpcy5kb2N1bWVudEVsZW1lbnQubG9va3VwTmFtZXNwYWNlVVJJKHByZWZpeClcbiAgICBjYXNlIE5vZGUuRU5USVRZX05PREU6XG4gICAgY2FzZSBOb2RlLk5PVEFUSU9OX05PREU6XG4gICAgY2FzZSBOb2RlLkRPQ1VNRU5UX1RZUEVfTk9ERTpcbiAgICBjYXNlIE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERTpcbiAgICAgIHJldHVybiBudWxsXG4gICAgY2FzZSBOb2RlLkFUVFJJQlVURV9OT0RFOlxuICAgICAgaWYgKHRoaXMub3duZXJFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm93bmVyRWxlbWVudC5sb29rdXBOYW1lc3BhY2VVUkkocHJlZml4KVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGxcbiAgICBkZWZhdWx0OlxuICAgICAgLy8gRW50aXR5UmVmZXJlbmNlcyBtYXkgaGF2ZSB0byBiZSBza2lwcGVkIHRvIGdldCB0byBpdFxuICAgICAgaWYgKHRoaXMucGFyZW50Tm9kZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnROb2RlLmxvb2t1cE5hbWVzcGFjZVVSSShwcmVmaXgpXG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxuXG4gIGxvb2t1cFByZWZpeCAobmFtZXNwYWNlVVJJKSB7XG4gICAgaWYgKCFuYW1lc3BhY2VVUkkpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgY29uc3QgdHlwZSA9IHRoaXMubm9kZVR5cGVcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgTm9kZS5FTEVNRU5UX05PREU6XG4gICAgICByZXR1cm4gdGhpcy5sb29rdXBOYW1lc3BhY2VQcmVmaXgobmFtZXNwYWNlVVJJLCB0aGlzKVxuICAgIGNhc2UgTm9kZS5ET0NVTUVOVF9OT0RFOlxuICAgICAgcmV0dXJuIHRoaXMuZG9jdW1lbnRFbGVtZW50Lmxvb2t1cE5hbWVzcGFjZVByZWZpeChuYW1lc3BhY2VVUkkpXG4gICAgY2FzZSBOb2RlLkVOVElUWV9OT0RFIDpcbiAgICBjYXNlIE5vZGUuTk9UQVRJT05fTk9ERTpcbiAgICBjYXNlIE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERTpcbiAgICBjYXNlIE5vZGUuRE9DVU1FTlRfVFlQRV9OT0RFOlxuICAgICAgcmV0dXJuIG51bGwgLy8gdHlwZSBpcyB1bmtub3duXG4gICAgY2FzZSBOb2RlLkFUVFJJQlVURV9OT0RFOlxuICAgICAgaWYgKHRoaXMub3duZXJFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm93bmVyRWxlbWVudC5sb29rdXBOYW1lc3BhY2VQcmVmaXgobmFtZXNwYWNlVVJJKVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGxcbiAgICBkZWZhdWx0OlxuICAgICAgLy8gRW50aXR5UmVmZXJlbmNlcyBtYXkgaGF2ZSB0byBiZSBza2lwcGVkIHRvIGdldCB0byBpdFxuICAgICAgaWYgKHRoaXMucGFyZW50Tm9kZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnROb2RlLmxvb2t1cE5hbWVzcGFjZVByZWZpeChuYW1lc3BhY2VVUkkpXG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vcm1hbGl6ZSAoKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IFtdXG4gICAgZm9yIChjb25zdCBub2RlIG9mIHRoaXMuY2hpbGROb2Rlcykge1xuICAgICAgY29uc3QgbGFzdCA9IGNoaWxkTm9kZXMuc2hpZnQoKVxuICAgICAgaWYgKCFsYXN0KSB7XG4gICAgICAgIGlmIChub2RlLmRhdGEpIHtcbiAgICAgICAgICBjaGlsZE5vZGVzLnVuc2hpZnQobm9kZSlcbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgICAgaWYgKCFub2RlLmRhdGEpIHtcbiAgICAgICAgICBjaGlsZE5vZGVzLnVuc2hpZnQobGFzdClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxhc3Qubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgICAgY29uc3QgbWVyZ2VkID0gdGhpcy5vd25lckRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGxhc3QuZGF0YSArIG5vZGUuZGF0YSlcbiAgICAgICAgICBjaGlsZE5vZGVzLnB1c2gobWVyZ2VkKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZE5vZGVzLnB1c2gobGFzdCwgbm9kZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICBub2RlLnBhcmVudE5vZGUgPSB0aGlzXG4gICAgfSlcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzXG4gICAgLy8gdGhpcy5jaGlsZE5vZGVzID0gdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goKHRleHROb2Rlcywgbm9kZSkgPT4ge1xuICAgIC8vICAgLy8gRklYTUU6IElmIGZpcnN0IG5vZGUgaXMgYW4gZW1wdHkgdGV4dG5vZGUsIHdoYXQgZG8gd2UgZG8/IC0+IHNwZWNcbiAgICAvLyAgIGlmICghdGV4dE5vZGVzKSByZXR1cm4gWyBub2RlIF1cbiAgICAvLyAgIHZhciBsYXN0ID0gdGV4dE5vZGVzLnBvcCgpXG5cbiAgICAvLyAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgIC8vICAgICBpZiAoIW5vZGUuZGF0YSkgcmV0dXJuIHRleHROb2Rlc1xuXG4gICAgLy8gICAgIGlmIChsYXN0Lm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgIC8vICAgICAgIGNvbnN0IG1lcmdlZCA9IHRoaXMub3duZXJEb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShsYXN0LmRhdGEgKyAnICcgKyBub2RlLmRhdGEpXG4gICAgLy8gICAgICAgdGV4dE5vZGVzLnB1c2gobWVyZ2VkKVxuICAgIC8vICAgICAgIHJldHVybiB0ZXh0Tm9kZXMuY29uY2F0KG1lcmdlZClcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfSBlbHNlIHtcbiAgICAvLyAgICAgdGV4dE5vZGVzLnB1c2gobGFzdCwgbm9kZSlcbiAgICAvLyAgIH1cblxuICAgIC8vICAgcmV0dXJuIHRleHROb2Rlc1xuICAgIC8vIH0sIG51bGwpXG4gIH1cblxuICByZW1vdmVDaGlsZCAobm9kZSkge1xuXG4gICAgbm9kZS5wYXJlbnROb2RlID0gbnVsbFxuICAgIC8vIE9iamVjdC5zZXRQcm90b3R5cGVPZihub2RlLCBudWxsKVxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jaGlsZE5vZGVzLmluZGV4T2Yobm9kZSlcbiAgICBpZiAoaW5kZXggPT09IC0xKSByZXR1cm4gbm9kZVxuICAgIHRoaXMuY2hpbGROb2Rlcy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG4gIHJlcGxhY2VDaGlsZCAobmV3Q2hpbGQsIG9sZENoaWxkKSB7XG4gICAgY29uc3QgYmVmb3JlID0gb2xkQ2hpbGQubmV4dFNpYmxpbmdcbiAgICB0aGlzLnJlbW92ZUNoaWxkKG9sZENoaWxkKVxuICAgIHRoaXMuaW5zZXJ0QmVmb3JlKG5ld0NoaWxkLCBiZWZvcmUpXG4gICAgcmV0dXJuIG9sZENoaWxkXG4gIH1cblxuICBnZXQgbmV4dFNpYmxpbmcgKCkge1xuICAgIGNvbnN0IGNoaWxkID0gdGhpcy5wYXJlbnROb2RlICYmIHRoaXMucGFyZW50Tm9kZS5jaGlsZE5vZGVzW3RoaXMucGFyZW50Tm9kZS5jaGlsZE5vZGVzLmluZGV4T2YodGhpcykgKyAxXVxuICAgIHJldHVybiBjaGlsZCB8fCBudWxsXG4gIH1cblxuICBnZXQgcHJldmlvdXNTaWJsaW5nICgpIHtcbiAgICBjb25zdCBjaGlsZCA9IHRoaXMucGFyZW50Tm9kZSAmJiB0aGlzLnBhcmVudE5vZGUuY2hpbGROb2Rlc1t0aGlzLnBhcmVudE5vZGUuY2hpbGROb2Rlcy5pbmRleE9mKHRoaXMpIC0gMV1cbiAgICByZXR1cm4gY2hpbGQgfHwgbnVsbFxuICB9XG5cbiAgZ2V0IHRleHRDb250ZW50ICgpIHtcbiAgICBpZiAodGhpcy5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHJldHVybiB0aGlzLmRhdGFcbiAgICBpZiAodGhpcy5ub2RlVHlwZSA9PT0gTm9kZS5DREFUQV9TRUNUSU9OX05PREUpIHJldHVybiB0aGlzLmRhdGFcbiAgICBpZiAodGhpcy5ub2RlVHlwZSA9PT0gTm9kZS5DT01NRU5UX05PREUpIHJldHVybiB0aGlzLmRhdGFcblxuICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXMucmVkdWNlKGZ1bmN0aW9uIChsYXN0LCBjdXJyZW50KSB7XG4gICAgICByZXR1cm4gbGFzdCArIGN1cnJlbnQudGV4dENvbnRlbnRcbiAgICB9LCAnJylcbiAgfVxuXG4gIHNldCB0ZXh0Q29udGVudCAodGV4dCkge1xuICAgIGlmICh0aGlzLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSB8fCB0aGlzLm5vZGVUeXBlID09PSBOb2RlLkNEQVRBX1NFQ1RJT05fTk9ERSB8fCB0aGlzLm5vZGVUeXBlID09PSBOb2RlLkNPTU1FTlRfTk9ERSkge1xuICAgICAgdGhpcy5kYXRhID0gdGV4dFxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHRoaXMuY2hpbGROb2RlcyA9IFtdXG4gICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLm93bmVyRG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCkpXG4gIH1cblxuICBnZXQgbGFzdENoaWxkICgpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzW3RoaXMuY2hpbGROb2Rlcy5sZW5ndGggLSAxXSB8fCBudWxsXG4gIH1cblxuICBnZXQgZmlyc3RDaGlsZCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2Rlc1swXSB8fCBudWxsXG4gIH1cbn1cblxuZXh0ZW5kU3RhdGljKE5vZGUsIG5vZGVUeXBlcylcbmV4dGVuZChOb2RlLCBub2RlVHlwZXMpXG4iLCJpbXBvcnQgeyBleHRlbmRTdGF0aWMgfSBmcm9tICcuLi91dGlscy9vYmplY3RDcmVhdGlvblV0aWxzLmpzJ1xuXG5leHBvcnQgY2xhc3MgTm9kZUZpbHRlciB7XG4gIGFjY2VwdE5vZGUgKCkge1xuICAgIHJldHVybiBOb2RlRmlsdGVyLkZJTFRFUl9BQ0NFUFRcbiAgfVxufVxuXG5leHRlbmRTdGF0aWMoTm9kZUZpbHRlciwge1xuICBGSUxURVJfQUNDRVBUOiAxLFxuICBGSUxURVJfUkVKRUNUOiAyLFxuICBGSUxURVJfSUdOT1JFOiA0LFxuICBTSE9XX0FMTDogLTEsXG4gIFNIT1dfRUxFTUVOVDogMSxcbiAgU0hPV19URVhUOiA0LFxuICBTSE9XX0VOVElUWV9SRUZFUkVOQ0U6IDE2LFxuICBTSE9XX0VOVElUWTogMzIsXG4gIFNIT1dfUFJPQ0VTU0lOR19JTlNUUlVDVElPTjogNjQsXG4gIFNIT1dfQ09NTUVOVDogMTI4LFxuICBTSE9XX0RPQ1VNRU5UOiAyNTYsXG4gIFNIT1dfRE9DVU1FTlRfVFlQRTogNTEyLFxuICBTSE9XX0RPQ1VNRU5UX0ZSQUdNRU5UOiAxMDI0LFxuICBTSE9XX05PVEFUSU9OOiAyMDQ4XG59KVxuIiwiaW1wb3J0IHsgQ2hhcmFjdGVyRGF0YSB9IGZyb20gJy4vQ2hhcmFjdGVyRGF0YS5qcydcbmltcG9ydCB7IE5vZGUgfSBmcm9tICcuL05vZGUuanMnXG5cbmV4cG9ydCBjbGFzcyBUZXh0IGV4dGVuZHMgQ2hhcmFjdGVyRGF0YSB7XG4gIGNvbnN0cnVjdG9yIChuYW1lLCBwcm9wcykge1xuICAgIHN1cGVyKG5hbWUsIHByb3BzKVxuICAgIHRoaXMubm9kZVR5cGUgPSBOb2RlLlRFWFRfTk9ERVxuICB9XG59XG4iLCJpbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi91dGlscy9vYmplY3RDcmVhdGlvblV0aWxzLmpzJ1xuaW1wb3J0IHsgRXZlbnRUYXJnZXQgfSBmcm9tICcuL0V2ZW50VGFyZ2V0LmpzJ1xuaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4vTm9kZS5qcydcbmltcG9ydCB7IERvY3VtZW50IH0gZnJvbSAnLi9Eb2N1bWVudC5qcydcbmltcG9ydCB7IERvY3VtZW50RnJhZ21lbnQgfSBmcm9tICcuL0RvY3VtZW50RnJhZ21lbnQuanMnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi9UZXh0LmpzJ1xuaW1wb3J0IHsgQ3VzdG9tRXZlbnQgfSBmcm9tICcuL0N1c3RvbUV2ZW50LmpzJ1xuaW1wb3J0IHsgRXZlbnQgfSBmcm9tICcuL0V2ZW50LmpzJ1xuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gJy4vRWxlbWVudC5qcydcbmltcG9ydCB7IEF0dHIgfSBmcm9tICcuL0F0dHIuanMnXG5pbXBvcnQgeyBIVE1MSW1hZ2VFbGVtZW50IH0gZnJvbSAnLi9odG1sL0hUTUxJbWFnZUVsZW1lbnQuanMnXG5pbXBvcnQgeyBIVE1MTGlua0VsZW1lbnQgfSBmcm9tICcuL2h0bWwvSFRNTExpbmtFbGVtZW50LmpzJ1xuaW1wb3J0IHsgSFRNTFNjcmlwdEVsZW1lbnQgfSBmcm9tICcuL2h0bWwvSFRNTFNjcmlwdEVsZW1lbnQuanMnXG5pbXBvcnQgeyBIVE1MRWxlbWVudCB9IGZyb20gJy4vaHRtbC9IVE1MRWxlbWVudC5qcydcbmltcG9ydCB7IFNWR1BvaW50IH0gZnJvbSAnLi9zdmcvU1ZHUG9pbnQuanMnXG5pbXBvcnQgeyBTVkdNYXRyaXggfSBmcm9tICcuL3N2Zy9TVkdNYXRyaXguanMnXG5pbXBvcnQgeyBTVkdFbGVtZW50IH0gZnJvbSAnLi9zdmcvU1ZHRWxlbWVudC5qcydcbmltcG9ydCB7IFNWR1NWR0VsZW1lbnQgfSBmcm9tICcuL3N2Zy9TVkdTVkdFbGVtZW50LmpzJ1xuaW1wb3J0IHsgU1ZHUGF0aEVsZW1lbnQgfSBmcm9tICcuL3N2Zy9TVkdQYXRoRWxlbWVudC5qcydcbmltcG9ydCB7IFNWR0dyYXBoaWNzRWxlbWVudCB9IGZyb20gJy4vc3ZnL1NWR0dyYXBoaWNzRWxlbWVudC5qcydcbmltcG9ydCB7IFNWR1RleHRDb250ZW50RWxlbWVudCB9IGZyb20gJy4vc3ZnL1NWR1RleHRDb250ZW50RWxlbWVudC5qcydcbmltcG9ydCB7IGNhbWVsQ2FzZSB9IGZyb20gJy4uL3V0aWxzL3N0clV0aWxzLmpzJ1xuaW1wb3J0ICogYXMgZGVmYXVsdHMgZnJvbSAnLi4vdXRpbHMvZGVmYXVsdHMuanMnXG5cbmV4cG9ydCBjbGFzcyBXaW5kb3cgZXh0ZW5kcyBFdmVudFRhcmdldCB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5kb2N1bWVudCA9IG5ldyBEb2N1bWVudCgpXG4gICAgdGhpcy5kb2N1bWVudC5kZWZhdWx0VmlldyA9IHRoaXNcbiAgICB0aGlzLnNlbGYgPSB0aGlzXG4gICAgY29uc3QgZG9jID0gdGhpcy5kb2N1bWVudFxuICAgIHRoaXMuSW1hZ2UgPSBjbGFzcyB7XG4gICAgICBjb25zdHJ1Y3RvciAod2lkdGgsIGhlaWdodCkge1xuICAgICAgICBjb25zdCBpbWcgPSBkb2MuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgICAgaWYgKHdpZHRoICE9IG51bGwpIGltZy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgd2lkdGgpXG4gICAgICAgIGlmIChoZWlnaHQgIT0gbnVsbCkgaW1nLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgaGVpZ2h0KVxuICAgICAgICByZXR1cm4gaW1nXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0Q29tcHV0ZWRTdHlsZSAobm9kZSkge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBGSVhNRTogQ3VycmVudGx5IHRoaXMgZnVuY3Rpb24gdHJlYXRzIGV2ZXJ5IGdpdmVuIGF0dHJcbiAgICAgIC8vIGFzIGluaGVyaXRhYmxlIGZyb20gaXRzIHBhcmVudHMgd2hpY2ggaXMgb2ZjIG5vdCBhbHdheXMgdHJ1ZVxuICAgICAgLy8gYnV0IGdvb2QgZW5vdWdoIGZvciBzdmcuanNcbiAgICAgIGdldFByb3BlcnR5VmFsdWUgKGF0dHIpIHtcbiAgICAgICAgbGV0IHZhbHVlXG4gICAgICAgIGxldCBjdXIgPSBub2RlXG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgIHZhbHVlID0gY3VyLnN0eWxlW2F0dHJdIHx8IGN1ci5nZXRBdHRyaWJ1dGUoYXR0cilcbiAgICAgICAgfSB3aGlsZSAoXG4gICAgICAgICAgdmFsdWUgPT0gbnVsbFxuICAgICAgICAgICYmIChjdXIgPSBjdXIucGFyZW50Tm9kZSlcbiAgICAgICAgICAmJiBjdXIubm9kZVR5cGUgPT09IDFcbiAgICAgICAgKVxuXG4gICAgICAgIHJldHVybiB2YWx1ZSB8fCBkZWZhdWx0c1tjYW1lbENhc2UoYXR0cildIHx8IG51bGxcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxubGV0IGxhc3RUaW1lID0gMFxuY29uc3QgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gY2FsbGJhY2sgPT4ge1xuICBjb25zdCBub3cgPSBuZXcgZ2xvYmFsVGhpcy5EYXRlKCkuZ2V0VGltZSgpXG4gIGNvbnN0IHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChub3cgLSBsYXN0VGltZSkpXG4gIHJldHVybiBnbG9iYWxUaGlzLnNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGxhc3RUaW1lID0gbm93ICsgdGltZVRvQ2FsbFxuICAgIGNhbGxiYWNrKGxhc3RUaW1lKVxuICB9LCB0aW1lVG9DYWxsKVxufVxuXG5jb25zdCBub3dPZmZzZXQgPSBnbG9iYWxUaGlzLkRhdGUubm93KClcbmNvbnN0IHBlcmZvcm1hbmNlID0ge1xuICBub3c6ICgpID0+IERhdGUubm93KCkgLSBub3dPZmZzZXRcbn1cblxuY29uc3Qgd2luUHJvcHMgPSB7XG4gIFdpbmRvdyxcbiAgRG9jdW1lbnQsXG4gIERvY3VtZW50RnJhZ21lbnQsXG4gIE5vZGUsXG4gIEV2ZW50VGFyZ2V0LFxuICBUZXh0LFxuICBBdHRyLFxuICBFbGVtZW50LFxuICBDdXN0b21FdmVudCxcbiAgRXZlbnQsXG4gIEhUTUxFbGVtZW50LFxuICBIVE1MTGlua0VsZW1lbnQsXG4gIEhUTUxTY3JpcHRFbGVtZW50LFxuICBIVE1MSW1hZ2VFbGVtZW50LFxuICAvLyBJbWFnZTogSFRNTEltYWdlRWxlbWVudCwgLy8gaXMgc2V0IG9uIGNvbnN0cnVjdGlvblxuICBTVkdNYXRyaXgsXG4gIFNWR1BvaW50LFxuICBTVkdFbGVtZW50LFxuICBTVkdTVkdFbGVtZW50LFxuICBTVkdQYXRoRWxlbWVudCxcbiAgU1ZHR3JhcGhpY3NFbGVtZW50LFxuICBTVkdUZXh0Q29udGVudEVsZW1lbnQsXG4gIHNldFRpbWVvdXQ6IGdsb2JhbFRoaXMuc2V0VGltZW91dCxcbiAgY2xlYXJUaW1lb3V0OiBnbG9iYWxUaGlzLmNsZWFyVGltZW91dCxcbiAgcGFnZVhPZmZzZXQ6IDAsXG4gIHBhZ2VZT2Zmc2V0OiAwLFxuICBEYXRlOiBnbG9iYWxUaGlzLkRhdGUsXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSxcbiAgY2FuY2VsQW5pbWF0aW9uRnJhbWU6IGdsb2JhbFRoaXMuY2xlYXJUaW1lb3V0LFxuICBwZXJmb3JtYW5jZVxufVxuXG5leHRlbmQoV2luZG93LCB3aW5Qcm9wcylcbiIsImltcG9ydCB7IEVsZW1lbnQgfSBmcm9tICcuLi9FbGVtZW50LmpzJ1xuXG5leHBvcnQgY2xhc3MgSFRNTEVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHt9XG4iLCJpbXBvcnQgc2l6ZU9mIGZyb20gJ2ltYWdlLXNpemUnXG5pbXBvcnQgeyBFdmVudCB9IGZyb20gJy4uL0V2ZW50LmpzJ1xuaW1wb3J0IHsgSFRNTEVsZW1lbnQgfSBmcm9tICcuL0hUTUxFbGVtZW50LmpzJ1xuLy8gaW1wb3J0IHsgZ2V0RmlsZUJ1ZmZlckZyb21VUkwgfSBmcm9tICcuLi8uLi91dGlscy9maWxlVXJsVG9CdWZmZXIuanMnXG4vLyBpbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuXG5leHBvcnQgY2xhc3MgSFRNTEltYWdlRWxlbWVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IgKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKVxuICAgIHRoaXMubmF0dXJhbFdpZHRoID0gMFxuICAgIHRoaXMubmF0dXJhbEhlaWdodCA9IDBcbiAgICB0aGlzLmNvbXBsZXRlID0gZmFsc2VcbiAgfVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhIVE1MSW1hZ2VFbGVtZW50LnByb3RvdHlwZSwge1xuICBzcmM6IHtcbiAgICBnZXQgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdzcmMnKVxuICAgIH0sXG4gICAgc2V0ICh2YWwpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdzcmMnLCB2YWwpXG4gICAgICAvLyBjb25zdCB1cmwgPSBwYXRoLnJlc29sdmUodGhpcy5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmxvY2F0aW9uLCB2YWwpXG4gICAgICAvLyBnZXRGaWxlQnVmZmVyRnJvbVVSTCh1cmwsIChidWZmZXIpID0+IHtcbiAgICAgIHNpemVPZih2YWwsIChlcnIsIHNpemUpID0+IHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2Vycm9yJykpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5uYXR1cmFsV2lkdGggPSBzaXplLndpZHRoXG4gICAgICAgIHRoaXMubmF0dXJhbEhlaWdodCA9IHNpemUuaGVpZ2h0XG4gICAgICAgIHRoaXMuY29tcGxldGUgPSB0cnVlXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2xvYWQnKSlcbiAgICAgIH0pXG4gICAgICAvLyB9KVxuICAgIH1cbiAgfSxcbiAgaGVpZ2h0OiB7XG4gICAgZ2V0ICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnaGVpZ2h0JykgfHwgdGhpcy5uYXR1cmFsSGVpZ2h0XG4gICAgfSxcbiAgICBzZXQgKHZhbCkge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIHZhbClcbiAgICB9XG4gIH0sXG4gIHdpZHRoOiB7XG4gICAgZ2V0ICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnd2lkdGgnKSB8fCB0aGlzLm5hdHVyYWxXaWR0aFxuICAgIH0sXG4gICAgc2V0ICh2YWwpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHZhbClcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBIVE1MRWxlbWVudCB9IGZyb20gJy4vSFRNTEVsZW1lbnQuanMnXG5cbmV4cG9ydCBjbGFzcyBIVE1MTGlua0VsZW1lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7fVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhIVE1MTGlua0VsZW1lbnQucHJvdG90eXBlLCB7XG4gIGhyZWY6IHtcbiAgICBnZXQgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICB9LFxuICAgIHNldCAodmFsKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnaHJlZicsIHZhbClcbiAgICB9XG4gIH0sXG4gIHJlbDoge1xuICAgIGdldCAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3JlbCcpXG4gICAgfSxcbiAgICBzZXQgKHZhbCkge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3JlbCcsIHZhbClcbiAgICB9XG4gIH0sXG4gIHR5cGU6IHtcbiAgICBnZXQgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCd0eXBlJylcbiAgICB9LFxuICAgIHNldCAodmFsKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgndHlwZScsIHZhbClcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgc2F4IGZyb20gJ3NheCdcblxuLy8gVE9ETzogSXRzIGFuIFhNTFBhcnNlciBub3QgSFRNTFBhcnNlciEhXG5leHBvcnQgY29uc3QgSFRNTFBhcnNlciA9IGZ1bmN0aW9uIChzdHIsIGVsKSB7XG4gIGxldCBjdXJyZW50VGFnID0gZWxcbiAgLy8gY29uc3QgbmFtZXNwYWNlcyA9IHsgeG1sbnM6IGVsLmdldEF0dHJpYnV0ZSgneG1sbnMnKSB9XG4gIGxldCBkb2N1bWVudCA9IGVsLm93bmVyRG9jdW1lbnRcbiAgbGV0IGNkYXRhID0gbnVsbFxuXG4gIC8vIHNheCBleHBlY3RzIGEgcm9vdCBlbGVtZW50IGJ1dCB3ZSBhbHNvIG1pc3N1c2UgaXQgdG8gcGFyc2UgZnJhZ21lbnRzXG4gIGlmIChlbC5ub2RlVHlwZSAhPT0gZWwuRE9DVU1FTlRfTk9ERSkge1xuICAgIHN0ciA9ICc8c3ZnZG9tOndyYXBwZXIgeG1sbnM6c3ZnZG9tPVwic3ZnZG9tOnJvY2tzXCI+JyArIHN0ciArICc8L3N2Z2RvbTp3cmFwcGVyPidcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudCA9IGVsXG4gIH1cblxuICBjb25zdCBwYXJzZXIgPSBzYXgucGFyc2VyKHRydWUsIHtcbiAgICAvLyBsb3dlcmNhc2U6IHRydWUsXG4gICAgeG1sbnM6IHRydWUsXG4gICAgc3RyaWN0RW50aXRpZXM6IHRydWVcbiAgfSlcblxuICBwYXJzZXIub25lcnJvciA9IChlKSA9PiB7XG4gICAgdGhyb3cgZVxuICB9XG5cbiAgcGFyc2VyLm9uZG9jdHlwZSA9IChzdHIpID0+IHtcbiAgICBpZiAoY3VycmVudFRhZyAhPT0gZG9jdW1lbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRG9jdHlwZSBjYW4gb25seSBiZSBhcHBlbmRlZCB0byBkb2N1bWVudCcpXG4gICAgfVxuICAgIGN1cnJlbnRUYWcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlRG9jdW1lbnRUeXBlKCkpXG4gIH1cblxuICBwYXJzZXIub250ZXh0ID0gKHN0cikgPT4gY3VycmVudFRhZy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzdHIpKVxuICBwYXJzZXIub25jb21tZW50ID0gKHN0cikgPT4gY3VycmVudFRhZy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVDb21tZW50KHN0cikpXG5cbiAgLy8gcGFyc2VyLm9ub3Blbm5hbWVzcGFjZSA9IG5zID0+IHtcbiAgLy8gICBuYW1lc3BhY2VzW25zLnByZWZpeF0gPSBucy51cmlcbiAgLy8gfVxuICAvLyBwYXJzZXIub25jbG9zZW5hbWVzcGFjZSA9IG5zID0+IHtcbiAgLy8gICBkZWxldGUgbmFtZXNwYWNlc1tucy5wcmVmaXhdXG4gIC8vIH1cblxuICBwYXJzZXIub25vcGVudGFnID0gbm9kZSA9PiB7XG4gICAgaWYgKG5vZGUubmFtZSA9PT0gJ3N2Z2RvbTp3cmFwcGVyJykgcmV0dXJuXG5cbiAgICBjb25zdCBhdHRycyA9IG5vZGUuYXR0cmlidXRlc1xuXG4gICAgY29uc3QgdXJpID0gbm9kZS51cmkgfHwgY3VycmVudFRhZy5sb29rdXBOYW1lc3BhY2VVUkkobm9kZS5wcmVmaXggfHwgbnVsbClcblxuICAgIHZhciBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHVyaSwgbm9kZS5uYW1lKVxuXG4gICAgZm9yIChjb25zdCBbIG5hbWUsIG5vZGUgXSBvZiBPYmplY3QuZW50cmllcyhhdHRycykpIHtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlTlMobm9kZS51cmksIG5hbWUsIG5vZGUudmFsdWUpXG4gICAgfVxuXG4gICAgY3VycmVudFRhZy5hcHBlbmRDaGlsZChuZXdFbGVtZW50KVxuICAgIGN1cnJlbnRUYWcgPSBuZXdFbGVtZW50XG4gIH1cblxuICBwYXJzZXIub25jbG9zZXRhZyA9IHRhZ05hbWUgPT4ge1xuICAgIGlmICh0YWdOYW1lID09PSAnc3ZnZG9tOndyYXBwZXInKSByZXR1cm5cblxuICAgIGN1cnJlbnRUYWcgPSBjdXJyZW50VGFnLnBhcmVudE5vZGVcbiAgfVxuXG4gIHBhcnNlci5vbm9wZW5jZGF0YSA9ICgpID0+IHtcbiAgICBjZGF0YSA9IGRvY3VtZW50LmNyZWF0ZUNEQVRBU2VjdGlvbignJylcbiAgfVxuXG4gIHBhcnNlci5vbmNkYXRhID0gKHN0cikgPT4ge1xuICAgIGNkYXRhLmFwcGVuZERhdGEoc3RyKVxuICB9XG5cbiAgcGFyc2VyLm9uY2xvc2VjZGF0YSA9ICgpID0+IHtcbiAgICBjdXJyZW50VGFnLmFwcGVuZENoaWxkKGNkYXRhKVxuICB9XG5cbiAgcGFyc2VyLndyaXRlKHN0cilcbn1cbiIsIlxuaW1wb3J0IHsgSFRNTEVsZW1lbnQgfSBmcm9tICcuL0hUTUxFbGVtZW50LmpzJ1xuZXhwb3J0IGNsYXNzIEhUTUxTY3JpcHRFbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge31cblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoSFRNTFNjcmlwdEVsZW1lbnQucHJvdG90eXBlLCB7XG4gIHNyYzoge1xuICAgIGdldCAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3NyYycpXG4gICAgfSxcbiAgICBzZXQgKHZhbCkge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHZhbClcbiAgICB9XG4gIH0sXG4gIHR5cGU6IHtcbiAgICBnZXQgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCd0eXBlJylcbiAgICB9LFxuICAgIHNldCAodmFsKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgndHlwZScsIHZhbClcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBub2Rlc1RvTm9kZSB9IGZyb20gJy4uLy4uL3V0aWxzL25vZGVzVG9Ob2RlLmpzJ1xuXG4vLyBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2ludGVyZmFjZS1jaGlsZG5vZGVcbi8vIFRvZG86IGNoZWNrIGlmIHRoaXMgaXMgY29udGFpbmVkIGluIG5vZGVzIG9yIHNpYmxpbmdzIGFyZSBjb250YWluZWQgKHZpYWJsZVByZXZpb3VzU2libGluZywgdmlhYmxlTmV4dFNpYmxpbmcpXG5leHBvcnQgY29uc3QgQ2hpbGROb2RlID0ge1xuICBiZWZvcmUgKC4uLm5vZGVzKSB7XG4gICAgaWYgKCF0aGlzLnBhcmVudE5vZGUpIHJldHVyblxuICAgIGNvbnN0IG5vZGUgPSBub2Rlc1RvTm9kZShub2RlcywgdGhpcy5vd25lckRvY3VtZW50KVxuICAgIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZSwgdGhpcylcbiAgfSxcbiAgYWZ0ZXIgKC4uLm5vZGVzKSB7XG4gICAgaWYgKCF0aGlzLnBhcmVudE5vZGUpIHJldHVyblxuICAgIGNvbnN0IG5vZGUgPSBub2Rlc1RvTm9kZShub2RlcywgdGhpcy5vd25lckRvY3VtZW50KVxuICAgIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZSwgdGhpcy5uZXh0U2libGluZylcbiAgfSxcbiAgcmVwbGFjZVdpdGggKC4uLm5vZGVzKSB7XG4gICAgaWYgKCF0aGlzLnBhcmVudE5vZGUpIHJldHVyblxuICAgIGNvbnN0IG5leHQgPSB0aGlzLm5leHRTaWJsaW5nXG4gICAgY29uc3Qgbm9kZSA9IG5vZGVzVG9Ob2RlKG5vZGVzLCB0aGlzLm93bmVyRG9jdW1lbnQpXG4gICAgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShub2RlLCBuZXh0KVxuICAgIHRoaXMucmVtb3ZlKClcbiAgfSxcbiAgcmVtb3ZlICgpIHtcbiAgICBpZiAoIXRoaXMucGFyZW50Tm9kZSkgcmV0dXJuXG4gICAgdGhpcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMpXG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBOb25Eb2N1bWVudFR5cGVDaGlsZE5vZGUgPSB7XG5cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTm9uRG9jdW1lbnRUeXBlQ2hpbGROb2RlLCB7XG4gIHByZXZpb3VzRWxlbWVudFNpYmxpbmc6IHtcbiAgICBnZXQgKCkge1xuICAgICAgbGV0IG5vZGVcbiAgICAgIHdoaWxlICgobm9kZSA9IHRoaXMucHJldmlvdXNTaWJsaW5nKSkge1xuICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gbm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICByZXR1cm4gbm9kZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfSxcblxuICBuZXh0RWxlbWVudFNpYmxpbmc6IHtcbiAgICBnZXQgKCkge1xuICAgICAgbGV0IG5vZGVcbiAgICAgIHdoaWxlICgobm9kZSA9IHRoaXMubmV4dFNpYmxpbmcpKSB7XG4gICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBub2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgIHJldHVybiBub2RlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgTm9kZUl0ZXJhdG9yIH0gZnJvbSAnLi4vLi4vdXRpbHMvTm9kZUl0ZXJhdG9yLmpzJ1xuaW1wb3J0IHsgTm9kZUZpbHRlciB9IGZyb20gJy4uL05vZGVGaWx0ZXIuanMnXG5cbi8vIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jaW50ZXJmYWNlLW5vbmVsZW1lbnRwYXJlbnRub2RlXG5leHBvcnQgY29uc3QgTm9uRWxlbWVudFBhcmVudE5vZGUgPSB7XG4gIGdldEVsZW1lbnRCeUlkIChpZCkge1xuICAgIGNvbnN0IGl0ZXIgPSBuZXcgTm9kZUl0ZXJhdG9yKHRoaXMsIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5ULCAobm9kZSkgPT4gaWQgPT09IG5vZGUuaWQgPyBOb2RlRmlsdGVyLkZJTFRFUl9BQ0NFUFQgOiBOb2RlRmlsdGVyLkZJTFRFUl9JR05PUkUsIGZhbHNlKVxuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBpdGVyKSB7XG4gICAgICByZXR1cm4gbm9kZVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG4iLCJpbXBvcnQgeyBDc3NRdWVyeSB9IGZyb20gJy4uLy4uL290aGVyL0Nzc1F1ZXJ5LmpzJ1xuaW1wb3J0IHsgTm9kZUl0ZXJhdG9yIH0gZnJvbSAnLi4vLi4vdXRpbHMvTm9kZUl0ZXJhdG9yLmpzJ1xuaW1wb3J0IHsgTm9kZUZpbHRlciB9IGZyb20gJy4uL05vZGVGaWx0ZXIuanMnXG5pbXBvcnQgeyBub2Rlc1RvTm9kZSB9IGZyb20gJy4uLy4uL3V0aWxzL25vZGVzVG9Ob2RlLmpzJ1xuXG4vLyBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI3BhcmVudG5vZGVcbmNvbnN0IFBhcmVudE5vZGUgPSB7XG4gIG1hdGNoV2l0aFNjb3BlIChxdWVyeSwgc2NvcGUpIHtcbiAgICByZXR1cm4gbmV3IENzc1F1ZXJ5KHF1ZXJ5KS5tYXRjaGVzKHRoaXMsIHNjb3BlKVxuICB9LFxuXG4gIHF1ZXJ5IChxdWVyeSwgc2NvcGUsIHNpbmdsZSA9IGZhbHNlKSB7XG5cbiAgICBjb25zdCBpdGVyID0gbmV3IE5vZGVJdGVyYXRvcihzY29wZSwgTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQsIChub2RlKSA9PiBub2RlLm1hdGNoV2l0aFNjb3BlKHF1ZXJ5LCBzY29wZSkgPyBOb2RlRmlsdGVyLkZJTFRFUl9BQ0NFUFQgOiBOb2RlRmlsdGVyLkZJTFRFUl9JR05PUkUsIGZhbHNlKVxuXG4gICAgY29uc3Qgbm9kZXMgPSBbXVxuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBpdGVyKSB7XG4gICAgICBub2Rlcy5wdXNoKG5vZGUpXG4gICAgICBpZiAoc2luZ2xlKSByZXR1cm4gbm9kZXNcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXNcbiAgfSxcblxuICBxdWVyeVNlbGVjdG9yQWxsIChxdWVyeSkge1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5KHF1ZXJ5LCB0aGlzKVxuICB9LFxuXG4gIHF1ZXJ5U2VsZWN0b3IgKHF1ZXJ5KSB7XG4gICAgcmV0dXJuIHRoaXMucXVlcnkocXVlcnksIHRoaXMsIHRydWUpWzBdIHx8IG51bGxcbiAgfSxcblxuICBjbG9zZXN0IChxdWVyeSkge1xuICAgIGNvbnN0IGNzc1F1ZXJ5ID0gbmV3IENzc1F1ZXJ5KHF1ZXJ5KVxuICAgIGxldCBub2RlID0gdGhpc1xuICAgIHdoaWxlIChub2RlKSB7XG4gICAgICBpZiAoY3NzUXVlcnkubWF0Y2hlcyhub2RlLCB0aGlzKSkge1xuICAgICAgICByZXR1cm4gbm9kZVxuICAgICAgfVxuICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9LFxuXG4gIHByZXBlbmQgKC4uLm5vZGVzKSB7XG4gICAgY29uc3Qgbm9kZSA9IG5vZGVzVG9Ob2RlKG5vZGVzLCB0aGlzLm93bmVyRG9jdW1lbnQpXG5cbiAgICB0aGlzLmluc2VydEJlZm9yZShub2RlLCB0aGlzLmZpcnN0Q2hpbGQpXG4gIH0sXG5cbiAgYXBwZW5kICguLi5ub2Rlcykge1xuICAgIGNvbnN0IG5vZGUgPSBub2Rlc1RvTm9kZShub2RlcywgdGhpcy5vd25lckRvY3VtZW50KVxuICAgIHRoaXMuYXBwZW5kQ2hpbGQobm9kZSlcbiAgfSxcblxuICByZXBsYWNlQ2hpbGRyZW4gKC4uLm5vZGVzKSB7XG4gICAgd2hpbGUgKHRoaXMuZmlyc3RDaGlsZCkge1xuICAgICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmZpcnN0Q2hpbGQpXG4gICAgfVxuICAgIHRoaXMuYXBwZW5kKC4uLm5vZGVzKVxuICB9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFBhcmVudE5vZGUsIHtcbiAgY2hpbGRyZW46IHtcbiAgICBnZXQgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY2hpbGROb2Rlcy5maWx0ZXIoZnVuY3Rpb24gKG5vZGUpIHsgcmV0dXJuIG5vZGUubm9kZVR5cGUgPT09IG5vZGUuRUxFTUVOVF9OT0RFIH0pXG4gICAgfVxuICB9LFxuICBmaXJzdEVsZW1lbnRDaGlsZDoge1xuICAgIGdldCAoKSB7XG4gICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgdGhpcy5jaGlsZE5vZGVzKSB7XG4gICAgICAgIGlmIChub2RlICYmIG5vZGUubm9kZVR5cGUgPT09IG5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgcmV0dXJuIG5vZGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH0sXG4gIGxhc3RFbGVtZW50Q2hpbGQ6IHtcbiAgICBnZXQgKCkge1xuICAgICAgZm9yIChjb25zdCBub2RlIG9mIHRoaXMuY2hpbGROb2Rlcy5zbGljZSgpLnJldmVyc2UoKSkge1xuICAgICAgICBpZiAobm9kZSAmJiBub2RlLm5vZGVUeXBlID09PSBub2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgIHJldHVybiBub2RlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9LFxuICBjaGlsZEVsZW1lbnRDb3VudDoge1xuICAgIGdldCAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5sZW5ndGhcbiAgICB9XG4gIH1cbn0pXG5cbmV4cG9ydCB7IFBhcmVudE5vZGUgfVxuIiwiaW1wb3J0IHsgTm9kZUZpbHRlciB9IGZyb20gJy4uL05vZGVGaWx0ZXIuanMnXG5pbXBvcnQgeyBOb2RlSXRlcmF0b3IgfSBmcm9tICcuLi8uLi91dGlscy9Ob2RlSXRlcmF0b3IuanMnXG5cbmNvbnN0IGhhc0NsYXNzID0gKG5vZGUsIG5hbWUpID0+IHtcbiAgY29uc3QgY2xhc3NMaXN0ID0gbm9kZS5jbGFzc05hbWUuc3BsaXQoL1xccysvKVxuICByZXR1cm4gY2xhc3NMaXN0LmluY2x1ZGVzKG5hbWUpXG59XG5cbmNvbnN0IGVsZW1lbnRBY2Nlc3MgPSB7XG4gIGdldEVsZW1lbnRzQnlUYWdOYW1lIChuYW1lKSB7XG4gICAgLy8gY29uc3QgZG9jdW1lbnQgPSB0aGlzLm93bmVyRG9jdW1lbnRcbiAgICBjb25zdCBpdGVyID0gbmV3IE5vZGVJdGVyYXRvcih0aGlzLCBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCwgKG5vZGUpID0+IG5vZGUubm9kZU5hbWUgPT09IG5hbWUgPyBOb2RlRmlsdGVyLkZJTFRFUl9BQ0NFUFQgOiBOb2RlRmlsdGVyLkZJTFRFUl9JR05PUkUsIGZhbHNlKVxuICAgIC8vIGNvbnN0IGl0ZXIgPSBkb2N1bWVudC5jcmVhdGVOb2RlSXRlcmF0b3IodGhpcywgMSwgKG5vZGUpID0+IG5vZGUubm9kZU5hbWUgPT09IG5hbWUgPyBOb2RlRmlsdGVyLkZJTFRFUl9BQ0NFUFQgOiBOb2RlRmlsdGVyLkZJTFRFUl9JR05PUkUpXG4gICAgcmV0dXJuIFsgLi4uaXRlciBdXG4gIH0sXG5cbiAgZ2V0RWxlbWVudHNCeVRhZ05hbWVOUyAobnMsIG5hbWUpIHtcbiAgICAvLyBjb25zdCBkb2N1bWVudCA9IHRoaXMub3duZXJEb2N1bWVudFxuICAgIGNvbnN0IGl0ZXIgPSBuZXcgTm9kZUl0ZXJhdG9yKHRoaXMsIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5ULCAobm9kZSkgPT4gbm9kZS5pc05hbWVzcGFjZShucykgJiYgbm9kZS5ub2RlTmFtZSA9PT0gbmFtZSA/IE5vZGVGaWx0ZXIuRklMVEVSX0FDQ0VQVCA6IE5vZGVGaWx0ZXIuRklMVEVSX0lHTk9SRSwgZmFsc2UpXG4gICAgLy8gY29uc3QgaXRlciA9IGRvY3VtZW50LmNyZWF0ZU5vZGVJdGVyYXRvcih0aGlzLCAxLCAobm9kZSkgPT4gbm9kZS5pc05hbWVzcGFjZShucykgJiYgbm9kZS5ub2RlTmFtZSA9PT0gbmFtZSA/IE5vZGVGaWx0ZXIuRklMVEVSX0FDQ0VQVCA6IE5vZGVGaWx0ZXIuRklMVEVSX0lHTk9SRSlcbiAgICByZXR1cm4gWyAuLi5pdGVyIF1cbiAgfSxcblxuICBnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIChuYW1lKSB7XG4gICAgLy8gY29uc3QgZG9jdW1lbnQgPSB0aGlzLm93bmVyRG9jdW1lbnRcbiAgICBjb25zdCBpdGVyID0gbmV3IE5vZGVJdGVyYXRvcih0aGlzLCBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCwgKG5vZGUpID0+IGhhc0NsYXNzKG5vZGUsIG5hbWUpID8gTm9kZUZpbHRlci5GSUxURVJfQUNDRVBUIDogTm9kZUZpbHRlci5GSUxURVJfSUdOT1JFLCBmYWxzZSlcbiAgICAvLyBjb25zdCBpdGVyID0gZG9jdW1lbnQuY3JlYXRlTm9kZUl0ZXJhdG9yKHRoaXMsIDEsIChub2RlKSA9PiBoYXNDbGFzcyhub2RlLCBuYW1lKSA/IE5vZGVGaWx0ZXIuRklMVEVSX0FDQ0VQVCA6IE5vZGVGaWx0ZXIuRklMVEVSX0lHTk9SRSlcbiAgICByZXR1cm4gWyAuLi5pdGVyIF1cbiAgfVxufVxuXG5leHBvcnQgeyBlbGVtZW50QWNjZXNzIH1cbiIsIi8vIEB0cy1jaGVja1xuaW1wb3J0IHsgU1ZHTGVuZ3RoIH0gZnJvbSAnLi9TVkdMZW5ndGguanMnXG5cbmV4cG9ydCBjbGFzcyBTVkdBbmltYXRlZExlbmd0aCB7XG4gIGJhc2VWYWxcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBhdHRyaWJ1dGVOYW1lKSB7XG4gICAgdGhpcy5iYXNlVmFsID0gbmV3IFNWR0xlbmd0aChlbGVtZW50LCBhdHRyaWJ1dGVOYW1lKVxuICB9XG5cbiAgZ2V0IGFuaW1WYWwoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdhbmltVmFsIGlzIG5vdCBpbXBsZW1lbnRlZCcpXG4gIH1cbn1cbiIsIi8vIEB0cy1jaGVja1xuaW1wb3J0IHsgU1ZHQW5pbWF0ZWRMZW5ndGggfSBmcm9tICcuL1NWR0FuaW1hdGVkTGVuZ3RoLmpzJ1xuaW1wb3J0IHsgU1ZHR3JhcGhpY3NFbGVtZW50IH0gZnJvbSAnLi9TVkdHcmFwaGljc0VsZW1lbnQuanMnXG5cbmV4cG9ydCBjbGFzcyBTVkdDaXJjbGVFbGVtZW50IGV4dGVuZHMgU1ZHR3JhcGhpY3NFbGVtZW50IHtcbiAgY3ggPSBuZXcgU1ZHQW5pbWF0ZWRMZW5ndGgodGhpcywgJ2N4JylcbiAgY3kgPSBuZXcgU1ZHQW5pbWF0ZWRMZW5ndGgodGhpcywgJ2N5JylcbiAgciA9IG5ldyBTVkdBbmltYXRlZExlbmd0aCh0aGlzLCAncicpXG59XG4iLCJpbXBvcnQgeyBFbGVtZW50IH0gZnJvbSAnLi4vRWxlbWVudC5qcydcbmV4cG9ydCBjbGFzcyBTVkdFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldCBvd25lclNWR0VsZW1lbnQgKCkge1xuICAgIGxldCBwYXJlbnQgPSB0aGlzXG4gICAgd2hpbGUgKChwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZSkpIHtcbiAgICAgIGlmICgnc3ZnJyA9PSBwYXJlbnQubm9kZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgZ2V0IHZpZXdwb3J0RWxlbWVudCAoKSB7XG4gICAgbGV0IHBhcmVudCA9IHRoaXNcbiAgICB3aGlsZSAoKHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlKSkge1xuICAgICAgLy8gVE9ETzogYW5kIG90aGVyc1xuICAgICAgaWYgKFsgJ3N2ZycsICdzeW1ib2wnIF0uaW5jbHVkZXMocGFyZW50Lm5vZGVOYW1lKSkge1xuICAgICAgICByZXR1cm4gcGFyZW50XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cbn1cbiIsIi8vIEB0cy1jaGVja1xuaW1wb3J0IHsgU1ZHQW5pbWF0ZWRMZW5ndGggfSBmcm9tICcuL1NWR0FuaW1hdGVkTGVuZ3RoLmpzJ1xuaW1wb3J0IHsgU1ZHR3JhcGhpY3NFbGVtZW50IH0gZnJvbSAnLi9TVkdHcmFwaGljc0VsZW1lbnQuanMnXG5cbmV4cG9ydCBjbGFzcyBTVkdFbGxpcHNlRWxlbWVudCBleHRlbmRzIFNWR0dyYXBoaWNzRWxlbWVudCB7XG4gIGN4ID0gbmV3IFNWR0FuaW1hdGVkTGVuZ3RoKHRoaXMsICdjeCcpXG4gIGN5ID0gbmV3IFNWR0FuaW1hdGVkTGVuZ3RoKHRoaXMsICdjeScpXG4gIHJ4ID0gbmV3IFNWR0FuaW1hdGVkTGVuZ3RoKHRoaXMsICdyeCcpXG4gIHJ5ID0gbmV3IFNWR0FuaW1hdGVkTGVuZ3RoKHRoaXMsICdyeScpXG59XG4iLCIvLyBAdHMtY2hlY2tcblxuaW1wb3J0IHsgU1ZHQW5pbWF0ZWRMZW5ndGggfSBmcm9tICcuL1NWR0FuaW1hdGVkTGVuZ3RoLmpzJ1xuaW1wb3J0IHsgU1ZHR3JhcGhpY3NFbGVtZW50IH0gZnJvbSAnLi9TVkdHcmFwaGljc0VsZW1lbnQuanMnXG5cbmV4cG9ydCBjbGFzcyBTVkdGb3JlaWduT2JqZWN0RWxlbWVudCBleHRlbmRzIFNWR0dyYXBoaWNzRWxlbWVudCB7XG4gIHggPSBuZXcgU1ZHQW5pbWF0ZWRMZW5ndGgodGhpcywgJ3gnKVxuICB5ID0gbmV3IFNWR0FuaW1hdGVkTGVuZ3RoKHRoaXMsICd5JylcbiAgd2lkdGggPSBuZXcgU1ZHQW5pbWF0ZWRMZW5ndGgodGhpcywgJ3dpZHRoJylcbiAgaGVpZ2h0ID0gbmV3IFNWR0FuaW1hdGVkTGVuZ3RoKHRoaXMsICdoZWlnaHQnKVxufVxuIiwiaW1wb3J0IHsgU1ZHRWxlbWVudCB9IGZyb20gJy4vU1ZHRWxlbWVudC5qcydcbmltcG9ydCB7IGdldFNlZ21lbnRzIH0gZnJvbSAnLi4vLi4vdXRpbHMvYmJveFV0aWxzLmpzJ1xuaW1wb3J0ICogYXMgcmVnZXggZnJvbSAnLi4vLi4vdXRpbHMvcmVnZXguanMnXG5pbXBvcnQgeyBTVkdNYXRyaXggfSBmcm9tICcuL1NWR01hdHJpeC5qcydcblxuLy8gTWFwIG1hdHJpeCBhcnJheSB0byBvYmplY3RcbmZ1bmN0aW9uIGFycmF5VG9NYXRyaXggKGEpIHtcbiAgcmV0dXJuIHsgYTogYVswXSwgYjogYVsxXSwgYzogYVsyXSwgZDogYVszXSwgZTogYVs0XSwgZjogYVs1XSB9XG59XG5cbmV4cG9ydCBjbGFzcyBTVkdHcmFwaGljc0VsZW1lbnQgZXh0ZW5kcyBTVkdFbGVtZW50IHtcbiAgLy8gVE9ETzogaHR0cHM6Ly93d3cudzMub3JnL1RSL1NWRzIvY29vcmRzLmh0bWwjQ29tcHV0aW5nQVZpZXdwb3J0c1RyYW5zZm9ybVxuICBnZW5lcmF0ZVZpZXdCb3hNYXRyaXggKCkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL1NWRy9BdHRyaWJ1dGUvdmlld0JveFxuICAgIGlmICghWyAnbWFya2VyJywgJ3N5bWJvbCcsICdwYXR0ZXJuJywgJ3N2ZycsICd2aWV3JyBdLmluY2x1ZGVzKHRoaXMubm9kZU5hbWUpKSB7XG4gICAgICByZXR1cm4gbmV3IFNWR01hdHJpeCgpXG4gICAgfVxuXG4gICAgbGV0IHZpZXcgPSAodGhpcy5nZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnKSB8fCAnJykuc3BsaXQocmVnZXguZGVsaW1pdGVyKS5tYXAocGFyc2VGbG9hdCkuZmlsdGVyKGVsID0+ICFpc05hTihlbCkpXG4gICAgY29uc3Qgd2lkdGggPSBwYXJzZUZsb2F0KHRoaXMuZ2V0QXR0cmlidXRlKCd3aWR0aCcpKSB8fCAwXG4gICAgY29uc3QgaGVpZ2h0ID0gcGFyc2VGbG9hdCh0aGlzLmdldEF0dHJpYnV0ZSgnaGVpZ2h0JykpIHx8IDBcbiAgICBjb25zdCB4ID0gcGFyc2VGbG9hdCh0aGlzLmdldEF0dHJpYnV0ZSgneCcpKSB8fCAwXG4gICAgY29uc3QgeSA9IHBhcnNlRmxvYXQodGhpcy5nZXRBdHRyaWJ1dGUoJ3knKSkgfHwgMFxuXG4gICAgLy8gVE9ETzogSWYgbm8gd2lkdGggYW5kIGhlaWdodCBpcyBnaXZlbiwgd2lkdGggYW5kIGhlaWdodCBvZiB0aGUgb3V0ZXIgc3ZnIGVsZW1lbnQgaXMgdXNlZFxuICAgIGlmICghd2lkdGggfHwgIWhlaWdodCkge1xuICAgICAgcmV0dXJuIG5ldyBTVkdNYXRyaXgoKS50cmFuc2xhdGUoeCwgeSlcbiAgICB9XG5cbiAgICBpZiAodmlldy5sZW5ndGggIT09IDQpIHtcbiAgICAgIHZpZXcgPSBbIDAsIDAsIHdpZHRoLCBoZWlnaHQgXVxuICAgIH1cblxuICAgIC8vIGZpcnN0IGFwcGx5IHggYW5kIHkgaWYgbmVzdGVkLCB0aGVuIHZpZXdib3ggc2NhbGUsIHRoZW4gdmlld0JveCBtb3ZlXG4gICAgcmV0dXJuIG5ldyBTVkdNYXRyaXgoKS50cmFuc2xhdGUoeCwgeSkuc2NhbGUod2lkdGggLyB2aWV3WzJdLCBoZWlnaHQgLyB2aWV3WzNdKS50cmFuc2xhdGUoLXZpZXdbMF0sIC12aWV3WzFdKVxuICB9XG5cbiAgZ2V0QkJveCAoKSB7XG4gICAgcmV0dXJuIGdldFNlZ21lbnRzKHRoaXMpLmJib3goKVxuICB9XG5cbiAgLy8gVE9ETzogVGhpcyBtZXRob2QgYWN0dWFsbHkgZXhpc3RzIG9uIGFsbCBFbGVtZW50c1xuICBnZXRCb3VuZGluZ0NsaWVudFJlY3QgKCkge1xuICAgIC8vIFRoZSBib3VuZGluZyBjbGllbnQgcmVjdCB0YWtlcyB0aGUgc2NyZWVuIGN0bSBvZiB0aGUgZWxlbWVudFxuICAgIC8vIGFuZCBjb252ZXJ0cyB0aGUgYm91bmRpbmcgYm94IHdpdGggaXRcblxuICAgIC8vIGhvd2V2ZXIsIG5vcm1hbCBib3VuZGluZyBjb25zaXN0cyBvZjpcbiAgICAvLyAtIGFsbCBjaGlsZHJlbiB0cmFuc2Zvcm1lZFxuICAgIC8vIC0gdGhlIHZpZXdib3ggb2YgdGhlIGVsZW1lbnQgaWYgYXZhaWxhYmxlXG5cbiAgICAvLyBUaGUgYm91bmRpbmdDbGllbnRSZWN0IGlzIG5vdCBhZmZlY3RlZCBieSBpdHMgb3duIHZpZXdib3hcbiAgICAvLyBTbyB3ZSBhcHBseSBvbmx5IG91ciBvd24gdHJhbnNmb3JtYXRpb25zIGFuZCBwYXJlbnRzIHNjcmVlbkNUTVxuXG4gICAgbGV0IG0gPSB0aGlzLm1hdHJpeGlmeSgpXG5cbiAgICBpZiAodGhpcy5wYXJlbnROb2RlICYmIHRoaXMucGFyZW50Tm9kZS5ub2RlTmFtZSAhPT0gJyNkb2N1bWVudCcpIHtcbiAgICAgIG0gPSB0aGlzLnBhcmVudE5vZGUuZ2V0U2NyZWVuQ1RNKCkubXVsdGlwbHkobSlcbiAgICB9XG5cbiAgICAvLyBsZXQgbSA9IHRoaXMuZ2V0U2NyZWVuQ1RNKClcblxuICAgIC8vIFRoZXJlIGFyZSBhIGZldyBleHRyYSBydWxlcyByZWdhcmRpbmcgcmJveCBhbmQgdGhlIDxzdmc+IGVsZW1lbnRcbiAgICAvLyBOYW1lbHkgdGhpcyBpczpcbiAgICAvLyBCQm94IGlzIGNhbGN1bGF0ZWQgYXMgbm9ybWFsIGZvciBjb250YWluZXIgZWxlbWVudHNcbiAgICAvLyBSYm94IGlzIGNhbGN1bGF0ZWQgd2l0aCB0aGUgd2lkdGggYW5kIGhlaWdodCBvZiB0aGUgPHN2Zz5cbiAgICAvLyBUaGlzIGNvdWxkIGJlIGFsc28gdHJ1ZSBmb3Igc3ltYm9scyBzbyB0aGlzIGlzIGE6XG4gICAgLy8gVG9kbzogLi4uXG4gICAgcmV0dXJuIGdldFNlZ21lbnRzKHRoaXMsIGZhbHNlLCB0cnVlKS50cmFuc2Zvcm0obSkuYmJveCgpXG4gIH1cblxuICBnZXRDVE0gKCkge1xuICAgIGxldCBtID0gdGhpcy5tYXRyaXhpZnkoKVxuXG4gICAgbGV0IG5vZGUgPSB0aGlzXG4gICAgd2hpbGUgKChub2RlID0gbm9kZS5wYXJlbnROb2RlKSkge1xuICAgICAgaWYgKFsgJ3N2ZycsICdzeW1ib2wnLCAnaW1hZ2UnLCAncGF0dGVybicsICdtYXJrZXInIF0uaW5kZXhPZihub2RlLm5vZGVOYW1lKSA+IC0xKSBicmVha1xuICAgICAgbSA9IG0ubXVsdGlwbHkobm9kZS5tYXRyaXhpZnkoKSlcbiAgICAgIGlmIChub2RlLm5vZGVOYW1lID09PSAnI2RvY3VtZW50JykgcmV0dXJuIHRoaXMuZ2V0U2NyZWVuQ1RNKClcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZS5nZW5lcmF0ZVZpZXdCb3hNYXRyaXgoKS5tdWx0aXBseShtKVxuICB9XG5cbiAgZ2V0SW5uZXJNYXRyaXggKCkge1xuICAgIGxldCBtID0gdGhpcy5tYXRyaXhpZnkoKVxuXG4gICAgaWYgKFsgJ3N2ZycsICdzeW1ib2wnLCAnaW1hZ2UnLCAncGF0dGVybicsICdtYXJrZXInIF0uaW5kZXhPZih0aGlzLm5vZGVOYW1lKSA+IC0xKSB7XG4gICAgICBtID0gdGhpcy5nZW5lcmF0ZVZpZXdCb3hNYXRyaXgoKS5tdWx0aXBseShtKVxuICAgIH1cbiAgICByZXR1cm4gbVxuICB9XG5cbiAgZ2V0U2NyZWVuQ1RNICgpIHtcbiAgICAvLyByZWY6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTEzNDQ1MzdcbiAgICAvLyBXZSBmb2xsb3cgQ2hyb21lcyBiZWhhdmlvciBhbmQgaW5jbHVkZSB0aGUgdmlld2JveCBpbiB0aGUgc2NyZWVuQ1RNXG4gICAgY29uc3QgbSA9IHRoaXMuZ2V0SW5uZXJNYXRyaXgoKVxuXG4gICAgLy8gVE9ETzogV2UgaGF2ZSB0byBsb29wIHVudGlsIGRvY3VtZW50LCBob3dldmVyIGh0bWwgZWxlbWVudHMgZG9udCBoYXZlIGdldFNjcmVlbkNUTSBpbXBsZW1lbnRlZFxuICAgIC8vIHRoZXkgYWxzbyBkb250IGhhdmUgYSB0cmFuc2Zvcm0gYXR0cmlidXRlLiBUaGVyZWZvcmUgd2UgbmVlZCBhIGRpZmZlcmVudCB3YXkgb2YgZmlndXJpbmcgb3V0IHRoZWlyIChjc3MpIHRyYW5zZm9ybVxuICAgIGlmICh0aGlzLnBhcmVudE5vZGUgJiYgdGhpcy5wYXJlbnROb2RlIGluc3RhbmNlb2YgU1ZHR3JhcGhpY3NFbGVtZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXJlbnROb2RlLmdldFNjcmVlbkNUTSgpLm11bHRpcGx5KG0pXG4gICAgfVxuXG4gICAgcmV0dXJuIG1cbiAgfVxuXG4gIG1hdHJpeGlmeSAoKSB7XG4gICAgY29uc3QgbWF0cml4ID0gKHRoaXMuZ2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nKSB8fCAnJykudHJpbSgpXG4gICAgICAvLyBzcGxpdCB0cmFuc2Zvcm1hdGlvbnNcbiAgICAgIC5zcGxpdChyZWdleC50cmFuc2Zvcm1zKS5zbGljZSgwLCAtMSkubWFwKGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgLy8gZ2VuZXJhdGUga2V5ID0+IHZhbHVlIHBhaXJzXG4gICAgICAgIGNvbnN0IGt2ID0gc3RyLnRyaW0oKS5zcGxpdCgnKCcpXG4gICAgICAgIHJldHVybiBbIGt2WzBdLnRyaW0oKSwga3ZbMV0uc3BsaXQocmVnZXguZGVsaW1pdGVyKS5tYXAoZnVuY3Rpb24gKHN0cikgeyByZXR1cm4gcGFyc2VGbG9hdChzdHIudHJpbSgpKSB9KSBdXG4gICAgICB9KVxuICAgICAgLy8gbWVyZ2UgZXZlcnkgdHJhbnNmb3JtYXRpb24gaW50byBvbmUgbWF0cml4XG4gICAgICAucmVkdWNlKGZ1bmN0aW9uIChtYXRyaXgsIHRyYW5zZm9ybSkge1xuXG4gICAgICAgIGlmICh0cmFuc2Zvcm1bMF0gPT09ICdtYXRyaXgnKSByZXR1cm4gbWF0cml4Lm11bHRpcGx5KGFycmF5VG9NYXRyaXgodHJhbnNmb3JtWzFdKSlcbiAgICAgICAgcmV0dXJuIG1hdHJpeFt0cmFuc2Zvcm1bMF1dLmFwcGx5KG1hdHJpeCwgdHJhbnNmb3JtWzFdKVxuXG4gICAgICB9LCBuZXcgU1ZHTWF0cml4KCkpXG5cbiAgICByZXR1cm4gbWF0cml4XG4gIH1cblxuICBnZXQgdHJhbnNmb3JtICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBpbXBsZW1lbnRlZCcpXG4gIH1cblxufVxuIiwiaW1wb3J0IHsgU1ZHQW5pbWF0ZWRMZW5ndGggfSBmcm9tICcuL1NWR0FuaW1hdGVkTGVuZ3RoLmpzJ1xuaW1wb3J0IHsgU1ZHR3JhcGhpY3NFbGVtZW50IH0gZnJvbSAnLi9TVkdHcmFwaGljc0VsZW1lbnQuanMnXG5cbmV4cG9ydCBjbGFzcyBTVkdJbWFnZUVsZW1lbnQgZXh0ZW5kcyBTVkdHcmFwaGljc0VsZW1lbnQge1xuICB4ID0gbmV3IFNWR0FuaW1hdGVkTGVuZ3RoKHRoaXMsICd4JylcbiAgeSA9IG5ldyBTVkdBbmltYXRlZExlbmd0aCh0aGlzLCAneScpXG4gIHdpZHRoID0gbmV3IFNWR0FuaW1hdGVkTGVuZ3RoKHRoaXMsICd3aWR0aCcpXG4gIGhlaWdodCA9IG5ldyBTVkdBbmltYXRlZExlbmd0aCh0aGlzLCAnaGVpZ2h0Jylcbn1cbiIsIi8vIEB0cy1jaGVja1xuLy8gQHRzLWlnbm9yZVxuaW1wb3J0IHsgZXh0ZW5kU3RhdGljIH0gZnJvbSAnLi4vLi4vdXRpbHMvb2JqZWN0Q3JlYXRpb25VdGlscy5qcydcblxuY29uc3QgdW5pdFR5cGVzID0ge1xuICBTVkdfTEVOR1RIVFlQRV9VTktOT1dOOiAwLFxuICBTVkdfTEVOR1RIVFlQRV9OVU1CRVI6IDEsXG4gIFNWR19MRU5HVEhUWVBFX1BFUkNFTlRBR0U6IDIsXG4gIFNWR19MRU5HVEhUWVBFX0VNUzogMyxcbiAgU1ZHX0xFTkdUSFRZUEVfRVhTOiA0LFxuICBTVkdfTEVOR1RIVFlQRV9QWDogNSxcbiAgU1ZHX0xFTkdUSFRZUEVfQ006IDYsXG4gIFNWR19MRU5HVEhUWVBFX01NOiA3LFxuICBTVkdfTEVOR1RIVFlQRV9JTjogOCxcbiAgU1ZHX0xFTkdUSFRZUEVfUFQ6IDksXG4gIFNWR19MRU5HVEhUWVBFX1BDOiAxMCxcbn1cblxuY29uc3QgdW5pdEJ5U3RyaW5nID0ge1xuICBbJyddOiB1bml0VHlwZXMuU1ZHX0xFTkdUSFRZUEVfTlVNQkVSLFxuICBbJyUnXTogdW5pdFR5cGVzLlNWR19MRU5HVEhUWVBFX1BFUkNFTlRBR0UsXG4gIFsnZW0nXTogdW5pdFR5cGVzLlNWR19MRU5HVEhUWVBFX0VNUyxcbiAgWydleCddOiB1bml0VHlwZXMuU1ZHX0xFTkdUSFRZUEVfRVhTLFxuICBbJ3B4J106IHVuaXRUeXBlcy5TVkdfTEVOR1RIVFlQRV9QWCxcbiAgWydjbSddOiB1bml0VHlwZXMuU1ZHX0xFTkdUSFRZUEVfQ00sXG4gIFsnbW0nXTogdW5pdFR5cGVzLlNWR19MRU5HVEhUWVBFX01NLFxuICBbJ2luJ106IHVuaXRUeXBlcy5TVkdfTEVOR1RIVFlQRV9JTixcbiAgWydwdCddOiB1bml0VHlwZXMuU1ZHX0xFTkdUSFRZUEVfUFQsXG4gIFsncGMnXTogdW5pdFR5cGVzLlNWR19MRU5HVEhUWVBFX1BDLFxufVxuXG5jb25zdCB1bml0U3RyaW5nQnlDb25zdGFudCA9IG5ldyBNYXAoXG4gIE9iamVjdC5lbnRyaWVzKHVuaXRCeVN0cmluZykubWFwKChbdW5pdFN0cmluZywgdW5pdENvbnN0YW50XSkgPT4gW1xuICAgIHVuaXRDb25zdGFudCxcbiAgICB1bml0U3RyaW5nLFxuICBdKVxuKVxuXG5jb25zdCB1bml0RmFjdG9ycyA9IG5ldyBNYXAoW1xuICBbdW5pdFR5cGVzLlNWR19MRU5HVEhUWVBFX05VTUJFUiwgMV0sXG4gIFt1bml0VHlwZXMuU1ZHX0xFTkdUSFRZUEVfUEVSQ0VOVEFHRSwgTmFOXSxcbiAgW3VuaXRUeXBlcy5TVkdfTEVOR1RIVFlQRV9FTVMsIE5hTl0sXG4gIFt1bml0VHlwZXMuU1ZHX0xFTkdUSFRZUEVfRVhTLCBOYU5dLFxuICBbdW5pdFR5cGVzLlNWR19MRU5HVEhUWVBFX1BYLCAxXSxcbiAgW3VuaXRUeXBlcy5TVkdfTEVOR1RIVFlQRV9DTSwgNl0sXG4gIFt1bml0VHlwZXMuU1ZHX0xFTkdUSFRZUEVfTU0sIDk2IC8gMjUuNF0sXG4gIFt1bml0VHlwZXMuU1ZHX0xFTkdUSFRZUEVfSU4sIDk2XSxcbiAgW3VuaXRUeXBlcy5TVkdfTEVOR1RIVFlQRV9QVCwgNCAvIDNdLFxuICBbdW5pdFR5cGVzLlNWR19MRU5HVEhUWVBFX1BDLCAxNl0sXG5dKVxuXG5jb25zdCB2YWx1ZVBhdHRlcm4gPSAvXlxccyooWystXT9bMC05XSpbLl0/WzAtOV0rKD86ZVsrLV0/WzAtOV0rKT8pKGVtfGV4fHB4fGlufGNtfG1tfHB0fHBjfCUpP1xccyokL2k7XG5cbmV4cG9ydCBjbGFzcyBTVkdMZW5ndGgge1xuICBlbGVtZW50XG4gIGF0dHJpYnV0ZU5hbWVcblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGVOYW1lXG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBhdHRyaWJ1dGVOYW1lKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuYXR0cmlidXRlTmFtZSA9IGF0dHJpYnV0ZU5hbWVcbiAgfVxuXG4gIGdldCB1bml0VHlwZSgpIHtcbiAgICByZXR1cm4gcGFyc2VWYWx1ZSh0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKHRoaXMuYXR0cmlidXRlTmFtZSkpWzFdXG4gIH1cblxuICBnZXQgdmFsdWUoKSB7XG4gICAgY29uc3QgW3ZhbHVlLCB1bml0XSA9IHBhcnNlVmFsdWUoXG4gICAgICB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKHRoaXMuYXR0cmlidXRlTmFtZSlcbiAgICApXG4gICAgcmV0dXJuIHZhbHVlICogZ2V0VW5pdEZhY3Rvcih1bml0KVxuICB9XG5cbiAgc2V0IHZhbHVlKHZhbHVlKSB7XG4gICAgY29uc3QgdW5pdEZhY3RvciA9IGdldFVuaXRGYWN0b3IodGhpcy51bml0VHlwZSlcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKFxuICAgICAgdGhpcy5hdHRyaWJ1dGVOYW1lLFxuICAgICAgdmFsdWUgLyB1bml0RmFjdG9yICsgdW5pdFN0cmluZyh0aGlzKVxuICAgIClcbiAgfVxuXG4gIGdldCB2YWx1ZUluU3BlY2lmaWVkVW5pdHMoKSB7XG4gICAgcmV0dXJuIHBhcnNlVmFsdWUodGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSh0aGlzLmF0dHJpYnV0ZU5hbWUpKVswXVxuICB9XG5cbiAgc2V0IHZhbHVlSW5TcGVjaWZpZWRVbml0cyh2YWx1ZSkge1xuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUodGhpcy5hdHRyaWJ1dGVOYW1lLCB2YWx1ZSArIHVuaXRTdHJpbmcodGhpcykpXG4gIH1cblxuICBnZXQgdmFsdWVBc1N0cmluZygpIHtcbiAgICAvLyBEbyBub3Qgc2ltcGx5IHVzZSBnZXRBdHRyaWJ1dGUoKSBhcyB0aGlzIGZ1bmN0aW9uIGhhcyB0byByZXR1cm4gYSBzdHJpbmdcbiAgICAvLyB0aGF0IGlzIGEgdmFsaWQgcmVwcmVzZW50YXRpb24gb2YgdGhlIHVzZWQgdmFsdWUuXG4gICAgcmV0dXJuIHRoaXMudmFsdWVJblNwZWNpZmllZFVuaXRzICsgdW5pdFN0cmluZyh0aGlzKVxuICB9XG5cbiAgc2V0IHZhbHVlQXNTdHJpbmcodmFsdWVTdHJpbmcpIHtcbiAgICBjb25zdCBbdmFsdWUsIHVuaXRdID0gcGFyc2VWYWx1ZSh2YWx1ZVN0cmluZywgZmFsc2UpXG4gICAgY29uc3QgdW5pdFN0cmluZyA9IHVuaXRTdHJpbmdCeUNvbnN0YW50LmdldCh1bml0KSB8fCAnJ1xuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUodGhpcy5hdHRyaWJ1dGVOYW1lLCB2YWx1ZSArIHVuaXRTdHJpbmcpXG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ3xudWxsfSB2YWx1ZVN0cmluZ1xuICogQHBhcmFtIHtib29sZWFufSBmYWxsYmFjayAgSWYgc2V0IHRvIGBmYWxzZWAgY2F1c2VzIGFuIGVycm9yIHRvIGJlIHRocm93biBpZlxuICogYHZhbHVlU3RyaW5nYCBjYW4gbm90IGJlIHBhcnNlZCBwcm9wZXJseS4gT3RoZXJ3aXNlIHRoZSByZXR1cm5lZCB2YWx1ZSBmYWxsc1xuICogYmFjayB0byAwIGFuZCB0aGUgdW5pdCBmYWxscyBiYWNrIHRvIGBTVkdfTEVOR1RIVFlQRV9OVU1CRVJgLlxuICogQHJldHVybiB7W251bWJlciwgbnVtYmVyXX0gIFZhbHVlIGFuZCB1bml0LiBGb3IgdW5rbm93biB1bml0cywgaWYgdGhlXG4gKiBhdHRyaWJ1dGUgaXMgbm90IG9mIHRoZSBjb3JyZWN0IGZvcm1hdCBvciBpZiB0aGUgYXR0cmlidXRlIGlzIG5vdCBwcmVzZW50IG9uXG4gKiB0aGUgZWxlbWVudCwgdmFsdWUgMCBhbmQgdW5pdCBTVkdfTEVOR1RIVFlQRV9OVU1CRVIgYXJlIHJldHVybmVkLlxuICovXG5mdW5jdGlvbiBwYXJzZVZhbHVlKHZhbHVlU3RyaW5nLCBmYWxsYmFjayA9IHRydWUpIHtcbiAgY29uc3QgWywgcmF3VmFsdWUsIHJhd1VuaXRdID0gKHZhbHVlU3RyaW5nIHx8ICcnKS5tYXRjaCh2YWx1ZVBhdHRlcm4pIHx8IFtdXG4gIGNvbnN0IHVuaXQgPSB1bml0QnlTdHJpbmdbKHJhd1VuaXQgfHwgJycpLnRvTG93ZXJDYXNlKCldXG4gIGlmIChyYXdWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIHVuaXQgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBbcGFyc2VGbG9hdChyYXdWYWx1ZSksIHVuaXRdXG4gIH1cbiAgaWYgKGZhbGxiYWNrKSB7XG4gICAgLy8gRm9yIHVua25vd24gdW5pdHMgb3IgdW5wYXJzYWJsZSBhdHRyaWJ1dGVzLCBicm93c2VycyBmYWxsIGJhY2sgdG8gdmFsdWUgMFxuICAgIHJldHVybiBbMCwgdW5pdFR5cGVzLlNWR19MRU5HVEhUWVBFX05VTUJFUl1cbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoJ0FuIGludmFsaWQgb3IgaWxsZWdhbCBzdHJpbmcgd2FzIHNwZWNpZmllZCcpXG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHVuaXQgIFVuaXQgY29uc3RhbnRcbiAqL1xuZnVuY3Rpb24gZ2V0VW5pdEZhY3Rvcih1bml0KSB7XG4gIGNvbnN0IHVuaXRGYWN0b3IgPSB1bml0RmFjdG9ycy5nZXQodW5pdClcbiAgaWYgKHVuaXRGYWN0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcih1bml0RmFjdG9yICsgJyBpcyBub3QgYSBrbm93biB1bml0IGNvbnN0YW50JylcbiAgfVxuICBpZiAoaXNOYU4odW5pdEZhY3RvcikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuaXQgJHt1bml0U3RyaW5nQnlDb25zdGFudC5nZXQodW5pdCl9IGlzIG5vdCBzdXBwb3J0ZWRgKVxuICB9XG4gIHJldHVybiB1bml0RmFjdG9yXG59XG5cbi8qKlxuICogQHBhcmFtIHtTVkdMZW5ndGh9IHN2Z0xlbmd0aFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiB1bml0U3RyaW5nKHN2Z0xlbmd0aCkge1xuICByZXR1cm4gdW5pdFN0cmluZ0J5Q29uc3RhbnQuZ2V0KHN2Z0xlbmd0aC51bml0VHlwZSkgfHwgJydcbn1cblxuZXh0ZW5kU3RhdGljKFNWR0xlbmd0aCwgdW5pdFR5cGVzKVxuIiwiLy8gQHRzLWNoZWNrXG5pbXBvcnQgeyBTVkdBbmltYXRlZExlbmd0aCB9IGZyb20gJy4vU1ZHQW5pbWF0ZWRMZW5ndGguanMnXG5pbXBvcnQgeyBTVkdHcmFwaGljc0VsZW1lbnQgfSBmcm9tICcuL1NWR0dyYXBoaWNzRWxlbWVudC5qcydcblxuZXhwb3J0IGNsYXNzIFNWR0xpbmVFbGVtZW50IGV4dGVuZHMgU1ZHR3JhcGhpY3NFbGVtZW50IHtcbiAgeDEgPSBuZXcgU1ZHQW5pbWF0ZWRMZW5ndGgodGhpcywgJ3gxJylcbiAgeTEgPSBuZXcgU1ZHQW5pbWF0ZWRMZW5ndGgodGhpcywgJ3kxJylcbiAgeDIgPSBuZXcgU1ZHQW5pbWF0ZWRMZW5ndGgodGhpcywgJ3gyJylcbiAgeTIgPSBuZXcgU1ZHQW5pbWF0ZWRMZW5ndGgodGhpcywgJ3kyJylcbn1cbiIsImNvbnN0IHJhZGlhbnMgPSBmdW5jdGlvbiAoZCkge1xuICByZXR1cm4gZCAlIDM2MCAqIE1hdGguUEkgLyAxODBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hdHJpeEZhY3RvcnkgKGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgdmFyIHIgPSBuZXcgU1ZHTWF0cml4KClcbiAgci5hID0gYVxuICByLmIgPSBiXG4gIHIuYyA9IGNcbiAgci5kID0gZFxuICByLmUgPSBlXG4gIHIuZiA9IGZcbiAgcmV0dXJuIHJcbn1cblxuZXhwb3J0IGNsYXNzIFNWR01hdHJpeCB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmEgPSB0aGlzLmQgPSAxXG4gICAgdGhpcy5iID0gdGhpcy5jID0gdGhpcy5lID0gdGhpcy5mID0gMFxuICB9XG5cbiAgaW52ZXJzZSAoKSB7XG4gICAgLy8gR2V0IHRoZSBjdXJyZW50IHBhcmFtZXRlcnMgb3V0IG9mIHRoZSBtYXRyaXhcbiAgICB2YXIgYSA9IHRoaXMuYVxuICAgIHZhciBiID0gdGhpcy5iXG4gICAgdmFyIGMgPSB0aGlzLmNcbiAgICB2YXIgZCA9IHRoaXMuZFxuICAgIHZhciBlID0gdGhpcy5lXG4gICAgdmFyIGYgPSB0aGlzLmZcblxuICAgIC8vIEludmVydCB0aGUgMngyIG1hdHJpeCBpbiB0aGUgdG9wIGxlZnRcbiAgICB2YXIgZGV0ID0gYSAqIGQgLSBiICogY1xuICAgIGlmICghZGV0KSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBpbnZlcnQgJyArIHRoaXMpXG5cbiAgICAvLyBDYWxjdWxhdGUgdGhlIHRvcCAyeDIgbWF0cml4XG4gICAgdmFyIG5hID0gZCAvIGRldFxuICAgIHZhciBuYiA9IC1iIC8gZGV0XG4gICAgdmFyIG5jID0gLWMgLyBkZXRcbiAgICB2YXIgbmQgPSBhIC8gZGV0XG5cbiAgICAvLyBBcHBseSB0aGUgaW52ZXJ0ZWQgbWF0cml4IHRvIHRoZSB0b3AgcmlnaHRcbiAgICB2YXIgbmUgPSAtKG5hICogZSArIG5jICogZilcbiAgICB2YXIgbmYgPSAtKG5iICogZSArIG5kICogZilcblxuICAgIC8vIENvbnN0cnVjdCB0aGUgaW52ZXJ0ZWQgbWF0cml4XG4gICAgdGhpcy5hID0gbmFcbiAgICB0aGlzLmIgPSBuYlxuICAgIHRoaXMuYyA9IG5jXG4gICAgdGhpcy5kID0gbmRcbiAgICB0aGlzLmUgPSBuZVxuICAgIHRoaXMuZiA9IG5mXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgbXVsdGlwbHkgKG0pIHtcbiAgICB2YXIgciA9IG5ldyBTVkdNYXRyaXgoKVxuICAgIHIuYSA9IHRoaXMuYSAqIG0uYSArIHRoaXMuYyAqIG0uYiArIHRoaXMuZSAqIDBcbiAgICByLmIgPSB0aGlzLmIgKiBtLmEgKyB0aGlzLmQgKiBtLmIgKyB0aGlzLmYgKiAwXG4gICAgci5jID0gdGhpcy5hICogbS5jICsgdGhpcy5jICogbS5kICsgdGhpcy5lICogMFxuICAgIHIuZCA9IHRoaXMuYiAqIG0uYyArIHRoaXMuZCAqIG0uZCArIHRoaXMuZiAqIDBcbiAgICByLmUgPSB0aGlzLmEgKiBtLmUgKyB0aGlzLmMgKiBtLmYgKyB0aGlzLmUgKiAxXG4gICAgci5mID0gdGhpcy5iICogbS5lICsgdGhpcy5kICogbS5mICsgdGhpcy5mICogMVxuICAgIHJldHVybiByXG4gIH1cblxuICByb3RhdGUgKHIsIHgsIHkpIHtcbiAgICByID0gciAlIDM2MCAqIE1hdGguUEkgLyAxODBcbiAgICByZXR1cm4gdGhpcy5tdWx0aXBseShtYXRyaXhGYWN0b3J5KFxuICAgICAgTWF0aC5jb3MociksXG4gICAgICBNYXRoLnNpbihyKSxcbiAgICAgIC1NYXRoLnNpbihyKSxcbiAgICAgIE1hdGguY29zKHIpLFxuICAgICAgeCA/IC1NYXRoLmNvcyhyKSAqIHggKyBNYXRoLnNpbihyKSAqIHkgKyB4IDogMCxcbiAgICAgIHkgPyAtTWF0aC5zaW4ocikgKiB4IC0gTWF0aC5jb3MocikgKiB5ICsgeSA6IDBcbiAgICApKVxuICB9XG5cbiAgc2NhbGUgKHNjYWxlWCwgc2NhbGVZID0gc2NhbGVYKSB7XG4gICAgcmV0dXJuIHRoaXMubXVsdGlwbHkobWF0cml4RmFjdG9yeShzY2FsZVgsIDAsIDAsIHNjYWxlWSwgMCwgMCkpXG4gIH1cblxuICBza2V3ICh4LCB5KSB7XG4gICAgcmV0dXJuIHRoaXMubXVsdGlwbHkobWF0cml4RmFjdG9yeSgxLCBNYXRoLnRhbihyYWRpYW5zKHkpKSwgTWF0aC50YW4ocmFkaWFucyh4KSksIDEsIDAsIDApKVxuICB9XG5cbiAgc2tld1ggKHgpIHtcbiAgICByZXR1cm4gdGhpcy5za2V3KHgsIDApXG4gIH1cblxuICBza2V3WSAoeSkge1xuICAgIHJldHVybiB0aGlzLnNrZXcoMCwgeSlcbiAgfVxuXG4gIHRvU3RyaW5nICgpIHtcbiAgICByZXR1cm4gJ1NWR01hdHJpeCdcbiAgfVxuXG4gIHRyYW5zbGF0ZSAoeCA9IDAsIHkgPSAwKSB7XG4gICAgcmV0dXJuIHRoaXMubXVsdGlwbHkobWF0cml4RmFjdG9yeSgxLCAwLCAwLCAxLCB4LCB5KSlcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBTVkdHcmFwaGljc0VsZW1lbnQgfSBmcm9tICcuL1NWR0dyYXBoaWNzRWxlbWVudC5qcydcbmltcG9ydCAqIGFzIHBhdGhVdGlscyBmcm9tICcuLi8uLi91dGlscy9wYXRoVXRpbHMuanMnXG5cbmV4cG9ydCBjbGFzcyBTVkdQYXRoRWxlbWVudCBleHRlbmRzIFNWR0dyYXBoaWNzRWxlbWVudCB7XG4gIGdldFBvaW50QXRMZW5ndGggKGxlbikge1xuICAgIHJldHVybiBwYXRoVXRpbHMucG9pbnRBdExlbmd0aCh0aGlzLmdldEF0dHJpYnV0ZSgnZCcpLCBsZW4pXG4gIH1cblxuICBnZXRUb3RhbExlbmd0aCAoKSB7XG4gICAgcmV0dXJuIHBhdGhVdGlscy5sZW5ndGgodGhpcy5nZXRBdHRyaWJ1dGUoJ2QnKSlcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFNWR1BvaW50IHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMueCA9IDBcbiAgICB0aGlzLnkgPSAwXG4gIH1cblxuICBtYXRyaXhUcmFuc2Zvcm0gKG0pIHtcbiAgICB2YXIgciA9IG5ldyBTVkdQb2ludCgpXG4gICAgci54ID0gbS5hICogdGhpcy54ICsgbS5jICogdGhpcy55ICsgbS5lICogMVxuICAgIHIueSA9IG0uYiAqIHRoaXMueCArIG0uZCAqIHRoaXMueSArIG0uZiAqIDFcbiAgICByZXR1cm4gclxuICB9XG59XG4iLCIvLyBAdHMtY2hlY2tcbmltcG9ydCB7IFNWR0dyYXBoaWNzRWxlbWVudCB9IGZyb20gJy4vU1ZHR3JhcGhpY3NFbGVtZW50LmpzJ1xuaW1wb3J0IHsgU1ZHQW5pbWF0ZWRMZW5ndGggfSBmcm9tICcuL1NWR0FuaW1hdGVkTGVuZ3RoLmpzJ1xuXG5leHBvcnQgY2xhc3MgU1ZHUmVjdEVsZW1lbnQgZXh0ZW5kcyBTVkdHcmFwaGljc0VsZW1lbnQge1xuICB4ID0gbmV3IFNWR0FuaW1hdGVkTGVuZ3RoKHRoaXMsICd4JylcbiAgeSA9IG5ldyBTVkdBbmltYXRlZExlbmd0aCh0aGlzLCAneScpXG4gIHdpZHRoID0gbmV3IFNWR0FuaW1hdGVkTGVuZ3RoKHRoaXMsICd3aWR0aCcpXG4gIGhlaWdodCA9IG5ldyBTVkdBbmltYXRlZExlbmd0aCh0aGlzLCAnaGVpZ2h0JylcbiAgcnggPSBuZXcgU1ZHQW5pbWF0ZWRMZW5ndGgodGhpcywgJ3J4JylcbiAgcnkgPSBuZXcgU1ZHQW5pbWF0ZWRMZW5ndGgodGhpcywgJ3J5Jylcbn1cbiIsImltcG9ydCB7IFNWR0dyYXBoaWNzRWxlbWVudCB9IGZyb20gJy4vU1ZHR3JhcGhpY3NFbGVtZW50LmpzJ1xuaW1wb3J0IHsgQm94IH0gZnJvbSAnLi4vLi4vb3RoZXIvQm94LmpzJ1xuaW1wb3J0IHsgU1ZHTWF0cml4IH0gZnJvbSAnLi9TVkdNYXRyaXguanMnXG5pbXBvcnQgeyBTVkdQb2ludCB9IGZyb20gJy4vU1ZHUG9pbnQuanMnXG5cbmV4cG9ydCBjbGFzcyBTVkdTVkdFbGVtZW50IGV4dGVuZHMgU1ZHR3JhcGhpY3NFbGVtZW50IHtcbiAgY3JlYXRlU1ZHTWF0cml4ICgpIHtcbiAgICByZXR1cm4gbmV3IFNWR01hdHJpeCgpXG4gIH1cblxuICBjcmVhdGVTVkdQb2ludCAoKSB7XG4gICAgcmV0dXJuIG5ldyBTVkdQb2ludCgpXG4gIH1cblxuICBjcmVhdGVTVkdSZWN0ICgpIHtcbiAgICByZXR1cm4gbmV3IEJveCgpXG4gIH1cblxufVxuIiwiaW1wb3J0IHsgU1ZHQW5pbWF0ZWRMZW5ndGggfSBmcm9tICcuL1NWR0FuaW1hdGVkTGVuZ3RoLmpzJ1xuaW1wb3J0IHsgU1ZHR3JhcGhpY3NFbGVtZW50IH0gZnJvbSAnLi9TVkdHcmFwaGljc0VsZW1lbnQuanMnXG5cbmV4cG9ydCBjbGFzcyBTVkdUZXh0Q29udGVudEVsZW1lbnQgZXh0ZW5kcyBTVkdHcmFwaGljc0VsZW1lbnQge1xuICB0ZXh0V2lkdGggPSBuZXcgU1ZHQW5pbWF0ZWRMZW5ndGgodGhpcywgJ3RleHRXaWR0aCcpXG5cbiAgZ2V0Q29tcHV0ZWRUZXh0TGVuZ3RoICgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCQm94KCkud2lkdGhcbiAgfVxufVxuIiwiaW1wb3J0IHsgV2luZG93IH0gZnJvbSAnLi9kb20vV2luZG93LmpzJ1xuaW1wb3J0IHsgRE9NSW1wbGVtZW50YXRpb24gfSBmcm9tICcuL2RvbS9Eb2N1bWVudC5qcydcbmltcG9ydCAqIGFzIG5hbWVzcGFjZXMgZnJvbSAnLi91dGlscy9uYW1lc3BhY2VzLmpzJ1xuXG5jb25zdCB7IGNyZWF0ZURvY3VtZW50LCBjcmVhdGVIVE1MRG9jdW1lbnQgfSA9IERPTUltcGxlbWVudGF0aW9uXG5cbmNvbnN0IGNyZWF0ZVdpbmRvdyA9ICguLi5hcmdzKSA9PiB7XG4gIGNvbnN0IHdpbmRvdyA9IG5ldyBXaW5kb3coKVxuICBjb25zdCBkb2N1bWVudCA9IGNyZWF0ZURvY3VtZW50KC4uLmFyZ3MpXG4gIHdpbmRvdy5kb2N1bWVudCA9IGRvY3VtZW50XG4gIGRvY3VtZW50LmRlZmF1bHRWaWV3ID0gd2luZG93XG4gIHJldHVybiB3aW5kb3dcbn1cblxuY29uc3QgY3JlYXRlSFRNTFdpbmRvdyA9ICh0aXRsZSkgPT4ge1xuICBjb25zdCB3aW5kb3cgPSBuZXcgV2luZG93KClcbiAgY29uc3QgZG9jdW1lbnQgPSBET01JbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQodGl0bGUpXG4gIHdpbmRvdy5kb2N1bWVudCA9IGRvY3VtZW50XG4gIGRvY3VtZW50LmRlZmF1bHRWaWV3ID0gd2luZG93XG4gIHJldHVybiB3aW5kb3dcbn1cblxuY29uc3QgY3JlYXRlU1ZHV2luZG93ID0gKCkgPT4ge1xuICByZXR1cm4gY3JlYXRlV2luZG93KG5hbWVzcGFjZXMuc3ZnLCAnc3ZnJylcbn1cblxuY29uc3QgY3JlYXRlU1ZHRG9jdW1lbnQgPSAoKSA9PiB7XG4gIHJldHVybiBjcmVhdGVEb2N1bWVudChuYW1lc3BhY2VzLnN2ZywgJ3N2ZycpXG59XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZURvY3VtZW50LFxuICBjcmVhdGVIVE1MRG9jdW1lbnQsXG4gIGNyZWF0ZVNWR0RvY3VtZW50LFxuICBjcmVhdGVXaW5kb3csXG4gIGNyZWF0ZUhUTUxXaW5kb3csXG4gIGNyZWF0ZVNWR1dpbmRvd1xufVxuIiwiaW1wb3J0ICogYXMgcmVnZXggZnJvbSAnLi4vdXRpbHMvcmVnZXguanMnXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4vUG9pbnQuanMnXG5cbmV4cG9ydCBjbGFzcyBCb3gge1xuICBjb25zdHJ1Y3RvciAoc291cmNlKSB7XG4gICAgdmFyIGJhc2UgPSBbIDAsIDAsIDAsIDAgXVxuICAgIHNvdXJjZSA9IHR5cGVvZiBzb3VyY2UgPT09ICdzdHJpbmcnID8gc291cmNlLnNwbGl0KHJlZ2V4LmRlbGltaXRlcikubWFwKHBhcnNlRmxvYXQpXG4gICAgICA6IEFycmF5LmlzQXJyYXkoc291cmNlKSA/IHNvdXJjZVxuICAgICAgOiB0eXBlb2Ygc291cmNlID09PSAnb2JqZWN0JyA/IFtcbiAgICAgICAgc291cmNlLmxlZnQgIT0gbnVsbCA/IHNvdXJjZS5sZWZ0IDogc291cmNlLngsXG4gICAgICAgIHNvdXJjZS50b3AgIT0gbnVsbCA/IHNvdXJjZS50b3AgOiBzb3VyY2UueSxcbiAgICAgICAgc291cmNlLndpZHRoLFxuICAgICAgICBzb3VyY2UuaGVpZ2h0XG4gICAgICBdXG4gICAgICA6IGFyZ3VtZW50cy5sZW5ndGggPT09IDQgPyBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cylcbiAgICAgIDogYmFzZVxuXG4gICAgdGhpcy54ID0gdGhpcy5sZWZ0ID0gc291cmNlWzBdXG4gICAgdGhpcy55ID0gdGhpcy50b3AgPSBzb3VyY2VbMV1cbiAgICB0aGlzLndpZHRoID0gc291cmNlWzJdXG4gICAgdGhpcy5oZWlnaHQgPSBzb3VyY2VbM11cbiAgICB0aGlzLnJpZ2h0ID0gdGhpcy5sZWZ0ICsgdGhpcy53aWR0aFxuICAgIHRoaXMuYm90dG9tID0gdGhpcy50b3AgKyB0aGlzLmhlaWdodFxuICB9XG5cbiAgLy8gTWVyZ2UgcmVjdCBib3ggd2l0aCBhbm90aGVyLCByZXR1cm4gYSBuZXcgaW5zdGFuY2VcbiAgbWVyZ2UgKGJveCkge1xuICAgIGlmIChib3ggaW5zdGFuY2VvZiBOb0JveCkgcmV0dXJuIG5ldyBCb3godGhpcylcblxuICAgIHZhciB4ID0gTWF0aC5taW4odGhpcy54LCBib3gueClcbiAgICB2YXIgeSA9IE1hdGgubWluKHRoaXMueSwgYm94LnkpXG5cbiAgICByZXR1cm4gbmV3IEJveChcbiAgICAgIHgsIHksXG4gICAgICBNYXRoLm1heCh0aGlzLnggKyB0aGlzLndpZHRoLCBib3gueCArIGJveC53aWR0aCkgLSB4LFxuICAgICAgTWF0aC5tYXgodGhpcy55ICsgdGhpcy5oZWlnaHQsIGJveC55ICsgYm94LmhlaWdodCkgLSB5XG4gICAgKVxuICB9XG5cbiAgdHJhbnNmb3JtIChtKSB7XG4gICAgdmFyIHhNaW4gPSBJbmZpbml0eVxuICAgIHZhciB4TWF4ID0gLUluZmluaXR5XG4gICAgdmFyIHlNaW4gPSBJbmZpbml0eVxuICAgIHZhciB5TWF4ID0gLUluZmluaXR5XG5cbiAgICB2YXIgcHRzID0gW1xuICAgICAgbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KSxcbiAgICAgIG5ldyBQb2ludCh0aGlzLnggKyB0aGlzLndpZHRoLCB0aGlzLnkpLFxuICAgICAgbmV3IFBvaW50KHRoaXMueCwgdGhpcy55ICsgdGhpcy5oZWlnaHQpLFxuICAgICAgbmV3IFBvaW50KHRoaXMueCArIHRoaXMud2lkdGgsIHRoaXMueSArIHRoaXMuaGVpZ2h0KVxuICAgIF1cblxuICAgIHB0cy5mb3JFYWNoKGZ1bmN0aW9uIChwKSB7XG4gICAgICBwID0gcC50cmFuc2Zvcm0obSlcbiAgICAgIHhNaW4gPSBNYXRoLm1pbih4TWluLCBwLngpXG4gICAgICB4TWF4ID0gTWF0aC5tYXgoeE1heCwgcC54KVxuICAgICAgeU1pbiA9IE1hdGgubWluKHlNaW4sIHAueSlcbiAgICAgIHlNYXggPSBNYXRoLm1heCh5TWF4LCBwLnkpXG4gICAgfSlcblxuICAgIHJldHVybiBuZXcgQm94KFxuICAgICAgeE1pbiwgeU1pbixcbiAgICAgIHhNYXggLSB4TWluLFxuICAgICAgeU1heCAtIHlNaW5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE5vQm94IGV4dGVuZHMgQm94IHtcbiAgLy8gTm9Cb3ggaGFzIG5vIHZhbGlkIHZhbHVlcyBzbyBpdCBjYW50IGJlIG1lcmdlZFxuICBtZXJnZSAoYm94KSB7XG4gICAgcmV0dXJuIGJveCBpbnN0YW5jZW9mIE5vQm94ID8gbmV3IE5vQm94KCkgOiBuZXcgQm94KGJveClcbiAgfVxuXG4gIHRyYW5zZm9ybSAobSkge1xuICAgIHJldHVybiBuZXcgTm9Cb3goKVxuICB9XG59XG4iLCJpbXBvcnQgeyByZW1vdmVRdW90ZXMsIHNwbGl0Tm90SW5CcmFja2V0cyB9IGZyb20gJy4uL3V0aWxzL3N0clV0aWxzLmpzJ1xuaW1wb3J0ICogYXMgcmVnZXggZnJvbSAnLi4vdXRpbHMvcmVnZXguanMnXG5pbXBvcnQgeyBodG1sIH0gZnJvbSAnLi4vdXRpbHMvbmFtZXNwYWNlcy5qcydcblxuZXhwb3J0IGNsYXNzIENzc1F1ZXJ5IHtcbiAgY29uc3RydWN0b3IgKHF1ZXJ5KSB7XG4gICAgaWYgKENzc1F1ZXJ5LmNhY2hlLmhhcyhxdWVyeSkpIHtcbiAgICAgIHRoaXMucXVlcmllcyA9IENzc1F1ZXJ5LmNhY2hlLmdldChxdWVyeSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBxdWVyaWVzID0gc3BsaXROb3RJbkJyYWNrZXRzKHF1ZXJ5LCAnLCcpXG5cbiAgICBxdWVyaWVzID0gcXVlcmllcy5tYXAocXVlcnkgPT4ge1xuXG4gICAgICBsZXQgcm91bmRCcmFja2V0cyA9IDBcbiAgICAgIGxldCBzcXVhcmVCcmFja2V0cyA9IDBcblxuICAgICAgLy8gdGhpcyBpcyB0aGUgc2FtZSBhcyBhYm92ZSBidXQgZWFzaWVyXG4gICAgICBxdWVyeSA9IHF1ZXJ5LnJlcGxhY2UoL1soKVtcXF0+fitdL2csIGZ1bmN0aW9uIChjaCkge1xuICAgICAgICBpZiAoY2ggPT09ICcoJykgKytyb3VuZEJyYWNrZXRzXG4gICAgICAgIGVsc2UgaWYgKGNoID09PSAnKScpIC0tcm91bmRCcmFja2V0c1xuICAgICAgICBlbHNlIGlmIChjaCA9PT0gJ1snKSArK3NxdWFyZUJyYWNrZXRzXG4gICAgICAgIGVsc2UgaWYgKGNoID09PSAnXScpIC0tc3F1YXJlQnJhY2tldHNcblxuICAgICAgICBpZiAoJygpW10nLmluZGV4T2YoY2gpID4gLTEpIHJldHVybiBjaFxuICAgICAgICBpZiAoc3F1YXJlQnJhY2tldHMgfHwgcm91bmRCcmFja2V0cykgcmV0dXJuIGNoXG5cbiAgICAgICAgcmV0dXJuICcgJyArIGNoICsgJyAnXG4gICAgICB9KVxuXG4gICAgICAvLyBzcGxpdCBhdCBzcGFjZSBhbmQgcmVtb3ZlIGVtcHR5IHJlc3VsdHNcbiAgICAgIHF1ZXJ5ID0gc3BsaXROb3RJbkJyYWNrZXRzKHF1ZXJ5LCAnICcpLmZpbHRlcihlbCA9PiAhIWVsLmxlbmd0aClcblxuICAgICAgY29uc3QgcGFpcnMgPSBbXVxuXG4gICAgICBsZXQgcmVsYXRpb24gPSAnJSdcblxuICAgICAgLy8gZ2VuZXJhdGUgcXVlcnlub2RlIHJlbGF0aW9uIHR1cGxlc1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGlsID0gcXVlcnkubGVuZ3RoOyBpIDwgaWw7ICsraSkge1xuXG4gICAgICAgIGlmICgnPn4rJScuaW5kZXhPZihxdWVyeVtpXSkgPiAtMSkge1xuICAgICAgICAgIHJlbGF0aW9uID0gcXVlcnlbaV1cbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgcGFpcnMucHVzaChbIHJlbGF0aW9uLCBxdWVyeVtpXSBdKVxuICAgICAgICByZWxhdGlvbiA9ICclJ1xuXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYWlyc1xuXG4gICAgfSlcblxuICAgIHRoaXMucXVlcmllcyA9IHF1ZXJpZXNcblxuICAgIC8vIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzIHdlIGhhdmUgdG8gbWFuYWdlIG91ciBjYWNoZS5cbiAgICAvLyB3ZSBkZWxldGUgZXZlcnl0aGluZyB3aGljaCBpcyBvbGRlciB0aGFuIDUwIGVudHJpZXNcbiAgICBpZiAoQ3NzUXVlcnkuY2FjaGVLZXlzLmxlbmd0aCA+IDUwKSB7XG4gICAgICBDc3NRdWVyeS5jYWNoZS5kZWxldGUoQ3NzUXVlcnkuY2FjaGVLZXlzLnNoaWZ0KCkpXG4gICAgfVxuICAgIENzc1F1ZXJ5LmNhY2hlLnNldChxdWVyeSwgcXVlcmllcylcbiAgICBDc3NRdWVyeS5jYWNoZUtleXMucHVzaChxdWVyeSlcblxuICB9XG5cbiAgbWF0Y2hlcyAobm9kZSwgc2NvcGUpIHtcbiAgICBmb3IgKGxldCBpID0gdGhpcy5xdWVyaWVzLmxlbmd0aDsgaS0tOykge1xuICAgICAgaWYgKHRoaXMubWF0Y2hIZWxwZXIodGhpcy5xdWVyaWVzW2ldLCBub2RlLCBzY29wZSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBtYXRjaEhlbHBlciAocXVlcnksIG5vZGUsIHNjb3BlKSB7XG4gICAgcXVlcnkgPSBxdWVyeS5zbGljZSgpXG4gICAgY29uc3QgbGFzdCA9IHF1ZXJ5LnBvcCgpXG5cbiAgICBpZiAoIW5ldyBDc3NRdWVyeU5vZGUobGFzdFsxXSkubWF0Y2hlcyhub2RlLCBzY29wZSkpIHsgcmV0dXJuIGZhbHNlIH1cblxuICAgIGlmICghcXVlcnkubGVuZ3RoKSByZXR1cm4gdHJ1ZVxuXG4gICAgaWYgKGxhc3RbMF0gPT09ICcsJykgcmV0dXJuIHRydWVcblxuICAgIGlmIChsYXN0WzBdID09PSAnKycpIHtcbiAgICAgIHJldHVybiAhIW5vZGUucHJldmlvdXNTaWJsaW5nICYmIHRoaXMubWF0Y2hIZWxwZXIocXVlcnksIG5vZGUucHJldmlvdXNTaWJsaW5nLCBzY29wZSlcbiAgICB9XG5cbiAgICBpZiAobGFzdFswXSA9PT0gJz4nKSB7XG4gICAgICByZXR1cm4gISFub2RlLnBhcmVudE5vZGUgJiYgdGhpcy5tYXRjaEhlbHBlcihxdWVyeSwgbm9kZS5wYXJlbnROb2RlLCBzY29wZSlcbiAgICB9XG5cbiAgICBpZiAobGFzdFswXSA9PT0gJ34nKSB7XG4gICAgICB3aGlsZSAoKG5vZGUgPSBub2RlLnByZXZpb3VzU2libGluZykpIHtcbiAgICAgICAgaWYgKHRoaXMubWF0Y2hIZWxwZXIocXVlcnksIG5vZGUsIHNjb3BlKSkgeyByZXR1cm4gdHJ1ZSB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAobGFzdFswXSA9PT0gJyUnKSB7XG4gICAgICB3aGlsZSAoKG5vZGUgPSBub2RlLnBhcmVudE5vZGUpKSB7XG4gICAgICAgIGlmICh0aGlzLm1hdGNoSGVscGVyKHF1ZXJ5LCBub2RlLCBzY29wZSkpIHsgcmV0dXJuIHRydWUgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gIH1cbn1cblxuQ3NzUXVlcnkuY2FjaGUgPSBuZXcgTWFwKClcbkNzc1F1ZXJ5LmNhY2hlS2V5cyA9IFtdXG5cbi8vIGNoZWNrIGlmIFtub2RlXSBpcyB0aGUgW250aF0gY2hpbGQgb2YgW2Fycl0gd2hlcmUgbnRoIGNhbiBhbHNvIGJlIGEgZm9ybXVsYVxuY29uc3QgbnRoID0gKG5vZGUsIGFyciwgbnRoKSA9PiB7XG5cbiAgaWYgKG50aCA9PT0gJ2V2ZW4nKSBudGggPSAnMm4nXG4gIGVsc2UgaWYgKG50aCA9PT0gJ29kZCcpIG50aCA9ICcybisxJ1xuXG4gIC8vIGNoZWNrIGZvciBldmFsIGNoYXJzXG4gIGlmICgvW15cXGRcXC1uKyovXSsvLnRlc3QobnRoKSkgcmV0dXJuIGZhbHNlXG5cbiAgbnRoID0gbnRoLnJlcGxhY2UoJ24nLCAnKm4nKVxuXG4gIC8vIGV2YWwgbnRoIHRvIGdldCB0aGUgaW5kZXhcbiAgZm9yICh2YXIgaSwgbiA9IDAsIG5sID0gYXJyLmxlbmd0aDsgbiA8IG5sOyArK24pIHtcbiAgICAvKiBlc2xpbnQgbm8tZXZhbDogb2ZmICovXG4gICAgaSA9IGV2YWwobnRoKVxuXG4gICAgaWYgKGkgPiBubCkgYnJlYWtcbiAgICBpZiAoYXJyW2kgLSAxXSA9PT0gbm9kZSkgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5jb25zdCBsb3dlciA9IGEgPT4gYS50b0xvd2VyQ2FzZSgpXG5cbi8vIGNoZWNrcyBpZiBhIGFuZCBiIGFyZSBlcXVhbC4gSXMgaW5zZW5zaXRpdmUgd2hlbiBpIGlzIHRydWVcbmNvbnN0IGVxID0gKGEsIGIsIGkpID0+IGkgPyBsb3dlcihhKSA9PT0gbG93ZXIoYikgOiBhID09PSBiXG5cbi8vIFtpXSAocHJlYm91bmQpIGlzIHRydWUgaWYgaW5zZW5zaXRpdmUgbWF0Y2hpbmcgaXMgcmVxdWlyZWRcbi8vIFthXSAocHJlYm91bmQpIGlzIHRoZSB2YWx1ZSB0aGUgYXR0ciBpcyBjb21wYXJlZCB0b1xuLy8gW2JdIChwYXNzZWQpICAgaXMgdGhlIHZhbHVlIG9mIHRoZSBhdHRyaWJ1dGVcbmNvbnN0IGF0dHJpYnV0ZU1hdGNoZXIgPSB7XG4gICc9JzogKGksIGEsIGIpID0+IGVxKGEsIGIsIGkpLFxuICAnfj0nOiAoaSwgYSwgYikgPT4gYi5zcGxpdChyZWdleC5kZWxpbWl0ZXIpLmZpbHRlcihlbCA9PiBlcShlbCwgYSwgaSkpLmxlbmd0aCA+IDAsXG4gICd8PSc6IChpLCBhLCBiKSA9PiBlcShiLnNwbGl0KHJlZ2V4LmRlbGltaXRlcilbMF0sIGEsIGkpLFxuICAnXj0nOiAoaSwgYSwgYikgPT4gaSA/IGxvd2VyKGIpLnN0YXJ0c1dpdGgobG93ZXIoYSkpIDogYi5zdGFydHNXaXRoKGEpLFxuICAnJD0nOiAoaSwgYSwgYikgPT4gaSA/IGxvd2VyKGIpLmVuZHNXaXRoKGxvd2VyKGEpKSA6IGIuZW5kc1dpdGgoYSksXG4gICcqPSc6IChpLCBhLCBiKSA9PiBpID8gbG93ZXIoYikuaW5jbHVkZXMobG93ZXIoYSkpIDogYi5pbmNsdWRlcyhhKSxcbiAgJyonOiAoaSwgYSwgYikgPT4gYiAhPSBudWxsXG59XG5cbmNvbnN0IGdldEF0dHJpYnV0ZVZhbHVlID0gKHByZWZpeCwgbmFtZSwgbm9kZSkgPT4ge1xuICBpZiAoIXByZWZpeCB8fCBwcmVmaXggPT09ICcqJykge1xuICAgIHJldHVybiBub2RlLmdldEF0dHJpYnV0ZShuYW1lKVxuICB9XG4gIHJldHVybiBub2RlLmdldEF0dHJpYnV0ZShwcmVmaXggKyAnOicgKyBuYW1lKVxufVxuXG4vLyBbYV0gKHByZWJvdW5kKSBbYV1yZ3VtZW50IG9mIHRoZSBwc2V1ZG8gc2VsZWN0b3Jcbi8vIFtuXSAocGFzc2VkKSAgIFtuXW9kZVxuLy8gW3NdIChwYXNzZWQpICAgW3NdY29wZSAtIHRoZSBlbGVtZW50IHRoaXMgcXVlcnkgaXMgc2NvcGVkIHRvXG5jb25zdCBwc2V1ZG9NYXRjaGVyID0ge1xuICAnZmlyc3QtY2hpbGQnOiAoYSwgbikgPT4gbi5wYXJlbnROb2RlICYmIG4ucGFyZW50Tm9kZS5maXJzdENoaWxkID09PSBuLFxuICAnbGFzdC1jaGlsZCc6IChhLCBuKSA9PiBuLnBhcmVudE5vZGUgJiYgbi5wYXJlbnROb2RlLmxhc3RDaGlsZCA9PT0gbixcbiAgJ250aC1jaGlsZCc6IChhLCBuKSA9PiBuLnBhcmVudE5vZGUgJiYgbnRoKG4sIG4ucGFyZW50Tm9kZS5jaGlsZE5vZGVzLCBhKSxcbiAgJ250aC1sYXN0LWNoaWxkJzogKGEsIG4pID0+IG4ucGFyZW50Tm9kZSAmJiBudGgobiwgbi5wYXJlbnROb2RlLmNoaWxkTm9kZXMuc2xpY2UoKS5yZXZlcnNlKCksIGEpLFxuICAnZmlyc3Qtb2YtdHlwZSc6IChhLCBuKSA9PiBuLnBhcmVudE5vZGUgJiYgbi5wYXJlbnROb2RlLmNoaWxkTm9kZXMuZmlsdGVyKGVsID0+IGVsLm5vZGVOYW1lID09PSBuLm5vZGVOYW1lKVswXSA9PT0gbixcbiAgJ2xhc3Qtb2YtdHlwZSc6IChhLCBuKSA9PiBuLnBhcmVudE5vZGUgJiYgbi5wYXJlbnROb2RlLmNoaWxkTm9kZXMuZmlsdGVyKGVsID0+IGVsLm5vZGVOYW1lID09PSBuLm5vZGVOYW1lKS5wb3AoKSA9PT0gbixcbiAgJ250aC1vZi10eXBlJzogKGEsIG4pID0+IG4ucGFyZW50Tm9kZSAmJiBudGgobiwgbi5wYXJlbnROb2RlLmNoaWxkTm9kZXMuZmlsdGVyKGVsID0+IGVsLm5vZGVOYW1lID09PSBuLm5vZGVOYW1lKSwgYSksXG4gICdudGgtbGFzdC1vZi10eXBlJzogKGEsIG4pID0+IG4ucGFyZW50Tm9kZSAmJiBudGgobiwgbi5wYXJlbnROb2RlLmNoaWxkTm9kZXMuZmlsdGVyKGVsID0+IGVsLm5vZGVOYW1lID09PSBuLm5vZGVOYW1lKS5yZXZlcnNlKCksIGEpLFxuICAnb25seS1jaGlsZCc6IChhLCBuKSA9PiBuLnBhcmVudE5vZGUgJiYgbi5wYXJlbnROb2RlLmNoaWxkTm9kZXMubGVuZ3RoID09PSAxLFxuICAnb25seS1vZi10eXBlJzogKGEsIG4pID0+IG4ucGFyZW50Tm9kZSAmJiBuLnBhcmVudE5vZGUuY2hpbGROb2Rlcy5maWx0ZXIoZWwgPT4gZWwubm9kZU5hbWUgPT09IG4ubm9kZU5hbWUpLmxlbmd0aCA9PT0gMSxcbiAgcm9vdDogKGEsIG4pID0+IG4ub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgPT09IG4sXG4gIG5vdDogKGEsIG4sIHMpID0+ICEobmV3IENzc1F1ZXJ5KGEpKS5tYXRjaGVzKG4sIHMpLFxuICBtYXRjaGVzOiAoYSwgbiwgcykgPT4gKG5ldyBDc3NRdWVyeShhKSkubWF0Y2hlcyhuLCBzKSxcbiAgc2NvcGU6IChhLCBuLCBzKSA9PiBuID09PSBzXG59XG5cbmV4cG9ydCBjbGFzcyBDc3NRdWVyeU5vZGUge1xuICBjb25zdHJ1Y3RvciAobm9kZSkge1xuICAgIHRoaXMudGFnID0gJydcbiAgICB0aGlzLmlkID0gJydcbiAgICB0aGlzLmNsYXNzTGlzdCA9IFtdXG4gICAgdGhpcy5hdHRycyA9IFtdXG4gICAgdGhpcy5wc2V1ZG8gPSBbXVxuXG4gICAgLy8gbWF0Y2ggdGhlIHRhZyBuYW1lXG4gICAgbGV0IG1hdGNoZXMgPSBub2RlLm1hdGNoKC9eW1xcdy1dK3xeXFwqLylcbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgdGhpcy50YWcgPSBtYXRjaGVzWzBdXG4gICAgICBub2RlID0gbm9kZS5zbGljZSh0aGlzLnRhZy5sZW5ndGgpXG4gICAgfVxuXG4gICAgLy8gbWF0Y2ggcHNldWRvIGNsYXNzZXNcbiAgICB3aGlsZSAoKG1hdGNoZXMgPSAvOihbXFx3LV0rKSg/OlxcKCguKylcXCkpPy9nLmV4ZWMobm9kZSkpKSB7XG4gICAgICB0aGlzLnBzZXVkby5wdXNoKHBzZXVkb01hdGNoZXJbbWF0Y2hlc1sxXV0uYmluZCh0aGlzLCByZW1vdmVRdW90ZXMobWF0Y2hlc1syXSB8fCAnJykpKVxuICAgICAgbm9kZSA9IG5vZGUuc2xpY2UoMCwgbWF0Y2hlcy5pbmRleCkgKyBub2RlLnNsaWNlKG1hdGNoZXMuaW5kZXggKyBtYXRjaGVzWzBdLmxlbmd0aClcbiAgICB9XG5cbiAgICAvLyBtYXRjaCBhdHRyaWJ1dGVzXG4gICAgd2hpbGUgKChtYXRjaGVzID0gL1xcWyhbXFx3LSpdK1xcfCk/KFtcXHctXSspKChbPV5+JHwqXSspKC4rPykoICtbaUldKT8pP1xcXS9nLmV4ZWMobm9kZSkpKSB7XG4gICAgICBjb25zdCBwcmVmaXggPSBtYXRjaGVzWzFdID8gbWF0Y2hlc1sxXS5zcGxpdCgnfCcpWzBdIDogbnVsbFxuICAgICAgdGhpcy5hdHRycy5wdXNoKHtcbiAgICAgICAgbmFtZTogbWF0Y2hlc1syXSxcbiAgICAgICAgZ2V0VmFsdWU6IGdldEF0dHJpYnV0ZVZhbHVlLmJpbmQodGhpcywgcHJlZml4LCBtYXRjaGVzWzJdKSxcbiAgICAgICAgbWF0Y2hlcjogYXR0cmlidXRlTWF0Y2hlclttYXRjaGVzWzRdIHx8ICcqJ10uYmluZChcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgICEhbWF0Y2hlc1s2XSwgLy8gY2FzZSBpbnNlbnNpdGl2ZSB5ZXMvbm9cbiAgICAgICAgICByZW1vdmVRdW90ZXMoKG1hdGNoZXNbNV0gfHwgJycpLnRyaW0oKSkgLy8gYXR0cmlidXRlIHZhbHVlXG4gICAgICAgIClcbiAgICAgIH0pXG4gICAgICBub2RlID0gbm9kZS5zbGljZSgwLCBtYXRjaGVzLmluZGV4KSArIG5vZGUuc2xpY2UobWF0Y2hlcy5pbmRleCArIG1hdGNoZXNbMF0ubGVuZ3RoKVxuICAgIH1cblxuICAgIC8vIG1hdGNoIHRoZSBpZFxuICAgIG1hdGNoZXMgPSBub2RlLm1hdGNoKC8jKFtcXHctXSspLylcbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgdGhpcy5pZCA9IG1hdGNoZXNbMV1cbiAgICAgIG5vZGUgPSBub2RlLnNsaWNlKDAsIG1hdGNoZXMuaW5kZXgpICsgbm9kZS5zbGljZShtYXRjaGVzLmluZGV4ICsgbWF0Y2hlc1swXS5sZW5ndGgpXG4gICAgfVxuXG4gICAgLy8gbWF0Y2ggY2xhc3Nlc1xuICAgIHdoaWxlICgobWF0Y2hlcyA9IC9cXC4oW1xcdy1dKykvZy5leGVjKG5vZGUpKSkge1xuICAgICAgdGhpcy5jbGFzc0xpc3QucHVzaChtYXRjaGVzWzFdKVxuICAgICAgbm9kZSA9IG5vZGUuc2xpY2UoMCwgbWF0Y2hlcy5pbmRleCkgKyBub2RlLnNsaWNlKG1hdGNoZXMuaW5kZXggKyBtYXRjaGVzWzBdLmxlbmd0aClcbiAgICB9XG4gIH1cblxuICBtYXRjaGVzIChub2RlLCBzY29wZSkge1xuICAgIGxldCBpXG5cbiAgICBpZiAobm9kZS5ub2RlVHlwZSAhPT0gMSkgcmV0dXJuIGZhbHNlXG5cbiAgICAvLyBBbHdheXMgdGhpcyBleHRyYSBjb2RlIGZvciBodG1sIC0uLVxuICAgIGlmIChub2RlLm5hbWVzcGFjZVVSSSA9PT0gaHRtbCkge1xuICAgICAgdGhpcy50YWcgPSB0aGlzLnRhZy50b1VwcGVyQ2FzZSgpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMudGFnICYmIHRoaXMudGFnICE9PSBub2RlLm5vZGVOYW1lICYmIHRoaXMudGFnICE9PSAnKicpIHsgcmV0dXJuIGZhbHNlIH1cblxuICAgIGlmICh0aGlzLmlkICYmIHRoaXMuaWQgIT09IG5vZGUuaWQpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGNsYXNzTGlzdCA9IChub2RlLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJykuc3BsaXQocmVnZXguZGVsaW1pdGVyKS5maWx0ZXIoZWwgPT4gISFlbC5sZW5ndGgpXG4gICAgaWYgKHRoaXMuY2xhc3NMaXN0LmZpbHRlcihjbGFzc05hbWUgPT4gY2xhc3NMaXN0LmluZGV4T2YoY2xhc3NOYW1lKSA8IDApLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgZm9yIChpID0gdGhpcy5hdHRycy5sZW5ndGg7IGktLTspIHtcbiAgICAgIGNvbnN0IGF0dHJWYWx1ZSA9IHRoaXMuYXR0cnNbaV0uZ2V0VmFsdWUobm9kZSlcbiAgICAgIGlmIChhdHRyVmFsdWUgPT09IG51bGwgfHwgIXRoaXMuYXR0cnNbaV0ubWF0Y2hlcihhdHRyVmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IHRoaXMucHNldWRvLmxlbmd0aDsgaS0tOykge1xuICAgICAgaWYgKCF0aGlzLnBzZXVkb1tpXShub2RlLCBzY29wZSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBTVkdQb2ludCB9IGZyb20gJy4uL2RvbS9zdmcvU1ZHUG9pbnQuanMnXG5cbmV4cG9ydCBjbGFzcyBQb2ludCB7XG4gIC8vIEluaXRpYWxpemVcbiAgY29uc3RydWN0b3IgKHgsIHkpIHtcbiAgICBjb25zdCBiYXNlID0geyB4OiAwLCB5OiAwIH1cblxuICAgIC8vIGVuc3VyZSBzb3VyY2UgYXMgb2JqZWN0XG4gICAgY29uc3Qgc291cmNlID0gQXJyYXkuaXNBcnJheSh4KVxuICAgICAgPyB7IHg6IHhbMF0sIHk6IHhbMV0gfVxuICAgICAgOiB0eXBlb2YgeCA9PT0gJ29iamVjdCdcbiAgICAgICAgPyB7IHg6IHgueCwgeTogeC55IH1cbiAgICAgICAgOiB4ICE9IG51bGxcbiAgICAgICAgICA/IHsgeDogeCwgeTogKHkgIT0gbnVsbCA/IHkgOiB4KSB9XG4gICAgICAgICAgOiBiYXNlIC8vIElmIHkgaGFzIG5vIHZhbHVlLCB0aGVuIHggaXMgdXNlZCBoYXMgaXRzIHZhbHVlXG5cbiAgICAvLyBtZXJnZSBzb3VyY2VcbiAgICB0aGlzLnggPSBzb3VyY2UueFxuICAgIHRoaXMueSA9IHNvdXJjZS55XG4gIH1cblxuICBhYnMgKCkge1xuICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy5hYnNRdWFkKCkpXG4gIH1cblxuICBhYnNRdWFkICgpIHtcbiAgICByZXR1cm4gdGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55XG4gIH1cblxuICBhZGQgKHgsIHkpIHtcbiAgICBjb25zdCBwID0gbmV3IFBvaW50KHgsIHkpXG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKyBwLngsIHRoaXMueSArIHAueSlcbiAgfVxuXG4gIGFuZ2xlVG8gKHApIHtcbiAgICBsZXQgc2lnbiA9IE1hdGguc2lnbih0aGlzLnggKiBwLnkgLSB0aGlzLnkgKiBwLngpXG4gICAgc2lnbiA9IHNpZ24gfHwgMVxuICAgIHJldHVybiBzaWduICogTWF0aC5hY29zKE1hdGgucm91bmQoKHRoaXMuZG90KHApIC8gKHRoaXMuYWJzKCkgKiBwLmFicygpKSkgKiAxMDAwMDAwKSAvIDEwMDAwMDApXG4gIH1cblxuICAvLyBDbG9uZSBwb2ludFxuICBjbG9uZSAoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzKVxuICB9XG5cbiAgY2xvc2VUbyAocCwgZXRhID0gMC4wMDAwMSkge1xuICAgIHJldHVybiB0aGlzLmVxdWFscyhwKSB8fCAoTWF0aC5hYnModGhpcy54IC0gcC54KSA8IGV0YSAmJiBNYXRoLmFicyh0aGlzLnkgLSBwLnkpIDwgZXRhKVxuICB9XG5cbiAgZGl2IChmYWN0b3IpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAvIGZhY3RvciwgdGhpcy55IC8gZmFjdG9yKVxuICB9XG5cbiAgZG90IChwKSB7XG4gICAgcmV0dXJuIHRoaXMueCAqIHAueCArIHRoaXMueSAqIHAueVxuICB9XG5cbiAgZXF1YWxzIChwKSB7XG4gICAgcmV0dXJuIHRoaXMueCA9PT0gcC54ICYmIHRoaXMueSA9PT0gcC55XG4gIH1cblxuICBtdWwgKGZhY3Rvcikge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICogZmFjdG9yLCB0aGlzLnkgKiBmYWN0b3IpXG4gIH1cblxuICAvLyBDb252ZXJ0IHRvIG5hdGl2ZSBTVkdQb2ludFxuICBuYXRpdmUgKCkge1xuICAgIC8vIGNyZWF0ZSBuZXcgcG9pbnRcbiAgICBjb25zdCBwb2ludCA9IG5ldyBTVkdQb2ludCgpXG5cbiAgICAvLyB1cGRhdGUgd2l0aCBjdXJyZW50IHZhbHVlc1xuICAgIHBvaW50LnggPSB0aGlzLnhcbiAgICBwb2ludC55ID0gdGhpcy55XG5cbiAgICByZXR1cm4gcG9pbnRcbiAgfVxuXG4gIG5vcm1hbCAoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnksIC10aGlzLngpXG4gIH1cblxuICBub3JtYWxpemUgKCkge1xuICAgIGNvbnN0IGFicyA9IHRoaXMuYWJzKClcbiAgICBpZiAoIWFicykgdGhyb3cgbmV3IEVycm9yKCdDYW5cXCd0IG5vcm1hbGl6ZSB2ZWN0b3Igb2YgemVybyBsZW5ndGgnKVxuICAgIHJldHVybiB0aGlzLmRpdihhYnMpXG4gIH1cblxuICByZWZsZWN0QXQgKHApIHtcbiAgICByZXR1cm4gcC5hZGQocC5zdWIodGhpcykpXG4gIH1cblxuICBzdWIgKHgsIHkpIHtcbiAgICBjb25zdCBwID0gbmV3IFBvaW50KHgsIHkpXG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggLSBwLngsIHRoaXMueSAtIHAueSlcbiAgfVxuXG4gIHRvQXJyYXkgKCkge1xuICAgIHJldHVybiBbIHRoaXMueCwgdGhpcy55IF1cbiAgfVxuXG4gIHRvUGF0aCAoKSB7XG4gICAgcmV0dXJuIFsgJ00nLCB0aGlzLngsIHRoaXMueSBdLmpvaW4oJyAnKVxuICB9XG5cbiAgLy8gdHJhbnNmb3JtIHBvaW50IHdpdGggbWF0cml4XG4gIHRyYW5zZm9ybSAobWF0cml4KSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLm5hdGl2ZSgpLm1hdHJpeFRyYW5zZm9ybShtYXRyaXgpKVxuICB9XG5cbiAgdHJhbnNmb3JtTyAobWF0cml4KSB7XG4gICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLm5hdGl2ZSgpLm1hdHJpeFRyYW5zZm9ybShtYXRyaXgpXG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMueSA9IHlcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOb2RlRmlsdGVyIH0gZnJvbSAnLi4vZG9tL05vZGVGaWx0ZXIuanMnXG5cbmNvbnN0IHNob3dUaGlzTm9kZSA9ICh3aGF0VG9TaG93LCBub2RlKSA9PiB7XG4gIGlmICh3aGF0VG9TaG93ID09PSBOb2RlRmlsdGVyLlNIT1dfQUxMKSByZXR1cm4gdHJ1ZVxuICBpZiAod2hhdFRvU2hvdyAmIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5UICYmIG5vZGUubm9kZVR5cGUgPT09IG5vZGUuRUxFTUVOVF9OT0RFKSByZXR1cm4gdHJ1ZVxuICBpZiAod2hhdFRvU2hvdyAmIE5vZGVGaWx0ZXIuU0hPV19URVhUICYmIG5vZGUubm9kZVR5cGUgPT09IG5vZGUuVEVYVF9OT0RFKSByZXR1cm4gdHJ1ZVxuICBpZiAod2hhdFRvU2hvdyAmIE5vZGVGaWx0ZXIuU0hPV19FTlRJVFlfUkVGRVJFTkNFICYmIG5vZGUubm9kZVR5cGUgPT09IG5vZGUuRU5USVRZX1JFRkVSRU5DRV9OT0RFKSByZXR1cm4gdHJ1ZVxuICBpZiAod2hhdFRvU2hvdyAmIE5vZGVGaWx0ZXIuU0hPV19FTlRJVFkgJiYgbm9kZS5ub2RlVHlwZSA9PT0gbm9kZS5FTlRJVFlfTk9ERSkgcmV0dXJuIHRydWVcbiAgaWYgKHdoYXRUb1Nob3cgJiBOb2RlRmlsdGVyLlNIT1dfUFJPQ0VTU0lOR19JTlNUUlVDVElPTiAmJiBub2RlLm5vZGVUeXBlID09PSBub2RlLlBST0NFU1NJTkdfSU5TVFJVQ1RJT05fTk9ERSkgcmV0dXJuIHRydWVcbiAgaWYgKHdoYXRUb1Nob3cgJiBOb2RlRmlsdGVyLlNIT1dfQ09NTUVOVCAmJiBub2RlLm5vZGVUeXBlID09PSBub2RlLkNPTU1FTlRfTk9ERSkgcmV0dXJuIHRydWVcbiAgaWYgKHdoYXRUb1Nob3cgJiBOb2RlRmlsdGVyLlNIT1dfRE9DVU1FTlQgJiYgbm9kZS5ub2RlVHlwZSA9PT0gbm9kZS5ET0NVTUVOVF9OT0RFKSByZXR1cm4gdHJ1ZVxuICBpZiAod2hhdFRvU2hvdyAmIE5vZGVGaWx0ZXIuU0hPV19ET0NVTUVOVF9UWVBFICYmIG5vZGUubm9kZVR5cGUgPT09IG5vZGUuRE9DVU1FTlRfVFlQRV9OT0RFKSByZXR1cm4gdHJ1ZVxuICBpZiAod2hhdFRvU2hvdyAmIE5vZGVGaWx0ZXIuU0hPV19ET0NVTUVOVF9GUkFHTUVOVCAmJiBub2RlLm5vZGVUeXBlID09PSBub2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUpIHJldHVybiB0cnVlXG4gIGlmICh3aGF0VG9TaG93ICYgTm9kZUZpbHRlci5TSE9XX05PVEFUSU9OICYmIG5vZGUubm9kZVR5cGUgPT09IG5vZGUuTk9UQVRJT05fTk9ERSkgcmV0dXJuIHRydWVcbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBjbGFzcyBOb2RlSXRlcmF0b3Ige1xuICBjb25zdHJ1Y3RvciAocm9vdCwgd2hhdFRvU2hvdyA9IE5vZGVGaWx0ZXIuU0hPV19BTEwsIGZpbHRlciA9ICgpID0+IE5vZGVGaWx0ZXIuRklMVEVSX0FDQ0VQVCwgaW5jbHVkZVBhcmVudCA9IHRydWUpIHtcbiAgICB0aGlzLnJvb3QgPSBpbmNsdWRlUGFyZW50ID8geyBjaGlsZE5vZGVzOiBbIHJvb3QgXSB9IDogcm9vdFxuICAgIHRoaXMud2hhdFRvU2hvdyA9IHdoYXRUb1Nob3dcbiAgICB0aGlzLmZpbHRlciA9IGZpbHRlclxuICB9XG5cbiAgKiBbU3ltYm9sLml0ZXJhdG9yXSAoKSB7XG4gICAgY29uc3Qgbm9kZXMgPSB0aGlzLnJvb3QuY2hpbGROb2Rlc1xuXG4gICAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICBpZiAoIXNob3dUaGlzTm9kZSh0aGlzLndoYXRUb1Nob3csIG5vZGUpKSBjb250aW51ZVxuXG4gICAgICBjb25zdCBmaWx0ZXJSZXQgPSB0aGlzLmZpbHRlcihub2RlKVxuXG4gICAgICBpZiAoZmlsdGVyUmV0ID09PSBOb2RlRmlsdGVyLkZJTFRFUl9SRUpFQ1QpIGNvbnRpbnVlXG4gICAgICBpZiAoZmlsdGVyUmV0ID09PSBOb2RlRmlsdGVyLkZJTFRFUl9BQ0NFUFQpIHtcbiAgICAgICAgeWllbGQgbm9kZVxuICAgICAgfVxuXG4gICAgICB5aWVsZCAqIG5ldyBOb2RlSXRlcmF0b3Iobm9kZSwgdGhpcy53aGF0VG9TaG93LCB0aGlzLmZpbHRlciwgZmFsc2UpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxufVxuIiwiaW1wb3J0IHsgQm94LCBOb0JveCB9IGZyb20gJy4uL290aGVyL0JveC5qcydcblxuZXhwb3J0IGNsYXNzIFBvaW50Q2xvdWQgZXh0ZW5kcyBBcnJheSB7XG4gIGNvbnN0cnVjdG9yICguLi5hcmdzKSB7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID09PSAxICYmIHR5cGVvZiBhcmdzWzBdID09PSAnbnVtYmVyJykge1xuICAgICAgc3VwZXIoYXJncy5zaGlmdCgpKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdXBlcigpXG4gICAgfVxuXG4gICAgLy8gZXhjZXB0IG11bHRpcGxlIHBvaW50IGFycmF5cyBhcyBpbnB1dCBhbmQgbWVyZ2UgdGhlbSBpbnRvIG9uZVxuICAgIGFyZ3MucmVkdWNlKChsYXN0LCBjdXJyKSA9PiB7XG4gICAgICBsYXN0LnB1c2goLi4uY3VycilcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfSwgdGhpcylcbiAgfVxuXG4gIGJib3ggKCkge1xuICAgIGlmICghdGhpcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBuZXcgTm9Cb3goKVxuICAgIH1cblxuICAgIGxldCB4TWluID0gSW5maW5pdHlcbiAgICBsZXQgeE1heCA9IC1JbmZpbml0eVxuICAgIGxldCB5TWluID0gSW5maW5pdHlcbiAgICBsZXQgeU1heCA9IC1JbmZpbml0eVxuXG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uIChwKSB7XG4gICAgICB4TWluID0gTWF0aC5taW4oeE1pbiwgcC54KVxuICAgICAgeE1heCA9IE1hdGgubWF4KHhNYXgsIHAueClcbiAgICAgIHlNaW4gPSBNYXRoLm1pbih5TWluLCBwLnkpXG4gICAgICB5TWF4ID0gTWF0aC5tYXgoeU1heCwgcC55KVxuICAgIH0pXG5cbiAgICByZXR1cm4gbmV3IEJveChcbiAgICAgIHhNaW4sIHlNaW4sXG4gICAgICB4TWF4IC0geE1pbixcbiAgICAgIHlNYXggLSB5TWluXG4gICAgKVxuICB9XG5cbiAgbWVyZ2UgKGNsb3VkKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludENsb3VkKHRoaXMsIGNsb3VkKVxuICB9XG5cbiAgdHJhbnNmb3JtIChtKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludENsb3VkKHRoaXMubWFwKChwKSA9PiBwLnRyYW5zZm9ybShtKSkpXG4gIH1cblxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFV0aWxzIGZyb20gJy4vcGF0aFV0aWxzLmpzJ1xuaW1wb3J0ICogYXMgcmVnZXggZnJvbSAnLi9yZWdleC5qcydcbmltcG9ydCAqIGFzIHRleHRVdGlscyBmcm9tICcuL3RleHRVdGlscy5qcydcbmltcG9ydCB7IE5vQm94IH0gZnJvbSAnLi4vb3RoZXIvQm94LmpzJ1xuaW1wb3J0IHsgTm9kZUl0ZXJhdG9yIH0gZnJvbSAnLi9Ob2RlSXRlcmF0b3IuanMnXG5pbXBvcnQgeyBOb2RlRmlsdGVyIH0gZnJvbSAnLi4vZG9tL05vZGVGaWx0ZXIuanMnXG5cbmNvbnN0IGFwcGx5VHJhbnNmb3JtYXRpb24gPSAoc2VnbWVudHMsIG5vZGUsIGFwcGx5VHJhbnNmb3JtYXRpb25zKSA9PiB7XG4gIGlmIChub2RlLm1hdHJpeGlmeSAmJiBhcHBseVRyYW5zZm9ybWF0aW9ucykge1xuICAgIHJldHVybiBzZWdtZW50cy50cmFuc2Zvcm0obm9kZS5tYXRyaXhpZnkoKSlcbiAgfVxuICByZXR1cm4gc2VnbWVudHNcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlZ21lbnRzID0gKG5vZGUsIGFwcGx5VHJhbnNmb3JtYXRpb25zLCByYm94ID0gZmFsc2UpID0+IHtcbiAgY29uc3Qgc2VnbWVudHMgPSBnZXRQYXRoU2VnbWVudHMobm9kZSwgcmJveClcbiAgcmV0dXJuIGFwcGx5VHJhbnNmb3JtYXRpb24oc2VnbWVudHMsIG5vZGUsIGFwcGx5VHJhbnNmb3JtYXRpb25zKVxufVxuXG5jb25zdCBnZXRQYXRoU2VnbWVudHMgPSAobm9kZSwgcmJveCkgPT4ge1xuICBpZiAobm9kZS5ub2RlVHlwZSAhPT0gMSkgcmV0dXJuIG5ldyBwYXRoVXRpbHMuUGF0aFNlZ21lbnRBcnJheSgpXG4gIGNvbnN0IGxlbmd0aCA9IG5vZGUuY2hpbGROb2Rlcy5sZW5ndGhcbiAgY29uc3QgcmVzdWx0ID0gbmV3IHBhdGhVdGlscy5QYXRoU2VnbWVudEFycmF5KClcbiAgc3dpdGNoIChub2RlLm5vZGVOYW1lKSB7XG4gIGNhc2UgJ3JlY3QnOlxuICBjYXNlICdpbWFnZSc6XG4gIGNhc2UgJ3BhdHRlcm4nOlxuICBjYXNlICdtYXNrJzpcbiAgY2FzZSAnZm9yZWlnbk9iamVjdCc6XG4gICAgLy8gQ3JlYXRlIFBhdGggZnJvbSByZWN0IGFuZCBjcmVhdGUgUG9pbnRDbG91ZCBmcm9tIFBhdGhcbiAgICByZXR1cm4gcGF0aFV0aWxzLmdldFBhdGhTZWdtZW50cyhwYXRoVXRpbHMucGF0aEZyb20ucmVjdChub2RlKSlcbiAgY2FzZSAnc3ZnJzpcbiAgY2FzZSAnc3ltYm9sJzpcbiAgICAvLyByZXR1cm4gcGF0aFV0aWxzLmdldFBhdGhTZWdtZW50cyhwYXRoVXRpbHMucGF0aEZyb20ucmVjdChub2RlKSlcbiAgICBpZiAocmJveCkge1xuICAgICAgcmV0dXJuIHBhdGhVdGlscy5nZXRQYXRoU2VnbWVudHMocGF0aFV0aWxzLnBhdGhGcm9tLnJlY3Qobm9kZSkpXG4gICAgfVxuICAvLyBBVFRFTlRJT046IEZBTEwgVEhST1VHSFxuICAvLyBCZWNhdXNlIG5vcm1hbCBiYm94IGlzIGNhbGN1bGF0ZWQgYnkgdGhlIGNvbnRlbnQgb2YgdGhlIGVsZW1lbnQgYW5kIG5vdCBpdHMgd2lkdGggYW5kIGhlaWdodFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgY2FzZSAnZyc6XG4gIGNhc2UgJ2NsaXBQYXRoJzpcbiAgY2FzZSAnYSc6XG4gIGNhc2UgJ21hcmtlcic6XG4gICAgLy8gSXRlcmF0ZSB0aHJvdWdoIGFsbCBjaGlsZHJlbiBhbmQgZ2V0IHRoZSBwb2ludCBjbG91ZCBvZiBlYWNoXG4gICAgLy8gVGhlbiB0cmFuc2Zvcm0gaXQgd2l0aCB2aWV3Ym94IG1hdHJpeCBpZiBuZWVkZWRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjaGlsZCA9IG5vZGUuY2hpbGROb2Rlc1tpXVxuICAgICAgaWYgKCFjaGlsZC5tYXRyaXhpZnkpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKC4uLmdldFNlZ21lbnRzKGNoaWxkLCB0cnVlKS50cmFuc2Zvcm0oY2hpbGQuZ2VuZXJhdGVWaWV3Qm94TWF0cml4KCkpKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIGNhc2UgJ2NpcmNsZSc6XG4gICAgcmV0dXJuIHBhdGhVdGlscy5nZXRQYXRoU2VnbWVudHMocGF0aFV0aWxzLnBhdGhGcm9tLmNpcmNsZShub2RlKSlcbiAgY2FzZSAnZWxsaXBzZSc6XG4gICAgcmV0dXJuIHBhdGhVdGlscy5nZXRQYXRoU2VnbWVudHMocGF0aFV0aWxzLnBhdGhGcm9tLmVsbGlwc2Uobm9kZSkpXG4gIGNhc2UgJ2xpbmUnOlxuICAgIHJldHVybiBwYXRoVXRpbHMuZ2V0UGF0aFNlZ21lbnRzKHBhdGhVdGlscy5wYXRoRnJvbS5saW5lKG5vZGUpKVxuICBjYXNlICdwb2x5bGluZSc6XG4gIGNhc2UgJ3BvbHlnb24nOlxuICAgIHJldHVybiBwYXRoVXRpbHMuZ2V0UGF0aFNlZ21lbnRzKHBhdGhVdGlscy5wYXRoRnJvbS5wb2x5bGluZShub2RlKSlcbiAgY2FzZSAncGF0aCc6XG4gIGNhc2UgJ2dseXBoJzpcbiAgY2FzZSAnbWlzc2luZy1nbHlwaCc6XG4gICAgcmV0dXJuIHBhdGhVdGlscy5nZXRQYXRoU2VnbWVudHMobm9kZS5nZXRBdHRyaWJ1dGUoJ2QnKSlcbiAgY2FzZSAndXNlJzoge1xuICAgIC8vIEdldCByZWZlcmVuY2UgZnJvbSBlbGVtZW50XG4gICAgY29uc3QgcmVmID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSB8fCBub2RlLmdldEF0dHJpYnV0ZSgneGxpbms6aHJlZicpXG4gICAgLy8gR2V0IHRoZSBhY3R1YWwgcmVmZXJlbmNlZCBOb2RlXG4gICAgY29uc3QgcmVmTm9kZSA9IG5vZGUuZ2V0Um9vdE5vZGUoKS5xdWVyeVNlbGVjdG9yKHJlZilcbiAgICAvLyBHZXQgdGhlIEJCb3ggb2YgdGhlIHJlZmVyZW5jZWQgZWxlbWVudCBhbmQgYXBwbHkgdGhlIHZpZXdib3ggb2YgPHVzZT5cbiAgICAvLyBUT0RPOiBEbyB3ZSBuZWVkIHRvIGFwcGx5IHRoZSB0cmFuc2Zvcm1hdGlvbnMgb2YgdGhlIGVsZW1lbnQ/XG4gICAgLy8gQ2hlY2sgYmJveCBvZiB0cmFuc2Zvcm1lZCBlbGVtZW50IHdoaWNoIGlzIHJldXNlZCB3aXRoIDx1c2U+XG4gICAgcmV0dXJuIGdldFNlZ21lbnRzKHJlZk5vZGUpLnRyYW5zZm9ybShub2RlLmdlbmVyYXRlVmlld0JveE1hdHJpeCgpKVxuICB9XG4gIGNhc2UgJ3RzcGFuJzpcbiAgY2FzZSAndGV4dCc6XG4gIGNhc2UgJ2FsdEdseXBoJzoge1xuICAgIGNvbnN0IGJveCA9IGdldFRleHRCQm94KG5vZGUpXG5cbiAgICBpZiAoYm94IGluc3RhbmNlb2YgTm9Cb3gpIHtcbiAgICAgIHJldHVybiBuZXcgcGF0aFV0aWxzLlBhdGhTZWdtZW50QXJyYXkoKVxuICAgIH1cblxuICAgIHJldHVybiBwYXRoVXRpbHMuZ2V0UGF0aFNlZ21lbnRzKHBhdGhVdGlscy5wYXRoRnJvbS5ib3goYm94KSlcbiAgfVxuICBkZWZhdWx0OlxuICAgIHJldHVybiBuZXcgcGF0aFV0aWxzLlBhdGhTZWdtZW50QXJyYXkoKVxuICB9XG59XG5cbmNvbnN0IGdldFRleHRCQm94ID0gKG5vZGUpID0+IHtcbiAgY29uc3QgdGV4dFJvb3QgPSBmaW5kVGV4dFJvb3Qobm9kZSlcbiAgY29uc3QgYm94ZXMgPSBnZXRUZXh0QkJveGVzKG5vZGUsIHRleHRSb290KVxuICByZXR1cm4gYm94ZXMuZmlsdGVyKGlzTm90RW1wdHlCb3gpLnJlZHVjZSgobGFzdCwgY3VycikgPT4gbGFzdC5tZXJnZShjdXJyKSwgbmV3IE5vQm94KCkpXG59XG5cbmNvbnN0IGZpbmRUZXh0Um9vdCA9IChub2RlKSA9PiB7XG4gIHdoaWxlIChub2RlLnBhcmVudE5vZGUpIHtcbiAgICBpZiAoKG5vZGUubm9kZU5hbWUgPT09ICd0ZXh0JyAmJiBub2RlLnBhcmVudE5vZGUubm9kZU5hbWUgPT09ICd0ZXh0JylcbiAgICB8fCAoKG5vZGUubm9kZU5hbWUgPT09ICd0c3BhbicgfHwgbm9kZS5ub2RlTmFtZSA9PT0gJ3RleHRQYXRoJykgJiYgWyAndHNwYW4nLCAndGV4dCcsICd0ZXh0UGF0aCcgXS5pbmNsdWRlcyhub2RlLnBhcmVudE5vZGUubm9kZU5hbWUpKSkge1xuICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZVxuICAgIH0gZWxzZSB7XG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBub2RlXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gdGFrZXMgYSBub2RlIG9mIHdoaWNoIHRoZSBiYm94IG5lZWRzIHRvIGJlIGNhbGN1bGF0ZWRcbi8vIEluIG9yZGVyIHRvIHBvc2l0aW9uIHRoZSBib3ggY29ycmVjdGx5LCB3ZSBuZWVkIHRvIGtub3cgd2VyZSB0aGUgcGFyZW50IGFuZCB3ZXJlIHRoZSBzaWJsaW5ncyAqYmVmb3JlKiBvdXIgbm9kZSBhcmVcbi8vIFRoYXRzIHdoeSBhIHRleHRSb290IGlzIHBhc3NlZCB3aGljaCBpcyB0aGUgbW9zdCBvdXRlciB0ZXh0RWxlbWVudCBuZWVkZWQgdG8gY2FsY3VsYXRlIGFsbCBib3hlc1xuLy8gV2hlbiB0aGUgaXRlcmF0b3IgaGl0cyB0aGUgZWxlbWVudCB3ZSBuZWVkIHRoZSBiYm94IG9mLCBpdCBpcyB0ZXJtaW5hdGVkIGFuZCB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBhZ2FpblxuLy8gb25seSBmb3IgdGhlIHN1YnN0cmVlIG9mIG91ciBub2RlIGFuZCB3aXRob3V0IHRleHRSb29yIGJ1dCBpbnN0ZWFkIHBvcywgZHggYW5kIGR5IGFyZSBrbm93blxuY29uc3QgZ2V0VGV4dEJCb3hlcyA9IGZ1bmN0aW9uICh0YXJnZXQsIHRleHRSb290ID0gdGFyZ2V0LCBwb3MgPSB7IHg6IDAsIHk6IDAgfSwgZHggPSBbIDAgXSwgZHkgPSBbIDAgXSwgYm94ZXMgPSBbXSkge1xuXG4gIC8vIENyZWF0ZSBOb2RlSXRlcmF0b3IuIE9ubHkgc2hvdyBlbGVtbnRzIGFuZCB0ZXh0IGFuZCBza2lwIGRlc2NyaXB0aXZlIGVsZW1lbnRzXG4gIC8vIFRPRE86IG1ha2UgYW4gaW5zdGFuY2VvZiBjaGVjayBmb3IgRGVzY3JpcHRpdmVFbGVtZW50IGluc3RlYWQgb2YgdGVzdGluZyBvbmUgYnkgb25lXG4gIC8vIE9ubHkgdGl0bGUgaXMgc2tpcHBlZCBhdG1cbiAgY29uc3QgaXRlciA9IG5ldyBOb2RlSXRlcmF0b3IodGV4dFJvb3QsIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5UIHwgTm9kZUZpbHRlci5TSE9XX1RFWFQsIChub2RlKSA9PiB7XG4gICAgaWYgKG5vZGUubm9kZU5hbWUgPT09ICd0aXRsZScpIHJldHVybiBOb2RlRmlsdGVyLkZJTFRFUl9JR05PUkVcbiAgICByZXR1cm4gTm9kZUZpbHRlci5GSUxURVJfQUNDRVBUXG4gIH0pXG5cbiAgLy8gSXRlcmF0ZSB0cm91Z2ggYWxsIG5vZGVzIHRvcCB0byBib3R0b20sIGxlZnQgdG8gcmlnaHRcbiAgZm9yIChjb25zdCBub2RlIG9mIGl0ZXIpIHtcblxuICAgIC8vIElmIHdlIGhpdCBvdXIgdGFyZ2V0LCB3ZSBnYXRoZXJlZCBhbGwgcG9zaXRpb25hbCBpbmZvcm1hdGlvbiB3ZSBuZWVkIHRvIG1vdmUgdGhlIGJib3ggdG8gdGhlIGNvcnJlY3Qgc3BvdFxuICAgIGlmIChub2RlID09PSB0YXJnZXQgJiYgbm9kZSAhPT0gdGV4dFJvb3QpIHtcbiAgICAgIHJldHVybiBnZXRUZXh0QkJveGVzKG5vZGUsIG5vZGUsIHBvcywgZHgsIGR5KVxuICAgIH1cblxuICAgIC8vIFRyYXZlcnNlIHRyb3VnaCB0aGlzIG5vZGUgdXBkYXRpbmcgcG9zaXRpb25zIGFuZCBhZGQgYm94ZXNcbiAgICBnZXRQb3NpdGlvbkRldGFpbHNGb3Iobm9kZSwgcG9zLCBkeCwgZHksIGJveGVzKVxuICB9XG5cbiAgcmV0dXJuIGJveGVzXG59XG5cbmNvbnN0IGlzTm90RW1wdHlCb3ggPSBib3ggPT4gYm94LnggIT09IDAgfHwgYm94LnkgIT09IDAgfHwgYm94LndpZHRoICE9PSAwIHx8IGJveC5oZWlnaHQgIT09IDBcblxuLy8gVGhpcyBmdW5jdGlvbiBlaXRoZXIgdXBkYXRlcyBwb3MsIGR4IGFuZCBkeSAod2hlbiBpdHMgYW4gZWxlbWVudCkgb3IgY2FsY3VsYXRlcyB0aGUgYm94ZXMgZm9yIHRleHQgd2l0aCB0aGUgcGFzc2VkIGFyZ3VtZW50c1xuLy8gQWxsIGFyZ3VtZW50cyBhcmUgcGFzc2VkIGJ5IHJlZmVyZW5jZSBzbyBkb250IG92ZXJ3cml0ZSB0aGVtICh0cmVhdCB0aGVtIGFzIGNvbnN0ISlcbi8vIFRPRE86IEJyZWFrIHRoaXMgaW50byB0d28gZnVuY3Rpb25zP1xuY29uc3QgZ2V0UG9zaXRpb25EZXRhaWxzRm9yID0gKG5vZGUsIHBvcywgZHgsIGR5LCBib3hlcykgPT4ge1xuICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gbm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICBjb25zdCB4ID0gcGFyc2VGbG9hdChub2RlLmdldEF0dHJpYnV0ZSgneCcpKVxuICAgIGNvbnN0IHkgPSBwYXJzZUZsb2F0KG5vZGUuZ2V0QXR0cmlidXRlKCd5JykpXG5cbiAgICBwb3MueCA9IGlzTmFOKHgpID8gcG9zLnggOiB4XG4gICAgcG9zLnkgPSBpc05hTih5KSA/IHBvcy55IDogeVxuXG4gICAgY29uc3QgZHgwID0gKG5vZGUuZ2V0QXR0cmlidXRlKCdkeCcpIHx8ICcnKS5zcGxpdChyZWdleC5kZWxpbWl0ZXIpLmZpbHRlcihudW0gPT4gbnVtICE9PSAnJykubWFwKHBhcnNlRmxvYXQpXG4gICAgY29uc3QgZHkwID0gKG5vZGUuZ2V0QXR0cmlidXRlKCdkeScpIHx8ICcnKS5zcGxpdChyZWdleC5kZWxpbWl0ZXIpLmZpbHRlcihudW0gPT4gbnVtICE9PSAnJykubWFwKHBhcnNlRmxvYXQpXG5cbiAgICAvLyBUT0RPOiBldmVudHVhbGx5IHJlcGxhY2Ugb25seSBhcyBtdWNoIHZhbHVlcyBhcyB3ZSBoYXZlIHRleHQgY2hhcnMgKG5vZGUudGV4dENvbnRlbnQubGVuZ3RoKSBiZWNhdXNlIHdlIGNvdWxkIGVuZCB1cCBhZGRpbmcgdG8gbXVjaFxuICAgIC8vIHJlcGxhY2UgaW5pdGlhbCB2YWx1ZXMgd2l0aCBub2RlIHZhbHVlcyBpZiBwcmVzZW50XG4gICAgZHguc3BsaWNlKDAsIGR4MC5sZW5ndGgsIC4uLmR4MClcbiAgICBkeS5zcGxpY2UoMCwgZHkwLmxlbmd0aCwgLi4uZHkwKVxuICB9IGVsc2Uge1xuICAgIC8vIGdldCB0ZXh0IGRhdGFcbiAgICBjb25zdCBkYXRhID0gbm9kZS5kYXRhXG5cbiAgICBsZXQgaiA9IDBcbiAgICBjb25zdCBqbCA9IGRhdGEubGVuZ3RoXG4gICAgY29uc3QgZGV0YWlscyA9IGdldEZvbnREZXRhaWxzKG5vZGUpXG5cbiAgICAvLyBpZiBpdCBpcyBtb3JlIHRoYW4gb25lIGR4L2R5IHNpbmdsZSBsZXR0ZXJzIGFyZSBtb3ZlZCBieSB0aGUgYW1vdW50IChodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9TVkcvQXR0cmlidXRlL2R4KVxuICAgIGlmIChkeS5sZW5ndGggfHwgZHgubGVuZ3RoKSB7XG4gICAgICBmb3IgKDtqIDwgamw7IGorKykge1xuICAgICAgICAvLyBDYWxjdWxhdGUgYSBib3ggZm9yIGEgc2luZ2xlIGxldHRlclxuICAgICAgICBib3hlcy5wdXNoKHRleHRVdGlscy50ZXh0QkJveChkYXRhLnN1YnN0cihqLCAxKSwgcG9zLngsIHBvcy55LCBkZXRhaWxzKSlcblxuICAgICAgICAvLyBBZGQgdGhlIG5leHQgcG9zaXRpb24gdG8gY3VycmVudCBvbmVcbiAgICAgICAgcG9zLnggKz0gZHguc2hpZnQoKSB8fCAwXG4gICAgICAgIHBvcy55ICs9IGR5LnNoaWZ0KCkgfHwgMFxuXG4gICAgICAgIGlmICghZHkubGVuZ3RoICYmICFkeC5sZW5ndGgpIGJyZWFrXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaW4gY2FzZSBpdCB3YXMgb25seSBvbmUgZHgvZHkgb3Igbm8gbW9yZSBkeC9keSBtb3ZlIHRoZSByZXN0IG9mIHRoZSB0ZXh0XG4gICAgYm94ZXMucHVzaCh0ZXh0VXRpbHMudGV4dEJCb3goZGF0YS5zdWJzdHIoaiksIHBvcy54LCBwb3MueSwgZGV0YWlscykpXG4gICAgcG9zLnggKz0gYm94ZXNbYm94ZXMubGVuZ3RoIC0gMV0ud2lkdGhcbiAgfVxufVxuXG4vKlxuLy8gdGhpcyBmdW5jdGlvbiBpcyBwYXNzaW5nIGR4IGFuZCBkeSB2YWx1ZXMgYnkgcmVmZXJlbmNlcy4gRG9udCBhc3NpZ24gbmV3IHZhbHVlcyB0byBpdFxuY29uc3QgdGV4dEl0ZXJhdG9yID0gZnVuY3Rpb24gKG5vZGUsIHBvcyA9IHsgeDogMCwgeTogMCB9LCBkeCA9IFsgMCBdLCBkeSA9IFsgMCBdKSB7XG5cbiAgdmFyIHggPSBwYXJzZUZsb2F0KG5vZGUuZ2V0QXR0cmlidXRlKCd4JykpXG4gIHZhciB5ID0gcGFyc2VGbG9hdChub2RlLmdldEF0dHJpYnV0ZSgneScpKVxuXG4gIHBvcy54ID0gaXNOYU4oeCkgPyBwb3MueCA6IHhcbiAgcG9zLnkgPSBpc05hTih5KSA/IHBvcy55IDogeVxuXG4gIHZhciBkeDAgPSAobm9kZS5nZXRBdHRyaWJ1dGUoJ2R4JykgfHwgJycpLnNwbGl0KHJlZ2V4LmRlbGltaXRlcikuZmlsdGVyKG51bSA9PiBudW0gIT09ICcnKS5tYXAocGFyc2VGbG9hdClcbiAgdmFyIGR5MCA9IChub2RlLmdldEF0dHJpYnV0ZSgnZHknKSB8fCAnJykuc3BsaXQocmVnZXguZGVsaW1pdGVyKS5maWx0ZXIobnVtID0+IG51bSAhPT0gJycpLm1hcChwYXJzZUZsb2F0KVxuICB2YXIgYm94ZXMgPSBbXVxuICB2YXIgZGF0YSA9ICcnXG5cbiAgLy8gVE9ETzogZXZlbnR1YWxseSByZXBsYWNlIG9ubHkgYXMgbXVjaCB2YWx1ZXMgYXMgd2UgaGF2ZSB0ZXh0IGNoYXJzIChub2RlLnRleHRDb250ZW50Lmxlbmd0aCkgYmVjYXVzZSB3ZSBjb3VsZCBlbmQgdXAgYWRkaW5nIHRvIG11Y2hcbiAgLy8gcmVwbGFjZSBpbml0aWFsIHZhbHVlcyB3aXRoIG5vZGUgdmFsdWVzIGlmIHByZXNlbnRcbiAgZHguc3BsaWNlKDAsIGR4MC5sZW5ndGgsIC4uLmR4MClcbiAgZHkuc3BsaWNlKDAsIGR5MC5sZW5ndGgsIC4uLmR5MClcblxuICB2YXIgaSA9IDBcbiAgdmFyIGlsID0gbm9kZS5jaGlsZE5vZGVzLmxlbmd0aFxuXG4gIC8vIGl0ZXJhdGUgdGhyb3VnaCBhbGwgY2hpbGRyZW5cbiAgZm9yICg7IGkgPCBpbDsgKytpKSB7XG5cbiAgICAvLyBzaGlmdCBuZXh0IGNoaWxkXG4gICAgcG9zLnggKz0gZHguc2hpZnQoKSB8fCAwXG4gICAgcG9zLnkgKz0gZHkuc2hpZnQoKSB8fCAwXG5cbiAgICAvLyB0ZXh0XG4gICAgaWYgKG5vZGUuY2hpbGROb2Rlc1tpXS5ub2RlVHlwZSA9PT0gbm9kZS5URVhUX05PREUpIHtcblxuICAgICAgLy8gZ2V0IHRleHQgZGF0YVxuICAgICAgZGF0YSA9IG5vZGUuY2hpbGROb2Rlc1tpXS5kYXRhXG5cbiAgICAgIGxldCBqID0gMFxuICAgICAgY29uc3QgamwgPSBkYXRhLmxlbmd0aFxuXG4gICAgICAvLyBpZiBpdCBpcyBtb3JlIHRoYW4gb25lIGR4L2R5IHNpbmdsZSBsZXR0ZXJzIGFyZSBtb3ZlZCBieSB0aGUgYW1vdW50IChodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9TVkcvQXR0cmlidXRlL2R4KVxuICAgICAgaWYgKGR5Lmxlbmd0aCB8fCBkeC5sZW5ndGgpIHtcbiAgICAgICAgZm9yICg7aiA8IGpsOyBqKyspIHtcbiAgICAgICAgICBib3hlcy5wdXNoKHRleHRVdGlscy50ZXh0QkJveChkYXRhLnN1YnN0cihqLCAxKSwgcG9zLngsIHBvcy55LCBnZXRGb250RGV0YWlscyhub2RlKSkpXG5cbiAgICAgICAgICBwb3MueCArPSBkeC5zaGlmdCgpIHx8IDBcbiAgICAgICAgICBwb3MueSArPSBkeS5zaGlmdCgpIHx8IDBcblxuICAgICAgICAgIGlmICghZHkubGVuZ3RoICYmICFkeC5sZW5ndGgpIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gaW4gY2FzZSBpdCB3YXMgb25seSBvbmUgZHgvZHkgb3Igbm8gbW9yZSBkeC9keSBtb3ZlIHRoZSByZXN0IG9mIHRoZSB0ZXh0XG5cbiAgICAgIGJveGVzLnB1c2godGV4dFV0aWxzLnRleHRCQm94KGRhdGEuc3Vic3RyKGopLCBwb3MueCwgcG9zLnksIGdldEZvbnREZXRhaWxzKG5vZGUpKSlcbiAgICAgIHBvcy54ICs9IGJveGVzW2JveGVzLmxlbmd0aCAtIDFdLndpZHRoXG5cbiAgICAvLyBlbGVtZW50XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluIGNhc2Ugb2YgZWxlbWVudCwgcmVjdXJzaXZlbHkgY2FsbCBmdW5jdGlvbiBhZ2FpbiB3aXRoIG5ldyBzdGFydCB2YWx1ZXNcbiAgICAgIGJveGVzID0gYm94ZXMuY29uY2F0KHRleHRJdGVyYXRvcihub2RlLmNoaWxkTm9kZXNbaV0sIHBvcywgZHgsIGR5KSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYm94ZXNcbn0gKi9cblxuY29uc3QgZ2V0Rm9udERldGFpbHMgPSAobm9kZSkgPT4ge1xuICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gbm9kZS5URVhUX05PREUpIG5vZGUgPSBub2RlLnBhcmVudE5vZGVcblxuICBsZXQgZm9udFNpemUgPSBudWxsXG4gIGxldCBmb250RmFtaWx5ID0gbnVsbFxuICBsZXQgdGV4dEFuY2hvciA9IG51bGxcbiAgbGV0IGRvbWluYW50QmFzZWxpbmUgPSBudWxsXG5cbiAgY29uc3QgdGV4dENvbnRlbnRFbGVtZW50cyA9IFtcbiAgICAndGV4dCcsXG4gICAgJ3RzcGFuJyxcbiAgICAndHJlZicsXG4gICAgJ3RleHRQYXRoJyxcbiAgICAnYWx0R2x5cGgnLFxuICAgICdnJ1xuICBdXG5cbiAgZG8ge1xuICAgIC8vIFRPRE86IHN0b3Agb25cbiAgICBpZiAoIWZvbnRTaXplKSB7IGZvbnRTaXplID0gbm9kZS5zdHlsZS5mb250U2l6ZSB8fCBub2RlLmdldEF0dHJpYnV0ZSgnZm9udC1zaXplJykgfVxuICAgIGlmICghZm9udEZhbWlseSkgeyBmb250RmFtaWx5ID0gbm9kZS5zdHlsZS5mb250RmFtaWx5IHx8IG5vZGUuZ2V0QXR0cmlidXRlKCdmb250LWZhbWlseScpIH1cbiAgICBpZiAoIXRleHRBbmNob3IpIHsgdGV4dEFuY2hvciA9IG5vZGUuc3R5bGUudGV4dEFuY2hvciB8fCBub2RlLmdldEF0dHJpYnV0ZSgndGV4dC1hbmNob3InKSB9XG4gICAgaWYgKCFkb21pbmFudEJhc2VsaW5lKSB7IGRvbWluYW50QmFzZWxpbmUgPSBub2RlLnN0eWxlLmRvbWluYW50QmFzZWxpbmUgfHwgbm9kZS5nZXRBdHRyaWJ1dGUoJ2RvbWluYW50LWJhc2VsaW5lJykgfVxuICAgIC8vIFRPRE86IGNoZWNrIGZvciBhbGlnbm1lbnQtYmFzZWxpbmUgaW4gdHNwYW4sIHRyZWYsIHRleHRQYXRoLCBhbHRHbHlwaFxuICAgIC8vIFRPRE86IGFsaWdubWVudC1hZGp1c3QsIGJhc2VsaW5lLXNoaWZ0XG4gICAgLypcbiAgICBpZighYWxpZ25tZW50QmFzZWxpbmUpXG4gICAgYWxpZ25tZW50QmFzZWxpbmUgPSB0aGlzLnN0eWxlLmFsaWdubWVudEJhc2VsaW5lIHx8IHRoaXMuZ2V0QXR0cmlidXRlKCdhbGlnbm1lbnQtYmFzZWxpbmUnKVxuICAgICovXG5cbiAgfSB3aGlsZSAoXG4gICAgKG5vZGUgPSBub2RlLnBhcmVudE5vZGUpXG4gICAgJiYgbm9kZS5ub2RlVHlwZSA9PT0gbm9kZS5FTEVNRU5UX05PREVcbiAgICAmJiAodGV4dENvbnRlbnRFbGVtZW50cy5pbmNsdWRlcyhub2RlLm5vZGVOYW1lKSlcbiAgKVxuXG4gIHJldHVybiB7XG4gICAgZm9udEZhbWlseSxcbiAgICBmb250U2l6ZSxcbiAgICB0ZXh0QW5jaG9yOiB0ZXh0QW5jaG9yIHx8ICdzdGFydCcsXG4gICAgLy8gVE9ETzogdXNlIGNlbnRyYWwgZm9yIHdyaXRpbmctbW9kZSA9PT0gaG9yaXpvbnRhbCBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9TVkcvQXR0cmlidXRlL2RvbWluYW50LWJhc2VsaW5lXG4gICAgZG9taW5hbnRCYXNlbGluZTogZG9taW5hbnRCYXNlbGluZSB8fCAnYWxwaGFiZXRpY2FsJ1xuICAgIC8vIGZvbnRGYW1pbHlNYXBwaW5nczogdGhpcy5vd25lckRvY3VtZW50LmZvbnRGYW1pbHlNYXBwaW5ncyxcbiAgICAvLyBmb250RGlyOiB0aGlzLm93bmVyRG9jdW1lbnQuZm9udERpcixcbiAgICAvLyBwcmVsb2FkZWQ6IHRoaXMub3duZXJEb2N1bWVudC5fcHJlbG9hZGVkXG4gIH1cbn1cbiIsImltcG9ydCB7IGpvaW4sIGRpcm5hbWUgfSBmcm9tICdub2RlOnBhdGgnXG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAnbm9kZTp1cmwnXG5cbmNvbnN0IF9fZGlybmFtZSA9IGRpcm5hbWUoZmlsZVVSTFRvUGF0aChpbXBvcnQubWV0YS51cmwpKVxuXG5leHBvcnQgY29uc3QgZm9udFNpemUgPSAxNlxuZXhwb3J0IGNvbnN0IGZvbnRGYW1pbHkgPSAnc2Fucy1zZXJpZidcbmV4cG9ydCBjb25zdCBmb250RGlyID0gam9pbihfX2Rpcm5hbWUsICcuLi8uLi8nLCAnZm9udHMvJylcbmV4cG9ydCBjb25zdCBmb250RmFtaWx5TWFwcGluZ3MgPSB7XG4gICdzYW5zLXNlcmlmJzogJ09wZW5TYW5zLVJlZ3VsYXIudHRmJyxcbiAgJ09wZW4gU2Fucyc6ICdPcGVuU2Fucy1SZWd1bGFyLnR0Zidcbn1cbiIsImltcG9ydCB7IGRlY2FtZWxpemUgfSBmcm9tICcuLi91dGlscy9zdHJVdGlscy5qcydcblxuZXhwb3J0IGNvbnN0IG9iamVjdFRvTWFwID0gZnVuY3Rpb24gKG9iaikge1xuICBpZiAob2JqIGluc3RhbmNlb2YgTWFwKSByZXR1cm4gbmV3IE1hcChvYmopXG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmopLnJlZHVjZSgobWFwLCBrZXkpID0+IG1hcC5zZXQoa2V5LCBvYmpba2V5XSksIG5ldyBNYXAoKSlcbn1cblxuZXhwb3J0IGNvbnN0IG1hcFRvT2JqZWN0ID0gZnVuY3Rpb24gKG1hcCkge1xuICB2YXIgb2JqID0ge31cbiAgbWFwLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlXG4gIH0pXG4gIHJldHVybiBvYmpcbn1cblxuZXhwb3J0IGNvbnN0IG1hcE1hcCA9IGZ1bmN0aW9uIChtYXAsIGNiKSB7XG4gIHZhciBhcnIgPSBbXVxuICBtYXAuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgIGFyci5wdXNoKGNiKHZhbHVlLCBrZXkpKVxuICB9KVxuICByZXR1cm4gYXJyXG59XG5cbmV4cG9ydCBjb25zdCBtYXBUb0NzcyA9IGZ1bmN0aW9uIChteU1hcCkge1xuICByZXR1cm4gbWFwTWFwKG15TWFwLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgIGlmICghdmFsdWUpIHJldHVybiBmYWxzZVxuICAgIHJldHVybiBkZWNhbWVsaXplKGtleSkgKyAnOiAnICsgdmFsdWVcbiAgfSkuZmlsdGVyKGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gISFlbCB9KS5qb2luKCc7ICcpICsgJzsnIHx8IG51bGxcbn1cblxuZXhwb3J0IGNvbnN0IGNzc1RvTWFwID0gZnVuY3Rpb24gKGNzcykge1xuICByZXR1cm4gbmV3IE1hcChjc3Muc3BsaXQoL1xccyo7XFxzKi8pLmZpbHRlcihmdW5jdGlvbiAoZWwpIHsgcmV0dXJuICEhZWwgfSkubWFwKGZ1bmN0aW9uIChlbCkge1xuICAgIHJldHVybiBlbC5zcGxpdCgvXFxzKjpcXHMqLylcbiAgfSkpXG59XG4iLCJcbmV4cG9ydCBjb25zdCBzdmcgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG5leHBvcnQgY29uc3QgeGxpbmsgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaydcbmV4cG9ydCBjb25zdCBodG1sID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnXG5leHBvcnQgY29uc3QgbWF0aG1sID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUwnXG5leHBvcnQgY29uc3QgeG1sID0gJ2h0dHA6Ly93d3cudzMub3JnL1hNTC8xOTk4L25hbWVzcGFjZSdcbmV4cG9ydCBjb25zdCB4bWxucyA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3htbG5zLydcbiIsImV4cG9ydCBjb25zdCBub2Rlc1RvTm9kZSA9IChub2RlcywgZG9jdW1lbnQpID0+IHtcbiAgbm9kZXMgPSBub2Rlcy5tYXAoKG5vZGUpID0+IHtcbiAgICBpZiAodHlwZW9mIG5vZGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobm9kZSlcbiAgICB9XG4gICAgcmV0dXJuIG5vZGVcbiAgfSlcbiAgaWYgKG5vZGVzLmxlbmd0aCA9PT0gMSkgeyByZXR1cm4gbm9kZXNbMF0gfVxuICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG4gIG5vZGVzLmZvckVhY2gobm9kZS5hcHBlbmRDaGlsZCwgbm9kZSlcbiAgcmV0dXJuIG5vZGVcbn1cbiIsImV4cG9ydCBjb25zdCBleHRlbmQgPSAoLi4ubW9kdWxlcykgPT4ge1xuICB2YXIgbWV0aG9kcywga2V5LCBpXG5cbiAgLy8gR2V0IG9iamVjdCB3aXRoIGV4dGVuc2lvbnNcbiAgbWV0aG9kcyA9IG1vZHVsZXMucG9wKClcblxuICBmb3IgKGkgPSBtb2R1bGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgZm9yIChrZXkgaW4gbWV0aG9kcykgeyBtb2R1bGVzW2ldLnByb3RvdHlwZVtrZXldID0gbWV0aG9kc1trZXldIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZXh0ZW5kU3RhdGljID0gKC4uLm1vZHVsZXMpID0+IHtcbiAgdmFyIG1ldGhvZHMsIGtleSwgaVxuXG4gIC8vIEdldCBvYmplY3Qgd2l0aCBleHRlbnNpb25zXG4gIG1ldGhvZHMgPSBtb2R1bGVzLnBvcCgpXG5cbiAgZm9yIChpID0gbW9kdWxlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGZvciAoa2V5IGluIG1ldGhvZHMpIHsgbW9kdWxlc1tpXVtrZXldID0gbWV0aG9kc1trZXldIH1cbiAgfVxufVxuXG4vLyBUT0RPOiByZWZhY3RvciBzbyB0aGF0IGl0IHRha2VzIGEgY2xhc3NcbmV4cG9ydCBjb25zdCBtaXhpbiA9IChtaXhpbiwgX2NsYXNzKSA9PiB7XG4gIGNvbnN0IGRlc2NyaXB0b3JzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMobWl4aW4pXG4gIC8vIGNvbnN0IGFsbCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG1peGluKVxuXG4gIC8vIGNvbnN0IHByb3BOYW1lcyA9IE9iamVjdC5rZXlzKGRlc2NyaXB0b3JzKVxuICAvLyBjb25zdCBtZXRob2ROYW1lcyA9IGFsbC5maWx0ZXIocCA9PiAhcHJvcE5hbWVzLmluY2x1ZGVzKHApKVxuXG4gIC8vIGZvciAoY29uc3QgbWV0aG9kIG9mIG1ldGhvZE5hbWVzKSB7XG4gIC8vICAgX2NsYXNzLnByb3RvdHlwZVttZXRob2RdID0gbWl4aW5bbWV0aG9kXVxuICAvLyB9XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoX2NsYXNzLnByb3RvdHlwZSwgZGVzY3JpcHRvcnMpXG59XG4iLCJpbXBvcnQgeyBCb3gsIE5vQm94IH0gZnJvbSAnLi4vb3RoZXIvQm94LmpzJ1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9vdGhlci9Qb2ludC5qcydcbmltcG9ydCAqIGFzIHJlZ2V4IGZyb20gJy4vcmVnZXguanMnXG4vLyBUT0RPOiB1c2Ugb3duIG1hdHJpeCBpbXBsZW1lbnRhdGlvblxuaW1wb3J0IHsgbWF0cml4RmFjdG9yeSB9IGZyb20gJy4vLi4vZG9tL3N2Zy9TVkdNYXRyaXguanMnXG5pbXBvcnQgeyBQb2ludENsb3VkIH0gZnJvbSAnLi9Qb2ludENsb3VkLmpzJ1xuXG5jb25zdCBwYXRoSGFuZGxlcnMgPSB7XG4gIE0gKGMsIHAsIHIsIHAwKSB7XG4gICAgcC54ID0gcDAueCA9IGNbMF1cbiAgICBwLnkgPSBwMC55ID0gY1sxXVxuXG4gICAgcmV0dXJuIG5ldyBNb3ZlKHApXG4gIH0sXG4gIEwgKGMsIHApIHtcbiAgICBjb25zdCByZXQgPSBuZXcgTGluZShwLngsIHAueSwgY1swXSwgY1sxXSkvLyAub2Zmc2V0KG8pXG4gICAgcC54ID0gY1swXVxuICAgIHAueSA9IGNbMV1cbiAgICByZXR1cm4gcmV0XG4gIH0sXG4gIEggKGMsIHApIHtcbiAgICByZXR1cm4gcGF0aEhhbmRsZXJzLkwoWyBjWzBdLCBwLnkgXSwgcClcbiAgfSxcbiAgViAoYywgcCkge1xuICAgIHJldHVybiBwYXRoSGFuZGxlcnMuTChbIHAueCwgY1swXSBdLCBwKVxuICB9LFxuICBRIChjLCBwLCByKSB7XG4gICAgY29uc3QgcmV0ID0gQ3ViaWMuZnJvbVF1YWQocCwgbmV3IFBvaW50KGNbMF0sIGNbMV0pLCBuZXcgUG9pbnQoY1syXSwgY1szXSkpLy8gLm9mZnNldChvKVxuICAgIHAueCA9IGNbMl1cbiAgICBwLnkgPSBjWzNdXG5cbiAgICBjb25zdCByZWZsZWN0ID0gbmV3IFBvaW50KGNbMF0sIGNbMV0pLnJlZmxlY3RBdChwKVxuICAgIHIueCA9IHJlZmxlY3QueFxuICAgIHIueSA9IHJlZmxlY3QueVxuXG4gICAgcmV0dXJuIHJldFxuICB9LFxuICBUIChjLCBwLCByLCBwMCwgcmVmbGVjdGlvbklzUG9zc2libGUpIHtcbiAgICBpZiAocmVmbGVjdGlvbklzUG9zc2libGUpIHsgYyA9IFsgci54LCByLnkgXS5jb25jYXQoYykgfSBlbHNlIHsgYyA9IFsgcC54LCBwLnkgXS5jb25jYXQoYykgfVxuICAgIHJldHVybiBwYXRoSGFuZGxlcnMuUShjLCBwLCByKVxuICB9LFxuICBDIChjLCBwLCByKSB7XG4gICAgY29uc3QgcmV0ID0gbmV3IEN1YmljKHAsIG5ldyBQb2ludChjWzBdLCBjWzFdKSwgbmV3IFBvaW50KGNbMl0sIGNbM10pLCBuZXcgUG9pbnQoY1s0XSwgY1s1XSkpLy8gLm9mZnNldChvKVxuICAgIHAueCA9IGNbNF1cbiAgICBwLnkgPSBjWzVdXG4gICAgY29uc3QgcmVmbGVjdCA9IG5ldyBQb2ludChjWzJdLCBjWzNdKS5yZWZsZWN0QXQocClcbiAgICByLnggPSByZWZsZWN0LnhcbiAgICByLnkgPSByZWZsZWN0LnlcbiAgICByZXR1cm4gcmV0XG4gIH0sXG4gIFMgKGMsIHAsIHIsIHAwLCByZWZsZWN0aW9uSXNQb3NzaWJsZSkge1xuICAgIC8vIHJlZmxlY3Rpb24gbWFrZXMgb25seSBzZW5zZSBpZiB0aGlzIGNvbW1hbmQgd2FzIHByZWNlZWRlZCBieSBhbm90aGVyIGJlemllcmUgY29tbWFuZCAoUVRTQylcbiAgICBpZiAocmVmbGVjdGlvbklzUG9zc2libGUpIHsgYyA9IFsgci54LCByLnkgXS5jb25jYXQoYykgfSBlbHNlIHsgYyA9IFsgcC54LCBwLnkgXS5jb25jYXQoYykgfVxuICAgIHJldHVybiBwYXRoSGFuZGxlcnMuQyhjLCBwLCByKVxuICB9LFxuICBaIChjLCBwLCByLCBwMCkge1xuICAgIC8vIEZJWE1FOiBUaGUgYmVoYXZpb3Igb2YgWiBkZXBlbmRzIG9uIHRoZSBjb21tYW5kIGJlZm9yZVxuICAgIHJldHVybiBwYXRoSGFuZGxlcnMuTChbIHAwLngsIHAwLnkgXSwgcClcbiAgfSxcbiAgQSAoYywgcCwgcikge1xuICAgIGNvbnN0IHJldCA9IG5ldyBBcmMocCwgbmV3IFBvaW50KGNbNV0sIGNbNl0pLCBjWzBdLCBjWzFdLCBjWzJdLCBjWzNdLCBjWzRdKVxuICAgIHAueCA9IGNbNV1cbiAgICBwLnkgPSBjWzZdXG4gICAgcmV0dXJuIHJldFxuICB9XG59XG5cbmNvbnN0IG1saHZxdGNzYSA9ICdtbGh2cXRjc2F6Jy5zcGxpdCgnJylcblxuZm9yIChsZXQgaSA9IDAsIGlsID0gbWxodnF0Y3NhLmxlbmd0aDsgaSA8IGlsOyArK2kpIHtcbiAgcGF0aEhhbmRsZXJzW21saHZxdGNzYVtpXV0gPSAoZnVuY3Rpb24gKGkpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGMsIHAsIHIsIHAwLCByZWZsZWN0aW9uSXNQb3NzaWJsZSkge1xuICAgICAgaWYgKGkgPT09ICdIJykgY1swXSA9IGNbMF0gKyBwLnhcbiAgICAgIGVsc2UgaWYgKGkgPT09ICdWJykgY1swXSA9IGNbMF0gKyBwLnlcbiAgICAgIGVsc2UgaWYgKGkgPT09ICdBJykge1xuICAgICAgICBjWzVdID0gY1s1XSArIHAueFxuICAgICAgICBjWzZdID0gY1s2XSArIHAueVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDAsIGpsID0gYy5sZW5ndGg7IGogPCBqbDsgKytqKSB7XG4gICAgICAgICAgY1tqXSA9IGNbal0gKyAoaiAlIDIgPyBwLnkgOiBwLngpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhdGhIYW5kbGVyc1tpXShjLCBwLCByLCBwMCwgcmVmbGVjdGlvbklzUG9zc2libGUpXG4gICAgfVxuICB9KShtbGh2cXRjc2FbaV0udG9VcHBlckNhc2UoKSlcbn1cblxuZnVuY3Rpb24gcGF0aFJlZ1JlcGxhY2UgKGEsIGIsIGMsIGQpIHtcbiAgcmV0dXJuIGMgKyBkLnJlcGxhY2UocmVnZXguZG90cywgJyAuJylcbn1cblxuZnVuY3Rpb24gaXNCZXppZXJlIChvYmopIHtcbiAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEN1YmljXG59XG5cbmV4cG9ydCBjb25zdCBwYXRoUGFyc2VyID0gKGFycmF5KSA9PiB7XG5cbiAgLy8gcHJlcGFyZSBmb3IgcGFyc2luZ1xuICBjb25zdCBwYXJhbUNudCA9IHsgTTogMiwgTDogMiwgSDogMSwgVjogMSwgQzogNiwgUzogNCwgUTogNCwgVDogMiwgQTogNywgWjogMCB9XG5cbiAgYXJyYXkgPSBhcnJheVxuICAgIC5yZXBsYWNlKHJlZ2V4Lm51bWJlcnNXaXRoRG90cywgcGF0aFJlZ1JlcGxhY2UpIC8vIGNvbnZlcnQgNDUuMTIzLjEyMyB0byA0NS4xMjMgLjEyM1xuICAgIC5yZXBsYWNlKHJlZ2V4LnBhdGhMZXR0ZXJzLCAnICQmICcpIC8vIHB1dCBzb21lIHJvb20gYmV0d2VlbiBsZXR0ZXJzIGFuZCBudW1iZXJzXG4gICAgLnJlcGxhY2UocmVnZXguaHlwaGVuLCAnJDEgLScpIC8vIGFkZCBzcGFjZSBiZWZvcmUgaHlwaGVuXG4gICAgLnRyaW0oKSAvLyB0cmltXG4gICAgLnNwbGl0KHJlZ2V4LmRlbGltaXRlcikgLy8gc3BsaXQgaW50byBhcnJheVxuXG4gIC8vIGFycmF5IG5vdyBpcyBhbiBhcnJheSBjb250YWluaW5nIGFsbCBwYXJ0cyBvZiBhIHBhdGggZS5nLiBbJ00nLCAnMCcsICcwJywgJ0wnLCAnMzAnLCAnMzAnIC4uLl1cbiAgY29uc3QgYXJyID0gW11cbiAgY29uc3QgcCA9IG5ldyBQb2ludCgpXG4gIGNvbnN0IHAwID0gbmV3IFBvaW50KClcbiAgY29uc3QgciA9IG5ldyBQb2ludCgpXG4gIGxldCBpbmRleCA9IDBcbiAgY29uc3QgbGVuID0gYXJyYXkubGVuZ3RoXG4gIGxldCBzXG5cbiAgZG8ge1xuICAgIC8vIFRlc3QgaWYgd2UgaGF2ZSBhIHBhdGggbGV0dGVyXG4gICAgaWYgKHJlZ2V4LmlzUGF0aExldHRlci50ZXN0KGFycmF5W2luZGV4XSkpIHtcbiAgICAgIHMgPSBhcnJheVtpbmRleF1cbiAgICAgICsraW5kZXhcbiAgICAvLyBJZiBsYXN0IGxldHRlciB3YXMgYSBtb3ZlIGNvbW1hbmQgYW5kIHdlIGdvdCBubyBuZXcsIGl0IGRlZmF1bHRzIHRvIFtMXWluZVxuICAgIH0gZWxzZSBpZiAocyA9PT0gJ00nKSB7XG4gICAgICBzID0gJ0wnXG4gICAgfSBlbHNlIGlmIChzID09PSAnbScpIHtcbiAgICAgIHMgPSAnbCdcbiAgICB9XG5cbiAgICBhcnIucHVzaChcbiAgICAgIHBhdGhIYW5kbGVyc1tzXS5jYWxsKG51bGwsXG4gICAgICAgIGFycmF5LnNsaWNlKGluZGV4LCAoaW5kZXggPSBpbmRleCArIHBhcmFtQ250W3MudG9VcHBlckNhc2UoKV0pKS5tYXAocGFyc2VGbG9hdCksXG4gICAgICAgIHAsIHIsIHAwLFxuICAgICAgICBpc0JlemllcmUoYXJyW2Fyci5sZW5ndGggLSAxXSlcbiAgICAgIClcbiAgICApXG5cbiAgfSB3aGlsZSAobGVuID4gaW5kZXgpXG5cbiAgcmV0dXJuIGFyclxufVxuXG5jbGFzcyBNb3ZlIHtcbiAgY29uc3RydWN0b3IgKHApIHtcbiAgICB0aGlzLnAxID0gcC5jbG9uZSgpXG4gIH1cblxuICAvLyBGSVhNRTogVXNlIHBvaW50Y2xvdWRcbiAgYmJveCAoKSB7XG4gICAgY29uc3QgcCA9IHRoaXMucDFcbiAgICByZXR1cm4gbmV3IEJveChwLngsIHAueSwgMCwgMClcbiAgfVxuXG4gIGdldENsb3VkICgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50Q2xvdWQoWyB0aGlzLnAxIF0pXG4gIH1cblxuICBsZW5ndGggKCkgeyByZXR1cm4gMCB9XG5cbiAgdG9QYXRoICgpIHtcbiAgICByZXR1cm4gWyAnTScsIHRoaXMucDEueCwgdGhpcy5wMS55IF0uam9pbignICcpXG4gIH1cblxuICB0b1BhdGhGcmFnbWVudCAoKSB7XG4gICAgcmV0dXJuIFsgJ00nLCB0aGlzLnAxLngsIHRoaXMucDEueSBdXG4gIH1cblxuICB0cmFuc2Zvcm0gKG1hdHJpeCkge1xuICAgIHRoaXMucDEudHJhbnNmb3JtTyhtYXRyaXgpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXJjIHtcbiAgY29uc3RydWN0b3IgKHAxLCBwMiwgcngsIHJ5LCDPhiwgYXJjLCBzd2VlcCkge1xuICAgIC8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9TVkcvaW1wbG5vdGUuaHRtbCNBcmNDb3JyZWN0aW9uT3V0T2ZSYW5nZVJhZGlpXG4gICAgaWYgKCFyeCB8fCAhcnkpIHJldHVybiBuZXcgTGluZShwMSwgcDIpXG5cbiAgICByeCA9IE1hdGguYWJzKHJ4KVxuICAgIHJ5ID0gTWF0aC5hYnMocnkpXG5cbiAgICB0aGlzLnAxID0gcDEuY2xvbmUoKVxuICAgIHRoaXMucDIgPSBwMi5jbG9uZSgpXG4gICAgdGhpcy5hcmMgPSBhcmMgPyAxIDogMFxuICAgIHRoaXMuc3dlZXAgPSBzd2VlcCA/IDEgOiAwXG5cbiAgICAvLyBDYWxjdWxhdGUgY29zIGFuZCBzaW4gb2YgYW5nbGUgcGhpXG4gICAgY29uc3QgY29zz4YgPSBNYXRoLmNvcyjPhiAvIDE4MCAqIE1hdGguUEkpXG4gICAgY29uc3Qgc2luz4YgPSBNYXRoLnNpbijPhiAvIDE4MCAqIE1hdGguUEkpXG5cbiAgICAvLyBodHRwczovL3d3dy53My5vcmcvVFIvU1ZHL2ltcGxub3RlLmh0bWwjQXJjQ29udmVyc2lvbkVuZHBvaW50VG9DZW50ZXJcbiAgICAvLyAoZXEuIDUuMSlcbiAgICBjb25zdCBwMV8gPSBuZXcgUG9pbnQoXG4gICAgICAocDEueCAtIHAyLngpIC8gMixcbiAgICAgIChwMS55IC0gcDIueSkgLyAyXG4gICAgKS50cmFuc2Zvcm0obWF0cml4RmFjdG9yeShcbiAgICAgIGNvc8+GLCAtc2luz4YsIHNpbs+GLCBjb3PPhiwgMCwgMFxuICAgICkpXG5cbiAgICAvLyAoZXEuIDYuMilcbiAgICAvLyBNYWtlIHN1cmUgdGhlIHJhZGl1cyBmaXQgd2l0aCB0aGUgYXJjIGFuZCBjb3JyZWN0IGlmIG5lY2Nlc3NhcnlcbiAgICBjb25zdCByYXRpbyA9IChwMV8ueCAqKiAyIC8gcnggKiogMikgKyAocDFfLnkgKiogMiAvIHJ5ICoqIDIpXG5cbiAgICAvLyAoZXEuIDYuMylcbiAgICBpZiAocmF0aW8gPiAxKSB7XG4gICAgICByeCA9IE1hdGguc3FydChyYXRpbykgKiByeFxuICAgICAgcnkgPSBNYXRoLnNxcnQocmF0aW8pICogcnlcbiAgICB9XG5cbiAgICAvLyAoZXEuIDUuMilcbiAgICBjb25zdCByeFF1YWQgPSByeCAqKiAyXG4gICAgY29uc3QgcnlRdWFkID0gcnkgKiogMlxuXG4gICAgY29uc3QgZGl2aXNvcjEgPSByeFF1YWQgKiBwMV8ueSAqKiAyXG4gICAgY29uc3QgZGl2aXNvcjIgPSByeVF1YWQgKiBwMV8ueCAqKiAyXG4gICAgY29uc3QgZGl2aWRlbmQgPSAocnhRdWFkICogcnlRdWFkIC0gZGl2aXNvcjEgLSBkaXZpc29yMilcblxuICAgIGxldCBjX1xuICAgIGlmIChNYXRoLmFicyhkaXZpZGVuZCkgPCAxZS0xNSkge1xuICAgICAgY18gPSBuZXcgUG9pbnQoMCwgMClcbiAgICB9IGVsc2Uge1xuICAgICAgY18gPSBuZXcgUG9pbnQoXG4gICAgICAgIHJ4ICogcDFfLnkgLyByeSxcbiAgICAgICAgLXJ5ICogcDFfLnggLyByeFxuICAgICAgKS5tdWwoTWF0aC5zcXJ0KFxuICAgICAgICBkaXZpZGVuZCAvIChkaXZpc29yMSArIGRpdmlzb3IyKVxuICAgICAgKSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hcmMgPT09IHRoaXMuc3dlZXApIGNfID0gY18ubXVsKC0xKVxuXG4gICAgLy8gKGVxLiA1LjMpXG4gICAgY29uc3QgYyA9IGNfLnRyYW5zZm9ybShtYXRyaXhGYWN0b3J5KFxuICAgICAgY29zz4YsIHNpbs+GLCAtc2luz4YsIGNvc8+GLCAwLCAwXG4gICAgKSkuYWRkKG5ldyBQb2ludChcbiAgICAgIChwMS54ICsgcDIueCkgLyAyLFxuICAgICAgKHAxLnkgKyBwMi55KSAvIDJcbiAgICApKVxuXG4gICAgY29uc3QgYW5nbGVQb2ludCA9IG5ldyBQb2ludChcbiAgICAgIChwMV8ueCAtIGNfLngpIC8gcngsXG4gICAgICAocDFfLnkgLSBjXy55KSAvIHJ5XG4gICAgKVxuXG4gICAgLyogRm9yIGVxLiA1LjQgc2VlIGFuZ2xlVG8gZnVuY3Rpb24gKi9cblxuICAgIC8vIChlcS4gNS41KVxuICAgIGNvbnN0IM64ID0gbmV3IFBvaW50KDEsIDApLmFuZ2xlVG8oYW5nbGVQb2ludClcblxuICAgIC8vIChlcS4gNS42KVxuICAgIGxldCDOlM64ID0gYW5nbGVQb2ludC5hbmdsZVRvKG5ldyBQb2ludChcbiAgICAgICgtcDFfLnggLSBjXy54KSAvIHJ4LFxuICAgICAgKC1wMV8ueSAtIGNfLnkpIC8gcnlcbiAgICApKVxuXG4gICAgzpTOuCA9ICjOlM64ICUgKDIgKiBNYXRoLlBJKSlcblxuICAgIGlmICghc3dlZXAgJiYgzpTOuCA+IDApIM6UzrggLT0gMiAqIE1hdGguUElcbiAgICBpZiAoc3dlZXAgJiYgzpTOuCA8IDApIM6UzrggKz0gMiAqIE1hdGguUElcblxuICAgIHRoaXMuYyA9IGNcbiAgICB0aGlzLnRoZXRhID0gzrggKiAxODAgLyBNYXRoLlBJXG4gICAgdGhpcy50aGV0YTIgPSAozrggKyDOlM64KSAqIDE4MCAvIE1hdGguUElcblxuICAgIHRoaXMuZGVsdGEgPSDOlM64ICogMTgwIC8gTWF0aC5QSVxuICAgIHRoaXMucnggPSByeFxuICAgIHRoaXMucnkgPSByeVxuICAgIHRoaXMucGhpID0gz4ZcbiAgICB0aGlzLmNvc8+GID0gY29zz4ZcbiAgICB0aGlzLnNpbs+GID0gc2luz4ZcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ2VudGVyRm9ybSAoYywgcngsIHJ5LCDPhiwgzrgsIM6UzrgpIHtcbiAgICBjb25zdCBjb3PPhiA9IE1hdGguY29zKM+GIC8gMTgwICogTWF0aC5QSSlcbiAgICBjb25zdCBzaW7PhiA9IE1hdGguc2luKM+GIC8gMTgwICogTWF0aC5QSSlcbiAgICBjb25zdCBtID0gbWF0cml4RmFjdG9yeShjb3PPhiwgc2luz4YsIC1zaW7PhiwgY29zz4YsIDAsIDApXG5cbiAgICBjb25zdCBwMSA9IG5ldyBQb2ludChcbiAgICAgIHJ4ICogTWF0aC5jb3MozrggLyAxODAgKiBNYXRoLlBJKSxcbiAgICAgIHJ5ICogTWF0aC5zaW4ozrggLyAxODAgKiBNYXRoLlBJKVxuICAgICkudHJhbnNmb3JtKG0pLmFkZChjKVxuXG4gICAgY29uc3QgcDIgPSBuZXcgUG9pbnQoXG4gICAgICByeCAqIE1hdGguY29zKCjOuCArIM6UzrgpIC8gMTgwICogTWF0aC5QSSksXG4gICAgICByeSAqIE1hdGguc2luKCjOuCArIM6UzrgpIC8gMTgwICogTWF0aC5QSSlcbiAgICApLnRyYW5zZm9ybShtKS5hZGQoYylcblxuICAgIGNvbnN0IGFyYyA9IE1hdGguYWJzKM6UzrgpID4gMTgwID8gMSA6IDBcbiAgICBjb25zdCBzd2VlcCA9IM6UzrggPiAwID8gMSA6IDBcblxuICAgIHJldHVybiBuZXcgQXJjKHAxLCBwMiwgcngsIHJ5LCDPhiwgYXJjLCBzd2VlcClcbiAgfVxuXG4gIGJib3ggKCkge1xuICAgIGNvbnN0IGNsb3VkID0gdGhpcy5nZXRDbG91ZCgpXG4gICAgcmV0dXJuIGNsb3VkLmJib3goKVxuICB9XG5cbiAgY2xvbmUgKCkge1xuICAgIHJldHVybiBuZXcgQXJjKHRoaXMucDEsIHRoaXMucDIsIHRoaXMucngsIHRoaXMucnksIHRoaXMucGhpLCB0aGlzLmFyYywgdGhpcy5zd2VlcClcbiAgfVxuXG4gIGdldENsb3VkICgpIHtcbiAgICBpZiAodGhpcy5wMS5lcXVhbHModGhpcy5wMikpIHJldHVybiBuZXcgUG9pbnRDbG91ZChbIHRoaXMucDEgXSlcblxuICAgIC8vIGFyYyBjb3VsZCBiZSByb3RhdGVkLiB0aGUgbWluIGFuZCBtYXggdmFsdWVzIHRoZW4gZG9udCBsaWUgb24gbXVsdGlwbGVzIG9mIDkwIGRlZ3Jlc3MgYnV0IGFyZSBzaGlmdGVkIGJ5IHRoZSByb3RhdGlvbiBhbmdsZVxuICAgIC8vIHNvIHdlIGZpcnN0IGNhbGN1bGF0ZSBvdXIgMC85MCBkZWdyZWUgYW5nbGVcbiAgICBsZXQgzrgwMSA9IE1hdGguYXRhbigtdGhpcy5zaW7PhiAvIHRoaXMuY29zz4YgKiB0aGlzLnJ5IC8gdGhpcy5yeCkgKiAxODAgLyBNYXRoLlBJXG4gICAgbGV0IM64MDIgPSBNYXRoLmF0YW4odGhpcy5jb3PPhiAvIHRoaXMuc2luz4YgKiB0aGlzLnJ5IC8gdGhpcy5yeCkgKiAxODAgLyBNYXRoLlBJXG4gICAgbGV0IM64MSA9IHRoaXMudGhldGFcbiAgICBsZXQgzrgyID0gdGhpcy50aGV0YTJcblxuICAgIGlmICjOuDEgPCAwIHx8IM64MiA8IDApIHtcbiAgICAgIM64MSArPSAzNjBcbiAgICAgIM64MiArPSAzNjBcbiAgICB9XG5cbiAgICBpZiAozrgyIDwgzrgxKSB7XG4gICAgICBjb25zdCB0ZW1wID0gzrgxXG4gICAgICDOuDEgPSDOuDJcbiAgICAgIM64MiA9IHRlbXBcblxuICAgIH1cblxuICAgIHdoaWxlICjOuDAxIC0gOTAgPiDOuDAxKSDOuDAxIC09IDkwXG4gICAgd2hpbGUgKM64MDEgPCDOuDEpIM64MDEgKz0gOTBcbiAgICB3aGlsZSAozrgwMiAtIDkwID4gzrgwMikgzrgwMiAtPSA5MFxuICAgIHdoaWxlICjOuDAyIDwgzrgxKSDOuDAyICs9IDkwXG5cbiAgICBjb25zdCBhbmdsZVRvVGVzdCA9IFsgzrgwMSwgzrgwMiwgKM64MDEgKyA5MCksICjOuDAyICsgOTApLCAozrgwMSArIDE4MCksICjOuDAyICsgMTgwKSwgKM64MDEgKyAyNzApLCAozrgwMiArIDI3MCkgXVxuXG4gICAgY29uc3QgcG9pbnRzID0gYW5nbGVUb1Rlc3QuZmlsdGVyKGZ1bmN0aW9uIChhbmdsZSkge1xuICAgICAgcmV0dXJuIChhbmdsZSA+IM64MSAmJiBhbmdsZSA8IM64MilcbiAgICB9KS5tYXAoZnVuY3Rpb24gKGFuZ2xlKSB7XG4gICAgICB3aGlsZSAodGhpcy50aGV0YSA8IGFuZ2xlKSBhbmdsZSAtPSAzNjBcbiAgICAgIHJldHVybiB0aGlzLnBvaW50QXQoKChhbmdsZSAtIHRoaXMudGhldGEpICUgMzYwKSAvICh0aGlzLmRlbHRhKSkgLy8gVE9ETzogcmVwbGFjZSB0aGF0IGNhbGwgd2l0aCBwb2ludEF0QW5nbGVcbiAgICB9LmJpbmQodGhpcykpLmNvbmNhdCh0aGlzLnAxLCB0aGlzLnAyKVxuXG4gICAgcmV0dXJuIG5ldyBQb2ludENsb3VkKHBvaW50cylcbiAgfVxuXG4gIGxlbmd0aCAoKSB7XG4gICAgaWYgKHRoaXMucDEuZXF1YWxzKHRoaXMucDIpKSByZXR1cm4gMFxuXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5wMi5zdWIodGhpcy5wMSkuYWJzKClcblxuICAgIGNvbnN0IHJldCA9IHRoaXMuc3BsaXRBdCgwLjUpXG4gICAgY29uc3QgbGVuMSA9IHJldFswXS5wMi5zdWIocmV0WzBdLnAxKS5hYnMoKVxuICAgIGNvbnN0IGxlbjIgPSByZXRbMV0ucDIuc3ViKHJldFsxXS5wMSkuYWJzKClcblxuICAgIGlmIChsZW4xICsgbGVuMiAtIGxlbmd0aCA8IDAuMDAwMDEpIHtcbiAgICAgIHJldHVybiBsZW4xICsgbGVuMlxuICAgIH1cblxuICAgIHJldHVybiByZXRbMF0ubGVuZ3RoKCkgKyByZXRbMV0ubGVuZ3RoKClcbiAgfVxuXG4gIHBvaW50QXQgKHQpIHtcbiAgICBpZiAodGhpcy5wMS5lcXVhbHModGhpcy5wMikpIHJldHVybiB0aGlzLnAxLmNsb25lKClcblxuICAgIGNvbnN0IHRJbkFuZ2xlID0gKHRoaXMudGhldGEgKyB0ICogdGhpcy5kZWx0YSkgLyAxODAgKiBNYXRoLlBJXG4gICAgY29uc3Qgc2luzrggPSBNYXRoLnNpbih0SW5BbmdsZSlcbiAgICBjb25zdCBjb3POuCA9IE1hdGguY29zKHRJbkFuZ2xlKVxuXG4gICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgIHRoaXMuY29zz4YgKiB0aGlzLnJ4ICogY29zzrggLSB0aGlzLnNpbs+GICogdGhpcy5yeSAqIHNpbs64ICsgdGhpcy5jLngsXG4gICAgICB0aGlzLnNpbs+GICogdGhpcy5yeSAqIGNvc864ICsgdGhpcy5jb3PPhiAqIHRoaXMucnggKiBzaW7OuCArIHRoaXMuYy55XG4gICAgKVxuICB9XG5cbiAgc3BsaXRBdCAodCkge1xuICAgIGNvbnN0IGFic0RlbHRhID0gTWF0aC5hYnModGhpcy5kZWx0YSlcbiAgICBjb25zdCBkZWx0YTEgPSBhYnNEZWx0YSAqIHRcbiAgICBjb25zdCBkZWx0YTIgPSBhYnNEZWx0YSAqICgxIC0gdClcblxuICAgIGNvbnN0IHBvaW50QXRUID0gdGhpcy5wb2ludEF0KHQpXG5cbiAgICByZXR1cm4gW1xuICAgICAgbmV3IEFyYyh0aGlzLnAxLCBwb2ludEF0VCwgdGhpcy5yeCwgdGhpcy5yeSwgdGhpcy5waGksIGRlbHRhMSA+IDE4MCwgdGhpcy5zd2VlcCksXG4gICAgICBuZXcgQXJjKHBvaW50QXRULCB0aGlzLnAyLCB0aGlzLnJ4LCB0aGlzLnJ5LCB0aGlzLnBoaSwgZGVsdGEyID4gMTgwLCB0aGlzLnN3ZWVwKVxuICAgIF1cbiAgfVxuXG4gIHRvUGF0aCAoKSB7XG4gICAgcmV0dXJuIFsgJ00nLCB0aGlzLnAxLngsIHRoaXMucDEueSwgJ0EnLCB0aGlzLnJ4LCB0aGlzLnJ5LCB0aGlzLnBoaSwgdGhpcy5hcmMsIHRoaXMuc3dlZXAsIHRoaXMucDIueCwgdGhpcy5wMi55IF0uam9pbignICcpXG4gIH1cblxuICB0b1BhdGhGcmFnbWVudCAoKSB7XG4gICAgcmV0dXJuIFsgJ0EnLCB0aGlzLnJ4LCB0aGlzLnJ5LCB0aGlzLnBoaSwgdGhpcy5hcmMsIHRoaXMuc3dlZXAsIHRoaXMucDIueCwgdGhpcy5wMi55IF1cbiAgfVxuXG4gIHRvU3RyaW5nICgpIHtcbiAgICByZXR1cm4gYHAxOiAke3RoaXMucDEueC50b0ZpeGVkKDQpfSAke3RoaXMucDEueS50b0ZpeGVkKDQpfSwgcDI6ICR7dGhpcy5wMi54LnRvRml4ZWQoNCl9ICR7dGhpcy5wMi55LnRvRml4ZWQoNCl9LCBjOiAke3RoaXMuYy54LnRvRml4ZWQoNCl9ICR7dGhpcy5jLnkudG9GaXhlZCg0KX0gdGhldGE6ICR7dGhpcy50aGV0YS50b0ZpeGVkKDQpfSwgdGhldGEyOiAke3RoaXMudGhldGEyLnRvRml4ZWQoNCl9LCBkZWx0YTogJHt0aGlzLmRlbHRhLnRvRml4ZWQoNCl9LCBsYXJnZTogJHt0aGlzLmFyY30sIHN3ZWVwOiAke3RoaXMuc3dlZXB9YFxuICB9XG5cbiAgdHJhbnNmb3JtIChtYXRyaXgpIHtcbiAgICByZXR1cm4gbmV3IEFyYyh0aGlzLnAxLnRyYW5zZm9ybShtYXRyaXgpLCB0aGlzLnAyLnRyYW5zZm9ybShtYXRyaXgpLCB0aGlzLnJ4LCB0aGlzLnJ5LCB0aGlzLnBoaSwgdGhpcy5hcmMsIHRoaXMuc3dlZXApXG4gIH1cbn1cblxuY2xhc3MgQ3ViaWMge1xuICBjb25zdHJ1Y3RvciAocDEsIGMxLCBjMiwgcDIpIHtcbiAgICBpZiAocDEgaW5zdGFuY2VvZiBQb2ludCkge1xuICAgICAgdGhpcy5wMSA9IG5ldyBQb2ludChwMSlcbiAgICAgIHRoaXMuYzEgPSBuZXcgUG9pbnQoYzEpXG4gICAgICB0aGlzLmMyID0gbmV3IFBvaW50KGMyKVxuICAgICAgdGhpcy5wMiA9IG5ldyBQb2ludChwMilcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wMSA9IG5ldyBQb2ludChwMS5wMSlcbiAgICAgIHRoaXMuYzEgPSBuZXcgUG9pbnQocDEuYzEpXG4gICAgICB0aGlzLmMyID0gbmV3IFBvaW50KHAxLmMyKVxuICAgICAgdGhpcy5wMiA9IG5ldyBQb2ludChwMS5wMilcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbVF1YWQgKHAxLCBjLCBwMikge1xuICAgIGNvbnN0IGMxID0gcDEubXVsKDEgLyAzKS5hZGQoYy5tdWwoMiAvIDMpKVxuICAgIGNvbnN0IGMyID0gYy5tdWwoMiAvIDMpLmFkZChwMi5tdWwoMSAvIDMpKVxuICAgIHJldHVybiBuZXcgQ3ViaWMocDEsIGMxLCBjMiwgcDIpXG4gIH1cblxuICBiYm94ICgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDbG91ZCgpLmJib3goKVxuICB9XG5cbiAgZmluZFJvb3RzICgpIHtcbiAgICByZXR1cm4gdGhpcy5maW5kUm9vdHNYKCkuY29uY2F0KHRoaXMuZmluZFJvb3RzWSgpKVxuICB9XG5cbiAgZmluZFJvb3RzWCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmluZFJvb3RzWFkodGhpcy5wMS54LCB0aGlzLmMxLngsIHRoaXMuYzIueCwgdGhpcy5wMi54KVxuICB9XG5cbiAgZmluZFJvb3RzWFkgKHAxLCBwMiwgcDMsIHA0KSB7XG4gICAgY29uc3QgYSA9IDMgKiAoLXAxICsgMyAqIHAyIC0gMyAqIHAzICsgcDQpXG4gICAgY29uc3QgYiA9IDYgKiAocDEgLSAyICogcDIgKyBwMylcbiAgICBjb25zdCBjID0gMyAqIChwMiAtIHAxKVxuXG4gICAgaWYgKGEgPT09IDApIHJldHVybiBbIC1jIC8gYiBdLmZpbHRlcihmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIGVsID4gMCAmJiBlbCA8IDEgfSlcblxuICAgIGlmIChiICogYiAtIDQgKiBhICogYyA8IDApIHJldHVybiBbXVxuICAgIGlmIChiICogYiAtIDQgKiBhICogYyA9PT0gMCkgcmV0dXJuIFsgTWF0aC5yb3VuZCgoLWIgLyAoMiAqIGEpKSAqIDEwMDAwMCkgLyAxMDAwMDAgXS5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7IHJldHVybiBlbCA+IDAgJiYgZWwgPCAxIH0pXG5cbiAgICByZXR1cm4gW1xuICAgICAgTWF0aC5yb3VuZCgoLWIgKyBNYXRoLnNxcnQoYiAqIGIgLSA0ICogYSAqIGMpKSAvICgyICogYSkgKiAxMDAwMDApIC8gMTAwMDAwLFxuICAgICAgTWF0aC5yb3VuZCgoLWIgLSBNYXRoLnNxcnQoYiAqIGIgLSA0ICogYSAqIGMpKSAvICgyICogYSkgKiAxMDAwMDApIC8gMTAwMDAwXG4gICAgXS5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7IHJldHVybiBlbCA+IDAgJiYgZWwgPCAxIH0pXG4gIH1cblxuICBmaW5kUm9vdHNZICgpIHtcbiAgICByZXR1cm4gdGhpcy5maW5kUm9vdHNYWSh0aGlzLnAxLnksIHRoaXMuYzEueSwgdGhpcy5jMi55LCB0aGlzLnAyLnkpXG4gIH1cblxuICBmbGF0bmVzcyAoKSB7XG4gICAgbGV0IHV4ID0gTWF0aC5wb3coMyAqIHRoaXMuYzEueCAtIDIgKiB0aGlzLnAxLnggLSB0aGlzLnAyLngsIDIpXG4gICAgbGV0IHV5ID0gTWF0aC5wb3coMyAqIHRoaXMuYzEueSAtIDIgKiB0aGlzLnAxLnkgLSB0aGlzLnAyLnksIDIpXG4gICAgY29uc3QgdnggPSBNYXRoLnBvdygzICogdGhpcy5jMi54IC0gMiAqIHRoaXMucDIueCAtIHRoaXMucDEueCwgMilcbiAgICBjb25zdCB2eSA9IE1hdGgucG93KDMgKiB0aGlzLmMyLnkgLSAyICogdGhpcy5wMi55IC0gdGhpcy5wMS55LCAyKVxuXG4gICAgaWYgKHV4IDwgdngpIHsgdXggPSB2eCB9XG4gICAgaWYgKHV5IDwgdnkpIHsgdXkgPSB2eSB9XG5cbiAgICByZXR1cm4gdXggKyB1eVxuICB9XG5cbiAgZ2V0Q2xvdWQgKCkge1xuICAgIGNvbnN0IHBvaW50cyA9IHRoaXMuZmluZFJvb3RzKClcbiAgICAgIC5maWx0ZXIocm9vdCA9PiByb290ICE9PSAwICYmIHJvb3QgIT09IDEpXG4gICAgICAubWFwKHJvb3QgPT4gdGhpcy5wb2ludEF0KHJvb3QpKVxuICAgICAgLmNvbmNhdCh0aGlzLnAxLCB0aGlzLnAyKVxuXG4gICAgcmV0dXJuIG5ldyBQb2ludENsb3VkKHBvaW50cylcbiAgfVxuXG4gIGxlbmd0aCAoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoQXQoKVxuICB9XG5cbiAgbGVuZ3RoQXQgKHQgPSAxKSB7XG4gICAgY29uc3QgY3VydmVzID0gdGhpcy5zcGxpdEF0KHQpWzBdLm1ha2VGbGF0KHQpXG5cbiAgICBsZXQgbGVuZ3RoID0gMFxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBjdXJ2ZXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIGxlbmd0aCArPSBjdXJ2ZXNbaV0ucDIuc3ViKGN1cnZlc1tpXS5wMSkuYWJzKClcbiAgICB9XG5cbiAgICByZXR1cm4gbGVuZ3RoXG4gIH1cblxuICBtYWtlRmxhdCAodCkge1xuICAgIGlmICh0aGlzLmZsYXRuZXNzKCkgPiAwLjE1KSB7XG4gICAgICByZXR1cm4gdGhpcy5zcGxpdEF0KDAuNSlcbiAgICAgICAgLm1hcChmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIGVsLm1ha2VGbGF0KHQgKiAwLjUpIH0pXG4gICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKGxhc3QsIGN1cnJlbnQpIHsgcmV0dXJuIGxhc3QuY29uY2F0KGN1cnJlbnQpIH0sIFtdKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRfdmFsdWUgPSB0XG4gICAgICByZXR1cm4gWyB0aGlzIF1cbiAgICB9XG4gIH1cblxuICBwb2ludEF0ICh0KSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgICgxIC0gdCkgKiAoMSAtIHQpICogKDEgLSB0KSAqIHRoaXMucDEueCArIDMgKiAoMSAtIHQpICogKDEgLSB0KSAqIHQgKiB0aGlzLmMxLnggKyAzICogKDEgLSB0KSAqIHQgKiB0ICogdGhpcy5jMi54ICsgdCAqIHQgKiB0ICogdGhpcy5wMi54LFxuICAgICAgKDEgLSB0KSAqICgxIC0gdCkgKiAoMSAtIHQpICogdGhpcy5wMS55ICsgMyAqICgxIC0gdCkgKiAoMSAtIHQpICogdCAqIHRoaXMuYzEueSArIDMgKiAoMSAtIHQpICogdCAqIHQgKiB0aGlzLmMyLnkgKyB0ICogdCAqIHQgKiB0aGlzLnAyLnlcbiAgICApXG4gIH1cblxuICBzcGxpdEF0ICh6KSB7XG4gICAgY29uc3QgeCA9IHRoaXMuc3BsaXRBdFNjYWxhcih6LCAneCcpXG4gICAgY29uc3QgeSA9IHRoaXMuc3BsaXRBdFNjYWxhcih6LCAneScpXG5cbiAgICBjb25zdCBhID0gbmV3IEN1YmljKFxuICAgICAgbmV3IFBvaW50KHhbMF1bMF0sIHlbMF1bMF0pLFxuICAgICAgbmV3IFBvaW50KHhbMF1bMV0sIHlbMF1bMV0pLFxuICAgICAgbmV3IFBvaW50KHhbMF1bMl0sIHlbMF1bMl0pLFxuICAgICAgbmV3IFBvaW50KHhbMF1bM10sIHlbMF1bM10pXG4gICAgKVxuXG4gICAgY29uc3QgYiA9IG5ldyBDdWJpYyhcbiAgICAgIG5ldyBQb2ludCh4WzFdWzBdLCB5WzFdWzBdKSxcbiAgICAgIG5ldyBQb2ludCh4WzFdWzFdLCB5WzFdWzFdKSxcbiAgICAgIG5ldyBQb2ludCh4WzFdWzJdLCB5WzFdWzJdKSxcbiAgICAgIG5ldyBQb2ludCh4WzFdWzNdLCB5WzFdWzNdKVxuICAgIClcblxuICAgIHJldHVybiBbIGEsIGIgXVxuICB9XG5cbiAgc3BsaXRBdFNjYWxhciAoeiwgcCkge1xuICAgIGNvbnN0IHAxID0gdGhpcy5wMVtwXVxuICAgIGNvbnN0IHAyID0gdGhpcy5jMVtwXVxuICAgIGNvbnN0IHAzID0gdGhpcy5jMltwXVxuICAgIGNvbnN0IHA0ID0gdGhpcy5wMltwXVxuXG4gICAgY29uc3QgdCA9IHogKiB6ICogeiAqIHA0IC0gMyAqIHogKiB6ICogKHogLSAxKSAqIHAzICsgMyAqIHogKiAoeiAtIDEpICogKHogLSAxKSAqIHAyIC0gKHogLSAxKSAqICh6IC0gMSkgKiAoeiAtIDEpICogcDFcblxuICAgIHJldHVybiBbXG4gICAgICBbXG4gICAgICAgIHAxLFxuICAgICAgICB6ICogcDIgLSAoeiAtIDEpICogcDEsXG4gICAgICAgIHogKiB6ICogcDMgLSAyICogeiAqICh6IC0gMSkgKiBwMiArICh6IC0gMSkgKiAoeiAtIDEpICogcDEsXG4gICAgICAgIHRcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIHQsXG4gICAgICAgIHogKiB6ICogcDQgLSAyICogeiAqICh6IC0gMSkgKiBwMyArICh6IC0gMSkgKiAoeiAtIDEpICogcDIsXG4gICAgICAgIHogKiBwNCAtICh6IC0gMSkgKiBwMyxcbiAgICAgICAgcDRcbiAgICAgIF1cbiAgICBdXG4gIH1cblxuICB0b1BhdGggKCkge1xuICAgIHJldHVybiBbICdNJywgdGhpcy5wMS54LCB0aGlzLnAxLnkgXS5jb25jYXQodGhpcy50b1BhdGhGcmFnbWVudCgpKS5qb2luKCcgJylcbiAgfVxuXG4gIHRvUGF0aEZyYWdtZW50ICgpIHtcbiAgICByZXR1cm4gWyAnQycsIHRoaXMuYzEueCwgdGhpcy5jMS55LCB0aGlzLmMyLngsIHRoaXMuYzIueSwgdGhpcy5wMi54LCB0aGlzLnAyLnkgXVxuICB9XG5cbiAgdHJhbnNmb3JtIChtYXRyaXgpIHtcbiAgICB0aGlzLnAxLnRyYW5zZm9ybU8obWF0cml4KVxuICAgIHRoaXMuYzEudHJhbnNmb3JtTyhtYXRyaXgpXG4gICAgdGhpcy5jMi50cmFuc2Zvcm1PKG1hdHJpeClcbiAgICB0aGlzLnAyLnRyYW5zZm9ybU8obWF0cml4KVxuICAgIHJldHVybiB0aGlzXG4gIH1cbn1cblxuY2xhc3MgTGluZSB7XG4gIGNvbnN0cnVjdG9yICh4MSwgeTEsIHgyLCB5Mikge1xuICAgIGlmICh4MSBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgdGhpcy5wMSA9IG5ldyBQb2ludCh4MSlcbiAgICAgIHRoaXMucDIgPSBuZXcgUG9pbnQoeTEpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucDEgPSBuZXcgUG9pbnQoeDEsIHkxKVxuICAgICAgdGhpcy5wMiA9IG5ldyBQb2ludCh4MiwgeTIpXG4gICAgfVxuICB9XG5cbiAgYmJveCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q2xvdWQoKS5iYm94KClcbiAgfVxuXG4gIGdldENsb3VkICgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50Q2xvdWQoWyB0aGlzLnAxLCB0aGlzLnAyIF0pXG4gIH1cblxuICBsZW5ndGggKCkge1xuICAgIHJldHVybiB0aGlzLnAyLnN1Yih0aGlzLnAxKS5hYnMoKVxuICB9XG5cbiAgcG9pbnRBdCAodCkge1xuICAgIGNvbnN0IHZlYyA9IHRoaXMucDIuc3ViKHRoaXMucDEpLm11bCh0KVxuICAgIHJldHVybiB0aGlzLnAxLmFkZCh2ZWMpXG4gIH1cblxuICB0b1BhdGggKCkge1xuICAgIHJldHVybiBbICdNJywgdGhpcy5wMS54LCB0aGlzLnAxLnksIHRoaXMucDIueCwgdGhpcy5wMi55IF0uam9pbignICcpXG4gIH1cblxuICB0b1BhdGhGcmFnbWVudCAoKSB7XG4gICAgcmV0dXJuIFsgJ0wnLCB0aGlzLnAyLngsIHRoaXMucDIueSBdXG4gIH1cblxuICB0cmFuc2Zvcm0gKG1hdHJpeCkge1xuICAgIHRoaXMucDEudHJhbnNmb3JtTyhtYXRyaXgpXG4gICAgdGhpcy5wMi50cmFuc2Zvcm1PKG1hdHJpeClcbiAgICByZXR1cm4gdGhpc1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBwYXRoQkJveCA9IGZ1bmN0aW9uIChkKSB7XG4gIHJldHVybiBwYXRoUGFyc2VyKGQpLnJlZHVjZSgobCwgYykgPT4gbC5tZXJnZShjLmJib3goKSksIG5ldyBOb0JveCgpKVxufVxuXG5leHBvcnQgY2xhc3MgUGF0aFNlZ21lbnRBcnJheSBleHRlbmRzIEFycmF5IHtcbiAgYmJveCAoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVkdWNlKChsLCBjKSA9PiBsLm1lcmdlKGMuYmJveCgpKSwgbmV3IE5vQm94KCkpXG4gIH1cblxuICBjbG91ZCAoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVkdWNlKFxuICAgICAgKGNsb3VkLCBzZWdtZW50KSA9PiBzZWdtZW50LmdldENsb3VkKCkubWVyZ2UoY2xvdWQpLFxuICAgICAgbmV3IFBvaW50Q2xvdWQoKVxuICAgIClcbiAgfVxuXG4gIG1lcmdlIChvdGhlcikge1xuICAgIHJldHVybiB0aGlzLmNvbmNhdChvdGhlcilcbiAgICAvLyByZXR1cm4gWyAuLi50aGlzLCAuLi5vdGhlciBdXG4gIH1cblxuICB0cmFuc2Zvcm0gKG1hdHJpeCkge1xuICAgIHJldHVybiB0aGlzLm1hcChzZWdtZW50ID0+IHNlZ21lbnQudHJhbnNmb3JtKG1hdHJpeCkpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldFBhdGhTZWdtZW50cyA9IGZ1bmN0aW9uIChkKSB7XG4gIHJldHVybiBuZXcgUGF0aFNlZ21lbnRBcnJheSguLi5wYXRoUGFyc2VyKGQpKVxufVxuXG5leHBvcnQgY29uc3QgcG9pbnRBdExlbmd0aCA9IGZ1bmN0aW9uIChkLCBsZW4pIHtcbiAgY29uc3Qgc2VncyA9IHBhdGhQYXJzZXIoZClcblxuICBjb25zdCBzZWdMZW5ndGhzID0gc2Vncy5tYXAoZWwgPT4gZWwubGVuZ3RoKCkpXG5cbiAgY29uc3QgbGVuZ3RoID0gc2VnTGVuZ3Rocy5yZWR1Y2UoKGwsIGMpID0+IGwgKyBjLCAwKVxuXG4gIGxldCBpID0gMFxuXG4gIGxldCB0ID0gbGVuIC8gbGVuZ3RoXG5cbiAgLy8gRklYTUU6IFBvcCBNb3ZlIGJlZm9yZSB1c2luZyBzaG9ydGN1dD9cbiAgLy8gc2hvcnRjdXQgZm9yIHRyaXZpYWwgY2FzZXNcbiAgaWYgKHQgPj0gMSkge1xuICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGEgcDIuIElmIG5vdCwgdXNlIHAxXG4gICAgaWYgKHNlZ3Nbc2Vncy5sZW5ndGggLSAxXS5wMikge1xuICAgICAgcmV0dXJuIHNlZ3Nbc2Vncy5sZW5ndGggLSAxXS5wMi5uYXRpdmUoKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc2Vnc1tzZWdzLmxlbmd0aCAtIDFdLnAxLm5hdGl2ZSgpXG4gICAgfVxuICB9XG5cbiAgaWYgKHQgPD0gMCkgcmV0dXJuIHNlZ3NbMF0ucDEubmF0aXZlKClcblxuICAvLyByZW1vdmUgbW92ZSBjb21tYW5kcyBhdCB0aGUgdmVyeSBlbmQgb2YgdGhlIHBhdGhcbiAgd2hpbGUgKHNlZ3Nbc2Vncy5sZW5ndGggLSAxXSBpbnN0YW5jZW9mIE1vdmUpIHNlZ3MucG9wKClcblxuICBsZXQgc2VnRW5kID0gMFxuXG4gIGZvciAoY29uc3QgaWwgPSBzZWdMZW5ndGhzLmxlbmd0aDsgaSA8IGlsOyArK2kpIHtcbiAgICBjb25zdCBrID0gc2VnTGVuZ3Roc1tpXSAvIGxlbmd0aFxuICAgIHNlZ0VuZCArPSBrXG5cbiAgICBpZiAoc2VnRW5kID4gdCkge1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBjb25zdCByYXRpbyA9IGxlbmd0aCAvIHNlZ0xlbmd0aHNbaV1cbiAgdCA9IHJhdGlvICogKHQgLSBzZWdFbmQpICsgMVxuXG4gIHJldHVybiBzZWdzW2ldLnBvaW50QXQodCkubmF0aXZlKClcbn1cblxuZXhwb3J0IGNvbnN0IGxlbmd0aCA9IGZ1bmN0aW9uIChkKSB7XG4gIHJldHVybiBwYXRoUGFyc2VyKGQpXG4gICAgLnJlZHVjZSgobCwgYykgPT4gbCArIGMubGVuZ3RoKCksIDApXG59XG5cbmV4cG9ydCBjb25zdCBkZWJ1ZyA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIGNvbnN0IHBhcnNlID0gcGF0aFBhcnNlcihub2RlLmdldEF0dHJpYnV0ZSgnZCcpKVxuXG4gIGNvbnN0IHJldCA9IHtcbiAgICBwYXRoczogcGFyc2UubWFwKGVsID0+IGVsLnRvUGF0aCgpKSxcbiAgICBmcmFnbWVudHM6IHBhcnNlLm1hcChlbCA9PiBlbC50b1BhdGhGcmFnbWVudCgpLmpvaW4oJyAnKSksXG4gICAgYmJveHM6IHBhcnNlLm1hcChlbCA9PiB7XG4gICAgICBjb25zdCBib3ggPSBlbC5iYm94KClcbiAgICAgIHJldHVybiBbIGJveC54LCBib3gueSwgYm94LndpZHRoLCBib3guaGVpZ2h0IF1cbiAgICB9KSxcbiAgICBiYm94OiBwYXJzZS5yZWR1Y2UoKGwsIGMpID0+IGwubWVyZ2UoYy5iYm94KCkpLCBuZXcgTm9Cb3goKSksXG4gICAgYmJveHNUcmFuc2Zvcm1lZDogcGFyc2UubWFwKGVsID0+IHtcbiAgICAgIHJldHVybiBlbC5nZXRDbG91ZCgpLnRyYW5zZm9ybShub2RlLm1hdHJpeGlmeSgpKS5iYm94KClcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHJldCwge1xuICAgIGJib3hUcmFuc2Zvcm1lZDogcmV0LmJib3hzVHJhbnNmb3JtZWQucmVkdWNlKChsLCBjKSA9PiBsLm1lcmdlKGMpLCBuZXcgTm9Cb3goKSlcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGdldENsb3VkID0gKGQpID0+IHtcbiAgcmV0dXJuIHBhdGhQYXJzZXIoZCkucmVkdWNlKChjbG91ZCwgc2VnbWVudCkgPT5cbiAgICBzZWdtZW50LmdldENsb3VkKCkubWVyZ2UoY2xvdWQpLCBuZXcgUG9pbnRDbG91ZCgpXG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IHBhdGhGcm9tID0ge1xuICBib3ggKHsgeCwgeSwgd2lkdGgsIGhlaWdodCB9KSB7XG4gICAgcmV0dXJuIGBNICR7eH0gJHt5fSBoICR7d2lkdGh9IHYgJHtoZWlnaHR9IEggJHt4fSBWICR7eX1gXG4gIH0sXG4gIHJlY3QgKG5vZGUpIHtcbiAgICBjb25zdCB3aWR0aCA9IHBhcnNlRmxvYXQobm9kZS5nZXRBdHRyaWJ1dGUoJ3dpZHRoJykpIHx8IDBcbiAgICBjb25zdCBoZWlnaHQgPSBwYXJzZUZsb2F0KG5vZGUuZ2V0QXR0cmlidXRlKCdoZWlnaHQnKSkgfHwgMFxuICAgIGNvbnN0IHggPSBwYXJzZUZsb2F0KG5vZGUuZ2V0QXR0cmlidXRlKCd4JykpIHx8IDBcbiAgICBjb25zdCB5ID0gcGFyc2VGbG9hdChub2RlLmdldEF0dHJpYnV0ZSgneScpKSB8fCAwXG4gICAgcmV0dXJuIGBNICR7eH0gJHt5fSBoICR7d2lkdGh9IHYgJHtoZWlnaHR9IEggJHt4fSBWICR7eX1gXG4gIH0sXG4gIGNpcmNsZSAobm9kZSkge1xuICAgIGNvbnN0IHIgPSBwYXJzZUZsb2F0KG5vZGUuZ2V0QXR0cmlidXRlKCdyJykpIHx8IDBcbiAgICBjb25zdCB4ID0gcGFyc2VGbG9hdChub2RlLmdldEF0dHJpYnV0ZSgnY3gnKSkgfHwgMFxuICAgIGNvbnN0IHkgPSBwYXJzZUZsb2F0KG5vZGUuZ2V0QXR0cmlidXRlKCdjeScpKSB8fCAwXG5cbiAgICBpZiAociA9PT0gMCkgcmV0dXJuICdNMCAwJ1xuXG4gICAgcmV0dXJuIGBNICR7eCAtIHJ9ICR7eX0gQSAke3J9ICR7cn0gMCAwIDAgJHt4ICsgcn0gJHt5fSBBICR7cn0gJHtyfSAwIDAgMCAke3ggLSByfSAke3l9YFxuICB9LFxuICBlbGxpcHNlIChub2RlKSB7XG4gICAgY29uc3QgcnggPSBwYXJzZUZsb2F0KG5vZGUuZ2V0QXR0cmlidXRlKCdyeCcpKSB8fCAwXG4gICAgY29uc3QgcnkgPSBwYXJzZUZsb2F0KG5vZGUuZ2V0QXR0cmlidXRlKCdyeScpKSB8fCAwXG4gICAgY29uc3QgeCA9IHBhcnNlRmxvYXQobm9kZS5nZXRBdHRyaWJ1dGUoJ2N4JykpIHx8IDBcbiAgICBjb25zdCB5ID0gcGFyc2VGbG9hdChub2RlLmdldEF0dHJpYnV0ZSgnY3knKSkgfHwgMFxuXG4gICAgcmV0dXJuIGBNICR7eCAtIHJ4fSAke3l9IEEgJHtyeH0gJHtyeX0gMCAwIDAgJHt4ICsgcnh9ICR7eX0gQSAke3J4fSAke3J5fSAwIDAgMCAke3ggLSByeH0gJHt5fWBcbiAgfSxcbiAgbGluZSAobm9kZSkge1xuICAgIGNvbnN0IHgxID0gcGFyc2VGbG9hdChub2RlLmdldEF0dHJpYnV0ZSgneDEnKSkgfHwgMFxuICAgIGNvbnN0IHgyID0gcGFyc2VGbG9hdChub2RlLmdldEF0dHJpYnV0ZSgneDInKSkgfHwgMFxuICAgIGNvbnN0IHkxID0gcGFyc2VGbG9hdChub2RlLmdldEF0dHJpYnV0ZSgneTEnKSkgfHwgMFxuICAgIGNvbnN0IHkyID0gcGFyc2VGbG9hdChub2RlLmdldEF0dHJpYnV0ZSgneTInKSkgfHwgMFxuXG4gICAgcmV0dXJuIGBNICR7eDF9ICR7eTF9IEwgJHt4Mn0gJHt5Mn1gXG4gIH0sXG4gIHBvbHlnb24gKG5vZGUpIHtcbiAgICByZXR1cm4gYE0gJHtub2RlLmdldEF0dHJpYnV0ZSgncG9pbnRzJyl9IHpgXG4gIH0sXG4gIHBvbHlsaW5lIChub2RlKSB7XG4gICAgcmV0dXJuIGBNICR7bm9kZS5nZXRBdHRyaWJ1dGUoJ3BvaW50cycpfWBcbiAgfVxufVxuIiwiLy8gc3BsaXRzIGEgdHJhbnNmb3JtYXRpb24gY2hhaW5cbmV4cG9ydCBjb25zdCB0cmFuc2Zvcm1zID0gL1xcKVxccyosP1xccyovXG5cbi8vIHNwbGl0IGF0IHdoaXRlc3BhY2UgYW5kIGNvbW1hXG5leHBvcnQgY29uc3QgZGVsaW1pdGVyID0gL1tcXHMsXSsvXG5cbi8vIFRoZSBmb2xsb3dpbmcgcmVnZXggYXJlIHVzZWQgdG8gcGFyc2UgdGhlIGQgYXR0cmlidXRlIG9mIGEgcGF0aFxuXG4vLyBNYXRjaGVzIGFsbCBoeXBoZW5zIHdoaWNoIGFyZSBub3QgYWZ0ZXIgYW4gZXhwb25lbnRcbmV4cG9ydCBjb25zdCBoeXBoZW4gPSAvKFteZV0pLS9naVxuXG4vLyBSZXBsYWNlcyBhbmQgdGVzdHMgZm9yIGFsbCBwYXRoIGxldHRlcnNcbmV4cG9ydCBjb25zdCBwYXRoTGV0dGVycyA9IC9bTUxIVkNTUVRBWl0vZ2lcblxuLy8geWVzIHdlIG5lZWQgdGhpcyBvbmUsIHRvb1xuZXhwb3J0IGNvbnN0IGlzUGF0aExldHRlciA9IC9bTUxIVkNTUVRBWl0vaVxuXG4vLyBtYXRjaGVzIDAuMTU0LjIzLjQ1XG5leHBvcnQgY29uc3QgbnVtYmVyc1dpdGhEb3RzID0gLygoXFxkP1xcLlxcZCsoPzplWystXT9cXGQrKT8pKCg/OlxcLlxcZCsoPzplWystXT9cXGQrKT8pKykpKy9naVxuXG4vLyBtYXRjaGVzIC5cbmV4cG9ydCBjb25zdCBkb3RzID0gL1xcLi9nXG4iLCIvLyBFbnN1cmUgdG8gc2l4LWJhc2VkIGhleFxuZXhwb3J0IGNvbnN0IGZ1bGxIZXggPSBmdW5jdGlvbiAoaGV4KSB7XG4gIHJldHVybiBoZXgubGVuZ3RoID09PSA0XG4gICAgPyBbICcjJyxcbiAgICAgIGhleC5zdWJzdHJpbmcoMSwgMiksIGhleC5zdWJzdHJpbmcoMSwgMiksXG4gICAgICBoZXguc3Vic3RyaW5nKDIsIDMpLCBoZXguc3Vic3RyaW5nKDIsIDMpLFxuICAgICAgaGV4LnN1YnN0cmluZygzLCA0KSwgaGV4LnN1YnN0cmluZygzLCA0KVxuICAgIF0uam9pbignJykgOiBoZXhcbn1cblxuZXhwb3J0IGNvbnN0IGhleFRvUkdCID0gZnVuY3Rpb24gKHZhbE9yTWFwKSB7XG4gIGlmICh0eXBlb2YgdmFsT3JNYXAgaW5zdGFuY2VvZiBNYXApIHtcbiAgICBmb3IgKGNvbnN0IFsga2V5LCB2YWwgXSBvZiB2YWxPck1hcCkge1xuICAgICAgdmFsT3JNYXAuc2V0KGtleSwgaGV4VG9SR0IodmFsKSlcbiAgICB9XG4gICAgcmV0dXJuIHZhbE9yTWFwXG4gIH1cblxuICBpZiAoIS8jWzAtOWEtZl17Myw2fS8udGVzdCh2YWxPck1hcCkpIHsgcmV0dXJuIHZhbE9yTWFwIH1cblxuICB2YWxPck1hcCA9IGZ1bGxIZXgodmFsT3JNYXApXG5cbiAgcmV0dXJuICdyZ2IoJyArIFtcbiAgICBwYXJzZUludCh2YWxPck1hcC5zbGljZSgxLCAzKSwgMTYpLFxuICAgIHBhcnNlSW50KHZhbE9yTWFwLnNsaWNlKDMsIDUpLCAxNiksXG4gICAgcGFyc2VJbnQodmFsT3JNYXAuc2xpY2UoNSwgNyksIDE2KVxuICBdLmpvaW4oJywnKSArICcpJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjYW1lbGl6ZSAocykge1xuICByZXR1cm4gU3RyaW5nKHMpLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csIGZ1bmN0aW9uIChtLCBnMSwgZzIpIHtcbiAgICByZXR1cm4gZzEgKyAnLScgKyBnMi50b0xvd2VyQ2FzZSgpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYW1lbENhc2UgKHMpIHtcbiAgcmV0dXJuIFN0cmluZyhzKS5yZXBsYWNlKC8oW2Etel0pLShbYS16XSkvZywgZnVuY3Rpb24gKG0sIGcxLCBnMikge1xuICAgIHJldHVybiBnMSArIGcyLnRvVXBwZXJDYXNlKClcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVF1b3RlcyAoc3RyKSB7XG4gIGlmIChzdHIuc3RhcnRzV2l0aCgnXCInKSB8fCBzdHIuc3RhcnRzV2l0aChcIidcIikpIHtcbiAgICByZXR1cm4gc3RyLnNsaWNlKDEsIC0xKVxuICB9XG4gIHJldHVybiBzdHJcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh0bWxFbnRpdGllcyAoc3RyKSB7XG4gIHJldHVybiBTdHJpbmcoc3RyKS5yZXBsYWNlKC8mL2csICcmYW1wOycpLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC8+L2csICcmZ3Q7JykucmVwbGFjZSgvXCIvZywgJyZxdW90OycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmh0bWxFbnRpdGllcyAoc3RyKSB7XG4gIHJldHVybiBTdHJpbmcoc3RyKS5yZXBsYWNlKC8mYW1wOy9nLCAnJicpLnJlcGxhY2UoLyZsdDsvZywgJzwnKS5yZXBsYWNlKC8mZ3Q7L2csICc+JykucmVwbGFjZSgnJnF1b3Q7JywgJ1wiJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNkYXRhIChzdHIpIHtcbiAgcmV0dXJuIGA8IVtDREFUQVske3N0cn1dXT5gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21tZW50IChzdHIpIHtcbiAgcmV0dXJuIGA8IS0tJHtzdHJ9LS0+YFxufVxuXG5leHBvcnQgY29uc3Qgc3BsaXROb3RJbkJyYWNrZXRzID0gKHN0ciwgZGVsaW1pdGVyKSA9PiB7XG4gIHZhciByb3VuZEJyYWNrZXRzID0gMFxuXG4gIHZhciBzcXVhcmVCcmFja2V0cyA9IDBcblxuICB2YXIgbGFzdEluZGV4ID0gMFxuXG4gIHZhciBzcGxpdCA9IFtdXG5cbiAgdmFyIGNoOyB2YXIgaTsgdmFyIGlsXG5cbiAgZm9yIChpID0gMCwgaWwgPSBzdHIubGVuZ3RoOyBpIDwgaWw7ICsraSkge1xuICAgIGNoID0gc3RyLmNoYXJBdChpKVxuXG4gICAgaWYgKGNoID09PSBkZWxpbWl0ZXIgJiYgIXJvdW5kQnJhY2tldHMgJiYgIXNxdWFyZUJyYWNrZXRzKSB7XG4gICAgICBzcGxpdC5wdXNoKHN0ci5zbGljZShsYXN0SW5kZXgsIGkpLnRyaW0oKSlcbiAgICAgIGxhc3RJbmRleCA9IGkgKyAxXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGlmIChjaCA9PT0gJygnKSArK3JvdW5kQnJhY2tldHNcbiAgICBlbHNlIGlmIChjaCA9PT0gJyknKSAtLXJvdW5kQnJhY2tldHNcbiAgICBlbHNlIGlmIChjaCA9PT0gJ1snKSArK3NxdWFyZUJyYWNrZXRzXG4gICAgZWxzZSBpZiAoY2ggPT09ICddJykgLS1zcXVhcmVCcmFja2V0c1xuICB9XG5cbiAgc3BsaXQucHVzaChzdHIuc2xpY2UobGFzdEluZGV4KS50cmltKCkpXG4gIHJldHVybiBzcGxpdFxufVxuIiwiY29uc3QgaHRtbEVudGl0aWVzID0gZnVuY3Rpb24gKHN0cikge1xuICByZXR1cm4gU3RyaW5nKHN0cikucmVwbGFjZSgvJi9nLCAnJmFtcDsnKS5yZXBsYWNlKC88L2csICcmbHQ7JykucmVwbGFjZSgvPi9nLCAnJmd0OycpLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKVxufVxuXG52YXIgZW1wdHlFbGVtZW50cyA9IHtcbiAgYnI6IHRydWUsXG4gIGhyOiB0cnVlLFxuICBpbWc6IHRydWUsXG4gIGxpbms6IHRydWVcbn1cblxuZXhwb3J0IGNvbnN0IHRhZyA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIGNvbnN0IGF0dHJzID0gWyAuLi5ub2RlLmF0dHJzIF0ubWFwKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgcmV0dXJuIChub2RlLnByZWZpeCA/IG5vZGUucHJlZml4ICsgJzonIDogJycpICsgbm9kZS5sb2NhbE5hbWUgKyAnPVwiJyArIGh0bWxFbnRpdGllcyhub2RlLnZhbHVlKSArICdcIidcbiAgfSlcblxuICBjb25zdCB7IHByZWZpeCwgbG9jYWxOYW1lIH0gPSBub2RlXG4gIGNvbnN0IHF1YWxpZmllZE5hbWUgPSAocHJlZml4ID8gcHJlZml4ICsgJzonIDogJycpICsgbG9jYWxOYW1lXG5cbiAgcmV0dXJuICc8JyArIFtdLmNvbmNhdChxdWFsaWZpZWROYW1lLCBhdHRycykuam9pbignICcpICsgJz4nICsgKGVtcHR5RWxlbWVudHNbcXVhbGlmaWVkTmFtZS50b0xvd2VyQ2FzZSgpXSA/ICcnIDogbm9kZS5pbm5lckhUTUwgKyAnPC8nICsgcXVhbGlmaWVkTmFtZSArICc+Jylcbn1cblxuZXhwb3J0IGNvbnN0IGNsb25lTm9kZSA9IGZ1bmN0aW9uIChub2RlKSB7XG5cbiAgY29uc3QgeyBwcmVmaXgsIGxvY2FsTmFtZSwgbmFtZXNwYWNlVVJJOiBucywgbm9kZVZhbHVlLCBvd25lckRvY3VtZW50IH0gPSBub2RlXG5cbiAgLy8gQnVpbGQgdXAgdGhlIGNvcnJlY3RseSBjYXNlZCBxdWFsaWZpZWQgbmFtZVxuICBjb25zdCBxdWFsaWZpZWROYW1lID0gKHByZWZpeCA/IHByZWZpeCArICc6JyA6ICcnKSArIGxvY2FsTmFtZVxuXG4gIC8vIENoZWNrIGlmIG5vZGUgd2FzIGNyZWF0ZWQgdXNpbmcgbm9uLW5hbWVzcGFjZSBmdW5jdGlvbiB3aGljaCBjYW4gbGVhZCB0byA6IGluIHRoZSBsb2NhbE5hbWUuXG4gIC8vIFRoaXMgY2hlY2sgYWxsb3dzIGZhbHNlIG5lZ2F0aXZlcyBiZWNhdXNlIGBsb2NhbGAgb25seSBtYXR0ZXJzIElGIHRoZXJlIGFyZSA6IGluIHRoZSBsb2NhbE5hbWVcbiAgLy8gYW5kIHdlIGRvbnQgY2FyZSBhYm91dCBpdCB3aGVuIHRoZXJlIGFyZSBub25cbiAgY29uc3QgbG9jYWwgPSBsb2NhbE5hbWUuaW5jbHVkZXMoJzonKVxuXG4gIHZhciBjbG9uZSA9IG5ldyBub2RlLmNvbnN0cnVjdG9yKHF1YWxpZmllZE5hbWUsIHtcbiAgICBhdHRyczogbmV3IFNldChbIC4uLm5vZGUuYXR0cnMgXS5tYXAobm9kZSA9PiBub2RlLmNsb25lTm9kZSgpKSksXG4gICAgbm9kZVZhbHVlLFxuICAgIG93bmVyRG9jdW1lbnQsXG4gICAgbG9jYWxcbiAgfSwgbnMpXG5cbiAgcmV0dXJuIGNsb25lXG59XG4iLCJpbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnXG5pbXBvcnQgKiBhcyBmb250a2l0IGZyb20gJ2ZvbnRraXQnXG5pbXBvcnQgKiBhcyBkZWZhdWx0cyBmcm9tICcuL2RlZmF1bHRzLmpzJ1xuaW1wb3J0IHsgQm94LCBOb0JveCB9IGZyb20gJy4uL290aGVyL0JveC5qcydcbmltcG9ydCB7IGdldENvbmZpZywgZ2V0Rm9udHMgfSBmcm9tICcuLi9jb25maWcuanMnXG5cbmV4cG9ydCBjb25zdCB0ZXh0QkJveCA9IGZ1bmN0aW9uICh0ZXh0LCB4LCB5LCBkZXRhaWxzKSB7XG5cbiAgaWYgKCF0ZXh0KSByZXR1cm4gbmV3IE5vQm94KClcblxuICBjb25zdCBjb25maWcgPSBnZXRDb25maWcoKVxuICBjb25zdCBwcmVsb2FkZWQgPSBnZXRGb250cygpXG5cbiAgY29uc3QgZmFtaWxpZXMgPSAoZGV0YWlscy5mb250RmFtaWx5IHx8IGRlZmF1bHRzLmZvbnRGYW1pbHkpLnNwbGl0KC9cXHMqLFxccyovKVxuICBjb25zdCBmb250TWFwID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdHMuZm9udEZhbWlseU1hcHBpbmdzLCBjb25maWcuZm9udEZhbWlseU1hcHBpbmdzKVxuICBjb25zdCBmb250U2l6ZSA9IGRldGFpbHMuZm9udFNpemUgfHwgZGVmYXVsdHMuZm9udFNpemVcbiAgY29uc3QgZm9udERpciA9IGNvbmZpZy5mb250RGlyIHx8IGRlZmF1bHRzLmZvbnREaXJcbiAgbGV0IGZvbnRGYW1pbHlcbiAgbGV0IGZvbnRcblxuICBmb3IgKGxldCBpID0gMCwgaWwgPSBmYW1pbGllcy5sZW5ndGg7IGkgPCBpbDsgKytpKSB7XG4gICAgaWYgKGZvbnRNYXBbZmFtaWxpZXNbaV1dKSB7XG4gICAgICBmb250RmFtaWx5ID0gZmFtaWxpZXNbaV1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKCFmb250RmFtaWx5KSB7XG4gICAgZm9udEZhbWlseSA9IGRlZmF1bHRzLmZvbnRGYW1pbHlcbiAgfVxuXG4gIGlmIChwcmVsb2FkZWRbZm9udEZhbWlseV0pIHtcbiAgICBmb250ID0gcHJlbG9hZGVkW2ZvbnRGYW1pbHldXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZmlsZW5hbWUgPSBwYXRoLmpvaW4oZm9udERpciwgZm9udE1hcFtmb250RmFtaWx5XSlcbiAgICB0cnkge1xuICAgICAgZm9udCA9IGZvbnRraXQub3BlblN5bmMoZmlsZW5hbWUpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS53YXJuKGBDb3VsZCBub3Qgb3BlbiBmb250IFwiJHtmb250RmFtaWx5fVwiIGluIGZpbGUgXCIke2ZpbGVuYW1lfVwiLiAke2UudG9TdHJpbmcoKX1gKVxuICAgICAgcmV0dXJuIG5ldyBOb0JveCgpXG4gICAgfVxuXG4gICAgcHJlbG9hZGVkW2ZvbnRGYW1pbHldID0gZm9udFxuICB9XG5cbiAgY29uc3QgZm9udEhlaWdodCA9IGZvbnQuYXNjZW50IC0gZm9udC5kZXNjZW50XG4gIGNvbnN0IGxpbmVIZWlnaHQgPSBmb250SGVpZ2h0ID4gZm9udC51bml0c1BlckVtID8gZm9udEhlaWdodCA6IGZvbnRIZWlnaHQgKyBmb250LmxpbmVHYXBcblxuICBjb25zdCBoZWlnaHQgPSBsaW5lSGVpZ2h0IC8gZm9udC51bml0c1BlckVtICogZm9udFNpemVcbiAgY29uc3Qgd2lkdGggPSBmb250LmxheW91dCh0ZXh0KS5nbHlwaHMucmVkdWNlKChsYXN0LCBjdXJyKSA9PiBsYXN0ICsgY3Vyci5hZHZhbmNlV2lkdGgsIDApIC8gZm9udC51bml0c1BlckVtICogZm9udFNpemVcblxuICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9TVkcvQXR0cmlidXRlL3RleHQtYW5jaG9yXG4gIGxldCB4QWRqdXN0ID0gMFxuICBpZiAoZGV0YWlscy50ZXh0QW5jaG9yID09PSAnZW5kJykge1xuICAgIHhBZGp1c3QgPSAtd2lkdGhcbiAgfSBlbHNlIGlmIChkZXRhaWxzLnRleHRBbmNob3IgPT09ICdtaWRkbGUnKSB7XG4gICAgeEFkanVzdCA9IC13aWR0aCAvIDJcbiAgfVxuXG4gIC8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi8yMDAyL1dELWNzczMtbGluZWJveC0yMDAyMDUxNS9cbiAgLy8gNC4yLiBCYXNlbGluZSBpZGVudGlmaWVyc1xuICBsZXQgeUFkanVzdCA9IGZvbnQuYXNjZW50IC8vIGFscGhhYmV0aWNcbiAgaWYgKGRldGFpbHMuZG9taW5hbnRCYXNlbGluZSA9PT0gJ2JlZm9yZS1lZGdlJyB8fCBkZXRhaWxzLmRvbWluYW50QmFzZWxpbmUgPT09ICd0ZXh0LWJlZm9yZS1lZGdlJykge1xuICAgIHlBZGp1c3QgPSAwXG4gIH0gZWxzZSBpZiAoZGV0YWlscy5kb21pbmFudEJhc2VsaW5lID09PSAnaGFuZ2luZycpIHtcbiAgICB5QWRqdXN0ID0gZm9udC5hc2NlbnQgLSBmb250LnhIZWlnaHQgLSBmb250LmNhcEhlaWdodFxuICB9IGVsc2UgaWYgKGRldGFpbHMuZG9taW5hbnRCYXNlbGluZSA9PT0gJ21hdGhlbWF0aWNhbCcpIHtcbiAgICB5QWRqdXN0ID0gZm9udC5hc2NlbnQgLSBmb250LnhIZWlnaHRcbiAgfSBlbHNlIGlmIChkZXRhaWxzLmRvbWluYW50QmFzZWxpbmUgPT09ICdtaWRkbGUnKSB7XG4gICAgeUFkanVzdCA9IGZvbnQuYXNjZW50IC0gZm9udC54SGVpZ2h0IC8gMlxuICB9IGVsc2UgaWYgKGRldGFpbHMuZG9taW5hbnRCYXNlbGluZSA9PT0gJ2NlbnRyYWwnKSB7XG4gICAgeUFkanVzdCA9IGZvbnQuYXNjZW50IC8gMiArIGZvbnQuZGVzY2VudCAvIDJcbiAgfSBlbHNlIGlmIChkZXRhaWxzLmRvbWluYW50QmFzZWxpbmUgPT09ICdpZGVvZ3JhcGhpYycpIHtcbiAgICB5QWRqdXN0ID0gZm9udC5hc2NlbnQgKyBmb250LmRlc2NlbnRcbiAgfVxuXG4gIHJldHVybiBuZXcgQm94KHggKyB4QWRqdXN0LCB5IC0geUFkanVzdCAvIGZvbnQudW5pdHNQZXJFbSAqIGZvbnRTaXplLCB3aWR0aCwgaGVpZ2h0KVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyBkZWZhdWx0cyBmcm9tICcuL3NyYy91dGlscy9kZWZhdWx0cy5qcydcblxuZXhwb3J0ICogZnJvbSAnLi9zcmMvZG9tL0F0dHIuanMnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9kb20vQ2hhcmFjdGVyRGF0YS5qcydcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2RvbS9Db21tZW50LmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvZG9tL0N1c3RvbUV2ZW50LmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvZG9tL0RvY3VtZW50LmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvZG9tL0RvY3VtZW50RnJhZ21lbnQuanMnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9kb20vRWxlbWVudC5qcydcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2RvbS9FdmVudC5qcydcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2RvbS9FdmVudFRhcmdldC5qcydcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2RvbS9Ob2RlLmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvZG9tL05vZGVGaWx0ZXIuanMnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9kb20vVGV4dC5qcydcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2RvbS9XaW5kb3cuanMnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9kb20vaHRtbC9IVE1MRWxlbWVudC5qcydcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2RvbS9odG1sL0hUTUxJbWFnZUVsZW1lbnQuanMnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9kb20vaHRtbC9IVE1MTGlua0VsZW1lbnQuanMnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9kb20vaHRtbC9IVE1MUGFyc2VyLmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvZG9tL2h0bWwvSFRNTFNjcmlwdEVsZW1lbnQuanMnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9kb20vbWl4aW5zL2VsZW1lbnRBY2Nlc3MuanMnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9kb20vbWl4aW5zL1BhcmVudE5vZGUuanMnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9kb20vc3ZnL1NWR0VsZW1lbnQuanMnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9kb20vc3ZnL1NWR0dyYXBoaWNzRWxlbWVudC5qcydcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2RvbS9zdmcvU1ZHTWF0cml4LmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvZG9tL3N2Zy9TVkdQYXRoRWxlbWVudC5qcydcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2RvbS9zdmcvU1ZHUG9pbnQuanMnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9kb20vc3ZnL1NWR1NWR0VsZW1lbnQuanMnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9kb20vc3ZnL1NWR1RleHRDb250ZW50RWxlbWVudC5qcydcblxuZXhwb3J0ICogZnJvbSAnLi9zcmMvY29uZmlnLmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvZmFjdG9yaWVzLmpzJ1xuZXhwb3J0IHsgZGVmYXVsdHMgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9