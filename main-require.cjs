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
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "getConfig": () => (/* binding */ getConfig),
/* harmony export */   "getFonts": () => (/* binding */ getFonts),
/* harmony export */   "preloadFonts": () => (/* binding */ preloadFonts),
/* harmony export */   "setFontDir": () => (/* binding */ setFontDir),
/* harmony export */   "setFontFamilyMappings": () => (/* binding */ setFontFamilyMappings)
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
/* harmony export */   "SVGMatrix": () => (/* binding */ SVGMatrix),
/* harmony export */   "matrixFactory": () => (/* binding */ matrixFactory)
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
/* harmony export */   "createHTMLWindow": () => (/* binding */ createHTMLWindow),
/* harmony export */   "createSVGDocument": () => (/* binding */ createSVGDocument),
/* harmony export */   "createSVGWindow": () => (/* binding */ createSVGWindow),
/* harmony export */   "createWindow": () => (/* binding */ createWindow)
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
/* harmony export */   "fontDir": () => (/* binding */ fontDir),
/* harmony export */   "fontFamily": () => (/* binding */ fontFamily),
/* harmony export */   "fontFamilyMappings": () => (/* binding */ fontFamilyMappings),
/* harmony export */   "fontSize": () => (/* binding */ fontSize)
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
/* harmony export */   "cssToMap": () => (/* binding */ cssToMap),
/* harmony export */   "mapMap": () => (/* binding */ mapMap),
/* harmony export */   "mapToCss": () => (/* binding */ mapToCss),
/* harmony export */   "mapToObject": () => (/* binding */ mapToObject),
/* harmony export */   "objectToMap": () => (/* binding */ objectToMap)
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
/* harmony export */   "html": () => (/* binding */ html),
/* harmony export */   "mathml": () => (/* binding */ mathml),
/* harmony export */   "svg": () => (/* binding */ svg),
/* harmony export */   "xlink": () => (/* binding */ xlink),
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
/* harmony export */   "Arc": () => (/* binding */ Arc),
/* harmony export */   "PathSegmentArray": () => (/* binding */ PathSegmentArray),
/* harmony export */   "debug": () => (/* binding */ debug),
/* harmony export */   "getCloud": () => (/* binding */ getCloud),
/* harmony export */   "getPathSegments": () => (/* binding */ getPathSegments),
/* harmony export */   "length": () => (/* binding */ length),
/* harmony export */   "pathBBox": () => (/* binding */ pathBBox),
/* harmony export */   "pathFrom": () => (/* binding */ pathFrom),
/* harmony export */   "pathParser": () => (/* binding */ pathParser),
/* harmony export */   "pointAtLength": () => (/* binding */ pointAtLength)
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
  }

  transform (matrix) {
    return this.map(segment => segment.transform(matrix))
  }
}

const getPathSegments = function (d) {
  const parsedPath = pathParser(d)
  const pathSegmentArray = new PathSegmentArray()
  const parsedLength = parsedPath.length
  for (let i = 0; i < parsedLength; i++) {
    pathSegmentArray.push(parsedPath[i])
  }
  return pathSegmentArray
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
/* harmony export */   "delimiter": () => (/* binding */ delimiter),
/* harmony export */   "dots": () => (/* binding */ dots),
/* harmony export */   "hyphen": () => (/* binding */ hyphen),
/* harmony export */   "isPathLetter": () => (/* binding */ isPathLetter),
/* harmony export */   "numbersWithDots": () => (/* binding */ numbersWithDots),
/* harmony export */   "pathLetters": () => (/* binding */ pathLetters),
/* harmony export */   "transforms": () => (/* binding */ transforms)
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
/* harmony export */   "camelCase": () => (/* binding */ camelCase),
/* harmony export */   "cdata": () => (/* binding */ cdata),
/* harmony export */   "comment": () => (/* binding */ comment),
/* harmony export */   "decamelize": () => (/* binding */ decamelize),
/* harmony export */   "fullHex": () => (/* binding */ fullHex),
/* harmony export */   "hexToRGB": () => (/* binding */ hexToRGB),
/* harmony export */   "htmlEntities": () => (/* binding */ htmlEntities),
/* harmony export */   "removeQuotes": () => (/* binding */ removeQuotes),
/* harmony export */   "splitNotInBrackets": () => (/* binding */ splitNotInBrackets),
/* harmony export */   "unhtmlEntities": () => (/* binding */ unhtmlEntities)
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
/* harmony export */   "cloneNode": () => (/* binding */ cloneNode),
/* harmony export */   "tag": () => (/* binding */ tag)
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
/* harmony export */   "HTMLElement": () => (/* reexport safe */ _src_dom_html_HTMLElement_js__WEBPACK_IMPORTED_MODULE_14__.HTMLElement),
/* harmony export */   "HTMLImageElement": () => (/* reexport safe */ _src_dom_html_HTMLImageElement_js__WEBPACK_IMPORTED_MODULE_15__.HTMLImageElement),
/* harmony export */   "HTMLLinkElement": () => (/* reexport safe */ _src_dom_html_HTMLLinkElement_js__WEBPACK_IMPORTED_MODULE_16__.HTMLLinkElement),
/* harmony export */   "HTMLParser": () => (/* reexport safe */ _src_dom_html_HTMLParser_js__WEBPACK_IMPORTED_MODULE_17__.HTMLParser),
/* harmony export */   "HTMLScriptElement": () => (/* reexport safe */ _src_dom_html_HTMLScriptElement_js__WEBPACK_IMPORTED_MODULE_18__.HTMLScriptElement),
/* harmony export */   "Node": () => (/* reexport safe */ _src_dom_Node_js__WEBPACK_IMPORTED_MODULE_10__.Node),
/* harmony export */   "NodeFilter": () => (/* reexport safe */ _src_dom_NodeFilter_js__WEBPACK_IMPORTED_MODULE_11__.NodeFilter),
/* harmony export */   "ParentNode": () => (/* reexport safe */ _src_dom_mixins_ParentNode_js__WEBPACK_IMPORTED_MODULE_20__.ParentNode),
/* harmony export */   "SVGElement": () => (/* reexport safe */ _src_dom_svg_SVGElement_js__WEBPACK_IMPORTED_MODULE_21__.SVGElement),
/* harmony export */   "SVGGraphicsElement": () => (/* reexport safe */ _src_dom_svg_SVGGraphicsElement_js__WEBPACK_IMPORTED_MODULE_22__.SVGGraphicsElement),
/* harmony export */   "SVGMatrix": () => (/* reexport safe */ _src_dom_svg_SVGMatrix_js__WEBPACK_IMPORTED_MODULE_23__.SVGMatrix),
/* harmony export */   "SVGPathElement": () => (/* reexport safe */ _src_dom_svg_SVGPathElement_js__WEBPACK_IMPORTED_MODULE_24__.SVGPathElement),
/* harmony export */   "SVGPoint": () => (/* reexport safe */ _src_dom_svg_SVGPoint_js__WEBPACK_IMPORTED_MODULE_25__.SVGPoint),
/* harmony export */   "SVGSVGElement": () => (/* reexport safe */ _src_dom_svg_SVGSVGElement_js__WEBPACK_IMPORTED_MODULE_26__.SVGSVGElement),
/* harmony export */   "SVGTextContentElement": () => (/* reexport safe */ _src_dom_svg_SVGTextContentElement_js__WEBPACK_IMPORTED_MODULE_27__.SVGTextContentElement),
/* harmony export */   "Text": () => (/* reexport safe */ _src_dom_Text_js__WEBPACK_IMPORTED_MODULE_12__.Text),
/* harmony export */   "Window": () => (/* reexport safe */ _src_dom_Window_js__WEBPACK_IMPORTED_MODULE_13__.Window),
/* harmony export */   "config": () => (/* reexport safe */ _src_config_js__WEBPACK_IMPORTED_MODULE_28__.config),
/* harmony export */   "createDocument": () => (/* reexport safe */ _src_factories_js__WEBPACK_IMPORTED_MODULE_29__.createDocument),
/* harmony export */   "createHTMLDocument": () => (/* reexport safe */ _src_factories_js__WEBPACK_IMPORTED_MODULE_29__.createHTMLDocument),
/* harmony export */   "createHTMLWindow": () => (/* reexport safe */ _src_factories_js__WEBPACK_IMPORTED_MODULE_29__.createHTMLWindow),
/* harmony export */   "createSVGDocument": () => (/* reexport safe */ _src_factories_js__WEBPACK_IMPORTED_MODULE_29__.createSVGDocument),
/* harmony export */   "createSVGWindow": () => (/* reexport safe */ _src_factories_js__WEBPACK_IMPORTED_MODULE_29__.createSVGWindow),
/* harmony export */   "createWindow": () => (/* reexport safe */ _src_factories_js__WEBPACK_IMPORTED_MODULE_29__.createWindow),
/* harmony export */   "defaults": () => (/* reexport module object */ _src_utils_defaults_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "elementAccess": () => (/* reexport safe */ _src_dom_mixins_elementAccess_js__WEBPACK_IMPORTED_MODULE_19__.elementAccess),
/* harmony export */   "getConfig": () => (/* reexport safe */ _src_config_js__WEBPACK_IMPORTED_MODULE_28__.getConfig),
/* harmony export */   "getFonts": () => (/* reexport safe */ _src_config_js__WEBPACK_IMPORTED_MODULE_28__.getFonts),
/* harmony export */   "matrixFactory": () => (/* reexport safe */ _src_dom_svg_SVGMatrix_js__WEBPACK_IMPORTED_MODULE_23__.matrixFactory),
/* harmony export */   "preloadFonts": () => (/* reexport safe */ _src_config_js__WEBPACK_IMPORTED_MODULE_28__.preloadFonts),
/* harmony export */   "setFontDir": () => (/* reexport safe */ _src_config_js__WEBPACK_IMPORTED_MODULE_28__.setFontDir),
/* harmony export */   "setFontFamilyMappings": () => (/* reexport safe */ _src_config_js__WEBPACK_IMPORTED_MODULE_28__.setFontFamilyMappings)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBLFFBQVE7QUFDUjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyRUFBWTtBQUNaLHNFQUFNOzs7Ozs7Ozs7Ozs7Ozs7O0FDdGF3RDs7QUFFdkQ7QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyRUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCaUQ7QUFDbEI7O0FBRXpCLG1CQUFtQiw0REFBYTtBQUN2QztBQUNBO0FBQ0Esb0JBQW9CLG9EQUFjO0FBQ2xDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUndEO0FBQ1Y7QUFDZDtBQUNRO0FBQ2dCO0FBQ3hCO0FBQ2M7QUFDWjtBQUNJO0FBQ047QUFDNkI7QUFDRjtBQUNJO0FBQ1o7QUFDUDtBQUNFO0FBQ0U7QUFDTTtBQUNFO0FBQ1E7QUFDTTtBQUN0QjtBQUNBOztBQUV6QyxxQkFBcUIsd0RBQVc7QUFDdkM7QUFDQTtBQUNBLHdCQUF3QixrREFBUTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixnREFBUSxDQUFDLDhEQUFTO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysa0JBQWtCO0FBQ2xCLE1BQU07QUFDTixhQUFhO0FBQ2IsTUFBTTtBQUNOLE1BQU07QUFDTixTQUFTO0FBQ1QsYUFBYTtBQUNiLE9BQU87QUFDUCxhQUFhO0FBQ2IsaUJBQWlCO0FBQ2pCLG1CQUFtQjtBQUNuQixrQkFBa0I7QUFDbEI7QUFDQSxXQUFXO0FBQ1gsVUFBVTtBQUNWLFlBQVk7QUFDWixlQUFlO0FBQ2YsZ0JBQWdCO0FBQ2hCLG9CQUFvQjtBQUNwQix1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNFQUFNOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEhpQzs7QUFFaEMsMEJBQTBCLGdEQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGVDtBQUNJO0FBQ1c7QUFDOUMsWUFBWSx1QkFBdUI7QUFDbkM7O0FBRU8sK0JBQStCLHdEQUFXO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx1Q0FBTTtBQUNaO0FBQ0EsaUNBQWlDLDRDQUFLO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsNENBQUs7QUFDcEMsT0FBTztBQUNQLFVBQVU7QUFDVjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRDZDOztBQUV2Qyw4QkFBOEIsd0RBQVc7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Qm9COztBQUVyQjtBQUNPO0FBQ1A7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQSxpQkFBaUIsdUNBQVU7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RThDO0FBQ3ZDLGdDQUFnQyx3REFBVzs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQnVEOztBQUV4RDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsaUJBQWlCLGtFQUFXO0FBQzVCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxpQkFBaUIsa0VBQVc7QUFDNUI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGtFQUFXO0FBQzVCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUJPOztBQUVQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVCeUQ7QUFDYjs7QUFFN0M7QUFDTztBQUNQO0FBQ0EscUJBQXFCLGdFQUFZLE9BQU8sbUVBQXVCLDZCQUE2QixvRUFBd0IsR0FBRyxvRUFBd0I7QUFDL0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWmtEO0FBQ1E7QUFDYjtBQUNXOztBQUV4RDtBQUNBO0FBQ0E7QUFDQSxlQUFlLHdEQUFRO0FBQ3ZCLEdBQUc7O0FBRUg7O0FBRUEscUJBQXFCLGdFQUFZLFFBQVEsbUVBQXVCLGdEQUFnRCxvRUFBd0IsR0FBRyxvRUFBd0I7O0FBRW5LO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EseUJBQXlCLHdEQUFRO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsaUJBQWlCLGtFQUFXOztBQUU1QjtBQUNBLEdBQUc7O0FBRUg7QUFDQSxpQkFBaUIsa0VBQVc7QUFDNUI7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCw0Q0FBNEM7QUFDbEc7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFb0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEd3QjtBQUNhOztBQUUxRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsZ0VBQVksT0FBTyxtRUFBdUIscUNBQXFDLG9FQUF3QixHQUFHLG9FQUF3QjtBQUN2SjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EscUJBQXFCLGdFQUFZLE9BQU8sbUVBQXVCLDZEQUE2RCxvRUFBd0IsR0FBRyxvRUFBd0I7QUFDL0s7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLHFCQUFxQixnRUFBWSxPQUFPLG1FQUF1QixtQ0FBbUMsb0VBQXdCLEdBQUcsb0VBQXdCO0FBQ3JKO0FBQ0E7QUFDQTtBQUNBOztBQUV3Qjs7Ozs7Ozs7Ozs7Ozs7OztBQy9CeEI7QUFDMEM7O0FBRW5DO0FBQ1A7O0FBRUE7QUFDQSx1QkFBdUIsb0RBQVM7QUFDaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDMEQ7QUFDRTs7QUFFckQsK0JBQStCLHNFQUFrQjtBQUN4RCxXQUFXLG9FQUFpQjtBQUM1QixXQUFXLG9FQUFpQjtBQUM1QixVQUFVLG9FQUFpQjtBQUMzQjs7Ozs7Ozs7Ozs7Ozs7OztBQ1J1QztBQUNoQyx5QkFBeUIsZ0RBQU87QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQzBEO0FBQ0U7O0FBRXJELGdDQUFnQyxzRUFBa0I7QUFDekQsV0FBVyxvRUFBaUI7QUFDNUIsV0FBVyxvRUFBaUI7QUFDNUIsV0FBVyxvRUFBaUI7QUFDNUIsV0FBVyxvRUFBaUI7QUFDNUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7O0FBRTBEO0FBQ0U7O0FBRXJELHNDQUFzQyxzRUFBa0I7QUFDL0QsVUFBVSxvRUFBaUI7QUFDM0IsVUFBVSxvRUFBaUI7QUFDM0IsY0FBYyxvRUFBaUI7QUFDL0IsZUFBZSxvRUFBaUI7QUFDaEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWNEM7QUFDVTtBQUNUO0FBQ0g7O0FBRTFDO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRU8saUNBQWlDLHNEQUFVO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG9EQUFTO0FBQzFCOztBQUVBLDBEQUEwRCxzREFBZTtBQUN6RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLG9EQUFTO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsb0RBQVM7QUFDeEI7O0FBRUE7QUFDQSxXQUFXLGdFQUFXO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGdFQUFXO0FBQ3RCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHVEQUFnQjtBQUM3QjtBQUNBO0FBQ0EsMkNBQTJDLHNEQUFlLHVCQUF1QiwrQkFBK0I7QUFDaEgsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxPQUFPLE1BQU0sb0RBQVM7O0FBRXRCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pJMEQ7QUFDRTs7QUFFckQsOEJBQThCLHNFQUFrQjtBQUN2RCxVQUFVLG9FQUFpQjtBQUMzQixVQUFVLG9FQUFpQjtBQUMzQixjQUFjLG9FQUFpQjtBQUMvQixlQUFlLG9FQUFpQjtBQUNoQzs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDaUU7O0FBRWpFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLGFBQWEsU0FBUztBQUN0QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQSxZQUFZLG1CQUFtQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsZ0NBQWdDO0FBQzVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsV0FBVztBQUN0QixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkVBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEpaO0FBQzBEO0FBQ0U7O0FBRXJELDZCQUE2QixzRUFBa0I7QUFDdEQsV0FBVyxvRUFBaUI7QUFDNUIsV0FBVyxvRUFBaUI7QUFDNUIsV0FBVyxvRUFBaUI7QUFDNUIsV0FBVyxvRUFBaUI7QUFDNUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEc0RDtBQUNQOztBQUU5Qyw2QkFBNkIsc0VBQWtCO0FBQ3REO0FBQ0EsV0FBVyw4REFBdUI7QUFDbEM7O0FBRUE7QUFDQSxXQUFXLHVEQUFnQjtBQUMzQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNYTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQzREO0FBQ0Y7O0FBRW5ELDZCQUE2QixzRUFBa0I7QUFDdEQsVUFBVSxvRUFBaUI7QUFDM0IsVUFBVSxvRUFBaUI7QUFDM0IsY0FBYyxvRUFBaUI7QUFDL0IsZUFBZSxvRUFBaUI7QUFDaEMsV0FBVyxvRUFBaUI7QUFDNUIsV0FBVyxvRUFBaUI7QUFDNUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYNEQ7QUFDcEI7QUFDRTtBQUNGOztBQUVqQyw0QkFBNEIsc0VBQWtCO0FBQ3JEO0FBQ0EsZUFBZSxvREFBUztBQUN4Qjs7QUFFQTtBQUNBLGVBQWUsa0RBQVE7QUFDdkI7O0FBRUE7QUFDQSxlQUFlLDhDQUFHO0FBQ2xCOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCMEQ7QUFDRTs7QUFFckQsb0NBQW9DLHNFQUFrQjtBQUM3RCxrQkFBa0Isb0VBQWlCOztBQUVuQztBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUd0M7QUFDYTtBQUNGOztBQUVuRCxRQUFRLHFDQUFxQyxFQUFFLCtEQUFpQjs7QUFFaEU7QUFDQSxxQkFBcUIsa0RBQU07QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixrREFBTTtBQUMzQixtQkFBbUIsa0ZBQW9DO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLHFEQUFjO0FBQ3BDOztBQUVBO0FBQ0Esd0JBQXdCLHFEQUFjO0FBQ3RDOztBQVNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ3lDO0FBQ1I7O0FBRTNCO0FBQ1A7QUFDQTtBQUNBLHVEQUF1RCxzREFBZTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLDRDQUFLO0FBQ2YsVUFBVSw0Q0FBSztBQUNmLFVBQVUsNENBQUs7QUFDZixVQUFVLDRDQUFLO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0V1RTtBQUM3QjtBQUNHOztBQUV0QztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLHNFQUFrQjs7QUFFcEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLE9BQU87O0FBRVA7QUFDQSxjQUFjLHNFQUFrQjs7QUFFaEM7O0FBRUE7O0FBRUE7QUFDQSx5Q0FBeUMsUUFBUTs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0NBQXNDLElBQUk7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwyREFBMkQ7O0FBRTNEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsc0RBQWU7QUFDNUMsZ0NBQWdDLHNEQUFlO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNERBQTRELGdFQUFZO0FBQ3hFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxnRUFBWTtBQUN0QjtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDhCQUE4QixzREFBSTtBQUNsQztBQUNBOztBQUVBLHNFQUFzRTs7QUFFdEU7QUFDQTtBQUNBOztBQUVBLCtEQUErRCxzREFBZTtBQUM5RTtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDLElBQUk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsSUFBSTtBQUNyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDN1FpRDs7QUFFMUM7QUFDUDtBQUNBO0FBQ0EsbUJBQW1COztBQUVuQjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsY0FBYztBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwwREFBUTs7QUFFOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkhpRDs7QUFFakQ7QUFDQSxxQkFBcUIsbUVBQW1CO0FBQ3hDLG1CQUFtQix1RUFBdUI7QUFDMUMsbUJBQW1CLG9FQUFvQjtBQUN2QyxtQkFBbUIsZ0ZBQWdDO0FBQ25ELG1CQUFtQixzRUFBc0I7QUFDekMsbUJBQW1CLHNGQUFzQztBQUN6RCxtQkFBbUIsdUVBQXVCO0FBQzFDLG1CQUFtQix3RUFBd0I7QUFDM0MsbUJBQW1CLDZFQUE2QjtBQUNoRCxtQkFBbUIsaUZBQWlDO0FBQ3BELG1CQUFtQix3RUFBd0I7QUFDM0M7QUFDQTs7QUFFTztBQUNQLGtDQUFrQyxtRUFBbUIsaUJBQWlCLHdFQUF3QjtBQUM5RixrQ0FBa0MsdUJBQXVCO0FBQ3pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsd0JBQXdCLHdFQUF3QjtBQUNoRCx3QkFBd0Isd0VBQXdCO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQzRDOztBQUVyQztBQUNQO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsZ0RBQUs7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwsZUFBZSw4Q0FBRztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEMkM7QUFDUjtBQUNRO0FBQ0o7QUFDUztBQUNDOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0MsMkRBQTBCO0FBQ2hFO0FBQ0EscUJBQXFCLDJEQUEwQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsMERBQXlCLENBQUMsd0RBQXVCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSwwREFBeUIsQ0FBQyx3REFBdUI7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVywwREFBeUIsQ0FBQywwREFBeUI7QUFDOUQ7QUFDQSxXQUFXLDBEQUF5QixDQUFDLDJEQUEwQjtBQUMvRDtBQUNBLFdBQVcsMERBQXlCLENBQUMsd0RBQXVCO0FBQzVEO0FBQ0E7QUFDQSxXQUFXLDBEQUF5QixDQUFDLDREQUEyQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDBEQUF5QjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUF1QixnREFBSztBQUM1QixpQkFBaUIsMkRBQTBCO0FBQzNDOztBQUVBLFdBQVcsMERBQXlCLENBQUMsdURBQXNCO0FBQzNEO0FBQ0E7QUFDQSxlQUFlLDJEQUEwQjtBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtGQUFrRixnREFBSztBQUN2Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsWUFBWTs7QUFFL0U7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDBEQUFZLFdBQVcsdUVBQXVCLEdBQUcsb0VBQW9CO0FBQ3hGLDBDQUEwQyx3RUFBd0I7QUFDbEUsV0FBVyx3RUFBd0I7QUFDbkMsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsc0RBQXNELGdEQUFlO0FBQ3JFLHNEQUFzRCxnREFBZTs7QUFFckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksUUFBUTtBQUNwQjtBQUNBLG1CQUFtQixtREFBa0I7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLG1EQUFrQjtBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZDQUE2QyxZQUFZOztBQUV6RDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFNBQVMsUUFBUTs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsdUJBQXVCO0FBQ3ZCLHVCQUF1QjtBQUN2Qiw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlTeUM7QUFDRDs7QUFFeEMsa0JBQWtCLGtEQUFPLENBQUMsdURBQWEsQ0FBQyx3REFBZTs7QUFFaEQ7QUFDQTtBQUNBLGdCQUFnQiwrQ0FBSTtBQUNwQjtBQUNQO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYaUQ7O0FBRTFDO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxXQUFXLDhEQUFVO0FBQ3JCLEdBQUcseUJBQXlCLGFBQWEsVUFBVSxPQUFPLEtBQUssQ0FBSTtBQUNuRTs7QUFFTztBQUNQLGdDQUFnQyw2QkFBNkIsYUFBYTtBQUMxRTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYTztBQUNQOztBQUVBO0FBQ0E7O0FBRUEsK0JBQStCLFFBQVE7QUFDdkMsMkJBQTJCO0FBQzNCO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBOztBQUVBLCtCQUErQixRQUFRO0FBQ3ZDLDJCQUEyQjtBQUMzQjtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkM0QztBQUNIO0FBQ047QUFDbkM7QUFDeUQ7QUFDYjs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxzQ0FBc0Msa0RBQUssa0JBQWtCLGtEQUFLO0FBQ2xFO0FBQ0E7O0FBRUEsd0JBQXdCLGtEQUFLO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQSxnQ0FBZ0MsNkJBQTZCLE9BQU87QUFDcEU7QUFDQSxHQUFHO0FBQ0g7QUFDQSxpQ0FBaUMsa0RBQUssa0JBQWtCLGtEQUFLLGtCQUFrQixrREFBSztBQUNwRjtBQUNBO0FBQ0Esd0JBQXdCLGtEQUFLO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDLDZCQUE2QixPQUFPO0FBQ3BFO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLCtCQUErQixrREFBSztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHVDQUF1QyxRQUFRO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLHVDQUF1QyxRQUFRO0FBQy9DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsdUJBQXVCLDJDQUFVO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQTs7QUFFTzs7QUFFUDtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQSxhQUFhLHNEQUFxQjtBQUNsQyxhQUFhLGtEQUFpQjtBQUM5QixhQUFhLDZDQUFZO0FBQ3pCO0FBQ0EsV0FBVyxnREFBZTs7QUFFMUI7QUFDQTtBQUNBLGdCQUFnQixrREFBSztBQUNyQixpQkFBaUIsa0RBQUs7QUFDdEIsZ0JBQWdCLGtEQUFLO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSx3REFBdUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSTs7QUFFSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsOENBQUc7QUFDbEI7O0FBRUE7QUFDQSxlQUFlLHNEQUFVO0FBQ3pCOztBQUVBLGNBQWM7O0FBRWQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0Isa0RBQUs7QUFDekI7QUFDQTtBQUNBLGdCQUFnQixvRUFBYTtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsa0RBQUs7QUFDcEIsTUFBTTtBQUNOLGVBQWUsa0RBQUs7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsMkJBQTJCLG9FQUFhO0FBQ3hDO0FBQ0EsZUFBZSxrREFBSztBQUNwQjtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLGtEQUFLO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGtCQUFrQixrREFBSzs7QUFFdkI7QUFDQSxvQ0FBb0Msa0RBQUs7QUFDekM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsb0VBQWE7O0FBRTNCLG1CQUFtQixrREFBSztBQUN4QjtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGtEQUFLO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHNEQUFVOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxlQUFlLHNEQUFVO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGVBQWUsa0RBQUs7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLHNCQUFzQixFQUFFLHFCQUFxQixRQUFRLHNCQUFzQixFQUFFLHFCQUFxQixPQUFPLHFCQUFxQixFQUFFLHFCQUFxQixTQUFTLHNCQUFzQixZQUFZLHVCQUF1QixXQUFXLHNCQUFzQixXQUFXLFNBQVMsV0FBVyxXQUFXO0FBQ3BUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0Isa0RBQUs7QUFDM0Isb0JBQW9CLGtEQUFLO0FBQ3pCLG9CQUFvQixrREFBSztBQUN6QixvQkFBb0Isa0RBQUs7QUFDekIsb0JBQW9CLGtEQUFLO0FBQ3pCLE1BQU07QUFDTixvQkFBb0Isa0RBQUs7QUFDekIsb0JBQW9CLGtEQUFLO0FBQ3pCLG9CQUFvQixrREFBSztBQUN6QixvQkFBb0Isa0RBQUs7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBEQUEwRCx5QkFBeUI7O0FBRW5GO0FBQ0EsZ0hBQWdILHlCQUF5Qjs7QUFFekk7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHlCQUF5QjtBQUN0RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUI7QUFDbkIsbUJBQW1COztBQUVuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSxzREFBVTtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHlDQUF5QyxTQUFTO0FBQ2xEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsNkJBQTZCO0FBQzFELDJDQUEyQyw2QkFBNkI7QUFDeEUsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxrREFBSztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLGtEQUFLO0FBQ2YsVUFBVSxrREFBSztBQUNmLFVBQVUsa0RBQUs7QUFDZixVQUFVLGtEQUFLO0FBQ2Y7O0FBRUE7QUFDQSxVQUFVLGtEQUFLO0FBQ2YsVUFBVSxrREFBSztBQUNmLFVBQVUsa0RBQUs7QUFDZixVQUFVLGtEQUFLO0FBQ2Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtEQUFLO0FBQ3pCLG9CQUFvQixrREFBSztBQUN6QixNQUFNO0FBQ04sb0JBQW9CLGtEQUFLO0FBQ3pCLG9CQUFvQixrREFBSztBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsc0RBQVU7QUFDekI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1AsK0RBQStELGdEQUFLO0FBQ3BFOztBQUVPO0FBQ1A7QUFDQSx3REFBd0QsZ0RBQUs7QUFDN0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVSxzREFBVTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEscUNBQXFDLFFBQVE7QUFDN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsd0RBQXdELGdEQUFLO0FBQzdEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEseUJBQXlCO0FBQ3pCLDJFQUEyRSxnREFBSztBQUNoRixHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBLHlDQUF5QyxzREFBVTtBQUNuRDtBQUNBOztBQUVPO0FBQ1AsU0FBUyxxQkFBcUI7QUFDOUIsZ0JBQWdCLEdBQUcsRUFBRSxHQUFHLElBQUksT0FBTyxJQUFJLFFBQVEsSUFBSSxHQUFHLElBQUksRUFBRTtBQUM1RCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixHQUFHLEVBQUUsR0FBRyxJQUFJLE9BQU8sSUFBSSxRQUFRLElBQUksR0FBRyxJQUFJLEVBQUU7QUFDNUQsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGdCQUFnQixPQUFPLEVBQUUsR0FBRyxJQUFJLEdBQUcsRUFBRSxHQUFHLFFBQVEsT0FBTyxFQUFFLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRyxRQUFRLE9BQU8sRUFBRSxFQUFFO0FBQzNGLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixRQUFRLEVBQUUsR0FBRyxJQUFJLElBQUksRUFBRSxJQUFJLFFBQVEsUUFBUSxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsSUFBSSxRQUFRLFFBQVEsRUFBRSxFQUFFO0FBQ2xHLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixJQUFJLEVBQUUsSUFBSSxJQUFJLElBQUksRUFBRSxHQUFHO0FBQ3ZDLEdBQUc7QUFDSDtBQUNBLGdCQUFnQiw2QkFBNkI7QUFDN0MsR0FBRztBQUNIO0FBQ0EsZ0JBQWdCLDRCQUE0QjtBQUM1QztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3dkJBO0FBQ087O0FBRVA7QUFDTzs7QUFFUDs7QUFFQTtBQUNPOztBQUVQO0FBQ087O0FBRVA7QUFDTzs7QUFFUDtBQUNPOztBQUVQO0FBQ087Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCUDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLElBQUksb0JBQW9COztBQUUxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUCx5Q0FBeUMsc0JBQXNCLHNCQUFzQix3QkFBd0I7QUFDN0c7O0FBRU87QUFDUCxtQ0FBbUMsc0JBQXNCLHNCQUFzQix3QkFBd0I7QUFDdkc7O0FBRU87QUFDUCxxQkFBcUIsSUFBSTtBQUN6Qjs7QUFFTztBQUNQLGdCQUFnQixJQUFJO0FBQ3BCOztBQUVPO0FBQ1A7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsVUFBVSxPQUFPOztBQUVqQiwrQkFBK0IsUUFBUTtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUZBO0FBQ0EseUNBQXlDLHNCQUFzQixzQkFBc0Isd0JBQXdCO0FBQzdHOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxHQUFHOztBQUVILFVBQVUsb0JBQW9CO0FBQzlCOztBQUVBO0FBQ0E7O0FBRU87O0FBRVAsVUFBVSxnRUFBZ0U7O0FBRTFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQzRCO0FBQ007QUFDTztBQUNHO0FBQ007O0FBRTNDOztBQUVQLHdCQUF3QixnREFBSzs7QUFFN0IsaUJBQWlCLHFEQUFTO0FBQzFCLG9CQUFvQixvREFBUTs7QUFFNUIsMENBQTBDLG9EQUFtQjtBQUM3RCxrQ0FBa0MsRUFBRSw0REFBMkI7QUFDL0QsdUNBQXVDLGtEQUFpQjtBQUN4RCxvQ0FBb0MsaURBQWdCO0FBQ3BEO0FBQ0E7O0FBRUEsd0NBQXdDLFFBQVE7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixvREFBbUI7QUFDcEM7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSixxQkFBcUIsMkNBQVM7QUFDOUI7QUFDQSxhQUFhLDZDQUFnQjtBQUM3QixNQUFNO0FBQ04sMkNBQTJDLFdBQVcsYUFBYSxTQUFTLEtBQUssYUFBYTtBQUM5RixpQkFBaUIsZ0RBQUs7QUFDdEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUEsYUFBYSw4Q0FBRztBQUNoQjs7Ozs7OztVQzdFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05tRDs7QUFFbEI7QUFDUztBQUNOO0FBQ0k7QUFDSDtBQUNRO0FBQ1Q7QUFDRjtBQUNNO0FBQ1A7QUFDTTtBQUNOO0FBQ0U7QUFDVTtBQUNLO0FBQ0Q7QUFDTDtBQUNPO0FBQ0Y7QUFDSDtBQUNIO0FBQ1E7QUFDVDtBQUNLO0FBQ047QUFDSztBQUNROztBQUV2QjtBQUNHO0FBQ2YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdmdkb20vZXh0ZXJuYWwgY29tbW9uanMgXCJmb250a2l0XCIiLCJ3ZWJwYWNrOi8vc3ZnZG9tL2V4dGVybmFsIGNvbW1vbmpzIFwiaW1hZ2Utc2l6ZVwiIiwid2VicGFjazovL3N2Z2RvbS9leHRlcm5hbCBjb21tb25qcyBcInNheFwiIiwid2VicGFjazovL3N2Z2RvbS9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwibm9kZTpwYXRoXCIiLCJ3ZWJwYWNrOi8vc3ZnZG9tL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJub2RlOnVybFwiIiwid2VicGFjazovL3N2Z2RvbS9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwicGF0aFwiIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL2RvbS9BdHRyLmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy9kb20vQ2hhcmFjdGVyRGF0YS5qcyIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvZG9tL0NvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL2RvbS9DdXN0b21FdmVudC5qcyIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvZG9tL0RvY3VtZW50LmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy9kb20vRG9jdW1lbnRGcmFnbWVudC5qcyIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvZG9tL0RvY3VtZW50VHlwZS5qcyIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvZG9tL0VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL2RvbS9FdmVudC5qcyIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvZG9tL0V2ZW50VGFyZ2V0LmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy9kb20vTm9kZS5qcyIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvZG9tL05vZGVGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL2RvbS9UZXh0LmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy9kb20vV2luZG93LmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy9kb20vaHRtbC9IVE1MRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvZG9tL2h0bWwvSFRNTEltYWdlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvZG9tL2h0bWwvSFRNTExpbmtFbGVtZW50LmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy9kb20vaHRtbC9IVE1MUGFyc2VyLmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy9kb20vaHRtbC9IVE1MU2NyaXB0RWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvZG9tL21peGlucy9DaGlsZE5vZGUuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL2RvbS9taXhpbnMvTm9uRG9jdW1lbnRUeXBlQ2hpbGROb2RlLmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy9kb20vbWl4aW5zL05vbkVsZW1lbnRQYXJlbnROb2RlLmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy9kb20vbWl4aW5zL1BhcmVudE5vZGUuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL2RvbS9taXhpbnMvZWxlbWVudEFjY2Vzcy5qcyIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvZG9tL3N2Zy9TVkdBbmltYXRlZExlbmd0aC5qcyIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvZG9tL3N2Zy9TVkdDaXJjbGVFbGVtZW50LmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy9kb20vc3ZnL1NWR0VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL2RvbS9zdmcvU1ZHRWxsaXBzZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL2RvbS9zdmcvU1ZHRm9yZWlnbk9iamVjdEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL2RvbS9zdmcvU1ZHR3JhcGhpY3NFbGVtZW50LmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy9kb20vc3ZnL1NWR0ltYWdlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvZG9tL3N2Zy9TVkdMZW5ndGguanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL2RvbS9zdmcvU1ZHTGluZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL2RvbS9zdmcvU1ZHTWF0cml4LmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy9kb20vc3ZnL1NWR1BhdGhFbGVtZW50LmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy9kb20vc3ZnL1NWR1BvaW50LmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy9kb20vc3ZnL1NWR1JlY3RFbGVtZW50LmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy9kb20vc3ZnL1NWR1NWR0VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL2RvbS9zdmcvU1ZHVGV4dENvbnRlbnRFbGVtZW50LmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy9mYWN0b3JpZXMuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL290aGVyL0JveC5qcyIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvb3RoZXIvQ3NzUXVlcnkuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL290aGVyL1BvaW50LmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy91dGlscy9Ob2RlSXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL3V0aWxzL1BvaW50Q2xvdWQuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL3V0aWxzL2Jib3hVdGlscy5qcyIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvdXRpbHMvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL3V0aWxzL21hcFV0aWxzLmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy91dGlscy9uYW1lc3BhY2VzLmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy91dGlscy9ub2Rlc1RvTm9kZS5qcyIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvdXRpbHMvb2JqZWN0Q3JlYXRpb25VdGlscy5qcyIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvdXRpbHMvcGF0aFV0aWxzLmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy91dGlscy9yZWdleC5qcyIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvdXRpbHMvc3RyVXRpbHMuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL3V0aWxzL3RhZ1V0aWxzLmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy91dGlscy90ZXh0VXRpbHMuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3N2Z2RvbS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc3ZnZG9tL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc3ZnZG9tL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vbWFpbi1tb2R1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZm9udGtpdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbWFnZS1zaXplXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNheFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlOnBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZTp1cmxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0ICogYXMgZm9udGtpdCBmcm9tICdmb250a2l0J1xuXG5jb25zdCBfY29uZmlnID0ge31cbmNvbnN0IGZvbnRzID0ge31cblxuZXhwb3J0IGNvbnN0IHNldEZvbnREaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gIF9jb25maWcuZm9udERpciA9IGRpclxuICByZXR1cm4gdGhpc1xufVxuXG5leHBvcnQgY29uc3Qgc2V0Rm9udEZhbWlseU1hcHBpbmdzID0gZnVuY3Rpb24gKG1hcCkge1xuICBfY29uZmlnLmZvbnRGYW1pbHlNYXBwaW5ncyA9IG1hcFxuICByZXR1cm4gdGhpc1xufVxuXG4vLyBUT0RPOiBtYWtlIGFzeW5jXG5leHBvcnQgY29uc3QgcHJlbG9hZEZvbnRzID0gKCkgPT4ge1xuICB2YXIgbWFwID0gX2NvbmZpZy5mb250RmFtaWx5TWFwcGluZ3NcblxuICBmb3IgKGNvbnN0IFsgZm9udCwgZmlsZSBdIG9mIE9iamVjdC5lbnRyaWVzKG1hcCkpIHtcbiAgICBjb25zdCBmaWxlbmFtZSA9IHBhdGguam9pbihfY29uZmlnLmZvbnREaXIsIGZpbGUpXG5cbiAgICB0cnkge1xuICAgICAgZm9udHNbZm9udF0gPSBmb250a2l0Lm9wZW5TeW5jKGZpbGVuYW1lKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUud2FybihgQ291bGQgbm90IGxvYWQgZm9udCBmaWxlIGZvciAke2ZvbnR9YCwgZSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuZXhwb3J0IGNvbnN0IGdldENvbmZpZyA9ICgpID0+IF9jb25maWdcbmV4cG9ydCBjb25zdCBnZXRGb250cyA9ICgpID0+IGZvbnRzXG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIHNldEZvbnREaXIsXG4gIHNldEZvbnRGYW1pbHlNYXBwaW5ncyxcbiAgcHJlbG9hZEZvbnRzLFxuICBnZXRDb25maWcsXG4gIGdldEZvbnRzXG59XG4iLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi9Ob2RlLmpzJ1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gJy4uL3V0aWxzL25hbWVzcGFjZXMuanMnXG5cbmV4cG9ydCBjbGFzcyBBdHRyIGV4dGVuZHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yIChuYW1lLCBwcm9wcywgbnMpIHtcbiAgICBzdXBlcihuYW1lLCB7IG5vZGVWYWx1ZTogJycsIC4uLnByb3BzIH0sIG5zKVxuXG4gICAgLy8gRm9sbG93IHNwZWMgYW5kIGxvd2VyY2FzZSBub2RlTmFtZSBmb3IgaHRtbFxuICAgIHRoaXMubm9kZU5hbWUgPSBucyA9PT0gaHRtbCA/IG5hbWUudG9Mb3dlckNhc2UoKSA6IG5hbWVcbiAgICB0aGlzLm5vZGVUeXBlID0gTm9kZS5BVFRSSUJVVEVfTk9ERVxuICAgIHRoaXMub3duZXJFbGVtZW50ID0gbnVsbFxuICB9XG5cbiAgZ2V0IHZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlVmFsdWVcbiAgfVxuXG4gIHNldCB2YWx1ZSAodmFsKSB7XG4gICAgdGhpcy5ub2RlVmFsdWUgPSB2YWxcbiAgfVxuXG4gIGdldCBuYW1lICgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlTmFtZVxuICB9XG59XG4iLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi9Ob2RlLmpzJ1xuaW1wb3J0IHsgbWl4aW4gfSBmcm9tICcuLi91dGlscy9vYmplY3RDcmVhdGlvblV0aWxzLmpzJ1xuaW1wb3J0IHsgTm9uRG9jdW1lbnRUeXBlQ2hpbGROb2RlIH0gZnJvbSAnLi9taXhpbnMvTm9uRG9jdW1lbnRUeXBlQ2hpbGROb2RlLmpzJ1xuaW1wb3J0IHsgQ2hpbGROb2RlIH0gZnJvbSAnLi9taXhpbnMvQ2hpbGROb2RlLmpzJ1xuXG5leHBvcnQgY2xhc3MgQ2hhcmFjdGVyRGF0YSBleHRlbmRzIE5vZGUge1xuICBjb25zdHJ1Y3RvciAobmFtZSwgcHJvcHMpIHtcbiAgICBzdXBlcihuYW1lLCBwcm9wcylcblxuICAgIHRoaXMuZGF0YSA9IHRoaXMubm9kZVZhbHVlXG4gIH1cblxuICBhcHBlbmREYXRhIChkYXRhKSB7XG4gICAgdGhpcy5kYXRhICs9IGRhdGFcbiAgfVxuXG4gIGRlbGV0ZURhdGEgKG9mZnNldCwgY291bnQpIHtcbiAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEuc2xpY2UoMCwgb2Zmc2V0KSArIHRoaXMuZGF0YS5zbGljZSgwLCBvZmZzZXQgKyBjb3VudClcbiAgfVxuXG4gIGluc2VydERhdGEgKG9mZnNldCwgZGF0YSkge1xuICAgIHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5zbGljZSgwLCBvZmZzZXQpICsgZGF0YSArIHRoaXMuZGF0YS5zbGljZShvZmZzZXQpXG4gIH1cblxuICByZXBsYWNlRGF0YSAob2Zmc2V0LCBjb3VudCwgZGF0YSkge1xuICAgIHRoaXMuZGVsZXRlRGF0YShvZmZzZXQsIGNvdW50KVxuICAgIHRoaXMuaW5zZXJ0RGF0YShvZmZzZXQsIGRhdGEpXG4gIH1cblxuICBzdWJzdHJpbmdEYXRhIChvZmZzZXQsIGNvdW50KSB7XG4gICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhLnN1YnN0cihvZmZzZXQsIGNvdW50KVxuICB9XG5cbiAgZ2V0IGxlbmd0aCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5sZW5ndGhcbiAgfVxufVxuXG5taXhpbihOb25Eb2N1bWVudFR5cGVDaGlsZE5vZGUsIENoYXJhY3RlckRhdGEpXG5taXhpbihDaGlsZE5vZGUsIENoYXJhY3RlckRhdGEpXG4iLCJpbXBvcnQgeyBDaGFyYWN0ZXJEYXRhIH0gZnJvbSAnLi9DaGFyYWN0ZXJEYXRhLmpzJ1xuaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4vTm9kZS5qcydcbmV4cG9ydCBjbGFzcyBDb21tZW50IGV4dGVuZHMgQ2hhcmFjdGVyRGF0YSB7XG4gIGNvbnN0cnVjdG9yIChuYW1lLCBwcm9wcykge1xuICAgIHN1cGVyKG5hbWUsIHByb3BzKVxuICAgIHRoaXMubm9kZVR5cGUgPSBOb2RlLkNPTU1FTlRfTk9ERVxuICB9XG59XG4iLCJpbXBvcnQgeyBFdmVudCB9IGZyb20gJy4vRXZlbnQuanMnXG5leHBvcnQgY2xhc3MgQ3VzdG9tRXZlbnQgZXh0ZW5kcyBFdmVudCB7XG4gIGNvbnN0cnVjdG9yIChuYW1lLCBwcm9wcyA9IHt9KSB7XG4gICAgc3VwZXIobmFtZSlcbiAgICB0aGlzLmRldGFpbCA9IHByb3BzLmRldGFpbCB8fCBudWxsXG4gICAgdGhpcy5jYW5jZWxhYmxlID0gcHJvcHMuY2FuY2VsYWJsZSB8fCBmYWxzZVxuICB9XG59XG4iLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi9Ob2RlLmpzJ1xuaW1wb3J0IHsgQ29tbWVudCB9IGZyb20gJy4vQ29tbWVudC5qcydcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuL1RleHQuanMnXG5pbXBvcnQgeyBBdHRyIH0gZnJvbSAnLi9BdHRyLmpzJ1xuaW1wb3J0IHsgRG9jdW1lbnRGcmFnbWVudCB9IGZyb20gJy4vRG9jdW1lbnRGcmFnbWVudC5qcydcbmltcG9ydCB7IEhUTUxMaW5rRWxlbWVudCB9IGZyb20gJy4vaHRtbC9IVE1MTGlua0VsZW1lbnQuanMnXG5pbXBvcnQgeyBIVE1MU2NyaXB0RWxlbWVudCB9IGZyb20gJy4vaHRtbC9IVE1MU2NyaXB0RWxlbWVudC5qcydcbmltcG9ydCB7IEhUTUxJbWFnZUVsZW1lbnQgfSBmcm9tICcuL2h0bWwvSFRNTEltYWdlRWxlbWVudC5qcydcbmltcG9ydCB7IEhUTUxFbGVtZW50IH0gZnJvbSAnLi9odG1sL0hUTUxFbGVtZW50LmpzJ1xuaW1wb3J0IHsgZWxlbWVudEFjY2VzcyB9IGZyb20gJy4vbWl4aW5zL2VsZW1lbnRBY2Nlc3MuanMnXG5pbXBvcnQgeyBtaXhpbiB9IGZyb20gJy4uL3V0aWxzL29iamVjdENyZWF0aW9uVXRpbHMuanMnXG5pbXBvcnQgeyBTVkdTVkdFbGVtZW50IH0gZnJvbSAnLi9zdmcvU1ZHU1ZHRWxlbWVudC5qcydcbmltcG9ydCB7IFNWR1BhdGhFbGVtZW50IH0gZnJvbSAnLi9zdmcvU1ZHUGF0aEVsZW1lbnQuanMnXG5pbXBvcnQgeyBTVkdUZXh0Q29udGVudEVsZW1lbnQgfSBmcm9tICcuL3N2Zy9TVkdUZXh0Q29udGVudEVsZW1lbnQuanMnXG5pbXBvcnQgeyBTVkdHcmFwaGljc0VsZW1lbnQgfSBmcm9tICcuL3N2Zy9TVkdHcmFwaGljc0VsZW1lbnQuanMnXG5pbXBvcnQgeyBQYXJlbnROb2RlIH0gZnJvbSAnLi9taXhpbnMvUGFyZW50Tm9kZS5qcydcbmltcG9ydCB7IHN2ZywgaHRtbCB9IGZyb20gJy4uL3V0aWxzL25hbWVzcGFjZXMuanMnXG5pbXBvcnQgeyBEb2N1bWVudFR5cGUgfSBmcm9tICcuL0RvY3VtZW50VHlwZS5qcydcbmltcG9ydCB7IE5vbkVsZW1lbnRQYXJlbnROb2RlIH0gZnJvbSAnLi9taXhpbnMvTm9uRWxlbWVudFBhcmVudE5vZGUuanMnXG5pbXBvcnQgeyBTVkdSZWN0RWxlbWVudCB9IGZyb20gJy4vc3ZnL1NWR1JlY3RFbGVtZW50LmpzJ1xuaW1wb3J0IHsgU1ZHQ2lyY2xlRWxlbWVudCB9IGZyb20gJy4vc3ZnL1NWR0NpcmNsZUVsZW1lbnQuanMnXG5pbXBvcnQgeyBTVkdMaW5lRWxlbWVudCB9IGZyb20gJy4vc3ZnL1NWR0xpbmVFbGVtZW50LmpzJ1xuaW1wb3J0IHsgU1ZHRWxsaXBzZUVsZW1lbnQgfSBmcm9tICcuL3N2Zy9TVkdFbGxpcHNlRWxlbWVudC5qcydcbmltcG9ydCB7IFNWR0ZvcmVpZ25PYmplY3RFbGVtZW50IH0gZnJvbSAnLi9zdmcvU1ZHRm9yZWlnbk9iamVjdEVsZW1lbnQuanMnXG5pbXBvcnQgeyBTVkdJbWFnZUVsZW1lbnQgfSBmcm9tICcuL3N2Zy9TVkdJbWFnZUVsZW1lbnQuanMnXG5cbmZ1bmN0aW9uIGdldENoaWxkQnlUYWdOYW1lIChwYXJlbnQsIG5hbWUpIHtcbiAgZm9yIChsZXQgY2hpbGQgPSBwYXJlbnQuZmlyc3RDaGlsZDsgY2hpbGQgIT0gbnVsbDsgY2hpbGQgPSBjaGlsZC5uZXh0U2libGluZykge1xuICAgIGlmIChjaGlsZC5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUgJiYgY2hpbGQubm9kZU5hbWUgPT09IG5hbWUpIHtcbiAgICAgIHJldHVybiBjaGlsZFxuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG5jb25zdCBnZXRTVkdFbGVtZW50Rm9yTmFtZSA9IChuYW1lKSA9PiB7XG4gIHN3aXRjaCAobmFtZS50b0xvd2VyQ2FzZSgpKSB7XG4gIGNhc2UgJ3N2Zyc6XG4gICAgcmV0dXJuIFNWR1NWR0VsZW1lbnRcbiAgY2FzZSAncGF0aCc6XG4gICAgcmV0dXJuIFNWR1BhdGhFbGVtZW50XG4gIGNhc2UgJ2NpcmNsZSc6XG4gICAgcmV0dXJuIFNWR0NpcmNsZUVsZW1lbnRcbiAgY2FzZSAnZWxsaXBzZSc6XG4gICAgcmV0dXJuIFNWR0VsbGlwc2VFbGVtZW50XG4gIGNhc2UgJ2xpbmUnOlxuICAgIHJldHVybiBTVkdMaW5lRWxlbWVudFxuICBjYXNlICdyZWN0JzpcbiAgICByZXR1cm4gU1ZHUmVjdEVsZW1lbnRcbiAgY2FzZSAnZm9yZWlnbk9iamVjdCc6XG4gICAgcmV0dXJuIFNWR0ZvcmVpZ25PYmplY3RFbGVtZW50XG4gIGNhc2UgJ2ltYWdlJzpcbiAgICByZXR1cm4gU1ZHSW1hZ2VFbGVtZW50XG4gIGNhc2UgJ3RleHQnOlxuICBjYXNlICd0c3Bhbic6XG4gIGNhc2UgJ3RyZWYnOlxuICBjYXNlICdhbHRnbHlwaCc6XG4gIGNhc2UgJ3RleHRwYXRoJzpcbiAgICByZXR1cm4gU1ZHVGV4dENvbnRlbnRFbGVtZW50XG4gIGRlZmF1bHQ6XG4gICAgcmV0dXJuIFNWR0dyYXBoaWNzRWxlbWVudFxuICB9XG59XG5cbmNvbnN0IGdldEhUTUxFbGVtZW50Rm9yTmFtZSA9IChuYW1lKSA9PiB7XG4gIHN3aXRjaCAobmFtZS50b0xvd2VyQ2FzZSgpKSB7XG4gIGNhc2UgJ2ltZyc6XG4gICAgcmV0dXJuIEhUTUxJbWFnZUVsZW1lbnRcbiAgY2FzZSAnbGluayc6XG4gICAgcmV0dXJuIEhUTUxMaW5rRWxlbWVudFxuICBjYXNlICdzY3JpcHQnOlxuICAgIHJldHVybiBIVE1MU2NyaXB0RWxlbWVudFxuICBkZWZhdWx0OlxuICAgIHJldHVybiBIVE1MRWxlbWVudFxuICB9XG59XG5cbmNvbnN0IGdldEVsZW1lbnRGb3JOYW1lc3BhY2UgPSAobnMsIG5hbWUpID0+IHtcbiAgc3dpdGNoIChucykge1xuICBjYXNlIHN2ZzpcbiAgICByZXR1cm4gZ2V0U1ZHRWxlbWVudEZvck5hbWUobmFtZSlcbiAgY2FzZSBodG1sOlxuICBjYXNlIG51bGw6XG4gIGNhc2UgJyc6XG4gIGRlZmF1bHQ6XG4gICAgcmV0dXJuIGdldEhUTUxFbGVtZW50Rm9yTmFtZShuYW1lKVxuICB9XG59XG5cbi8vIEZlYXR1cmUvdmVyc2lvbiBwYWlycyB0aGF0IERPTUltcGxlbWVudGF0aW9uLmhhc0ZlYXR1cmUoKSByZXR1cm5zIHRydWUgZm9yLiAgSXQgcmV0dXJucyBmYWxzZSBmb3IgYW55dGhpbmcgZWxzZS5cbmNvbnN0IHN1cHBvcnRlZEZlYXR1cmVzID0ge1xuICB4bWw6IHsgJyc6IHRydWUsICcxLjAnOiB0cnVlLCAnMi4wJzogdHJ1ZSB9LFxuICBjb3JlOiB7ICcnOiB0cnVlLCAnMi4wJzogdHJ1ZSB9LFxuICBodG1sOiB7ICcnOiB0cnVlLCAnMS4wJzogdHJ1ZSwgJzIuMCc6IHRydWUgfSxcbiAgeGh0bWw6IHsgJyc6IHRydWUsICcxLjAnOiB0cnVlLCAnMi4wJzogdHJ1ZSB9IC8vIEhUTUxcbn1cblxuZXhwb3J0IGNvbnN0IERPTUltcGxlbWVudGF0aW9uID0ge1xuICBoYXNGZWF0dXJlIChmZWF0dXJlLCB2ZXJzaW9uKSB7XG4gICAgY29uc3QgZiA9IHN1cHBvcnRlZEZlYXR1cmVzWyhmZWF0dXJlIHx8ICcnKS50b0xvd2VyQ2FzZSgpXVxuICAgIHJldHVybiAoZiAmJiBmW3ZlcnNpb24gfHwgJyddKSB8fCBmYWxzZVxuICB9LFxuXG4gIGNyZWF0ZURvY3VtZW50VHlwZSAocXVhbGlmaWVkTmFtZSwgcHVibGljSWQsIHN5c3RlbUlkKSB7XG4gICAgcmV0dXJuIG5ldyBEb2N1bWVudFR5cGUocXVhbGlmaWVkTmFtZSwgeyBwdWJsaWNJZCwgc3lzdGVtSWQsIG93bmVyRG9jdW1lbnQ6IHRoaXMgfSlcbiAgfSxcblxuICBjcmVhdGVEb2N1bWVudCAobmFtZXNwYWNlLCBxdWFsaWZpZWROYW1lLCBkb2N0eXBlKSB7XG4gICAgY29uc3QgZG9jID0gbmV3IERvY3VtZW50KG5hbWVzcGFjZSlcbiAgICBpZiAoZG9jdHlwZSkge1xuICAgICAgaWYgKGRvY3R5cGUub3duZXJEb2N1bWVudCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3RoZSBvYmplY3QgaXMgaW4gdGhlIHdyb25nIERvY3VtZW50LCBhIGNhbGwgdG8gaW1wb3J0Tm9kZSBpcyByZXF1aXJlZCcpXG4gICAgICB9XG4gICAgICBkb2N0eXBlLm93bmVyRG9jdW1lbnQgPSBkb2NcbiAgICAgIGRvYy5hcHBlbmRDaGlsZChkb2N0eXBlKVxuICAgIH1cbiAgICBpZiAocXVhbGlmaWVkTmFtZSkge1xuICAgICAgZG9jLmFwcGVuZENoaWxkKGRvYy5jcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlLCBxdWFsaWZpZWROYW1lKSlcbiAgICB9XG4gICAgcmV0dXJuIGRvY1xuICB9LFxuXG4gIGNyZWF0ZUhUTUxEb2N1bWVudCAodGl0bGVUZXh0ID0gJycpIHtcbiAgICBjb25zdCBkID0gbmV3IERvY3VtZW50KGh0bWwpXG4gICAgY29uc3Qgcm9vdCA9IGQuY3JlYXRlRWxlbWVudCgnaHRtbCcpXG4gICAgY29uc3QgaGVhZCA9IGQuY3JlYXRlRWxlbWVudCgnaGVhZCcpXG4gICAgY29uc3QgdGl0bGUgPSBkLmNyZWF0ZUVsZW1lbnQoJ3RpdGxlJylcbiAgICB0aXRsZS5hcHBlbmRDaGlsZChkLmNyZWF0ZVRleHROb2RlKHRpdGxlVGV4dCkpXG4gICAgaGVhZC5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICByb290LmFwcGVuZENoaWxkKGhlYWQpXG4gICAgcm9vdC5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnQoJ2JvZHknKSlcblxuICAgIGQuYXBwZW5kQ2hpbGQocm9vdClcbiAgICByZXR1cm4gZFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudCBleHRlbmRzIE5vZGUge1xuICBjb25zdHJ1Y3RvciAobnMpIHtcbiAgICBzdXBlcignI2RvY3VtZW50Jywge30sIG5zKVxuICAgIHRoaXMubm9kZVR5cGUgPSBOb2RlLkRPQ1VNRU5UX05PREVcbiAgICB0aGlzLmltcGxlbWVudGF0aW9uID0gRE9NSW1wbGVtZW50YXRpb25cbiAgICB0aGlzLmRlZmF1bHRWaWV3ID0gbnVsbFxuICB9XG5cbiAgLy8gaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNkb20tZG9jdW1lbnQtY3JlYXRlYXR0cmlidXRlXG4gIGNyZWF0ZUF0dHJpYnV0ZSAobG9jYWxOYW1lKSB7XG4gICAgaWYgKHRoaXMubmFtZXNwYWNlVVJJID09PSBodG1sKSB7XG4gICAgICBsb2NhbE5hbWUgPSBsb2NhbE5hbWUudG9Mb3dlckNhc2UoKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jcmVhdGVBdHRyaWJ1dGVOUyhudWxsLCBsb2NhbE5hbWUsIHRydWUpXG4gIH1cblxuICBjcmVhdGVBdHRyaWJ1dGVOUyAobnMsIHF1YWxpZmllZE5hbWUsIGxvY2FsID0gZmFsc2UpIHtcbiAgICByZXR1cm4gbmV3IEF0dHIocXVhbGlmaWVkTmFtZSwgeyBvd25lckRvY3VtZW50OiB0aGlzLCBsb2NhbCB9LCBucylcbiAgfVxuXG4gIGNyZWF0ZUNvbW1lbnQgKHRleHQpIHtcbiAgICByZXR1cm4gbmV3IENvbW1lbnQoJyNjb21tZW50JywgeyBub2RlVmFsdWU6IHRleHQsIG93bmVyRG9jdW1lbnQ6IHRoaXMgfSlcbiAgfVxuXG4gIGNyZWF0ZURvY3VtZW50RnJhZ21lbnQgKG5hbWUpIHtcbiAgICByZXR1cm4gbmV3IERvY3VtZW50RnJhZ21lbnQoJyNkb2N1bWVudC1mcmFnbWVudCcsIHsgb3duZXJEb2N1bWVudDogdGhpcyB9KVxuICB9XG5cbiAgY3JlYXRlRWxlbWVudCAobG9jYWxOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlRWxlbWVudE5TKHRoaXMubmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUsIHRydWUpXG4gIH1cblxuICBjcmVhdGVFbGVtZW50TlMgKG5zLCBxdWFsaWZpZWROYW1lLCBsb2NhbCA9IGZhbHNlKSB7XG4gICAgY29uc3QgRWxlbWVudCA9IGdldEVsZW1lbnRGb3JOYW1lc3BhY2UobnMsIHF1YWxpZmllZE5hbWUpXG5cbiAgICByZXR1cm4gbmV3IEVsZW1lbnQocXVhbGlmaWVkTmFtZSwge1xuICAgICAgb3duZXJEb2N1bWVudDogdGhpcyxcbiAgICAgIGxvY2FsXG4gICAgfSwgbnMpXG4gIH1cblxuICBjcmVhdGVUZXh0Tm9kZSAodGV4dCkge1xuICAgIHJldHVybiBuZXcgVGV4dCgnI3RleHQnLCB7IG5vZGVWYWx1ZTogdGV4dCwgb3duZXJEb2N1bWVudDogdGhpcyB9KVxuICB9XG5cbiAgZ2V0IGNvbXBhdE1vZGUgKCkge1xuICAgIHJldHVybiAnQ1NTMUNvbXBhdCcgLy8gYWx3YXlzIGJlIGluIHN0YW5kYXJkcy1tb2RlXG4gIH1cblxuICBnZXQgYm9keSAoKSB7XG4gICAgcmV0dXJuIGdldENoaWxkQnlUYWdOYW1lKHRoaXMuZG9jdW1lbnRFbGVtZW50LCAnQk9EWScpXG4gIH1cblxuICBnZXQgaGVhZCAoKSB7XG4gICAgcmV0dXJuIGdldENoaWxkQnlUYWdOYW1lKHRoaXMuZG9jdW1lbnRFbGVtZW50LCAnSEVBRCcpXG4gIH1cblxuICBnZXQgZG9jdW1lbnRFbGVtZW50ICgpIHtcbiAgICByZXR1cm4gdGhpcy5sYXN0Q2hpbGRcbiAgfVxufVxuXG5taXhpbihlbGVtZW50QWNjZXNzLCBEb2N1bWVudClcbm1peGluKFBhcmVudE5vZGUsIERvY3VtZW50KVxubWl4aW4oTm9uRWxlbWVudFBhcmVudE5vZGUsIERvY3VtZW50KVxuIiwiaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4vTm9kZS5qcydcbmltcG9ydCB7IG1peGluIH0gZnJvbSAnLi4vdXRpbHMvb2JqZWN0Q3JlYXRpb25VdGlscy5qcydcbmltcG9ydCB7IGVsZW1lbnRBY2Nlc3MgfSBmcm9tICcuL21peGlucy9lbGVtZW50QWNjZXNzLmpzJ1xuaW1wb3J0IHsgUGFyZW50Tm9kZSB9IGZyb20gJy4vbWl4aW5zL1BhcmVudE5vZGUuanMnXG5pbXBvcnQgeyBOb25FbGVtZW50UGFyZW50Tm9kZSB9IGZyb20gJy4vbWl4aW5zL05vbkVsZW1lbnRQYXJlbnROb2RlLmpzJ1xuZXhwb3J0IGNsYXNzIERvY3VtZW50RnJhZ21lbnQgZXh0ZW5kcyBOb2RlIHtcbiAgY29uc3RydWN0b3IgKG5hbWUsIHByb3BzKSB7XG4gICAgc3VwZXIobmFtZSwgcHJvcHMpXG4gICAgdGhpcy5ub2RlVHlwZSA9IE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERVxuICB9XG59XG5cbm1peGluKGVsZW1lbnRBY2Nlc3MsIERvY3VtZW50RnJhZ21lbnQpXG5taXhpbihQYXJlbnROb2RlLCBEb2N1bWVudEZyYWdtZW50KVxubWl4aW4oTm9uRWxlbWVudFBhcmVudE5vZGUsIERvY3VtZW50RnJhZ21lbnQpXG4iLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi9Ob2RlLmpzJ1xuaW1wb3J0IHsgbWl4aW4gfSBmcm9tICcuLi91dGlscy9vYmplY3RDcmVhdGlvblV0aWxzLmpzJ1xuaW1wb3J0IHsgQ2hpbGROb2RlIH0gZnJvbSAnLi9taXhpbnMvQ2hpbGROb2RlLmpzJ1xuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRUeXBlIGV4dGVuZHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yIChuYW1lLCBwcm9wcykge1xuICAgIHN1cGVyKG5hbWUsIHByb3BzKVxuXG4gICAgdGhpcy5ub2RlVHlwZSA9IE5vZGUuRE9DVU1FTlRfVFlQRV9OT0RFXG4gICAgdGhpcy5uYW1lID0gbmFtZVxuXG4gICAgY29uc3QgeyBwdWJsaWNJZCwgc3lzdGVtSWQgfSA9IHByb3BzXG4gICAgdGhpcy5wdWJsaWNJZCA9IHB1YmxpY0lkIHx8ICcnXG4gICAgdGhpcy5zeXN0ZW1JZCA9IHN5c3RlbUlkIHx8ICcnXG4gIH1cbn1cblxubWl4aW4oQ2hpbGROb2RlLCBEb2N1bWVudFR5cGUpXG4iLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi9Ob2RlLmpzJ1xuXG5pbXBvcnQgeyBQYXJlbnROb2RlIH0gZnJvbSAnLi9taXhpbnMvUGFyZW50Tm9kZS5qcydcbmltcG9ydCB7IGVsZW1lbnRBY2Nlc3MgfSBmcm9tICcuL21peGlucy9lbGVtZW50QWNjZXNzLmpzJ1xuaW1wb3J0IHsgSFRNTFBhcnNlciB9IGZyb20gJy4vaHRtbC9IVE1MUGFyc2VyLmpzJ1xuaW1wb3J0IHsgRG9jdW1lbnRGcmFnbWVudCB9IGZyb20gJy4vRG9jdW1lbnRGcmFnbWVudC5qcydcbmltcG9ydCB7IG1peGluIH0gZnJvbSAnLi4vdXRpbHMvb2JqZWN0Q3JlYXRpb25VdGlscy5qcydcbmltcG9ydCB7IHRhZyB9IGZyb20gJy4uL3V0aWxzL3RhZ1V0aWxzLmpzJ1xuaW1wb3J0IHsgY3NzVG9NYXAsIG1hcFRvQ3NzIH0gZnJvbSAnLi4vdXRpbHMvbWFwVXRpbHMuanMnXG5pbXBvcnQgeyBoZXhUb1JHQiwgZGVjYW1lbGl6ZSwgaHRtbEVudGl0aWVzLCBjZGF0YSwgY29tbWVudCB9IGZyb20gJy4uL3V0aWxzL3N0clV0aWxzLmpzJ1xuaW1wb3J0IHsgTm9uRG9jdW1lbnRUeXBlQ2hpbGROb2RlIH0gZnJvbSAnLi9taXhpbnMvTm9uRG9jdW1lbnRUeXBlQ2hpbGROb2RlLmpzJ1xuaW1wb3J0IHsgQ2hpbGROb2RlIH0gZnJvbSAnLi9taXhpbnMvQ2hpbGROb2RlLmpzJ1xuaW1wb3J0IHsgaHRtbCwgeG1sLCB4bWxucyB9IGZyb20gJy4uL3V0aWxzL25hbWVzcGFjZXMuanMnXG5cbmNvbnN0IHZhbGlkYXRlQW5kRXh0cmFjdCA9IChucywgbmFtZSkgPT4ge1xuICBsZXQgcHJlZml4ID0gbnVsbFxuICBsZXQgbG9jYWxuYW1lID0gbmFtZVxuXG4gIGlmICghbnMpIG5zID0gbnVsbFxuXG4gIGlmIChuYW1lLmluY2x1ZGVzKCc6JykpIHtcbiAgICBbIHByZWZpeCwgbG9jYWxuYW1lIF0gPSBuYW1lLnNwbGl0KCc6JylcbiAgfVxuXG4gIGlmICghbnMgJiYgcHJlZml4KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdOYW1lc3BhY2UgRXJyb3InKVxuICB9XG5cbiAgaWYgKHByZWZpeCA9PT0gJ3htbCcgJiYgbnMgIT09IHhtbCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTmFtZXNwYWNlIEVycm9yJylcbiAgfVxuXG4gIGlmICgocHJlZml4ID09PSAneG1sbnMnIHx8IG5hbWUgPT09ICd4bWxucycpICYmIG5zICE9PSB4bWxucykge1xuICAgIHRocm93IG5ldyBFcnJvcignTmFtZXNwYWNlIEVycm9yJylcbiAgfVxuXG4gIGlmIChwcmVmaXggIT09ICd4bWxucycgJiYgbmFtZSAhPT0gJ3htbG5zJyAmJiBucyA9PT0geG1sbnMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05hbWVzcGFjZSBFcnJvcicpXG4gIH1cblxuICByZXR1cm4gWyBucywgcHJlZml4LCBsb2NhbG5hbWUgXVxufVxuXG5jb25zdCBnZXRBdHRyaWJ1dGVCeU5zQW5kTG9jYWxOYW1lID0gKGVsLCBucywgbG9jYWxOYW1lKSA9PiB7XG4gIGlmICghbnMpIG5zID0gbnVsbFxuICByZXR1cm4gWyAuLi5lbC5hdHRycyBdLmZpbmQoKG5vZGUpID0+IG5vZGUubG9jYWxOYW1lID09PSBsb2NhbE5hbWUgJiYgbm9kZS5uYW1lc3BhY2VVUkkgPT09IG5zKVxufVxuXG5jb25zdCBnZXRBdHRyaWJ1dGVCeVF1YWxpZmllZE5hbWUgPSAoZWwsIHF1YWxpZmllZE5hbWUpID0+IHtcbiAgaWYgKGVsLm5hbWVzcGFjZVVSSSA9PT0gaHRtbCAmJiBlbC5vd25lckRvY3VtZW50Lm5hbWVzcGFjZVVSSSA9PT0gaHRtbCkge1xuICAgIHF1YWxpZmllZE5hbWUgPSBxdWFsaWZpZWROYW1lLnRvTG93ZXJDYXNlKClcbiAgfVxuXG4gIHJldHVybiBbIC4uLmVsLmF0dHJzIF0uZmluZCgobm9kZSkgPT4gbm9kZS5uYW1lID09PSBxdWFsaWZpZWROYW1lKVxufVxuXG4vLyBUaGlzIFByb3h5IHByb3hpZXMgYWxsIGFjY2VzcyB0byBub2RlLnN0eWxlIHRvIHRoZSBjc3Mgc2F2ZWQgaW4gdGhlIGF0dHJpYnV0ZVxuY29uc3QgZ2V0U3R5bGVQcm94eSA9IChub2RlKSA9PiB7XG5cbiAgcmV0dXJuIG5ldyBQcm94eShub2RlLCB7XG4gICAgZ2V0ICh0YXJnZXQsIGtleSkge1xuICAgICAgY29uc3Qgc3R5bGVzID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnc3R5bGUnKSB8fCAnJ1xuICAgICAgY29uc3Qgc3R5bGVNYXAgPSBjc3NUb01hcChzdHlsZXMpXG5cbiAgICAgIGlmIChrZXkgPT09ICdjc3NUZXh0Jykge1xuICAgICAgICByZXR1cm4gc3R5bGVzXG4gICAgICB9XG5cbiAgICAgIGlmIChrZXkgPT09ICdzZXRQcm9wZXJ0eScpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wZXJ0eU5hbWUsIHZhbHVlID0gJycsIHByaW9yaXR5ID0gJycpIHtcbiAgICAgICAgICBub2RlLnN0eWxlW3Byb3BlcnR5TmFtZV0gPSB2YWx1ZSArIChwcmlvcml0eSA/IGAgISR7cHJpb3JpdHl9YCA6ICcnKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGtleSA9IGRlY2FtZWxpemUoa2V5KVxuICAgICAgaWYgKCFzdHlsZU1hcC5oYXMoa2V5KSkgcmV0dXJuICcnXG5cbiAgICAgIHJldHVybiBzdHlsZU1hcC5nZXQoa2V5KVxuICAgIH0sXG4gICAgc2V0ICh0YXJnZXQsIGtleSwgdmFsdWUpIHtcbiAgICAgIGtleSA9IGRlY2FtZWxpemUoa2V5KVxuXG4gICAgICBpZiAoa2V5ID09PSAnY3NzLXRleHQnKSB7XG4gICAgICAgIC8vIGVuc3VyZSBjb3JyZWN0IHNwYWNpbmcgYW5kIHN5bnRheCBieSBjb252ZXJ0aW5nIGJhY2sgYW5kIGZvcnRoXG4gICAgICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgbWFwVG9Dc3MoY3NzVG9NYXAodmFsdWUpKSlcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gaGV4VG9SR0IodmFsdWUudG9TdHJpbmcoKSlcbiAgICAgICAgY29uc3Qgc3R5bGVzID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnc3R5bGUnKSB8fCAnJ1xuICAgICAgICBjb25zdCBzdHlsZU1hcCA9IGNzc1RvTWFwKHN0eWxlcylcbiAgICAgICAgc3R5bGVNYXAuc2V0KGtleSwgdmFsdWUpXG5cbiAgICAgICAgdGFyZ2V0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBtYXBUb0NzcyhzdHlsZU1hcCkpXG5cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG5cbi8vIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jZG9tLWVsZW1lbnQtc2V0YXR0cmlidXRlbnNcbmV4cG9ydCBjbGFzcyBFbGVtZW50IGV4dGVuZHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yIChuYW1lLCBwcm9wcywgbnMpIHtcbiAgICBzdXBlcihuYW1lLCBwcm9wcywgbnMpXG5cbiAgICB0aGlzLnN0eWxlID0gZ2V0U3R5bGVQcm94eSh0aGlzKVxuICAgIHRoaXMudGFnTmFtZSA9IHRoaXMubm9kZU5hbWVcbiAgfVxuXG4gIGdldEF0dHJpYnV0ZSAocXVhbGlmaWVkTmFtZSkge1xuICAgIGNvbnN0IGF0dHIgPSB0aGlzLmdldEF0dHJpYnV0ZU5vZGUocXVhbGlmaWVkTmFtZSlcbiAgICByZXR1cm4gYXR0ciA/IGF0dHIudmFsdWUgOiBudWxsXG4gIH1cblxuICBnZXRBdHRyaWJ1dGVOb2RlIChxdWFsaWZpZWROYW1lKSB7XG4gICAgcmV0dXJuIGdldEF0dHJpYnV0ZUJ5UXVhbGlmaWVkTmFtZSh0aGlzLCBxdWFsaWZpZWROYW1lKVxuICB9XG5cbiAgZ2V0QXR0cmlidXRlTm9kZU5TIChucywgbG9jYWxOYW1lKSB7XG4gICAgcmV0dXJuIGdldEF0dHJpYnV0ZUJ5TnNBbmRMb2NhbE5hbWUodGhpcywgbnMsIGxvY2FsTmFtZSlcbiAgfVxuXG4gIGdldEF0dHJpYnV0ZU5TIChucywgbG9jYWxOYW1lKSB7XG4gICAgY29uc3QgYXR0ciA9IHRoaXMuZ2V0QXR0cmlidXRlTm9kZU5TKG5zLCBsb2NhbE5hbWUpXG4gICAgcmV0dXJuIGF0dHIgPyBhdHRyLnZhbHVlIDogbnVsbFxuICB9XG5cbiAgZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ09ubHkgaW1wbGVtZW50ZWQgZm9yIFNWRyBFbGVtZW50cycpXG4gIH1cblxuICBoYXNBdHRyaWJ1dGUgKHF1YWxpZmllZE5hbWUpIHtcbiAgICBjb25zdCBhdHRyID0gdGhpcy5nZXRBdHRyaWJ1dGVOb2RlKHF1YWxpZmllZE5hbWUpXG4gICAgcmV0dXJuICEhYXR0clxuICB9XG5cbiAgaGFzQXR0cmlidXRlTlMgKG5zLCBsb2NhbE5hbWUpIHtcbiAgICBjb25zdCBhdHRyID0gdGhpcy5nZXRBdHRyaWJ1dGVOb2RlTlMobnMsIGxvY2FsTmFtZSlcbiAgICByZXR1cm4gISFhdHRyXG4gIH1cblxuICBtYXRjaGVzIChxdWVyeSkge1xuICAgIHJldHVybiB0aGlzLm1hdGNoV2l0aFNjb3BlKHF1ZXJ5LCB0aGlzKVxuICB9XG5cbiAgcmVtb3ZlQXR0cmlidXRlIChxdWFsaWZpZWROYW1lKSB7XG4gICAgY29uc3QgYXR0ciA9IHRoaXMuZ2V0QXR0cmlidXRlTm9kZShxdWFsaWZpZWROYW1lKVxuICAgIGlmIChhdHRyKSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZU5vZGUoYXR0cilcbiAgICB9XG4gICAgcmV0dXJuIGF0dHJcbiAgfVxuXG4gIHJlbW92ZUF0dHJpYnV0ZU5vZGUgKG5vZGUpIHtcbiAgICBpZiAoIXRoaXMuYXR0cnMuZGVsZXRlKG5vZGUpKSB0aHJvdyBuZXcgRXJyb3IoJ0F0dHJpYnV0ZSBjYW5ub3QgYmUgcmVtb3ZlZCBiZWNhdXNlIGl0IHdhcyBub3QgZm91bmQgb24gdGhlIGVsZW1lbnQnKVxuICAgIHJldHVybiBub2RlXG4gIH1cblxuICAvLyBjYWxsIGlzOiBkLnJlbW92ZUF0dHJpYnV0ZU5TKCdodHRwOi8vd3d3Lm1vemlsbGEub3JnL25zL3NwZWNpYWxzcGFjZScsICdhbGlnbicsICdjZW50ZXInKTtcbiAgcmVtb3ZlQXR0cmlidXRlTlMgKG5zLCBsb2NhbE5hbWUpIHtcbiAgICBjb25zdCBhdHRyID0gdGhpcy5nZXRBdHRyaWJ1dGVOb2RlTlMobnMsIGxvY2FsTmFtZSlcbiAgICBpZiAoYXR0cikge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGVOb2RlKGF0dHIpXG4gICAgfVxuICAgIHJldHVybiBhdHRyXG4gIH1cblxuICAvKiBUaGUgc2V0QXR0cmlidXRlKHF1YWxpZmllZE5hbWUsIHZhbHVlKSBtZXRob2QsIHdoZW4gaW52b2tlZCwgbXVzdCBydW4gdGhlc2Ugc3RlcHM6XG5cbiAgICBJZiBxdWFsaWZpZWROYW1lIGRvZXMgbm90IG1hdGNoIHRoZSBOYW1lIHByb2R1Y3Rpb24gaW4gWE1MLCB0aGVuIHRocm93IGFuIFwiSW52YWxpZENoYXJhY3RlckVycm9yXCIgRE9NRXhjZXB0aW9uLlxuXG4gICAgSWYgdGhpcyBpcyBpbiB0aGUgSFRNTCBuYW1lc3BhY2UgYW5kIGl0cyBub2RlIGRvY3VtZW50IGlzIGFuIEhUTUwgZG9jdW1lbnQsIHRoZW4gc2V0IHF1YWxpZmllZE5hbWUgdG8gcXVhbGlmaWVkTmFtZSBpbiBBU0NJSSBsb3dlcmNhc2UuXG5cbiAgICBMZXQgYXR0cmlidXRlIGJlIHRoZSBmaXJzdCBhdHRyaWJ1dGUgaW4gdGhpc+KAmXMgYXR0cmlidXRlIGxpc3Qgd2hvc2UgcXVhbGlmaWVkIG5hbWUgaXMgcXVhbGlmaWVkTmFtZSwgYW5kIG51bGwgb3RoZXJ3aXNlLlxuXG4gICAgSWYgYXR0cmlidXRlIGlzIG51bGwsIGNyZWF0ZSBhbiBhdHRyaWJ1dGUgd2hvc2UgbG9jYWwgbmFtZSBpcyBxdWFsaWZpZWROYW1lLCB2YWx1ZSBpcyB2YWx1ZSwgYW5kIG5vZGUgZG9jdW1lbnQgaXMgdGhpc+KAmXMgbm9kZSBkb2N1bWVudCwgdGhlbiBhcHBlbmQgdGhpcyBhdHRyaWJ1dGUgdG8gdGhpcywgYW5kIHRoZW4gcmV0dXJuLlxuXG4gICAgQ2hhbmdlIGF0dHJpYnV0ZSB0byB2YWx1ZS5cbiAgKi9cbiAgc2V0QXR0cmlidXRlIChxdWFsaWZpZWROYW1lLCB2YWx1ZSkge1xuICAgIC8vIFdlIGhhdmUgdG8gZG8gdGhhdCBoZXJlIGJlY2F1c2Ugd2UgY2Fubm90IGNoZWNrIGlmIGB0aGlzYCBpcyBpbiB0aGUgY29ycmVjdCBuYW1lc3BhY2VcbiAgICAvLyB3aGVuIGRvaW5nIGl0IGluIGNyZWF0ZUF0dHJpYnV0ZVxuICAgIGlmICh0aGlzLm5hbWVzcGFjZVVSSSA9PT0gaHRtbCAmJiB0aGlzLm93bmVyRG9jdW1lbnQubmFtZXNwYWNlVVJJID09PSBodG1sKSB7XG4gICAgICBxdWFsaWZpZWROYW1lID0gcXVhbGlmaWVkTmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgfVxuXG4gICAgbGV0IGF0dHIgPSB0aGlzLmdldEF0dHJpYnV0ZU5vZGUocXVhbGlmaWVkTmFtZSlcbiAgICBpZiAoIWF0dHIpIHtcbiAgICAgIC8vIEJlY2F1c2UgY3JlYXRlQXR0cmlidXRlIGxvd2VyY2FzZXMgdGhlIGF0dHJpYnV0ZSBpbiBhbiBodG1sIGRvYyB3ZSBoYXZlIHRvIHVzZSBjcmVhdGVBdHRyaWJ1dGVOU1xuICAgICAgYXR0ciA9IHRoaXMub3duZXJEb2N1bWVudC5jcmVhdGVBdHRyaWJ1dGVOUyhudWxsLCBxdWFsaWZpZWROYW1lLCB0cnVlKVxuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGVOb2RlKGF0dHIpXG4gICAgfVxuXG4gICAgYXR0ci52YWx1ZSA9IHZhbHVlXG4gIH1cblxuICAvKlxuICAgIExldCBuYW1lc3BhY2UsIHByZWZpeCwgYW5kIGxvY2FsTmFtZSBiZSB0aGUgcmVzdWx0IG9mIHBhc3NpbmcgbmFtZXNwYWNlIGFuZCBxdWFsaWZpZWROYW1lIHRvIHZhbGlkYXRlIGFuZCBleHRyYWN0LlxuXG4gICAgU2V0IGFuIGF0dHJpYnV0ZSB2YWx1ZSBmb3IgdGhpcyB1c2luZyBsb2NhbE5hbWUsIHZhbHVlLCBhbmQgYWxzbyBwcmVmaXggYW5kIG5hbWVzcGFjZS5cblxuICAgIElmIHByZWZpeCBpcyBub3QgZ2l2ZW4sIHNldCBpdCB0byBudWxsLlxuICAgIElmIG5hbWVzcGFjZSBpcyBub3QgZ2l2ZW4sIHNldCBpdCB0byBudWxsLlxuICAgIExldCBhdHRyaWJ1dGUgYmUgdGhlIHJlc3VsdCBvZiBnZXR0aW5nIGFuIGF0dHJpYnV0ZSBnaXZlbiBuYW1lc3BhY2UsIGxvY2FsTmFtZSwgYW5kIGVsZW1lbnQuXG4gICAgSWYgYXR0cmlidXRlIGlzIG51bGwsIGNyZWF0ZSBhbiBhdHRyaWJ1dGUgd2hvc2UgbmFtZXNwYWNlIGlzIG5hbWVzcGFjZSwgbmFtZXNwYWNlIHByZWZpeCBpcyBwcmVmaXgsIGxvY2FsIG5hbWUgaXMgbG9jYWxOYW1lLCB2YWx1ZSBpcyB2YWx1ZSwgYW5kIG5vZGUgZG9jdW1lbnQgaXMgZWxlbWVudOKAmXMgbm9kZSBkb2N1bWVudCwgdGhlbiBhcHBlbmQgdGhpcyBhdHRyaWJ1dGUgdG8gZWxlbWVudCwgYW5kIHRoZW4gcmV0dXJuLlxuXG4gICAgQ2hhbmdlIGF0dHJpYnV0ZSB0byB2YWx1ZS5cbiAgKi9cblxuICBzZXRBdHRyaWJ1dGVOb2RlIChub2RlKSB7XG4gICAgdGhpcy5hdHRycy5hZGQobm9kZSlcbiAgICBub2RlLm93bmVyRWxlbWVudCA9IHRoaXNcbiAgfVxuXG4gIC8vIGNhbGwgaXM6IGQuc2V0QXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cubW96aWxsYS5vcmcvbnMvc3BlY2lhbHNwYWNlJywgJ3NwZWM6YWxpZ24nLCAnY2VudGVyJyk7XG4gIHNldEF0dHJpYnV0ZU5TIChuYW1lc3BhY2UsIG5hbWUsIHZhbHVlKSB7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBjb25zdCBbIG5zLCBwcmVmaXgsIGxvY2FsTmFtZSBdID0gdmFsaWRhdGVBbmRFeHRyYWN0KG5hbWVzcGFjZSwgbmFtZSlcblxuICAgIGxldCBhdHRyID0gdGhpcy5nZXRBdHRyaWJ1dGVOb2RlTlMobnMsIGxvY2FsTmFtZSlcbiAgICBpZiAoIWF0dHIpIHtcbiAgICAgIGF0dHIgPSB0aGlzLm93bmVyRG9jdW1lbnQuY3JlYXRlQXR0cmlidXRlTlMobnMsIG5hbWUpXG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZU5vZGUoYXR0cikgLy8gc2V0QXR0cmlidXRlTm9kZU5TIGlzIGEgc3lub255bSBvZiBzZXRBdHRyaWJ1dGVOb2RlXG4gICAgfVxuXG4gICAgYXR0ci52YWx1ZSA9IHZhbHVlXG5cbiAgICB0aGlzLmF0dHJzLmFkZChhdHRyKVxuICB9XG5cbiAgZ2V0IGF0dHJpYnV0ZXMgKCkge1xuICAgIHJldHVybiBbIC4uLnRoaXMuYXR0cnMgXVxuICB9XG5cbiAgZ2V0IGNsYXNzTmFtZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdjbGFzcycpXG4gIH1cblxuICBzZXQgY2xhc3NOYW1lIChjKSB7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYylcbiAgfVxuXG4gIGdldCBpZCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdpZCcpIHx8ICcnXG4gIH1cblxuICBzZXQgaWQgKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0QXR0cmlidXRlKCdpZCcsIGlkKVxuICB9XG5cbiAgZ2V0IGlubmVySFRNTCAoKSB7XG5cbiAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzLm1hcChub2RlID0+IHtcbiAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkgcmV0dXJuIGh0bWxFbnRpdGllcyhub2RlLmRhdGEpXG4gICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5DREFUQV9TRUNUSU9OX05PREUpIHJldHVybiBjZGF0YShub2RlLmRhdGEpXG4gICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5DT01NRU5UX05PREUpIHJldHVybiBjb21tZW50KG5vZGUuZGF0YSlcbiAgICAgIHJldHVybiBub2RlLm91dGVySFRNTFxuICAgIH0pLmpvaW4oJycpXG4gIH1cblxuICBzZXQgaW5uZXJIVE1MIChzdHIpIHtcbiAgICB3aGlsZSAodGhpcy5maXJzdENoaWxkKSB7XG4gICAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMuZmlyc3RDaGlsZClcbiAgICB9XG4gICAgLy8gVGhlIHBhcnNlciBhZGRzIHRoZSBodG1sIHRvIHRoaXNcbiAgICBIVE1MUGFyc2VyKHN0ciwgdGhpcylcbiAgfVxuXG4gIGdldCBvdXRlckhUTUwgKCkge1xuICAgIHJldHVybiB0YWcodGhpcylcbiAgfVxuXG4gIHNldCBvdXRlckhUTUwgKHN0cikge1xuICAgIHZhciB3ZWxsID0gbmV3IERvY3VtZW50RnJhZ21lbnQoKVxuICAgIEhUTUxQYXJzZXIoc3RyLCB3ZWxsKVxuICAgIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod2VsbCwgdGhpcylcbiAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcylcbiAgfVxuXG59XG5cbm1peGluKFBhcmVudE5vZGUsIEVsZW1lbnQpXG5taXhpbihlbGVtZW50QWNjZXNzLCBFbGVtZW50KVxubWl4aW4oTm9uRG9jdW1lbnRUeXBlQ2hpbGROb2RlLCBFbGVtZW50KVxubWl4aW4oQ2hpbGROb2RlLCBFbGVtZW50KVxuIiwiZXhwb3J0IGNsYXNzIEV2ZW50IHtcbiAgY29uc3RydWN0b3IgKHR5cGUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlXG4gICAgdGhpcy5jYW5jZWxhYmxlID0gZmFsc2VcbiAgICB0aGlzLmRlZmF1bHRQcmV2ZW50ZWQgPSBmYWxzZVxuICAgIHRoaXMudGFyZ2V0ID0gbnVsbFxuICB9XG5cbiAgcHJldmVudERlZmF1bHQgKCkge1xuICAgIGlmICh0aGlzLmNhbmNlbGFibGUpIHtcbiAgICAgIHRoaXMuZGVmYXVsdFByZXZlbnRlZCA9IHRydWVcbiAgICB9XG4gIH1cbn1cbiIsImNvbnN0ICQgPSBTeW1ib2woJ3ByaXZhdGUgcHJvcGVydGllcycpXG5cbmV4cG9ydCBjbGFzcyBFdmVudFRhcmdldCB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzWyRdID0ge31cbiAgICB0aGlzWyRdLmxpc3RlbmVycyA9IHt9XG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVyICh0eXBlLCBjYWxsYmFjaykge1xuICAgIGlmICghKHR5cGUgaW4gdGhpc1skXS5saXN0ZW5lcnMpKSB7XG4gICAgICB0aGlzWyRdLmxpc3RlbmVyc1t0eXBlXSA9IFtdXG4gICAgfVxuICAgIHRoaXNbJF0ubGlzdGVuZXJzW3R5cGVdLnB1c2goY2FsbGJhY2spXG4gIH1cblxuICBkaXNwYXRjaEV2ZW50IChldmVudCkge1xuICAgIGlmICghKGV2ZW50LnR5cGUgaW4gdGhpc1skXS5saXN0ZW5lcnMpKSB7IHJldHVybiB0cnVlIH1cblxuICAgIHZhciBzdGFjayA9IHRoaXNbJF0ubGlzdGVuZXJzW2V2ZW50LnR5cGVdXG4gICAgZXZlbnQudGFyZ2V0ID0gdGhpc1xuXG4gICAgc3RhY2suZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgIGVsKGV2ZW50KVxuICAgIH0pXG5cbiAgICByZXR1cm4gIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWRcbiAgfVxuXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXIgKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCEodHlwZSBpbiB0aGlzWyRdLmxpc3RlbmVycykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHZhciBzdGFjayA9IHRoaXNbJF0ubGlzdGVuZXJzW3R5cGVdXG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gc3RhY2subGVuZ3RoOyBpIDwgaWw7IGkrKykge1xuICAgICAgaWYgKHN0YWNrW2ldID09PSBjYWxsYmFjaykge1xuICAgICAgICBzdGFjay5zcGxpY2UoaSwgMSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cbiIsImltcG9ydCB7IGV4dGVuZCwgZXh0ZW5kU3RhdGljIH0gZnJvbSAnLi4vdXRpbHMvb2JqZWN0Q3JlYXRpb25VdGlscy5qcydcblxuaW1wb3J0IHsgRXZlbnRUYXJnZXQgfSBmcm9tICcuL0V2ZW50VGFyZ2V0LmpzJ1xuaW1wb3J0IHsgY2xvbmVOb2RlIH0gZnJvbSAnLi4vdXRpbHMvdGFnVXRpbHMuanMnXG5pbXBvcnQgeyBodG1sIH0gZnJvbSAnLi4vdXRpbHMvbmFtZXNwYWNlcy5qcydcblxuY29uc3Qgbm9kZVR5cGVzID0ge1xuICBFTEVNRU5UX05PREU6IDEsXG4gIEFUVFJJQlVURV9OT0RFOiAyLFxuICBURVhUX05PREU6IDMsXG4gIENEQVRBX1NFQ1RJT05fTk9ERTogNCxcbiAgRU5USVRZX1JFRkVSRU5DRV9OT0RFOiA1LFxuICBFTlRJVFlfTk9ERTogNixcbiAgUFJPQ0VTU0lOR19JTlNUUlVDVElPTl9OT0RFOiA3LFxuICBDT01NRU5UX05PREU6IDgsXG4gIERPQ1VNRU5UX05PREU6IDksXG4gIERPQ1VNRU5UX1RZUEVfTk9ERTogMTAsXG4gIERPQ1VNRU5UX0ZSQUdNRU5UX05PREU6IDExLFxuICBOT1RBVElPTl9OT0RFOiAxMlxufVxuXG5leHBvcnQgY2xhc3MgTm9kZSBleHRlbmRzIEV2ZW50VGFyZ2V0IHtcbiAgY29uc3RydWN0b3IgKG5hbWUgPSAnJywgcHJvcHMgPSB7fSwgbnMgPSBudWxsKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgLy8gSWYgcHJvcHMubG9jYWwgaXMgdHJ1ZSwgdGhlIGVsZW1lbnQgd2FzIE5vZGUgd2FzIGNyZWF0ZWQgd2l0aCB0aGUgbm9uLW5hbWVzcGFjZSBmdW5jdGlvblxuICAgIC8vIHRoYXQgbWVhbnMgd2hhdGV2ZXIgd2FzIHBhc3NlZCBhcyBuYW1lIGlzIHRoZSBsb2NhbCBuYW1lIGV2ZW4gdGhvdWdoIGl0IG1pZ2h0IGxvb2sgbGlrZSBhIHByZWZpeFxuICAgIGlmIChuYW1lLmluY2x1ZGVzKCc6JykgJiYgIXByb3BzLmxvY2FsKSB7XG4gICAgICA7WyB0aGlzLnByZWZpeCwgdGhpcy5sb2NhbE5hbWUgXSA9IG5hbWUuc3BsaXQoJzonKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvY2FsTmFtZSA9IG5hbWVcbiAgICAgIHRoaXMucHJlZml4ID0gbnVsbFxuICAgIH1cblxuICAgIC8vIEZvbGxvdyBzcGVjIGFuZCB1cHBlcmNhc2Ugbm9kZU5hbWUgZm9yIGh0bWxcbiAgICB0aGlzLm5vZGVOYW1lID0gbnMgPT09IGh0bWwgPyBuYW1lLnRvVXBwZXJDYXNlKCkgOiBuYW1lXG5cbiAgICB0aGlzLm5hbWVzcGFjZVVSSSA9IG5zXG4gICAgdGhpcy5ub2RlVHlwZSA9IE5vZGUuRUxFTUVOVF9OT0RFXG4gICAgdGhpcy5ub2RlVmFsdWUgPSBwcm9wcy5ub2RlVmFsdWUgIT0gbnVsbCA/IHByb3BzLm5vZGVWYWx1ZSA6IG51bGxcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBbXVxuXG4gICAgdGhpcy5hdHRycyA9IHByb3BzLmF0dHJzIHx8IG5ldyBTZXQoKVxuXG4gICAgdGhpcy5vd25lckRvY3VtZW50ID0gcHJvcHMub3duZXJEb2N1bWVudCB8fCBudWxsXG4gICAgdGhpcy5wYXJlbnROb2RlID0gbnVsbFxuXG4gICAgLy8gdGhpcy5uYW1lc3BhY2VzID0ge31cbiAgICAvLyBpZiAodGhpcy5wcmVmaXgpIHtcbiAgICAvLyAgIHRoaXMubmFtZXNwYWNlc1t0aGlzLnByZWZpeF0gPSBuc1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICB0aGlzLm5hbWVzcGFjZXMuZGVmYXVsdCA9IG5zXG4gICAgLy8gfVxuXG4gICAgaWYgKHByb3BzLmNoaWxkTm9kZXMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBpbCA9IHByb3BzLmNoaWxkTm9kZXMubGVuZ3RoOyBpIDwgaWw7ICsraSkge1xuICAgICAgICB0aGlzLmFwcGVuZENoaWxkKHByb3BzLmNoaWxkTm9kZXNbaV0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXBwZW5kQ2hpbGQgKG5vZGUpIHtcbiAgICByZXR1cm4gdGhpcy5pbnNlcnRCZWZvcmUobm9kZSlcbiAgfVxuXG4gIGNsb25lTm9kZSAoZGVlcCA9IGZhbHNlKSB7XG4gICAgY29uc3QgY2xvbmUgPSBjbG9uZU5vZGUodGhpcylcblxuICAgIGlmIChkZWVwKSB7XG4gICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGVsLmNsb25lTm9kZShkZWVwKVxuICAgICAgICBjbG9uZS5hcHBlbmRDaGlsZChub2RlKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gY2xvbmVcbiAgfVxuXG4gIGNvbnRhaW5zIChub2RlKSB7XG4gICAgaWYgKG5vZGUgPT09IHRoaXMpIHJldHVybiBmYWxzZVxuXG4gICAgd2hpbGUgKG5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgaWYgKG5vZGUgPT09IHRoaXMpIHJldHVybiB0cnVlXG4gICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgZ2V0Um9vdE5vZGUgKCkge1xuICAgIGlmICghdGhpcy5wYXJlbnROb2RlIHx8IHRoaXMubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfTk9ERSkgcmV0dXJuIHRoaXNcbiAgICByZXR1cm4gdGhpcy5wYXJlbnROb2RlLmdldFJvb3ROb2RlKClcbiAgfVxuXG4gIGhhc0NoaWxkTm9kZXMgKCkge1xuICAgIHJldHVybiAhIXRoaXMuY2hpbGROb2Rlcy5sZW5ndGhcbiAgfVxuXG4gIGluc2VydEJlZm9yZSAobm9kZSwgYmVmb3JlKSB7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5jaGlsZE5vZGVzLmluZGV4T2YoYmVmb3JlKVxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIGluZGV4ID0gdGhpcy5jaGlsZE5vZGVzLmxlbmd0aFxuICAgIH1cblxuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUpIHtcbiAgICAgIGxldCBjaGlsZFxuICAgICAgbGV0IG9sZENoaWxkID0gYmVmb3JlXG4gICAgICB3aGlsZSAoKGNoaWxkID0gbm9kZS5jaGlsZE5vZGVzLnBvcCgpKSkge1xuICAgICAgICB0aGlzLmluc2VydEJlZm9yZShjaGlsZCwgb2xkQ2hpbGQpXG4gICAgICAgIG9sZENoaWxkID0gY2hpbGRcbiAgICAgIH1cbiAgICAgIHJldHVybiBub2RlXG4gICAgfVxuXG4gICAgaWYgKG5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpXG4gICAgfVxuXG4gICAgbm9kZS5wYXJlbnROb2RlID0gdGhpc1xuICAgIC8vIE9iamVjdC5zZXRQcm90b3R5cGVPZihub2RlLm5hbWVzcGFjZXMucHJvdG90eXBlLCB0aGlzLm5hbWVzcGFjZXMucHJvdG90eXBlKVxuXG4gICAgdGhpcy5jaGlsZE5vZGVzLnNwbGljZShpbmRleCwgMCwgbm9kZSlcbiAgICByZXR1cm4gbm9kZVxuICB9XG5cbiAgaXNEZWZhdWx0TmFtZXNwYWNlIChuYW1lc3BhY2VVUkkpIHtcbiAgICBzd2l0Y2ggKHRoaXMubm9kZVR5cGUpIHtcbiAgICBjYXNlIE5vZGUuRUxFTUVOVF9OT0RFOlxuICAgICAgaWYgKCF0aGlzLnByZWZpeCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lc3BhY2VVUkkgPT09IG5hbWVzcGFjZVVSSVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5oYXNBdHRyaWJ1dGUoJ3htbG5zJykpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCd4bWxucycpXG4gICAgICB9XG5cbiAgICAgIC8vIEVudGl0eVJlZmVyZW5jZXMgbWF5IGhhdmUgdG8gYmUgc2tpcHBlZCB0byBnZXQgdG8gaXRcbiAgICAgIGlmICh0aGlzLnBhcmVudE5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Tm9kZS5pc0RlZmF1bHROYW1lc3BhY2UobmFtZXNwYWNlVVJJKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICBjYXNlIE5vZGUuRE9DVU1FTlRfTk9ERTpcbiAgICAgIHJldHVybiB0aGlzLmRvY3VtZW50RWxlbWVudC5pc0RlZmF1bHROYW1lc3BhY2UobmFtZXNwYWNlVVJJKVxuICAgIGNhc2UgTm9kZS5FTlRJVFlfTk9ERTpcbiAgICBjYXNlIE5vZGUuTk9UQVRJT05fTk9ERTpcbiAgICBjYXNlIE5vZGUuRE9DVU1FTlRfVFlQRV9OT0RFOlxuICAgIGNhc2UgTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFOlxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgY2FzZSBOb2RlLkFUVFJJQlVURV9OT0RFOlxuICAgICAgaWYgKHRoaXMub3duZXJFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm93bmVyRWxlbWVudC5pc0RlZmF1bHROYW1lc3BhY2UobmFtZXNwYWNlVVJJKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgZGVmYXVsdDpcbiAgICAgIC8vIEVudGl0eVJlZmVyZW5jZXMgbWF5IGhhdmUgdG8gYmUgc2tpcHBlZCB0byBnZXQgdG8gaXRcbiAgICAgIGlmICh0aGlzLnBhcmVudE5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Tm9kZS5pc0RlZmF1bHROYW1lc3BhY2UobmFtZXNwYWNlVVJJKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgaXNFcXVhbE5vZGUgKG5vZGUpIHtcbiAgICB0aGlzLm5vcm1hbGl6ZSgpXG4gICAgbm9kZS5ub3JtYWxpemUoKVxuXG4gICAgbGV0IGJvb2wgPSB0aGlzLm5vZGVOYW1lID09PSBub2RlLm5vZGVOYW1lXG4gICAgYm9vbCA9IGJvb2wgJiYgdGhpcy5sb2NhbE5hbWUgPT09IG5vZGUubG9jYWxOYW1lXG4gICAgYm9vbCA9IGJvb2wgJiYgdGhpcy5uYW1lc3BhY2VVUkkgPT09IG5vZGUubmFtZXNwYWNlVVJJXG4gICAgYm9vbCA9IGJvb2wgJiYgdGhpcy5wcmVmaXggPT09IG5vZGUucHJlZml4XG4gICAgYm9vbCA9IGJvb2wgJiYgdGhpcy5ub2RlVmFsdWUgPT09IG5vZGUubm9kZVZhbHVlXG5cbiAgICBib29sID0gYm9vbCAmJiB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID09PSBub2RlLmNoaWxkTm9kZXMubGVuZ3RoXG5cbiAgICAvLyBkb250IGNoZWNrIGNoaWxkcmVuIHJlY3Vyc2l2ZWx5IHdoZW4gdGhlIGNvdW50IGRvZXNudCBldmVudCBhZGQgdXBcbiAgICBpZiAoIWJvb2wpIHJldHVybiBmYWxzZVxuXG4gICAgYm9vbCA9IGJvb2wgJiYgIXRoaXMuY2hpbGROb2Rlcy5yZWR1Y2UoKGxhc3QsIGN1cnIsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gbGFzdCAmJiBjdXJyLmlzRXF1YWxOb2RlKG5vZGUuY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgfSwgdHJ1ZSlcblxuICAgIC8vIEZJWE1FOiBVc2UgYXR0ciBub2Rlc1xuICAgIC8qIGJvb2wgPSBib29sICYmICFbIC4uLnRoaXMuYXR0cnMuZW50cmllcygpIF0ucmVkdWNlKChsYXN0LCBjdXJyLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgWyBrZXksIHZhbCBdID0gbm9kZS5hdHRycy5lbnRyaWVzKClcbiAgICAgIHJldHVybiBsYXN0ICYmIGN1cnJbMF0gPT09IGtleSAmJiBjdXJyWzFdID09PSB2YWxcbiAgICB9LCB0cnVlKSAqL1xuXG4gICAgLypcbiAgICBUT0RPOlxuICAgIEZvciB0d28gRG9jdW1lbnRUeXBlIG5vZGVzIHRvIGJlIGVxdWFsLCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgbXVzdCBhbHNvIGJlIHNhdGlzZmllZDpcblxuICAgIFRoZSBmb2xsb3dpbmcgc3RyaW5nIGF0dHJpYnV0ZXMgYXJlIGVxdWFsOiBwdWJsaWNJZCwgc3lzdGVtSWQsIGludGVybmFsU3Vic2V0LlxuICAgIFRoZSBlbnRpdGllcyBOYW1lZE5vZGVNYXBzIGFyZSBlcXVhbC5cbiAgICBUaGUgbm90YXRpb25zIE5hbWVkTm9kZU1hcHMgYXJlIGVxdWFsLlxuICAgICovXG5cbiAgICBpZiAodGhpcy5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9UWVBFX05PREUgJiYgbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9UWVBFX05PREUpIHtcbiAgICAgIGJvb2wgPSBib29sICYmIHRoaXMucHVibGljSWQgPT09IG5vZGUucHVibGljSWRcbiAgICAgIGJvb2wgPSBib29sICYmIHRoaXMuc3lzdGVtSWQgPT09IG5vZGUuc3lzdGVtSWRcbiAgICAgIGJvb2wgPSBib29sICYmIHRoaXMuaW50ZXJuYWxTdWJzZXQgPT09IG5vZGUuaW50ZXJuYWxTdWJzZXRcbiAgICB9XG5cbiAgICByZXR1cm4gYm9vbFxuICB9XG5cbiAgaXNTYW1lTm9kZSAobm9kZSkge1xuICAgIHJldHVybiB0aGlzID09PSBub2RlXG4gIH1cblxuICBsb29rdXBOYW1lc3BhY2VQcmVmaXggKG5hbWVzcGFjZVVSSSwgb3JpZ2luYWxFbGVtZW50KSB7XG4gICAgaWYgKHRoaXMubmFtZXNwYWNlVVJJICYmIHRoaXMubmFtZXNwYWNlVVJJID09PSBuYW1lc3BhY2VVUkkgJiYgdGhpcy5wcmVmaXhcbiAgICAgICAgICYmIG9yaWdpbmFsRWxlbWVudC5sb29rdXBOYW1lc3BhY2VVUkkodGhpcy5wcmVmaXgpID09PSBuYW1lc3BhY2VVUkkpIHtcbiAgICAgIHJldHVybiB0aGlzLnByZWZpeFxuICAgIH1cblxuICAgIGZvciAoY29uc3QgWyBrZXksIHZhbCBdIG9mIHRoaXMuYXR0cnMuZW50cmllcygpKSB7XG4gICAgICBpZiAoIWtleS5pbmNsdWRlcygnOicpKSBjb250aW51ZVxuXG4gICAgICBjb25zdCBbIGF0dHJQcmVmaXgsIG5hbWUgXSA9IGtleS5zcGxpdCgnOicpXG4gICAgICBpZiAoYXR0clByZWZpeCA9PT0gJ3htbG5zJyAmJiB2YWwgPT09IG5hbWVzcGFjZVVSSSAmJiBvcmlnaW5hbEVsZW1lbnQubG9va3VwTmFtZXNwYWNlVVJJKG5hbWUpID09PSBuYW1lc3BhY2VVUkkpIHtcbiAgICAgICAgcmV0dXJuIG5hbWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBFbnRpdHlSZWZlcmVuY2VzIG1heSBoYXZlIHRvIGJlIHNraXBwZWQgdG8gZ2V0IHRvIGl0XG4gICAgaWYgKHRoaXMucGFyZW50Tm9kZSkge1xuICAgICAgcmV0dXJuIHRoaXMucGFyZW50Tm9kZS5sb29rdXBOYW1lc3BhY2VQcmVmaXgobmFtZXNwYWNlVVJJLCBvcmlnaW5hbEVsZW1lbnQpXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBsb29rdXBOYW1lc3BhY2VVUkkgKHByZWZpeCkge1xuICAgIHN3aXRjaCAodGhpcy5ub2RlVHlwZSkge1xuICAgIGNhc2UgTm9kZS5FTEVNRU5UX05PREU6XG4gICAgICBpZiAodGhpcy5uYW1lc3BhY2VVUkkgIT0gbnVsbCAmJiB0aGlzLnByZWZpeCA9PT0gcHJlZml4KSB7XG4gICAgICAgIC8vIE5vdGU6IHByZWZpeCBjb3VsZCBiZSBcIm51bGxcIiBpbiB0aGlzIGNhc2Ugd2UgYXJlIGxvb2tpbmcgZm9yIGRlZmF1bHQgbmFtZXNwYWNlXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWVzcGFjZVVSSVxuICAgICAgfVxuXG4gICAgICBmb3IgKGNvbnN0IFsga2V5LCB2YWwgXSBvZiB0aGlzLmF0dHJzLmVudHJpZXMoKSkge1xuICAgICAgICBpZiAoIWtleS5pbmNsdWRlcygnOicpKSBjb250aW51ZVxuXG4gICAgICAgIGNvbnN0IFsgYXR0clByZWZpeCwgbmFtZSBdID0ga2V5LnNwbGl0KCc6JylcbiAgICAgICAgaWYgKGF0dHJQcmVmaXggPT09ICd4bWxucycgJiYgbmFtZSA9PT0gcHJlZml4KSB7XG4gICAgICAgICAgaWYgKHZhbCAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgLy8gRklYTUU6IExvb2sgdXAgaWYgcHJlZml4IG9yIGF0dHJQcmVmaXhcbiAgICAgICAgfSBlbHNlIGlmIChuYW1lID09PSAneG1sbnMnICYmIHByZWZpeCA9PSBudWxsKSB7XG4gICAgICAgICAgaWYgKHZhbCAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gRW50aXR5UmVmZXJlbmNlcyBtYXkgaGF2ZSB0byBiZSBza2lwcGVkIHRvIGdldCB0byBpdFxuICAgICAgaWYgKHRoaXMucGFyZW50Tm9kZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnROb2RlLmxvb2t1cE5hbWVzcGFjZVVSSShwcmVmaXgpXG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbFxuICAgIGNhc2UgTm9kZS5ET0NVTUVOVF9OT0RFOlxuICAgICAgcmV0dXJuIHRoaXMuZG9jdW1lbnRFbGVtZW50Lmxvb2t1cE5hbWVzcGFjZVVSSShwcmVmaXgpXG4gICAgY2FzZSBOb2RlLkVOVElUWV9OT0RFOlxuICAgIGNhc2UgTm9kZS5OT1RBVElPTl9OT0RFOlxuICAgIGNhc2UgTm9kZS5ET0NVTUVOVF9UWVBFX05PREU6XG4gICAgY2FzZSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREU6XG4gICAgICByZXR1cm4gbnVsbFxuICAgIGNhc2UgTm9kZS5BVFRSSUJVVEVfTk9ERTpcbiAgICAgIGlmICh0aGlzLm93bmVyRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vd25lckVsZW1lbnQubG9va3VwTmFtZXNwYWNlVVJJKHByZWZpeClcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsXG4gICAgZGVmYXVsdDpcbiAgICAgIC8vIEVudGl0eVJlZmVyZW5jZXMgbWF5IGhhdmUgdG8gYmUgc2tpcHBlZCB0byBnZXQgdG8gaXRcbiAgICAgIGlmICh0aGlzLnBhcmVudE5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Tm9kZS5sb29rdXBOYW1lc3BhY2VVUkkocHJlZml4KVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH1cblxuICBsb29rdXBQcmVmaXggKG5hbWVzcGFjZVVSSSkge1xuICAgIGlmICghbmFtZXNwYWNlVVJJKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLm5vZGVUeXBlXG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIE5vZGUuRUxFTUVOVF9OT0RFOlxuICAgICAgcmV0dXJuIHRoaXMubG9va3VwTmFtZXNwYWNlUHJlZml4KG5hbWVzcGFjZVVSSSwgdGhpcylcbiAgICBjYXNlIE5vZGUuRE9DVU1FTlRfTk9ERTpcbiAgICAgIHJldHVybiB0aGlzLmRvY3VtZW50RWxlbWVudC5sb29rdXBOYW1lc3BhY2VQcmVmaXgobmFtZXNwYWNlVVJJKVxuICAgIGNhc2UgTm9kZS5FTlRJVFlfTk9ERSA6XG4gICAgY2FzZSBOb2RlLk5PVEFUSU9OX05PREU6XG4gICAgY2FzZSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREU6XG4gICAgY2FzZSBOb2RlLkRPQ1VNRU5UX1RZUEVfTk9ERTpcbiAgICAgIHJldHVybiBudWxsIC8vIHR5cGUgaXMgdW5rbm93blxuICAgIGNhc2UgTm9kZS5BVFRSSUJVVEVfTk9ERTpcbiAgICAgIGlmICh0aGlzLm93bmVyRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vd25lckVsZW1lbnQubG9va3VwTmFtZXNwYWNlUHJlZml4KG5hbWVzcGFjZVVSSSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsXG4gICAgZGVmYXVsdDpcbiAgICAgIC8vIEVudGl0eVJlZmVyZW5jZXMgbWF5IGhhdmUgdG8gYmUgc2tpcHBlZCB0byBnZXQgdG8gaXRcbiAgICAgIGlmICh0aGlzLnBhcmVudE5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Tm9kZS5sb29rdXBOYW1lc3BhY2VQcmVmaXgobmFtZXNwYWNlVVJJKVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH1cblxuICBub3JtYWxpemUgKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBbXVxuICAgIGZvciAoY29uc3Qgbm9kZSBvZiB0aGlzLmNoaWxkTm9kZXMpIHtcbiAgICAgIGNvbnN0IGxhc3QgPSBjaGlsZE5vZGVzLnNoaWZ0KClcbiAgICAgIGlmICghbGFzdCkge1xuICAgICAgICBpZiAobm9kZS5kYXRhKSB7XG4gICAgICAgICAgY2hpbGROb2Rlcy51bnNoaWZ0KG5vZGUpXG4gICAgICAgIH1cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgIGlmICghbm9kZS5kYXRhKSB7XG4gICAgICAgICAgY2hpbGROb2Rlcy51bnNoaWZ0KGxhc3QpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsYXN0Lm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICAgIGNvbnN0IG1lcmdlZCA9IHRoaXMub3duZXJEb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShsYXN0LmRhdGEgKyBub2RlLmRhdGEpXG4gICAgICAgICAgY2hpbGROb2Rlcy5wdXNoKG1lcmdlZClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGROb2Rlcy5wdXNoKGxhc3QsIG5vZGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgbm9kZS5wYXJlbnROb2RlID0gdGhpc1xuICAgIH0pXG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2Rlc1xuICAgIC8vIHRoaXMuY2hpbGROb2RlcyA9IHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKCh0ZXh0Tm9kZXMsIG5vZGUpID0+IHtcbiAgICAvLyAgIC8vIEZJWE1FOiBJZiBmaXJzdCBub2RlIGlzIGFuIGVtcHR5IHRleHRub2RlLCB3aGF0IGRvIHdlIGRvPyAtPiBzcGVjXG4gICAgLy8gICBpZiAoIXRleHROb2RlcykgcmV0dXJuIFsgbm9kZSBdXG4gICAgLy8gICB2YXIgbGFzdCA9IHRleHROb2Rlcy5wb3AoKVxuXG4gICAgLy8gICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAvLyAgICAgaWYgKCFub2RlLmRhdGEpIHJldHVybiB0ZXh0Tm9kZXNcblxuICAgIC8vICAgICBpZiAobGFzdC5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAvLyAgICAgICBjb25zdCBtZXJnZWQgPSB0aGlzLm93bmVyRG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobGFzdC5kYXRhICsgJyAnICsgbm9kZS5kYXRhKVxuICAgIC8vICAgICAgIHRleHROb2Rlcy5wdXNoKG1lcmdlZClcbiAgICAvLyAgICAgICByZXR1cm4gdGV4dE5vZGVzLmNvbmNhdChtZXJnZWQpXG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH0gZWxzZSB7XG4gICAgLy8gICAgIHRleHROb2Rlcy5wdXNoKGxhc3QsIG5vZGUpXG4gICAgLy8gICB9XG5cbiAgICAvLyAgIHJldHVybiB0ZXh0Tm9kZXNcbiAgICAvLyB9LCBudWxsKVxuICB9XG5cbiAgcmVtb3ZlQ2hpbGQgKG5vZGUpIHtcblxuICAgIG5vZGUucGFyZW50Tm9kZSA9IG51bGxcbiAgICAvLyBPYmplY3Quc2V0UHJvdG90eXBlT2Yobm9kZSwgbnVsbClcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKG5vZGUpXG4gICAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuIG5vZGVcbiAgICB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAxKVxuICAgIHJldHVybiBub2RlXG4gIH1cblxuICByZXBsYWNlQ2hpbGQgKG5ld0NoaWxkLCBvbGRDaGlsZCkge1xuICAgIGNvbnN0IGJlZm9yZSA9IG9sZENoaWxkLm5leHRTaWJsaW5nXG4gICAgdGhpcy5yZW1vdmVDaGlsZChvbGRDaGlsZClcbiAgICB0aGlzLmluc2VydEJlZm9yZShuZXdDaGlsZCwgYmVmb3JlKVxuICAgIHJldHVybiBvbGRDaGlsZFxuICB9XG5cbiAgZ2V0IG5leHRTaWJsaW5nICgpIHtcbiAgICBjb25zdCBjaGlsZCA9IHRoaXMucGFyZW50Tm9kZSAmJiB0aGlzLnBhcmVudE5vZGUuY2hpbGROb2Rlc1t0aGlzLnBhcmVudE5vZGUuY2hpbGROb2Rlcy5pbmRleE9mKHRoaXMpICsgMV1cbiAgICByZXR1cm4gY2hpbGQgfHwgbnVsbFxuICB9XG5cbiAgZ2V0IHByZXZpb3VzU2libGluZyAoKSB7XG4gICAgY29uc3QgY2hpbGQgPSB0aGlzLnBhcmVudE5vZGUgJiYgdGhpcy5wYXJlbnROb2RlLmNoaWxkTm9kZXNbdGhpcy5wYXJlbnROb2RlLmNoaWxkTm9kZXMuaW5kZXhPZih0aGlzKSAtIDFdXG4gICAgcmV0dXJuIGNoaWxkIHx8IG51bGxcbiAgfVxuXG4gIGdldCB0ZXh0Q29udGVudCAoKSB7XG4gICAgaWYgKHRoaXMubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSByZXR1cm4gdGhpcy5kYXRhXG4gICAgaWYgKHRoaXMubm9kZVR5cGUgPT09IE5vZGUuQ0RBVEFfU0VDVElPTl9OT0RFKSByZXR1cm4gdGhpcy5kYXRhXG4gICAgaWYgKHRoaXMubm9kZVR5cGUgPT09IE5vZGUuQ09NTUVOVF9OT0RFKSByZXR1cm4gdGhpcy5kYXRhXG5cbiAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzLnJlZHVjZShmdW5jdGlvbiAobGFzdCwgY3VycmVudCkge1xuICAgICAgcmV0dXJuIGxhc3QgKyBjdXJyZW50LnRleHRDb250ZW50XG4gICAgfSwgJycpXG4gIH1cblxuICBzZXQgdGV4dENvbnRlbnQgKHRleHQpIHtcbiAgICBpZiAodGhpcy5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUgfHwgdGhpcy5ub2RlVHlwZSA9PT0gTm9kZS5DREFUQV9TRUNUSU9OX05PREUgfHwgdGhpcy5ub2RlVHlwZSA9PT0gTm9kZS5DT01NRU5UX05PREUpIHtcbiAgICAgIHRoaXMuZGF0YSA9IHRleHRcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBbXVxuICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5vd25lckRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpKVxuICB9XG5cbiAgZ2V0IGxhc3RDaGlsZCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2Rlc1t0aGlzLmNoaWxkTm9kZXMubGVuZ3RoIC0gMV0gfHwgbnVsbFxuICB9XG5cbiAgZ2V0IGZpcnN0Q2hpbGQgKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXNbMF0gfHwgbnVsbFxuICB9XG59XG5cbmV4dGVuZFN0YXRpYyhOb2RlLCBub2RlVHlwZXMpXG5leHRlbmQoTm9kZSwgbm9kZVR5cGVzKVxuIiwiaW1wb3J0IHsgZXh0ZW5kU3RhdGljIH0gZnJvbSAnLi4vdXRpbHMvb2JqZWN0Q3JlYXRpb25VdGlscy5qcydcblxuZXhwb3J0IGNsYXNzIE5vZGVGaWx0ZXIge1xuICBhY2NlcHROb2RlICgpIHtcbiAgICByZXR1cm4gTm9kZUZpbHRlci5GSUxURVJfQUNDRVBUXG4gIH1cbn1cblxuZXh0ZW5kU3RhdGljKE5vZGVGaWx0ZXIsIHtcbiAgRklMVEVSX0FDQ0VQVDogMSxcbiAgRklMVEVSX1JFSkVDVDogMixcbiAgRklMVEVSX0lHTk9SRTogNCxcbiAgU0hPV19BTEw6IC0xLFxuICBTSE9XX0VMRU1FTlQ6IDEsXG4gIFNIT1dfVEVYVDogNCxcbiAgU0hPV19FTlRJVFlfUkVGRVJFTkNFOiAxNixcbiAgU0hPV19FTlRJVFk6IDMyLFxuICBTSE9XX1BST0NFU1NJTkdfSU5TVFJVQ1RJT046IDY0LFxuICBTSE9XX0NPTU1FTlQ6IDEyOCxcbiAgU0hPV19ET0NVTUVOVDogMjU2LFxuICBTSE9XX0RPQ1VNRU5UX1RZUEU6IDUxMixcbiAgU0hPV19ET0NVTUVOVF9GUkFHTUVOVDogMTAyNCxcbiAgU0hPV19OT1RBVElPTjogMjA0OFxufSlcbiIsImltcG9ydCB7IENoYXJhY3RlckRhdGEgfSBmcm9tICcuL0NoYXJhY3RlckRhdGEuanMnXG5pbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi9Ob2RlLmpzJ1xuXG5leHBvcnQgY2xhc3MgVGV4dCBleHRlbmRzIENoYXJhY3RlckRhdGEge1xuICBjb25zdHJ1Y3RvciAobmFtZSwgcHJvcHMpIHtcbiAgICBzdXBlcihuYW1lLCBwcm9wcylcbiAgICB0aGlzLm5vZGVUeXBlID0gTm9kZS5URVhUX05PREVcbiAgfVxufVxuIiwiaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi4vdXRpbHMvb2JqZWN0Q3JlYXRpb25VdGlscy5qcydcbmltcG9ydCB7IEV2ZW50VGFyZ2V0IH0gZnJvbSAnLi9FdmVudFRhcmdldC5qcydcbmltcG9ydCB7IE5vZGUgfSBmcm9tICcuL05vZGUuanMnXG5pbXBvcnQgeyBEb2N1bWVudCB9IGZyb20gJy4vRG9jdW1lbnQuanMnXG5pbXBvcnQgeyBEb2N1bWVudEZyYWdtZW50IH0gZnJvbSAnLi9Eb2N1bWVudEZyYWdtZW50LmpzJ1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4vVGV4dC5qcydcbmltcG9ydCB7IEN1c3RvbUV2ZW50IH0gZnJvbSAnLi9DdXN0b21FdmVudC5qcydcbmltcG9ydCB7IEV2ZW50IH0gZnJvbSAnLi9FdmVudC5qcydcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tICcuL0VsZW1lbnQuanMnXG5pbXBvcnQgeyBBdHRyIH0gZnJvbSAnLi9BdHRyLmpzJ1xuaW1wb3J0IHsgSFRNTEltYWdlRWxlbWVudCB9IGZyb20gJy4vaHRtbC9IVE1MSW1hZ2VFbGVtZW50LmpzJ1xuaW1wb3J0IHsgSFRNTExpbmtFbGVtZW50IH0gZnJvbSAnLi9odG1sL0hUTUxMaW5rRWxlbWVudC5qcydcbmltcG9ydCB7IEhUTUxTY3JpcHRFbGVtZW50IH0gZnJvbSAnLi9odG1sL0hUTUxTY3JpcHRFbGVtZW50LmpzJ1xuaW1wb3J0IHsgSFRNTEVsZW1lbnQgfSBmcm9tICcuL2h0bWwvSFRNTEVsZW1lbnQuanMnXG5pbXBvcnQgeyBTVkdQb2ludCB9IGZyb20gJy4vc3ZnL1NWR1BvaW50LmpzJ1xuaW1wb3J0IHsgU1ZHTWF0cml4IH0gZnJvbSAnLi9zdmcvU1ZHTWF0cml4LmpzJ1xuaW1wb3J0IHsgU1ZHRWxlbWVudCB9IGZyb20gJy4vc3ZnL1NWR0VsZW1lbnQuanMnXG5pbXBvcnQgeyBTVkdTVkdFbGVtZW50IH0gZnJvbSAnLi9zdmcvU1ZHU1ZHRWxlbWVudC5qcydcbmltcG9ydCB7IFNWR1BhdGhFbGVtZW50IH0gZnJvbSAnLi9zdmcvU1ZHUGF0aEVsZW1lbnQuanMnXG5pbXBvcnQgeyBTVkdHcmFwaGljc0VsZW1lbnQgfSBmcm9tICcuL3N2Zy9TVkdHcmFwaGljc0VsZW1lbnQuanMnXG5pbXBvcnQgeyBTVkdUZXh0Q29udGVudEVsZW1lbnQgfSBmcm9tICcuL3N2Zy9TVkdUZXh0Q29udGVudEVsZW1lbnQuanMnXG5pbXBvcnQgeyBjYW1lbENhc2UgfSBmcm9tICcuLi91dGlscy9zdHJVdGlscy5qcydcbmltcG9ydCAqIGFzIGRlZmF1bHRzIGZyb20gJy4uL3V0aWxzL2RlZmF1bHRzLmpzJ1xuXG5leHBvcnQgY2xhc3MgV2luZG93IGV4dGVuZHMgRXZlbnRUYXJnZXQge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuZG9jdW1lbnQgPSBuZXcgRG9jdW1lbnQoKVxuICAgIHRoaXMuZG9jdW1lbnQuZGVmYXVsdFZpZXcgPSB0aGlzXG4gICAgdGhpcy5zZWxmID0gdGhpc1xuICAgIGNvbnN0IGRvYyA9IHRoaXMuZG9jdW1lbnRcbiAgICB0aGlzLkltYWdlID0gY2xhc3Mge1xuICAgICAgY29uc3RydWN0b3IgKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgY29uc3QgaW1nID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICAgIGlmICh3aWR0aCAhPSBudWxsKSBpbWcuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHdpZHRoKVxuICAgICAgICBpZiAoaGVpZ2h0ICE9IG51bGwpIGltZy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGhlaWdodClcbiAgICAgICAgcmV0dXJuIGltZ1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldENvbXB1dGVkU3R5bGUgKG5vZGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gRklYTUU6IEN1cnJlbnRseSB0aGlzIGZ1bmN0aW9uIHRyZWF0cyBldmVyeSBnaXZlbiBhdHRyXG4gICAgICAvLyBhcyBpbmhlcml0YWJsZSBmcm9tIGl0cyBwYXJlbnRzIHdoaWNoIGlzIG9mYyBub3QgYWx3YXlzIHRydWVcbiAgICAgIC8vIGJ1dCBnb29kIGVub3VnaCBmb3Igc3ZnLmpzXG4gICAgICBnZXRQcm9wZXJ0eVZhbHVlIChhdHRyKSB7XG4gICAgICAgIGxldCB2YWx1ZVxuICAgICAgICBsZXQgY3VyID0gbm9kZVxuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICB2YWx1ZSA9IGN1ci5zdHlsZVthdHRyXSB8fCBjdXIuZ2V0QXR0cmlidXRlKGF0dHIpXG4gICAgICAgIH0gd2hpbGUgKFxuICAgICAgICAgIHZhbHVlID09IG51bGxcbiAgICAgICAgICAmJiAoY3VyID0gY3VyLnBhcmVudE5vZGUpXG4gICAgICAgICAgJiYgY3VyLm5vZGVUeXBlID09PSAxXG4gICAgICAgIClcblxuICAgICAgICByZXR1cm4gdmFsdWUgfHwgZGVmYXVsdHNbY2FtZWxDYXNlKGF0dHIpXSB8fCBudWxsXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmxldCBsYXN0VGltZSA9IDBcbmNvbnN0IHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGNhbGxiYWNrID0+IHtcbiAgY29uc3Qgbm93ID0gbmV3IGdsb2JhbFRoaXMuRGF0ZSgpLmdldFRpbWUoKVxuICBjb25zdCB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAobm93IC0gbGFzdFRpbWUpKVxuICByZXR1cm4gZ2xvYmFsVGhpcy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICBsYXN0VGltZSA9IG5vdyArIHRpbWVUb0NhbGxcbiAgICBjYWxsYmFjayhsYXN0VGltZSlcbiAgfSwgdGltZVRvQ2FsbClcbn1cblxuY29uc3Qgbm93T2Zmc2V0ID0gZ2xvYmFsVGhpcy5EYXRlLm5vdygpXG5jb25zdCBwZXJmb3JtYW5jZSA9IHtcbiAgbm93OiAoKSA9PiBEYXRlLm5vdygpIC0gbm93T2Zmc2V0XG59XG5cbmNvbnN0IHdpblByb3BzID0ge1xuICBXaW5kb3csXG4gIERvY3VtZW50LFxuICBEb2N1bWVudEZyYWdtZW50LFxuICBOb2RlLFxuICBFdmVudFRhcmdldCxcbiAgVGV4dCxcbiAgQXR0cixcbiAgRWxlbWVudCxcbiAgQ3VzdG9tRXZlbnQsXG4gIEV2ZW50LFxuICBIVE1MRWxlbWVudCxcbiAgSFRNTExpbmtFbGVtZW50LFxuICBIVE1MU2NyaXB0RWxlbWVudCxcbiAgSFRNTEltYWdlRWxlbWVudCxcbiAgLy8gSW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQsIC8vIGlzIHNldCBvbiBjb25zdHJ1Y3Rpb25cbiAgU1ZHTWF0cml4LFxuICBTVkdQb2ludCxcbiAgU1ZHRWxlbWVudCxcbiAgU1ZHU1ZHRWxlbWVudCxcbiAgU1ZHUGF0aEVsZW1lbnQsXG4gIFNWR0dyYXBoaWNzRWxlbWVudCxcbiAgU1ZHVGV4dENvbnRlbnRFbGVtZW50LFxuICBzZXRUaW1lb3V0OiBnbG9iYWxUaGlzLnNldFRpbWVvdXQsXG4gIGNsZWFyVGltZW91dDogZ2xvYmFsVGhpcy5jbGVhclRpbWVvdXQsXG4gIHBhZ2VYT2Zmc2V0OiAwLFxuICBwYWdlWU9mZnNldDogMCxcbiAgRGF0ZTogZ2xvYmFsVGhpcy5EYXRlLFxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUsXG4gIGNhbmNlbEFuaW1hdGlvbkZyYW1lOiBnbG9iYWxUaGlzLmNsZWFyVGltZW91dCxcbiAgcGVyZm9ybWFuY2Vcbn1cblxuZXh0ZW5kKFdpbmRvdywgd2luUHJvcHMpXG4iLCJpbXBvcnQgeyBFbGVtZW50IH0gZnJvbSAnLi4vRWxlbWVudC5qcydcblxuZXhwb3J0IGNsYXNzIEhUTUxFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7fVxuIiwiaW1wb3J0IHNpemVPZiBmcm9tICdpbWFnZS1zaXplJ1xuaW1wb3J0IHsgRXZlbnQgfSBmcm9tICcuLi9FdmVudC5qcydcbmltcG9ydCB7IEhUTUxFbGVtZW50IH0gZnJvbSAnLi9IVE1MRWxlbWVudC5qcydcbi8vIGltcG9ydCB7IGdldEZpbGVCdWZmZXJGcm9tVVJMIH0gZnJvbSAnLi4vLi4vdXRpbHMvZmlsZVVybFRvQnVmZmVyLmpzJ1xuLy8gaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcblxuZXhwb3J0IGNsYXNzIEhUTUxJbWFnZUVsZW1lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yICguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncylcbiAgICB0aGlzLm5hdHVyYWxXaWR0aCA9IDBcbiAgICB0aGlzLm5hdHVyYWxIZWlnaHQgPSAwXG4gICAgdGhpcy5jb21wbGV0ZSA9IGZhbHNlXG4gIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoSFRNTEltYWdlRWxlbWVudC5wcm90b3R5cGUsIHtcbiAgc3JjOiB7XG4gICAgZ2V0ICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnc3JjJylcbiAgICB9LFxuICAgIHNldCAodmFsKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnc3JjJywgdmFsKVxuICAgICAgLy8gY29uc3QgdXJsID0gcGF0aC5yZXNvbHZlKHRoaXMub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5sb2NhdGlvbiwgdmFsKVxuICAgICAgLy8gZ2V0RmlsZUJ1ZmZlckZyb21VUkwodXJsLCAoYnVmZmVyKSA9PiB7XG4gICAgICBzaXplT2YodmFsLCAoZXJyLCBzaXplKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdlcnJvcicpKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRoaXMubmF0dXJhbFdpZHRoID0gc2l6ZS53aWR0aFxuICAgICAgICB0aGlzLm5hdHVyYWxIZWlnaHQgPSBzaXplLmhlaWdodFxuICAgICAgICB0aGlzLmNvbXBsZXRlID0gdHJ1ZVxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdsb2FkJykpXG4gICAgICB9KVxuICAgICAgLy8gfSlcbiAgICB9XG4gIH0sXG4gIGhlaWdodDoge1xuICAgIGdldCAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2hlaWdodCcpIHx8IHRoaXMubmF0dXJhbEhlaWdodFxuICAgIH0sXG4gICAgc2V0ICh2YWwpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCB2YWwpXG4gICAgfVxuICB9LFxuICB3aWR0aDoge1xuICAgIGdldCAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3dpZHRoJykgfHwgdGhpcy5uYXR1cmFsV2lkdGhcbiAgICB9LFxuICAgIHNldCAodmFsKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCB2YWwpXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgSFRNTEVsZW1lbnQgfSBmcm9tICcuL0hUTUxFbGVtZW50LmpzJ1xuXG5leHBvcnQgY2xhc3MgSFRNTExpbmtFbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge31cblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoSFRNTExpbmtFbGVtZW50LnByb3RvdHlwZSwge1xuICBocmVmOiB7XG4gICAgZ2V0ICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgfSxcbiAgICBzZXQgKHZhbCkge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCB2YWwpXG4gICAgfVxuICB9LFxuICByZWw6IHtcbiAgICBnZXQgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdyZWwnKVxuICAgIH0sXG4gICAgc2V0ICh2YWwpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdyZWwnLCB2YWwpXG4gICAgfVxuICB9LFxuICB0eXBlOiB7XG4gICAgZ2V0ICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgndHlwZScpXG4gICAgfSxcbiAgICBzZXQgKHZhbCkge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCB2YWwpXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHNheCBmcm9tICdzYXgnXG5cbi8vIFRPRE86IEl0cyBhbiBYTUxQYXJzZXIgbm90IEhUTUxQYXJzZXIhIVxuZXhwb3J0IGNvbnN0IEhUTUxQYXJzZXIgPSBmdW5jdGlvbiAoc3RyLCBlbCkge1xuICBsZXQgY3VycmVudFRhZyA9IGVsXG4gIC8vIGNvbnN0IG5hbWVzcGFjZXMgPSB7IHhtbG5zOiBlbC5nZXRBdHRyaWJ1dGUoJ3htbG5zJykgfVxuICBsZXQgZG9jdW1lbnQgPSBlbC5vd25lckRvY3VtZW50XG4gIGxldCBjZGF0YSA9IG51bGxcblxuICAvLyBzYXggZXhwZWN0cyBhIHJvb3QgZWxlbWVudCBidXQgd2UgYWxzbyBtaXNzdXNlIGl0IHRvIHBhcnNlIGZyYWdtZW50c1xuICBpZiAoZWwubm9kZVR5cGUgIT09IGVsLkRPQ1VNRU5UX05PREUpIHtcbiAgICBzdHIgPSAnPHN2Z2RvbTp3cmFwcGVyIHhtbG5zOnN2Z2RvbT1cInN2Z2RvbTpyb2Nrc1wiPicgKyBzdHIgKyAnPC9zdmdkb206d3JhcHBlcj4nXG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQgPSBlbFxuICB9XG5cbiAgY29uc3QgcGFyc2VyID0gc2F4LnBhcnNlcih0cnVlLCB7XG4gICAgLy8gbG93ZXJjYXNlOiB0cnVlLFxuICAgIHhtbG5zOiB0cnVlLFxuICAgIHN0cmljdEVudGl0aWVzOiB0cnVlXG4gIH0pXG5cbiAgcGFyc2VyLm9uZXJyb3IgPSAoZSkgPT4ge1xuICAgIHRocm93IGVcbiAgfVxuXG4gIHBhcnNlci5vbmRvY3R5cGUgPSAoc3RyKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRUYWcgIT09IGRvY3VtZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RvY3R5cGUgY2FuIG9ubHkgYmUgYXBwZW5kZWQgdG8gZG9jdW1lbnQnKVxuICAgIH1cbiAgICBjdXJyZW50VGFnLmFwcGVuZENoaWxkKGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZURvY3VtZW50VHlwZSgpKVxuICB9XG5cbiAgcGFyc2VyLm9udGV4dCA9IChzdHIpID0+IGN1cnJlbnRUYWcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoc3RyKSlcbiAgcGFyc2VyLm9uY29tbWVudCA9IChzdHIpID0+IGN1cnJlbnRUYWcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlQ29tbWVudChzdHIpKVxuXG4gIC8vIHBhcnNlci5vbm9wZW5uYW1lc3BhY2UgPSBucyA9PiB7XG4gIC8vICAgbmFtZXNwYWNlc1tucy5wcmVmaXhdID0gbnMudXJpXG4gIC8vIH1cbiAgLy8gcGFyc2VyLm9uY2xvc2VuYW1lc3BhY2UgPSBucyA9PiB7XG4gIC8vICAgZGVsZXRlIG5hbWVzcGFjZXNbbnMucHJlZml4XVxuICAvLyB9XG5cbiAgcGFyc2VyLm9ub3BlbnRhZyA9IG5vZGUgPT4ge1xuICAgIGlmIChub2RlLm5hbWUgPT09ICdzdmdkb206d3JhcHBlcicpIHJldHVyblxuXG4gICAgY29uc3QgYXR0cnMgPSBub2RlLmF0dHJpYnV0ZXNcblxuICAgIGNvbnN0IHVyaSA9IG5vZGUudXJpIHx8IGN1cnJlbnRUYWcubG9va3VwTmFtZXNwYWNlVVJJKG5vZGUucHJlZml4IHx8IG51bGwpXG5cbiAgICB2YXIgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh1cmksIG5vZGUubmFtZSlcblxuICAgIGZvciAoY29uc3QgWyBuYW1lLCBub2RlIF0gb2YgT2JqZWN0LmVudHJpZXMoYXR0cnMpKSB7XG4gICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZU5TKG5vZGUudXJpLCBuYW1lLCBub2RlLnZhbHVlKVxuICAgIH1cblxuICAgIGN1cnJlbnRUYWcuYXBwZW5kQ2hpbGQobmV3RWxlbWVudClcbiAgICBjdXJyZW50VGFnID0gbmV3RWxlbWVudFxuICB9XG5cbiAgcGFyc2VyLm9uY2xvc2V0YWcgPSB0YWdOYW1lID0+IHtcbiAgICBpZiAodGFnTmFtZSA9PT0gJ3N2Z2RvbTp3cmFwcGVyJykgcmV0dXJuXG5cbiAgICBjdXJyZW50VGFnID0gY3VycmVudFRhZy5wYXJlbnROb2RlXG4gIH1cblxuICBwYXJzZXIub25vcGVuY2RhdGEgPSAoKSA9PiB7XG4gICAgY2RhdGEgPSBkb2N1bWVudC5jcmVhdGVDREFUQVNlY3Rpb24oJycpXG4gIH1cblxuICBwYXJzZXIub25jZGF0YSA9IChzdHIpID0+IHtcbiAgICBjZGF0YS5hcHBlbmREYXRhKHN0cilcbiAgfVxuXG4gIHBhcnNlci5vbmNsb3NlY2RhdGEgPSAoKSA9PiB7XG4gICAgY3VycmVudFRhZy5hcHBlbmRDaGlsZChjZGF0YSlcbiAgfVxuXG4gIHBhcnNlci53cml0ZShzdHIpXG59XG4iLCJcbmltcG9ydCB7IEhUTUxFbGVtZW50IH0gZnJvbSAnLi9IVE1MRWxlbWVudC5qcydcbmV4cG9ydCBjbGFzcyBIVE1MU2NyaXB0RWxlbWVudCBleHRlbmRzIEhUTUxFbGVtZW50IHt9XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKEhUTUxTY3JpcHRFbGVtZW50LnByb3RvdHlwZSwge1xuICBzcmM6IHtcbiAgICBnZXQgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdzcmMnKVxuICAgIH0sXG4gICAgc2V0ICh2YWwpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdzcmMnLCB2YWwpXG4gICAgfVxuICB9LFxuICB0eXBlOiB7XG4gICAgZ2V0ICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgndHlwZScpXG4gICAgfSxcbiAgICBzZXQgKHZhbCkge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCB2YWwpXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgbm9kZXNUb05vZGUgfSBmcm9tICcuLi8uLi91dGlscy9ub2Rlc1RvTm9kZS5qcydcblxuLy8gaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNpbnRlcmZhY2UtY2hpbGRub2RlXG4vLyBUb2RvOiBjaGVjayBpZiB0aGlzIGlzIGNvbnRhaW5lZCBpbiBub2RlcyBvciBzaWJsaW5ncyBhcmUgY29udGFpbmVkICh2aWFibGVQcmV2aW91c1NpYmxpbmcsIHZpYWJsZU5leHRTaWJsaW5nKVxuZXhwb3J0IGNvbnN0IENoaWxkTm9kZSA9IHtcbiAgYmVmb3JlICguLi5ub2Rlcykge1xuICAgIGlmICghdGhpcy5wYXJlbnROb2RlKSByZXR1cm5cbiAgICBjb25zdCBub2RlID0gbm9kZXNUb05vZGUobm9kZXMsIHRoaXMub3duZXJEb2N1bWVudClcbiAgICB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIHRoaXMpXG4gIH0sXG4gIGFmdGVyICguLi5ub2Rlcykge1xuICAgIGlmICghdGhpcy5wYXJlbnROb2RlKSByZXR1cm5cbiAgICBjb25zdCBub2RlID0gbm9kZXNUb05vZGUobm9kZXMsIHRoaXMub3duZXJEb2N1bWVudClcbiAgICB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIHRoaXMubmV4dFNpYmxpbmcpXG4gIH0sXG4gIHJlcGxhY2VXaXRoICguLi5ub2Rlcykge1xuICAgIGlmICghdGhpcy5wYXJlbnROb2RlKSByZXR1cm5cbiAgICBjb25zdCBuZXh0ID0gdGhpcy5uZXh0U2libGluZ1xuICAgIGNvbnN0IG5vZGUgPSBub2Rlc1RvTm9kZShub2RlcywgdGhpcy5vd25lckRvY3VtZW50KVxuICAgIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZSwgbmV4dClcbiAgICB0aGlzLnJlbW92ZSgpXG4gIH0sXG4gIHJlbW92ZSAoKSB7XG4gICAgaWYgKCF0aGlzLnBhcmVudE5vZGUpIHJldHVyblxuICAgIHRoaXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzKVxuICB9XG59XG4iLCJleHBvcnQgY29uc3QgTm9uRG9jdW1lbnRUeXBlQ2hpbGROb2RlID0ge1xuXG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE5vbkRvY3VtZW50VHlwZUNoaWxkTm9kZSwge1xuICBwcmV2aW91c0VsZW1lbnRTaWJsaW5nOiB7XG4gICAgZ2V0ICgpIHtcbiAgICAgIGxldCBub2RlXG4gICAgICB3aGlsZSAoKG5vZGUgPSB0aGlzLnByZXZpb3VzU2libGluZykpIHtcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IG5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgcmV0dXJuIG5vZGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH0sXG5cbiAgbmV4dEVsZW1lbnRTaWJsaW5nOiB7XG4gICAgZ2V0ICgpIHtcbiAgICAgIGxldCBub2RlXG4gICAgICB3aGlsZSAoKG5vZGUgPSB0aGlzLm5leHRTaWJsaW5nKSkge1xuICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gbm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICByZXR1cm4gbm9kZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IE5vZGVJdGVyYXRvciB9IGZyb20gJy4uLy4uL3V0aWxzL05vZGVJdGVyYXRvci5qcydcbmltcG9ydCB7IE5vZGVGaWx0ZXIgfSBmcm9tICcuLi9Ob2RlRmlsdGVyLmpzJ1xuXG4vLyBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2ludGVyZmFjZS1ub25lbGVtZW50cGFyZW50bm9kZVxuZXhwb3J0IGNvbnN0IE5vbkVsZW1lbnRQYXJlbnROb2RlID0ge1xuICBnZXRFbGVtZW50QnlJZCAoaWQpIHtcbiAgICBjb25zdCBpdGVyID0gbmV3IE5vZGVJdGVyYXRvcih0aGlzLCBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCwgKG5vZGUpID0+IGlkID09PSBub2RlLmlkID8gTm9kZUZpbHRlci5GSUxURVJfQUNDRVBUIDogTm9kZUZpbHRlci5GSUxURVJfSUdOT1JFLCBmYWxzZSlcbiAgICBmb3IgKGNvbnN0IG5vZGUgb2YgaXRlcikge1xuICAgICAgcmV0dXJuIG5vZGVcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ3NzUXVlcnkgfSBmcm9tICcuLi8uLi9vdGhlci9Dc3NRdWVyeS5qcydcbmltcG9ydCB7IE5vZGVJdGVyYXRvciB9IGZyb20gJy4uLy4uL3V0aWxzL05vZGVJdGVyYXRvci5qcydcbmltcG9ydCB7IE5vZGVGaWx0ZXIgfSBmcm9tICcuLi9Ob2RlRmlsdGVyLmpzJ1xuaW1wb3J0IHsgbm9kZXNUb05vZGUgfSBmcm9tICcuLi8uLi91dGlscy9ub2Rlc1RvTm9kZS5qcydcblxuLy8gaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNwYXJlbnRub2RlXG5jb25zdCBQYXJlbnROb2RlID0ge1xuICBtYXRjaFdpdGhTY29wZSAocXVlcnksIHNjb3BlKSB7XG4gICAgcmV0dXJuIG5ldyBDc3NRdWVyeShxdWVyeSkubWF0Y2hlcyh0aGlzLCBzY29wZSlcbiAgfSxcblxuICBxdWVyeSAocXVlcnksIHNjb3BlLCBzaW5nbGUgPSBmYWxzZSkge1xuXG4gICAgY29uc3QgaXRlciA9IG5ldyBOb2RlSXRlcmF0b3Ioc2NvcGUsIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5ULCAobm9kZSkgPT4gbm9kZS5tYXRjaFdpdGhTY29wZShxdWVyeSwgc2NvcGUpID8gTm9kZUZpbHRlci5GSUxURVJfQUNDRVBUIDogTm9kZUZpbHRlci5GSUxURVJfSUdOT1JFLCBmYWxzZSlcblxuICAgIGNvbnN0IG5vZGVzID0gW11cbiAgICBmb3IgKGNvbnN0IG5vZGUgb2YgaXRlcikge1xuICAgICAgbm9kZXMucHVzaChub2RlKVxuICAgICAgaWYgKHNpbmdsZSkgcmV0dXJuIG5vZGVzXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzXG4gIH0sXG5cbiAgcXVlcnlTZWxlY3RvckFsbCAocXVlcnkpIHtcbiAgICByZXR1cm4gdGhpcy5xdWVyeShxdWVyeSwgdGhpcylcbiAgfSxcblxuICBxdWVyeVNlbGVjdG9yIChxdWVyeSkge1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5KHF1ZXJ5LCB0aGlzLCB0cnVlKVswXSB8fCBudWxsXG4gIH0sXG5cbiAgY2xvc2VzdCAocXVlcnkpIHtcbiAgICBjb25zdCBjc3NRdWVyeSA9IG5ldyBDc3NRdWVyeShxdWVyeSlcbiAgICBsZXQgbm9kZSA9IHRoaXNcbiAgICB3aGlsZSAobm9kZSkge1xuICAgICAgaWYgKGNzc1F1ZXJ5Lm1hdGNoZXMobm9kZSwgdGhpcykpIHtcbiAgICAgICAgcmV0dXJuIG5vZGVcbiAgICAgIH1cbiAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGVcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfSxcblxuICBwcmVwZW5kICguLi5ub2Rlcykge1xuICAgIGNvbnN0IG5vZGUgPSBub2Rlc1RvTm9kZShub2RlcywgdGhpcy5vd25lckRvY3VtZW50KVxuXG4gICAgdGhpcy5pbnNlcnRCZWZvcmUobm9kZSwgdGhpcy5maXJzdENoaWxkKVxuICB9LFxuXG4gIGFwcGVuZCAoLi4ubm9kZXMpIHtcbiAgICBjb25zdCBub2RlID0gbm9kZXNUb05vZGUobm9kZXMsIHRoaXMub3duZXJEb2N1bWVudClcbiAgICB0aGlzLmFwcGVuZENoaWxkKG5vZGUpXG4gIH0sXG5cbiAgcmVwbGFjZUNoaWxkcmVuICguLi5ub2Rlcykge1xuICAgIHdoaWxlICh0aGlzLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5maXJzdENoaWxkKVxuICAgIH1cbiAgICB0aGlzLmFwcGVuZCguLi5ub2RlcylcbiAgfVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhQYXJlbnROb2RlLCB7XG4gIGNoaWxkcmVuOiB7XG4gICAgZ2V0ICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXMuZmlsdGVyKGZ1bmN0aW9uIChub2RlKSB7IHJldHVybiBub2RlLm5vZGVUeXBlID09PSBub2RlLkVMRU1FTlRfTk9ERSB9KVxuICAgIH1cbiAgfSxcbiAgZmlyc3RFbGVtZW50Q2hpbGQ6IHtcbiAgICBnZXQgKCkge1xuICAgICAgZm9yIChjb25zdCBub2RlIG9mIHRoaXMuY2hpbGROb2Rlcykge1xuICAgICAgICBpZiAobm9kZSAmJiBub2RlLm5vZGVUeXBlID09PSBub2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgIHJldHVybiBub2RlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9LFxuICBsYXN0RWxlbWVudENoaWxkOiB7XG4gICAgZ2V0ICgpIHtcbiAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiB0aGlzLmNoaWxkTm9kZXMuc2xpY2UoKS5yZXZlcnNlKCkpIHtcbiAgICAgICAgaWYgKG5vZGUgJiYgbm9kZS5ub2RlVHlwZSA9PT0gbm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICByZXR1cm4gbm9kZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfSxcbiAgY2hpbGRFbGVtZW50Q291bnQ6IHtcbiAgICBnZXQgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4ubGVuZ3RoXG4gICAgfVxuICB9XG59KVxuXG5leHBvcnQgeyBQYXJlbnROb2RlIH1cbiIsImltcG9ydCB7IE5vZGVGaWx0ZXIgfSBmcm9tICcuLi9Ob2RlRmlsdGVyLmpzJ1xuaW1wb3J0IHsgTm9kZUl0ZXJhdG9yIH0gZnJvbSAnLi4vLi4vdXRpbHMvTm9kZUl0ZXJhdG9yLmpzJ1xuXG5jb25zdCBoYXNDbGFzcyA9IChub2RlLCBuYW1lKSA9PiB7XG4gIGNvbnN0IGNsYXNzTGlzdCA9IG5vZGUuY2xhc3NOYW1lLnNwbGl0KC9cXHMrLylcbiAgcmV0dXJuIGNsYXNzTGlzdC5pbmNsdWRlcyhuYW1lKVxufVxuXG5jb25zdCBlbGVtZW50QWNjZXNzID0ge1xuICBnZXRFbGVtZW50c0J5VGFnTmFtZSAobmFtZSkge1xuICAgIC8vIGNvbnN0IGRvY3VtZW50ID0gdGhpcy5vd25lckRvY3VtZW50XG4gICAgY29uc3QgaXRlciA9IG5ldyBOb2RlSXRlcmF0b3IodGhpcywgTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQsIChub2RlKSA9PiBub2RlLm5vZGVOYW1lID09PSBuYW1lID8gTm9kZUZpbHRlci5GSUxURVJfQUNDRVBUIDogTm9kZUZpbHRlci5GSUxURVJfSUdOT1JFLCBmYWxzZSlcbiAgICAvLyBjb25zdCBpdGVyID0gZG9jdW1lbnQuY3JlYXRlTm9kZUl0ZXJhdG9yKHRoaXMsIDEsIChub2RlKSA9PiBub2RlLm5vZGVOYW1lID09PSBuYW1lID8gTm9kZUZpbHRlci5GSUxURVJfQUNDRVBUIDogTm9kZUZpbHRlci5GSUxURVJfSUdOT1JFKVxuICAgIHJldHVybiBbIC4uLml0ZXIgXVxuICB9LFxuXG4gIGdldEVsZW1lbnRzQnlUYWdOYW1lTlMgKG5zLCBuYW1lKSB7XG4gICAgLy8gY29uc3QgZG9jdW1lbnQgPSB0aGlzLm93bmVyRG9jdW1lbnRcbiAgICBjb25zdCBpdGVyID0gbmV3IE5vZGVJdGVyYXRvcih0aGlzLCBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCwgKG5vZGUpID0+IG5vZGUuaXNOYW1lc3BhY2UobnMpICYmIG5vZGUubm9kZU5hbWUgPT09IG5hbWUgPyBOb2RlRmlsdGVyLkZJTFRFUl9BQ0NFUFQgOiBOb2RlRmlsdGVyLkZJTFRFUl9JR05PUkUsIGZhbHNlKVxuICAgIC8vIGNvbnN0IGl0ZXIgPSBkb2N1bWVudC5jcmVhdGVOb2RlSXRlcmF0b3IodGhpcywgMSwgKG5vZGUpID0+IG5vZGUuaXNOYW1lc3BhY2UobnMpICYmIG5vZGUubm9kZU5hbWUgPT09IG5hbWUgPyBOb2RlRmlsdGVyLkZJTFRFUl9BQ0NFUFQgOiBOb2RlRmlsdGVyLkZJTFRFUl9JR05PUkUpXG4gICAgcmV0dXJuIFsgLi4uaXRlciBdXG4gIH0sXG5cbiAgZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSAobmFtZSkge1xuICAgIC8vIGNvbnN0IGRvY3VtZW50ID0gdGhpcy5vd25lckRvY3VtZW50XG4gICAgY29uc3QgaXRlciA9IG5ldyBOb2RlSXRlcmF0b3IodGhpcywgTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQsIChub2RlKSA9PiBoYXNDbGFzcyhub2RlLCBuYW1lKSA/IE5vZGVGaWx0ZXIuRklMVEVSX0FDQ0VQVCA6IE5vZGVGaWx0ZXIuRklMVEVSX0lHTk9SRSwgZmFsc2UpXG4gICAgLy8gY29uc3QgaXRlciA9IGRvY3VtZW50LmNyZWF0ZU5vZGVJdGVyYXRvcih0aGlzLCAxLCAobm9kZSkgPT4gaGFzQ2xhc3Mobm9kZSwgbmFtZSkgPyBOb2RlRmlsdGVyLkZJTFRFUl9BQ0NFUFQgOiBOb2RlRmlsdGVyLkZJTFRFUl9JR05PUkUpXG4gICAgcmV0dXJuIFsgLi4uaXRlciBdXG4gIH1cbn1cblxuZXhwb3J0IHsgZWxlbWVudEFjY2VzcyB9XG4iLCIvLyBAdHMtY2hlY2tcbmltcG9ydCB7IFNWR0xlbmd0aCB9IGZyb20gJy4vU1ZHTGVuZ3RoLmpzJ1xuXG5leHBvcnQgY2xhc3MgU1ZHQW5pbWF0ZWRMZW5ndGgge1xuICBiYXNlVmFsXG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgYXR0cmlidXRlTmFtZSkge1xuICAgIHRoaXMuYmFzZVZhbCA9IG5ldyBTVkdMZW5ndGgoZWxlbWVudCwgYXR0cmlidXRlTmFtZSlcbiAgfVxuXG4gIGdldCBhbmltVmFsKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignYW5pbVZhbCBpcyBub3QgaW1wbGVtZW50ZWQnKVxuICB9XG59XG4iLCIvLyBAdHMtY2hlY2tcbmltcG9ydCB7IFNWR0FuaW1hdGVkTGVuZ3RoIH0gZnJvbSAnLi9TVkdBbmltYXRlZExlbmd0aC5qcydcbmltcG9ydCB7IFNWR0dyYXBoaWNzRWxlbWVudCB9IGZyb20gJy4vU1ZHR3JhcGhpY3NFbGVtZW50LmpzJ1xuXG5leHBvcnQgY2xhc3MgU1ZHQ2lyY2xlRWxlbWVudCBleHRlbmRzIFNWR0dyYXBoaWNzRWxlbWVudCB7XG4gIGN4ID0gbmV3IFNWR0FuaW1hdGVkTGVuZ3RoKHRoaXMsICdjeCcpXG4gIGN5ID0gbmV3IFNWR0FuaW1hdGVkTGVuZ3RoKHRoaXMsICdjeScpXG4gIHIgPSBuZXcgU1ZHQW5pbWF0ZWRMZW5ndGgodGhpcywgJ3InKVxufVxuIiwiaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gJy4uL0VsZW1lbnQuanMnXG5leHBvcnQgY2xhc3MgU1ZHRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBnZXQgb3duZXJTVkdFbGVtZW50ICgpIHtcbiAgICBsZXQgcGFyZW50ID0gdGhpc1xuICAgIHdoaWxlICgocGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGUpKSB7XG4gICAgICBpZiAoJ3N2ZycgPT0gcGFyZW50Lm5vZGVOYW1lKSB7XG4gICAgICAgIHJldHVybiBwYXJlbnRcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGdldCB2aWV3cG9ydEVsZW1lbnQgKCkge1xuICAgIGxldCBwYXJlbnQgPSB0aGlzXG4gICAgd2hpbGUgKChwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZSkpIHtcbiAgICAgIC8vIFRPRE86IGFuZCBvdGhlcnNcbiAgICAgIGlmIChbICdzdmcnLCAnc3ltYm9sJyBdLmluY2x1ZGVzKHBhcmVudC5ub2RlTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG4iLCIvLyBAdHMtY2hlY2tcbmltcG9ydCB7IFNWR0FuaW1hdGVkTGVuZ3RoIH0gZnJvbSAnLi9TVkdBbmltYXRlZExlbmd0aC5qcydcbmltcG9ydCB7IFNWR0dyYXBoaWNzRWxlbWVudCB9IGZyb20gJy4vU1ZHR3JhcGhpY3NFbGVtZW50LmpzJ1xuXG5leHBvcnQgY2xhc3MgU1ZHRWxsaXBzZUVsZW1lbnQgZXh0ZW5kcyBTVkdHcmFwaGljc0VsZW1lbnQge1xuICBjeCA9IG5ldyBTVkdBbmltYXRlZExlbmd0aCh0aGlzLCAnY3gnKVxuICBjeSA9IG5ldyBTVkdBbmltYXRlZExlbmd0aCh0aGlzLCAnY3knKVxuICByeCA9IG5ldyBTVkdBbmltYXRlZExlbmd0aCh0aGlzLCAncngnKVxuICByeSA9IG5ldyBTVkdBbmltYXRlZExlbmd0aCh0aGlzLCAncnknKVxufVxuIiwiLy8gQHRzLWNoZWNrXG5cbmltcG9ydCB7IFNWR0FuaW1hdGVkTGVuZ3RoIH0gZnJvbSAnLi9TVkdBbmltYXRlZExlbmd0aC5qcydcbmltcG9ydCB7IFNWR0dyYXBoaWNzRWxlbWVudCB9IGZyb20gJy4vU1ZHR3JhcGhpY3NFbGVtZW50LmpzJ1xuXG5leHBvcnQgY2xhc3MgU1ZHRm9yZWlnbk9iamVjdEVsZW1lbnQgZXh0ZW5kcyBTVkdHcmFwaGljc0VsZW1lbnQge1xuICB4ID0gbmV3IFNWR0FuaW1hdGVkTGVuZ3RoKHRoaXMsICd4JylcbiAgeSA9IG5ldyBTVkdBbmltYXRlZExlbmd0aCh0aGlzLCAneScpXG4gIHdpZHRoID0gbmV3IFNWR0FuaW1hdGVkTGVuZ3RoKHRoaXMsICd3aWR0aCcpXG4gIGhlaWdodCA9IG5ldyBTVkdBbmltYXRlZExlbmd0aCh0aGlzLCAnaGVpZ2h0Jylcbn1cbiIsImltcG9ydCB7IFNWR0VsZW1lbnQgfSBmcm9tICcuL1NWR0VsZW1lbnQuanMnXG5pbXBvcnQgeyBnZXRTZWdtZW50cyB9IGZyb20gJy4uLy4uL3V0aWxzL2Jib3hVdGlscy5qcydcbmltcG9ydCAqIGFzIHJlZ2V4IGZyb20gJy4uLy4uL3V0aWxzL3JlZ2V4LmpzJ1xuaW1wb3J0IHsgU1ZHTWF0cml4IH0gZnJvbSAnLi9TVkdNYXRyaXguanMnXG5cbi8vIE1hcCBtYXRyaXggYXJyYXkgdG8gb2JqZWN0XG5mdW5jdGlvbiBhcnJheVRvTWF0cml4IChhKSB7XG4gIHJldHVybiB7IGE6IGFbMF0sIGI6IGFbMV0sIGM6IGFbMl0sIGQ6IGFbM10sIGU6IGFbNF0sIGY6IGFbNV0gfVxufVxuXG5leHBvcnQgY2xhc3MgU1ZHR3JhcGhpY3NFbGVtZW50IGV4dGVuZHMgU1ZHRWxlbWVudCB7XG4gIC8vIFRPRE86IGh0dHBzOi8vd3d3LnczLm9yZy9UUi9TVkcyL2Nvb3Jkcy5odG1sI0NvbXB1dGluZ0FWaWV3cG9ydHNUcmFuc2Zvcm1cbiAgZ2VuZXJhdGVWaWV3Qm94TWF0cml4ICgpIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9TVkcvQXR0cmlidXRlL3ZpZXdCb3hcbiAgICBpZiAoIVsgJ21hcmtlcicsICdzeW1ib2wnLCAncGF0dGVybicsICdzdmcnLCAndmlldycgXS5pbmNsdWRlcyh0aGlzLm5vZGVOYW1lKSkge1xuICAgICAgcmV0dXJuIG5ldyBTVkdNYXRyaXgoKVxuICAgIH1cblxuICAgIGxldCB2aWV3ID0gKHRoaXMuZ2V0QXR0cmlidXRlKCd2aWV3Qm94JykgfHwgJycpLnNwbGl0KHJlZ2V4LmRlbGltaXRlcikubWFwKHBhcnNlRmxvYXQpLmZpbHRlcihlbCA9PiAhaXNOYU4oZWwpKVxuICAgIGNvbnN0IHdpZHRoID0gcGFyc2VGbG9hdCh0aGlzLmdldEF0dHJpYnV0ZSgnd2lkdGgnKSkgfHwgMFxuICAgIGNvbnN0IGhlaWdodCA9IHBhcnNlRmxvYXQodGhpcy5nZXRBdHRyaWJ1dGUoJ2hlaWdodCcpKSB8fCAwXG4gICAgY29uc3QgeCA9IHBhcnNlRmxvYXQodGhpcy5nZXRBdHRyaWJ1dGUoJ3gnKSkgfHwgMFxuICAgIGNvbnN0IHkgPSBwYXJzZUZsb2F0KHRoaXMuZ2V0QXR0cmlidXRlKCd5JykpIHx8IDBcblxuICAgIC8vIFRPRE86IElmIG5vIHdpZHRoIGFuZCBoZWlnaHQgaXMgZ2l2ZW4sIHdpZHRoIGFuZCBoZWlnaHQgb2YgdGhlIG91dGVyIHN2ZyBlbGVtZW50IGlzIHVzZWRcbiAgICBpZiAoIXdpZHRoIHx8ICFoZWlnaHQpIHtcbiAgICAgIHJldHVybiBuZXcgU1ZHTWF0cml4KCkudHJhbnNsYXRlKHgsIHkpXG4gICAgfVxuXG4gICAgaWYgKHZpZXcubGVuZ3RoICE9PSA0KSB7XG4gICAgICB2aWV3ID0gWyAwLCAwLCB3aWR0aCwgaGVpZ2h0IF1cbiAgICB9XG5cbiAgICAvLyBmaXJzdCBhcHBseSB4IGFuZCB5IGlmIG5lc3RlZCwgdGhlbiB2aWV3Ym94IHNjYWxlLCB0aGVuIHZpZXdCb3ggbW92ZVxuICAgIHJldHVybiBuZXcgU1ZHTWF0cml4KCkudHJhbnNsYXRlKHgsIHkpLnNjYWxlKHdpZHRoIC8gdmlld1syXSwgaGVpZ2h0IC8gdmlld1szXSkudHJhbnNsYXRlKC12aWV3WzBdLCAtdmlld1sxXSlcbiAgfVxuXG4gIGdldEJCb3ggKCkge1xuICAgIHJldHVybiBnZXRTZWdtZW50cyh0aGlzKS5iYm94KClcbiAgfVxuXG4gIC8vIFRPRE86IFRoaXMgbWV0aG9kIGFjdHVhbGx5IGV4aXN0cyBvbiBhbGwgRWxlbWVudHNcbiAgZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICgpIHtcbiAgICAvLyBUaGUgYm91bmRpbmcgY2xpZW50IHJlY3QgdGFrZXMgdGhlIHNjcmVlbiBjdG0gb2YgdGhlIGVsZW1lbnRcbiAgICAvLyBhbmQgY29udmVydHMgdGhlIGJvdW5kaW5nIGJveCB3aXRoIGl0XG5cbiAgICAvLyBob3dldmVyLCBub3JtYWwgYm91bmRpbmcgY29uc2lzdHMgb2Y6XG4gICAgLy8gLSBhbGwgY2hpbGRyZW4gdHJhbnNmb3JtZWRcbiAgICAvLyAtIHRoZSB2aWV3Ym94IG9mIHRoZSBlbGVtZW50IGlmIGF2YWlsYWJsZVxuXG4gICAgLy8gVGhlIGJvdW5kaW5nQ2xpZW50UmVjdCBpcyBub3QgYWZmZWN0ZWQgYnkgaXRzIG93biB2aWV3Ym94XG4gICAgLy8gU28gd2UgYXBwbHkgb25seSBvdXIgb3duIHRyYW5zZm9ybWF0aW9ucyBhbmQgcGFyZW50cyBzY3JlZW5DVE1cblxuICAgIGxldCBtID0gdGhpcy5tYXRyaXhpZnkoKVxuXG4gICAgaWYgKHRoaXMucGFyZW50Tm9kZSAmJiB0aGlzLnBhcmVudE5vZGUubm9kZU5hbWUgIT09ICcjZG9jdW1lbnQnKSB7XG4gICAgICBtID0gdGhpcy5wYXJlbnROb2RlLmdldFNjcmVlbkNUTSgpLm11bHRpcGx5KG0pXG4gICAgfVxuXG4gICAgLy8gbGV0IG0gPSB0aGlzLmdldFNjcmVlbkNUTSgpXG5cbiAgICAvLyBUaGVyZSBhcmUgYSBmZXcgZXh0cmEgcnVsZXMgcmVnYXJkaW5nIHJib3ggYW5kIHRoZSA8c3ZnPiBlbGVtZW50XG4gICAgLy8gTmFtZWx5IHRoaXMgaXM6XG4gICAgLy8gQkJveCBpcyBjYWxjdWxhdGVkIGFzIG5vcm1hbCBmb3IgY29udGFpbmVyIGVsZW1lbnRzXG4gICAgLy8gUmJveCBpcyBjYWxjdWxhdGVkIHdpdGggdGhlIHdpZHRoIGFuZCBoZWlnaHQgb2YgdGhlIDxzdmc+XG4gICAgLy8gVGhpcyBjb3VsZCBiZSBhbHNvIHRydWUgZm9yIHN5bWJvbHMgc28gdGhpcyBpcyBhOlxuICAgIC8vIFRvZG86IC4uLlxuICAgIHJldHVybiBnZXRTZWdtZW50cyh0aGlzLCBmYWxzZSwgdHJ1ZSkudHJhbnNmb3JtKG0pLmJib3goKVxuICB9XG5cbiAgZ2V0Q1RNICgpIHtcbiAgICBsZXQgbSA9IHRoaXMubWF0cml4aWZ5KClcblxuICAgIGxldCBub2RlID0gdGhpc1xuICAgIHdoaWxlICgobm9kZSA9IG5vZGUucGFyZW50Tm9kZSkpIHtcbiAgICAgIGlmIChbICdzdmcnLCAnc3ltYm9sJywgJ2ltYWdlJywgJ3BhdHRlcm4nLCAnbWFya2VyJyBdLmluZGV4T2Yobm9kZS5ub2RlTmFtZSkgPiAtMSkgYnJlYWtcbiAgICAgIG0gPSBtLm11bHRpcGx5KG5vZGUubWF0cml4aWZ5KCkpXG4gICAgICBpZiAobm9kZS5ub2RlTmFtZSA9PT0gJyNkb2N1bWVudCcpIHJldHVybiB0aGlzLmdldFNjcmVlbkNUTSgpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGUuZ2VuZXJhdGVWaWV3Qm94TWF0cml4KCkubXVsdGlwbHkobSlcbiAgfVxuXG4gIGdldElubmVyTWF0cml4ICgpIHtcbiAgICBsZXQgbSA9IHRoaXMubWF0cml4aWZ5KClcblxuICAgIGlmIChbICdzdmcnLCAnc3ltYm9sJywgJ2ltYWdlJywgJ3BhdHRlcm4nLCAnbWFya2VyJyBdLmluZGV4T2YodGhpcy5ub2RlTmFtZSkgPiAtMSkge1xuICAgICAgbSA9IHRoaXMuZ2VuZXJhdGVWaWV3Qm94TWF0cml4KCkubXVsdGlwbHkobSlcbiAgICB9XG4gICAgcmV0dXJuIG1cbiAgfVxuXG4gIGdldFNjcmVlbkNUTSAoKSB7XG4gICAgLy8gcmVmOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzQ0NTM3XG4gICAgLy8gV2UgZm9sbG93IENocm9tZXMgYmVoYXZpb3IgYW5kIGluY2x1ZGUgdGhlIHZpZXdib3ggaW4gdGhlIHNjcmVlbkNUTVxuICAgIGNvbnN0IG0gPSB0aGlzLmdldElubmVyTWF0cml4KClcblxuICAgIC8vIFRPRE86IFdlIGhhdmUgdG8gbG9vcCB1bnRpbCBkb2N1bWVudCwgaG93ZXZlciBodG1sIGVsZW1lbnRzIGRvbnQgaGF2ZSBnZXRTY3JlZW5DVE0gaW1wbGVtZW50ZWRcbiAgICAvLyB0aGV5IGFsc28gZG9udCBoYXZlIGEgdHJhbnNmb3JtIGF0dHJpYnV0ZS4gVGhlcmVmb3JlIHdlIG5lZWQgYSBkaWZmZXJlbnQgd2F5IG9mIGZpZ3VyaW5nIG91dCB0aGVpciAoY3NzKSB0cmFuc2Zvcm1cbiAgICBpZiAodGhpcy5wYXJlbnROb2RlICYmIHRoaXMucGFyZW50Tm9kZSBpbnN0YW5jZW9mIFNWR0dyYXBoaWNzRWxlbWVudCkge1xuICAgICAgcmV0dXJuIHRoaXMucGFyZW50Tm9kZS5nZXRTY3JlZW5DVE0oKS5tdWx0aXBseShtKVxuICAgIH1cblxuICAgIHJldHVybiBtXG4gIH1cblxuICBtYXRyaXhpZnkgKCkge1xuICAgIGNvbnN0IG1hdHJpeCA9ICh0aGlzLmdldEF0dHJpYnV0ZSgndHJhbnNmb3JtJykgfHwgJycpLnRyaW0oKVxuICAgICAgLy8gc3BsaXQgdHJhbnNmb3JtYXRpb25zXG4gICAgICAuc3BsaXQocmVnZXgudHJhbnNmb3Jtcykuc2xpY2UoMCwgLTEpLm1hcChmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgIC8vIGdlbmVyYXRlIGtleSA9PiB2YWx1ZSBwYWlyc1xuICAgICAgICBjb25zdCBrdiA9IHN0ci50cmltKCkuc3BsaXQoJygnKVxuICAgICAgICByZXR1cm4gWyBrdlswXS50cmltKCksIGt2WzFdLnNwbGl0KHJlZ2V4LmRlbGltaXRlcikubWFwKGZ1bmN0aW9uIChzdHIpIHsgcmV0dXJuIHBhcnNlRmxvYXQoc3RyLnRyaW0oKSkgfSkgXVxuICAgICAgfSlcbiAgICAgIC8vIG1lcmdlIGV2ZXJ5IHRyYW5zZm9ybWF0aW9uIGludG8gb25lIG1hdHJpeFxuICAgICAgLnJlZHVjZShmdW5jdGlvbiAobWF0cml4LCB0cmFuc2Zvcm0pIHtcblxuICAgICAgICBpZiAodHJhbnNmb3JtWzBdID09PSAnbWF0cml4JykgcmV0dXJuIG1hdHJpeC5tdWx0aXBseShhcnJheVRvTWF0cml4KHRyYW5zZm9ybVsxXSkpXG4gICAgICAgIHJldHVybiBtYXRyaXhbdHJhbnNmb3JtWzBdXS5hcHBseShtYXRyaXgsIHRyYW5zZm9ybVsxXSlcblxuICAgICAgfSwgbmV3IFNWR01hdHJpeCgpKVxuXG4gICAgcmV0dXJuIG1hdHJpeFxuICB9XG5cbiAgZ2V0IHRyYW5zZm9ybSAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgaW1wbGVtZW50ZWQnKVxuICB9XG5cbn1cbiIsImltcG9ydCB7IFNWR0FuaW1hdGVkTGVuZ3RoIH0gZnJvbSAnLi9TVkdBbmltYXRlZExlbmd0aC5qcydcbmltcG9ydCB7IFNWR0dyYXBoaWNzRWxlbWVudCB9IGZyb20gJy4vU1ZHR3JhcGhpY3NFbGVtZW50LmpzJ1xuXG5leHBvcnQgY2xhc3MgU1ZHSW1hZ2VFbGVtZW50IGV4dGVuZHMgU1ZHR3JhcGhpY3NFbGVtZW50IHtcbiAgeCA9IG5ldyBTVkdBbmltYXRlZExlbmd0aCh0aGlzLCAneCcpXG4gIHkgPSBuZXcgU1ZHQW5pbWF0ZWRMZW5ndGgodGhpcywgJ3knKVxuICB3aWR0aCA9IG5ldyBTVkdBbmltYXRlZExlbmd0aCh0aGlzLCAnd2lkdGgnKVxuICBoZWlnaHQgPSBuZXcgU1ZHQW5pbWF0ZWRMZW5ndGgodGhpcywgJ2hlaWdodCcpXG59XG4iLCIvLyBAdHMtY2hlY2tcbi8vIEB0cy1pZ25vcmVcbmltcG9ydCB7IGV4dGVuZFN0YXRpYyB9IGZyb20gJy4uLy4uL3V0aWxzL29iamVjdENyZWF0aW9uVXRpbHMuanMnXG5cbmNvbnN0IHVuaXRUeXBlcyA9IHtcbiAgU1ZHX0xFTkdUSFRZUEVfVU5LTk9XTjogMCxcbiAgU1ZHX0xFTkdUSFRZUEVfTlVNQkVSOiAxLFxuICBTVkdfTEVOR1RIVFlQRV9QRVJDRU5UQUdFOiAyLFxuICBTVkdfTEVOR1RIVFlQRV9FTVM6IDMsXG4gIFNWR19MRU5HVEhUWVBFX0VYUzogNCxcbiAgU1ZHX0xFTkdUSFRZUEVfUFg6IDUsXG4gIFNWR19MRU5HVEhUWVBFX0NNOiA2LFxuICBTVkdfTEVOR1RIVFlQRV9NTTogNyxcbiAgU1ZHX0xFTkdUSFRZUEVfSU46IDgsXG4gIFNWR19MRU5HVEhUWVBFX1BUOiA5LFxuICBTVkdfTEVOR1RIVFlQRV9QQzogMTAsXG59XG5cbmNvbnN0IHVuaXRCeVN0cmluZyA9IHtcbiAgWycnXTogdW5pdFR5cGVzLlNWR19MRU5HVEhUWVBFX05VTUJFUixcbiAgWyclJ106IHVuaXRUeXBlcy5TVkdfTEVOR1RIVFlQRV9QRVJDRU5UQUdFLFxuICBbJ2VtJ106IHVuaXRUeXBlcy5TVkdfTEVOR1RIVFlQRV9FTVMsXG4gIFsnZXgnXTogdW5pdFR5cGVzLlNWR19MRU5HVEhUWVBFX0VYUyxcbiAgWydweCddOiB1bml0VHlwZXMuU1ZHX0xFTkdUSFRZUEVfUFgsXG4gIFsnY20nXTogdW5pdFR5cGVzLlNWR19MRU5HVEhUWVBFX0NNLFxuICBbJ21tJ106IHVuaXRUeXBlcy5TVkdfTEVOR1RIVFlQRV9NTSxcbiAgWydpbiddOiB1bml0VHlwZXMuU1ZHX0xFTkdUSFRZUEVfSU4sXG4gIFsncHQnXTogdW5pdFR5cGVzLlNWR19MRU5HVEhUWVBFX1BULFxuICBbJ3BjJ106IHVuaXRUeXBlcy5TVkdfTEVOR1RIVFlQRV9QQyxcbn1cblxuY29uc3QgdW5pdFN0cmluZ0J5Q29uc3RhbnQgPSBuZXcgTWFwKFxuICBPYmplY3QuZW50cmllcyh1bml0QnlTdHJpbmcpLm1hcCgoW3VuaXRTdHJpbmcsIHVuaXRDb25zdGFudF0pID0+IFtcbiAgICB1bml0Q29uc3RhbnQsXG4gICAgdW5pdFN0cmluZyxcbiAgXSlcbilcblxuY29uc3QgdW5pdEZhY3RvcnMgPSBuZXcgTWFwKFtcbiAgW3VuaXRUeXBlcy5TVkdfTEVOR1RIVFlQRV9OVU1CRVIsIDFdLFxuICBbdW5pdFR5cGVzLlNWR19MRU5HVEhUWVBFX1BFUkNFTlRBR0UsIE5hTl0sXG4gIFt1bml0VHlwZXMuU1ZHX0xFTkdUSFRZUEVfRU1TLCBOYU5dLFxuICBbdW5pdFR5cGVzLlNWR19MRU5HVEhUWVBFX0VYUywgTmFOXSxcbiAgW3VuaXRUeXBlcy5TVkdfTEVOR1RIVFlQRV9QWCwgMV0sXG4gIFt1bml0VHlwZXMuU1ZHX0xFTkdUSFRZUEVfQ00sIDZdLFxuICBbdW5pdFR5cGVzLlNWR19MRU5HVEhUWVBFX01NLCA5NiAvIDI1LjRdLFxuICBbdW5pdFR5cGVzLlNWR19MRU5HVEhUWVBFX0lOLCA5Nl0sXG4gIFt1bml0VHlwZXMuU1ZHX0xFTkdUSFRZUEVfUFQsIDQgLyAzXSxcbiAgW3VuaXRUeXBlcy5TVkdfTEVOR1RIVFlQRV9QQywgMTZdLFxuXSlcblxuY29uc3QgdmFsdWVQYXR0ZXJuID0gL15cXHMqKFsrLV0/WzAtOV0qWy5dP1swLTldKyg/OmVbKy1dP1swLTldKyk/KShlbXxleHxweHxpbnxjbXxtbXxwdHxwY3wlKT9cXHMqJC9pO1xuXG5leHBvcnQgY2xhc3MgU1ZHTGVuZ3RoIHtcbiAgZWxlbWVudFxuICBhdHRyaWJ1dGVOYW1lXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlTmFtZVxuICAgKi9cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgYXR0cmlidXRlTmFtZSkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLmF0dHJpYnV0ZU5hbWUgPSBhdHRyaWJ1dGVOYW1lXG4gIH1cblxuICBnZXQgdW5pdFR5cGUoKSB7XG4gICAgcmV0dXJuIHBhcnNlVmFsdWUodGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSh0aGlzLmF0dHJpYnV0ZU5hbWUpKVsxXVxuICB9XG5cbiAgZ2V0IHZhbHVlKCkge1xuICAgIGNvbnN0IFt2YWx1ZSwgdW5pdF0gPSBwYXJzZVZhbHVlKFxuICAgICAgdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSh0aGlzLmF0dHJpYnV0ZU5hbWUpXG4gICAgKVxuICAgIHJldHVybiB2YWx1ZSAqIGdldFVuaXRGYWN0b3IodW5pdClcbiAgfVxuXG4gIHNldCB2YWx1ZSh2YWx1ZSkge1xuICAgIGNvbnN0IHVuaXRGYWN0b3IgPSBnZXRVbml0RmFjdG9yKHRoaXMudW5pdFR5cGUpXG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShcbiAgICAgIHRoaXMuYXR0cmlidXRlTmFtZSxcbiAgICAgIHZhbHVlIC8gdW5pdEZhY3RvciArIHVuaXRTdHJpbmcodGhpcylcbiAgICApXG4gIH1cblxuICBnZXQgdmFsdWVJblNwZWNpZmllZFVuaXRzKCkge1xuICAgIHJldHVybiBwYXJzZVZhbHVlKHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUodGhpcy5hdHRyaWJ1dGVOYW1lKSlbMF1cbiAgfVxuXG4gIHNldCB2YWx1ZUluU3BlY2lmaWVkVW5pdHModmFsdWUpIHtcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKHRoaXMuYXR0cmlidXRlTmFtZSwgdmFsdWUgKyB1bml0U3RyaW5nKHRoaXMpKVxuICB9XG5cbiAgZ2V0IHZhbHVlQXNTdHJpbmcoKSB7XG4gICAgLy8gRG8gbm90IHNpbXBseSB1c2UgZ2V0QXR0cmlidXRlKCkgYXMgdGhpcyBmdW5jdGlvbiBoYXMgdG8gcmV0dXJuIGEgc3RyaW5nXG4gICAgLy8gdGhhdCBpcyBhIHZhbGlkIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB1c2VkIHZhbHVlLlxuICAgIHJldHVybiB0aGlzLnZhbHVlSW5TcGVjaWZpZWRVbml0cyArIHVuaXRTdHJpbmcodGhpcylcbiAgfVxuXG4gIHNldCB2YWx1ZUFzU3RyaW5nKHZhbHVlU3RyaW5nKSB7XG4gICAgY29uc3QgW3ZhbHVlLCB1bml0XSA9IHBhcnNlVmFsdWUodmFsdWVTdHJpbmcsIGZhbHNlKVxuICAgIGNvbnN0IHVuaXRTdHJpbmcgPSB1bml0U3RyaW5nQnlDb25zdGFudC5nZXQodW5pdCkgfHwgJydcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKHRoaXMuYXR0cmlidXRlTmFtZSwgdmFsdWUgKyB1bml0U3RyaW5nKVxuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd8bnVsbH0gdmFsdWVTdHJpbmdcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gZmFsbGJhY2sgIElmIHNldCB0byBgZmFsc2VgIGNhdXNlcyBhbiBlcnJvciB0byBiZSB0aHJvd24gaWZcbiAqIGB2YWx1ZVN0cmluZ2AgY2FuIG5vdCBiZSBwYXJzZWQgcHJvcGVybHkuIE90aGVyd2lzZSB0aGUgcmV0dXJuZWQgdmFsdWUgZmFsbHNcbiAqIGJhY2sgdG8gMCBhbmQgdGhlIHVuaXQgZmFsbHMgYmFjayB0byBgU1ZHX0xFTkdUSFRZUEVfTlVNQkVSYC5cbiAqIEByZXR1cm4ge1tudW1iZXIsIG51bWJlcl19ICBWYWx1ZSBhbmQgdW5pdC4gRm9yIHVua25vd24gdW5pdHMsIGlmIHRoZVxuICogYXR0cmlidXRlIGlzIG5vdCBvZiB0aGUgY29ycmVjdCBmb3JtYXQgb3IgaWYgdGhlIGF0dHJpYnV0ZSBpcyBub3QgcHJlc2VudCBvblxuICogdGhlIGVsZW1lbnQsIHZhbHVlIDAgYW5kIHVuaXQgU1ZHX0xFTkdUSFRZUEVfTlVNQkVSIGFyZSByZXR1cm5lZC5cbiAqL1xuZnVuY3Rpb24gcGFyc2VWYWx1ZSh2YWx1ZVN0cmluZywgZmFsbGJhY2sgPSB0cnVlKSB7XG4gIGNvbnN0IFssIHJhd1ZhbHVlLCByYXdVbml0XSA9ICh2YWx1ZVN0cmluZyB8fCAnJykubWF0Y2godmFsdWVQYXR0ZXJuKSB8fCBbXVxuICBjb25zdCB1bml0ID0gdW5pdEJ5U3RyaW5nWyhyYXdVbml0IHx8ICcnKS50b0xvd2VyQ2FzZSgpXVxuICBpZiAocmF3VmFsdWUgIT09IHVuZGVmaW5lZCAmJiB1bml0ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gW3BhcnNlRmxvYXQocmF3VmFsdWUpLCB1bml0XVxuICB9XG4gIGlmIChmYWxsYmFjaykge1xuICAgIC8vIEZvciB1bmtub3duIHVuaXRzIG9yIHVucGFyc2FibGUgYXR0cmlidXRlcywgYnJvd3NlcnMgZmFsbCBiYWNrIHRvIHZhbHVlIDBcbiAgICByZXR1cm4gWzAsIHVuaXRUeXBlcy5TVkdfTEVOR1RIVFlQRV9OVU1CRVJdXG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKCdBbiBpbnZhbGlkIG9yIGlsbGVnYWwgc3RyaW5nIHdhcyBzcGVjaWZpZWQnKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB1bml0ICBVbml0IGNvbnN0YW50XG4gKi9cbmZ1bmN0aW9uIGdldFVuaXRGYWN0b3IodW5pdCkge1xuICBjb25zdCB1bml0RmFjdG9yID0gdW5pdEZhY3RvcnMuZ2V0KHVuaXQpXG4gIGlmICh1bml0RmFjdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IodW5pdEZhY3RvciArICcgaXMgbm90IGEga25vd24gdW5pdCBjb25zdGFudCcpXG4gIH1cbiAgaWYgKGlzTmFOKHVuaXRGYWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbml0ICR7dW5pdFN0cmluZ0J5Q29uc3RhbnQuZ2V0KHVuaXQpfSBpcyBub3Qgc3VwcG9ydGVkYClcbiAgfVxuICByZXR1cm4gdW5pdEZhY3RvclxufVxuXG4vKipcbiAqIEBwYXJhbSB7U1ZHTGVuZ3RofSBzdmdMZW5ndGhcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gdW5pdFN0cmluZyhzdmdMZW5ndGgpIHtcbiAgcmV0dXJuIHVuaXRTdHJpbmdCeUNvbnN0YW50LmdldChzdmdMZW5ndGgudW5pdFR5cGUpIHx8ICcnXG59XG5cbmV4dGVuZFN0YXRpYyhTVkdMZW5ndGgsIHVuaXRUeXBlcylcbiIsIi8vIEB0cy1jaGVja1xuaW1wb3J0IHsgU1ZHQW5pbWF0ZWRMZW5ndGggfSBmcm9tICcuL1NWR0FuaW1hdGVkTGVuZ3RoLmpzJ1xuaW1wb3J0IHsgU1ZHR3JhcGhpY3NFbGVtZW50IH0gZnJvbSAnLi9TVkdHcmFwaGljc0VsZW1lbnQuanMnXG5cbmV4cG9ydCBjbGFzcyBTVkdMaW5lRWxlbWVudCBleHRlbmRzIFNWR0dyYXBoaWNzRWxlbWVudCB7XG4gIHgxID0gbmV3IFNWR0FuaW1hdGVkTGVuZ3RoKHRoaXMsICd4MScpXG4gIHkxID0gbmV3IFNWR0FuaW1hdGVkTGVuZ3RoKHRoaXMsICd5MScpXG4gIHgyID0gbmV3IFNWR0FuaW1hdGVkTGVuZ3RoKHRoaXMsICd4MicpXG4gIHkyID0gbmV3IFNWR0FuaW1hdGVkTGVuZ3RoKHRoaXMsICd5MicpXG59XG4iLCJjb25zdCByYWRpYW5zID0gZnVuY3Rpb24gKGQpIHtcbiAgcmV0dXJuIGQgJSAzNjAgKiBNYXRoLlBJIC8gMTgwXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXRyaXhGYWN0b3J5IChhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIHZhciByID0gbmV3IFNWR01hdHJpeCgpXG4gIHIuYSA9IGFcbiAgci5iID0gYlxuICByLmMgPSBjXG4gIHIuZCA9IGRcbiAgci5lID0gZVxuICByLmYgPSBmXG4gIHJldHVybiByXG59XG5cbmV4cG9ydCBjbGFzcyBTVkdNYXRyaXgge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5hID0gdGhpcy5kID0gMVxuICAgIHRoaXMuYiA9IHRoaXMuYyA9IHRoaXMuZSA9IHRoaXMuZiA9IDBcbiAgfVxuXG4gIGludmVyc2UgKCkge1xuICAgIC8vIEdldCB0aGUgY3VycmVudCBwYXJhbWV0ZXJzIG91dCBvZiB0aGUgbWF0cml4XG4gICAgdmFyIGEgPSB0aGlzLmFcbiAgICB2YXIgYiA9IHRoaXMuYlxuICAgIHZhciBjID0gdGhpcy5jXG4gICAgdmFyIGQgPSB0aGlzLmRcbiAgICB2YXIgZSA9IHRoaXMuZVxuICAgIHZhciBmID0gdGhpcy5mXG5cbiAgICAvLyBJbnZlcnQgdGhlIDJ4MiBtYXRyaXggaW4gdGhlIHRvcCBsZWZ0XG4gICAgdmFyIGRldCA9IGEgKiBkIC0gYiAqIGNcbiAgICBpZiAoIWRldCkgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgaW52ZXJ0ICcgKyB0aGlzKVxuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSB0b3AgMngyIG1hdHJpeFxuICAgIHZhciBuYSA9IGQgLyBkZXRcbiAgICB2YXIgbmIgPSAtYiAvIGRldFxuICAgIHZhciBuYyA9IC1jIC8gZGV0XG4gICAgdmFyIG5kID0gYSAvIGRldFxuXG4gICAgLy8gQXBwbHkgdGhlIGludmVydGVkIG1hdHJpeCB0byB0aGUgdG9wIHJpZ2h0XG4gICAgdmFyIG5lID0gLShuYSAqIGUgKyBuYyAqIGYpXG4gICAgdmFyIG5mID0gLShuYiAqIGUgKyBuZCAqIGYpXG5cbiAgICAvLyBDb25zdHJ1Y3QgdGhlIGludmVydGVkIG1hdHJpeFxuICAgIHRoaXMuYSA9IG5hXG4gICAgdGhpcy5iID0gbmJcbiAgICB0aGlzLmMgPSBuY1xuICAgIHRoaXMuZCA9IG5kXG4gICAgdGhpcy5lID0gbmVcbiAgICB0aGlzLmYgPSBuZlxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIG11bHRpcGx5IChtKSB7XG4gICAgdmFyIHIgPSBuZXcgU1ZHTWF0cml4KClcbiAgICByLmEgPSB0aGlzLmEgKiBtLmEgKyB0aGlzLmMgKiBtLmIgKyB0aGlzLmUgKiAwXG4gICAgci5iID0gdGhpcy5iICogbS5hICsgdGhpcy5kICogbS5iICsgdGhpcy5mICogMFxuICAgIHIuYyA9IHRoaXMuYSAqIG0uYyArIHRoaXMuYyAqIG0uZCArIHRoaXMuZSAqIDBcbiAgICByLmQgPSB0aGlzLmIgKiBtLmMgKyB0aGlzLmQgKiBtLmQgKyB0aGlzLmYgKiAwXG4gICAgci5lID0gdGhpcy5hICogbS5lICsgdGhpcy5jICogbS5mICsgdGhpcy5lICogMVxuICAgIHIuZiA9IHRoaXMuYiAqIG0uZSArIHRoaXMuZCAqIG0uZiArIHRoaXMuZiAqIDFcbiAgICByZXR1cm4gclxuICB9XG5cbiAgcm90YXRlIChyLCB4LCB5KSB7XG4gICAgciA9IHIgJSAzNjAgKiBNYXRoLlBJIC8gMTgwXG4gICAgcmV0dXJuIHRoaXMubXVsdGlwbHkobWF0cml4RmFjdG9yeShcbiAgICAgIE1hdGguY29zKHIpLFxuICAgICAgTWF0aC5zaW4ociksXG4gICAgICAtTWF0aC5zaW4ociksXG4gICAgICBNYXRoLmNvcyhyKSxcbiAgICAgIHggPyAtTWF0aC5jb3MocikgKiB4ICsgTWF0aC5zaW4ocikgKiB5ICsgeCA6IDAsXG4gICAgICB5ID8gLU1hdGguc2luKHIpICogeCAtIE1hdGguY29zKHIpICogeSArIHkgOiAwXG4gICAgKSlcbiAgfVxuXG4gIHNjYWxlIChzY2FsZVgsIHNjYWxlWSA9IHNjYWxlWCkge1xuICAgIHJldHVybiB0aGlzLm11bHRpcGx5KG1hdHJpeEZhY3Rvcnkoc2NhbGVYLCAwLCAwLCBzY2FsZVksIDAsIDApKVxuICB9XG5cbiAgc2tldyAoeCwgeSkge1xuICAgIHJldHVybiB0aGlzLm11bHRpcGx5KG1hdHJpeEZhY3RvcnkoMSwgTWF0aC50YW4ocmFkaWFucyh5KSksIE1hdGgudGFuKHJhZGlhbnMoeCkpLCAxLCAwLCAwKSlcbiAgfVxuXG4gIHNrZXdYICh4KSB7XG4gICAgcmV0dXJuIHRoaXMuc2tldyh4LCAwKVxuICB9XG5cbiAgc2tld1kgKHkpIHtcbiAgICByZXR1cm4gdGhpcy5za2V3KDAsIHkpXG4gIH1cblxuICB0b1N0cmluZyAoKSB7XG4gICAgcmV0dXJuICdTVkdNYXRyaXgnXG4gIH1cblxuICB0cmFuc2xhdGUgKHggPSAwLCB5ID0gMCkge1xuICAgIHJldHVybiB0aGlzLm11bHRpcGx5KG1hdHJpeEZhY3RvcnkoMSwgMCwgMCwgMSwgeCwgeSkpXG4gIH1cblxufVxuIiwiaW1wb3J0IHsgU1ZHR3JhcGhpY3NFbGVtZW50IH0gZnJvbSAnLi9TVkdHcmFwaGljc0VsZW1lbnQuanMnXG5pbXBvcnQgKiBhcyBwYXRoVXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMvcGF0aFV0aWxzLmpzJ1xuXG5leHBvcnQgY2xhc3MgU1ZHUGF0aEVsZW1lbnQgZXh0ZW5kcyBTVkdHcmFwaGljc0VsZW1lbnQge1xuICBnZXRQb2ludEF0TGVuZ3RoIChsZW4pIHtcbiAgICByZXR1cm4gcGF0aFV0aWxzLnBvaW50QXRMZW5ndGgodGhpcy5nZXRBdHRyaWJ1dGUoJ2QnKSwgbGVuKVxuICB9XG5cbiAgZ2V0VG90YWxMZW5ndGggKCkge1xuICAgIHJldHVybiBwYXRoVXRpbHMubGVuZ3RoKHRoaXMuZ2V0QXR0cmlidXRlKCdkJykpXG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBTVkdQb2ludCB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLnggPSAwXG4gICAgdGhpcy55ID0gMFxuICB9XG5cbiAgbWF0cml4VHJhbnNmb3JtIChtKSB7XG4gICAgdmFyIHIgPSBuZXcgU1ZHUG9pbnQoKVxuICAgIHIueCA9IG0uYSAqIHRoaXMueCArIG0uYyAqIHRoaXMueSArIG0uZSAqIDFcbiAgICByLnkgPSBtLmIgKiB0aGlzLnggKyBtLmQgKiB0aGlzLnkgKyBtLmYgKiAxXG4gICAgcmV0dXJuIHJcbiAgfVxufVxuIiwiLy8gQHRzLWNoZWNrXG5pbXBvcnQgeyBTVkdHcmFwaGljc0VsZW1lbnQgfSBmcm9tICcuL1NWR0dyYXBoaWNzRWxlbWVudC5qcydcbmltcG9ydCB7IFNWR0FuaW1hdGVkTGVuZ3RoIH0gZnJvbSAnLi9TVkdBbmltYXRlZExlbmd0aC5qcydcblxuZXhwb3J0IGNsYXNzIFNWR1JlY3RFbGVtZW50IGV4dGVuZHMgU1ZHR3JhcGhpY3NFbGVtZW50IHtcbiAgeCA9IG5ldyBTVkdBbmltYXRlZExlbmd0aCh0aGlzLCAneCcpXG4gIHkgPSBuZXcgU1ZHQW5pbWF0ZWRMZW5ndGgodGhpcywgJ3knKVxuICB3aWR0aCA9IG5ldyBTVkdBbmltYXRlZExlbmd0aCh0aGlzLCAnd2lkdGgnKVxuICBoZWlnaHQgPSBuZXcgU1ZHQW5pbWF0ZWRMZW5ndGgodGhpcywgJ2hlaWdodCcpXG4gIHJ4ID0gbmV3IFNWR0FuaW1hdGVkTGVuZ3RoKHRoaXMsICdyeCcpXG4gIHJ5ID0gbmV3IFNWR0FuaW1hdGVkTGVuZ3RoKHRoaXMsICdyeScpXG59XG4iLCJpbXBvcnQgeyBTVkdHcmFwaGljc0VsZW1lbnQgfSBmcm9tICcuL1NWR0dyYXBoaWNzRWxlbWVudC5qcydcbmltcG9ydCB7IEJveCB9IGZyb20gJy4uLy4uL290aGVyL0JveC5qcydcbmltcG9ydCB7IFNWR01hdHJpeCB9IGZyb20gJy4vU1ZHTWF0cml4LmpzJ1xuaW1wb3J0IHsgU1ZHUG9pbnQgfSBmcm9tICcuL1NWR1BvaW50LmpzJ1xuXG5leHBvcnQgY2xhc3MgU1ZHU1ZHRWxlbWVudCBleHRlbmRzIFNWR0dyYXBoaWNzRWxlbWVudCB7XG4gIGNyZWF0ZVNWR01hdHJpeCAoKSB7XG4gICAgcmV0dXJuIG5ldyBTVkdNYXRyaXgoKVxuICB9XG5cbiAgY3JlYXRlU1ZHUG9pbnQgKCkge1xuICAgIHJldHVybiBuZXcgU1ZHUG9pbnQoKVxuICB9XG5cbiAgY3JlYXRlU1ZHUmVjdCAoKSB7XG4gICAgcmV0dXJuIG5ldyBCb3goKVxuICB9XG5cbn1cbiIsImltcG9ydCB7IFNWR0FuaW1hdGVkTGVuZ3RoIH0gZnJvbSAnLi9TVkdBbmltYXRlZExlbmd0aC5qcydcbmltcG9ydCB7IFNWR0dyYXBoaWNzRWxlbWVudCB9IGZyb20gJy4vU1ZHR3JhcGhpY3NFbGVtZW50LmpzJ1xuXG5leHBvcnQgY2xhc3MgU1ZHVGV4dENvbnRlbnRFbGVtZW50IGV4dGVuZHMgU1ZHR3JhcGhpY3NFbGVtZW50IHtcbiAgdGV4dFdpZHRoID0gbmV3IFNWR0FuaW1hdGVkTGVuZ3RoKHRoaXMsICd0ZXh0V2lkdGgnKVxuXG4gIGdldENvbXB1dGVkVGV4dExlbmd0aCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QkJveCgpLndpZHRoXG4gIH1cbn1cbiIsImltcG9ydCB7IFdpbmRvdyB9IGZyb20gJy4vZG9tL1dpbmRvdy5qcydcbmltcG9ydCB7IERPTUltcGxlbWVudGF0aW9uIH0gZnJvbSAnLi9kb20vRG9jdW1lbnQuanMnXG5pbXBvcnQgKiBhcyBuYW1lc3BhY2VzIGZyb20gJy4vdXRpbHMvbmFtZXNwYWNlcy5qcydcblxuY29uc3QgeyBjcmVhdGVEb2N1bWVudCwgY3JlYXRlSFRNTERvY3VtZW50IH0gPSBET01JbXBsZW1lbnRhdGlvblxuXG5jb25zdCBjcmVhdGVXaW5kb3cgPSAoLi4uYXJncykgPT4ge1xuICBjb25zdCB3aW5kb3cgPSBuZXcgV2luZG93KClcbiAgY29uc3QgZG9jdW1lbnQgPSBjcmVhdGVEb2N1bWVudCguLi5hcmdzKVxuICB3aW5kb3cuZG9jdW1lbnQgPSBkb2N1bWVudFxuICBkb2N1bWVudC5kZWZhdWx0VmlldyA9IHdpbmRvd1xuICByZXR1cm4gd2luZG93XG59XG5cbmNvbnN0IGNyZWF0ZUhUTUxXaW5kb3cgPSAodGl0bGUpID0+IHtcbiAgY29uc3Qgd2luZG93ID0gbmV3IFdpbmRvdygpXG4gIGNvbnN0IGRvY3VtZW50ID0gRE9NSW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KHRpdGxlKVxuICB3aW5kb3cuZG9jdW1lbnQgPSBkb2N1bWVudFxuICBkb2N1bWVudC5kZWZhdWx0VmlldyA9IHdpbmRvd1xuICByZXR1cm4gd2luZG93XG59XG5cbmNvbnN0IGNyZWF0ZVNWR1dpbmRvdyA9ICgpID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVdpbmRvdyhuYW1lc3BhY2VzLnN2ZywgJ3N2ZycpXG59XG5cbmNvbnN0IGNyZWF0ZVNWR0RvY3VtZW50ID0gKCkgPT4ge1xuICByZXR1cm4gY3JlYXRlRG9jdW1lbnQobmFtZXNwYWNlcy5zdmcsICdzdmcnKVxufVxuXG5leHBvcnQge1xuICBjcmVhdGVEb2N1bWVudCxcbiAgY3JlYXRlSFRNTERvY3VtZW50LFxuICBjcmVhdGVTVkdEb2N1bWVudCxcbiAgY3JlYXRlV2luZG93LFxuICBjcmVhdGVIVE1MV2luZG93LFxuICBjcmVhdGVTVkdXaW5kb3dcbn1cbiIsImltcG9ydCAqIGFzIHJlZ2V4IGZyb20gJy4uL3V0aWxzL3JlZ2V4LmpzJ1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuL1BvaW50LmpzJ1xuXG5leHBvcnQgY2xhc3MgQm94IHtcbiAgY29uc3RydWN0b3IgKHNvdXJjZSkge1xuICAgIHZhciBiYXNlID0gWyAwLCAwLCAwLCAwIF1cbiAgICBzb3VyY2UgPSB0eXBlb2Ygc291cmNlID09PSAnc3RyaW5nJyA/IHNvdXJjZS5zcGxpdChyZWdleC5kZWxpbWl0ZXIpLm1hcChwYXJzZUZsb2F0KVxuICAgICAgOiBBcnJheS5pc0FycmF5KHNvdXJjZSkgPyBzb3VyY2VcbiAgICAgIDogdHlwZW9mIHNvdXJjZSA9PT0gJ29iamVjdCcgPyBbXG4gICAgICAgIHNvdXJjZS5sZWZ0ICE9IG51bGwgPyBzb3VyY2UubGVmdCA6IHNvdXJjZS54LFxuICAgICAgICBzb3VyY2UudG9wICE9IG51bGwgPyBzb3VyY2UudG9wIDogc291cmNlLnksXG4gICAgICAgIHNvdXJjZS53aWR0aCxcbiAgICAgICAgc291cmNlLmhlaWdodFxuICAgICAgXVxuICAgICAgOiBhcmd1bWVudHMubGVuZ3RoID09PSA0ID8gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpXG4gICAgICA6IGJhc2VcblxuICAgIHRoaXMueCA9IHRoaXMubGVmdCA9IHNvdXJjZVswXVxuICAgIHRoaXMueSA9IHRoaXMudG9wID0gc291cmNlWzFdXG4gICAgdGhpcy53aWR0aCA9IHNvdXJjZVsyXVxuICAgIHRoaXMuaGVpZ2h0ID0gc291cmNlWzNdXG4gICAgdGhpcy5yaWdodCA9IHRoaXMubGVmdCArIHRoaXMud2lkdGhcbiAgICB0aGlzLmJvdHRvbSA9IHRoaXMudG9wICsgdGhpcy5oZWlnaHRcbiAgfVxuXG4gIC8vIE1lcmdlIHJlY3QgYm94IHdpdGggYW5vdGhlciwgcmV0dXJuIGEgbmV3IGluc3RhbmNlXG4gIG1lcmdlIChib3gpIHtcbiAgICBpZiAoYm94IGluc3RhbmNlb2YgTm9Cb3gpIHJldHVybiBuZXcgQm94KHRoaXMpXG5cbiAgICB2YXIgeCA9IE1hdGgubWluKHRoaXMueCwgYm94LngpXG4gICAgdmFyIHkgPSBNYXRoLm1pbih0aGlzLnksIGJveC55KVxuXG4gICAgcmV0dXJuIG5ldyBCb3goXG4gICAgICB4LCB5LFxuICAgICAgTWF0aC5tYXgodGhpcy54ICsgdGhpcy53aWR0aCwgYm94LnggKyBib3gud2lkdGgpIC0geCxcbiAgICAgIE1hdGgubWF4KHRoaXMueSArIHRoaXMuaGVpZ2h0LCBib3gueSArIGJveC5oZWlnaHQpIC0geVxuICAgIClcbiAgfVxuXG4gIHRyYW5zZm9ybSAobSkge1xuICAgIHZhciB4TWluID0gSW5maW5pdHlcbiAgICB2YXIgeE1heCA9IC1JbmZpbml0eVxuICAgIHZhciB5TWluID0gSW5maW5pdHlcbiAgICB2YXIgeU1heCA9IC1JbmZpbml0eVxuXG4gICAgdmFyIHB0cyA9IFtcbiAgICAgIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSksXG4gICAgICBuZXcgUG9pbnQodGhpcy54ICsgdGhpcy53aWR0aCwgdGhpcy55KSxcbiAgICAgIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSArIHRoaXMuaGVpZ2h0KSxcbiAgICAgIG5ldyBQb2ludCh0aGlzLnggKyB0aGlzLndpZHRoLCB0aGlzLnkgKyB0aGlzLmhlaWdodClcbiAgICBdXG5cbiAgICBwdHMuZm9yRWFjaChmdW5jdGlvbiAocCkge1xuICAgICAgcCA9IHAudHJhbnNmb3JtKG0pXG4gICAgICB4TWluID0gTWF0aC5taW4oeE1pbiwgcC54KVxuICAgICAgeE1heCA9IE1hdGgubWF4KHhNYXgsIHAueClcbiAgICAgIHlNaW4gPSBNYXRoLm1pbih5TWluLCBwLnkpXG4gICAgICB5TWF4ID0gTWF0aC5tYXgoeU1heCwgcC55KVxuICAgIH0pXG5cbiAgICByZXR1cm4gbmV3IEJveChcbiAgICAgIHhNaW4sIHlNaW4sXG4gICAgICB4TWF4IC0geE1pbixcbiAgICAgIHlNYXggLSB5TWluXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOb0JveCBleHRlbmRzIEJveCB7XG4gIC8vIE5vQm94IGhhcyBubyB2YWxpZCB2YWx1ZXMgc28gaXQgY2FudCBiZSBtZXJnZWRcbiAgbWVyZ2UgKGJveCkge1xuICAgIHJldHVybiBib3ggaW5zdGFuY2VvZiBOb0JveCA/IG5ldyBOb0JveCgpIDogbmV3IEJveChib3gpXG4gIH1cblxuICB0cmFuc2Zvcm0gKG0pIHtcbiAgICByZXR1cm4gbmV3IE5vQm94KClcbiAgfVxufVxuIiwiaW1wb3J0IHsgcmVtb3ZlUXVvdGVzLCBzcGxpdE5vdEluQnJhY2tldHMgfSBmcm9tICcuLi91dGlscy9zdHJVdGlscy5qcydcbmltcG9ydCAqIGFzIHJlZ2V4IGZyb20gJy4uL3V0aWxzL3JlZ2V4LmpzJ1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gJy4uL3V0aWxzL25hbWVzcGFjZXMuanMnXG5cbmV4cG9ydCBjbGFzcyBDc3NRdWVyeSB7XG4gIGNvbnN0cnVjdG9yIChxdWVyeSkge1xuICAgIGlmIChDc3NRdWVyeS5jYWNoZS5oYXMocXVlcnkpKSB7XG4gICAgICB0aGlzLnF1ZXJpZXMgPSBDc3NRdWVyeS5jYWNoZS5nZXQocXVlcnkpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgcXVlcmllcyA9IHNwbGl0Tm90SW5CcmFja2V0cyhxdWVyeSwgJywnKVxuXG4gICAgcXVlcmllcyA9IHF1ZXJpZXMubWFwKHF1ZXJ5ID0+IHtcblxuICAgICAgbGV0IHJvdW5kQnJhY2tldHMgPSAwXG4gICAgICBsZXQgc3F1YXJlQnJhY2tldHMgPSAwXG5cbiAgICAgIC8vIHRoaXMgaXMgdGhlIHNhbWUgYXMgYWJvdmUgYnV0IGVhc2llclxuICAgICAgcXVlcnkgPSBxdWVyeS5yZXBsYWNlKC9bKClbXFxdPn4rXS9nLCBmdW5jdGlvbiAoY2gpIHtcbiAgICAgICAgaWYgKGNoID09PSAnKCcpICsrcm91bmRCcmFja2V0c1xuICAgICAgICBlbHNlIGlmIChjaCA9PT0gJyknKSAtLXJvdW5kQnJhY2tldHNcbiAgICAgICAgZWxzZSBpZiAoY2ggPT09ICdbJykgKytzcXVhcmVCcmFja2V0c1xuICAgICAgICBlbHNlIGlmIChjaCA9PT0gJ10nKSAtLXNxdWFyZUJyYWNrZXRzXG5cbiAgICAgICAgaWYgKCcoKVtdJy5pbmRleE9mKGNoKSA+IC0xKSByZXR1cm4gY2hcbiAgICAgICAgaWYgKHNxdWFyZUJyYWNrZXRzIHx8IHJvdW5kQnJhY2tldHMpIHJldHVybiBjaFxuXG4gICAgICAgIHJldHVybiAnICcgKyBjaCArICcgJ1xuICAgICAgfSlcblxuICAgICAgLy8gc3BsaXQgYXQgc3BhY2UgYW5kIHJlbW92ZSBlbXB0eSByZXN1bHRzXG4gICAgICBxdWVyeSA9IHNwbGl0Tm90SW5CcmFja2V0cyhxdWVyeSwgJyAnKS5maWx0ZXIoZWwgPT4gISFlbC5sZW5ndGgpXG5cbiAgICAgIGNvbnN0IHBhaXJzID0gW11cblxuICAgICAgbGV0IHJlbGF0aW9uID0gJyUnXG5cbiAgICAgIC8vIGdlbmVyYXRlIHF1ZXJ5bm9kZSByZWxhdGlvbiB0dXBsZXNcbiAgICAgIGZvciAobGV0IGkgPSAwLCBpbCA9IHF1ZXJ5Lmxlbmd0aDsgaSA8IGlsOyArK2kpIHtcblxuICAgICAgICBpZiAoJz5+KyUnLmluZGV4T2YocXVlcnlbaV0pID4gLTEpIHtcbiAgICAgICAgICByZWxhdGlvbiA9IHF1ZXJ5W2ldXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIHBhaXJzLnB1c2goWyByZWxhdGlvbiwgcXVlcnlbaV0gXSlcbiAgICAgICAgcmVsYXRpb24gPSAnJSdcblxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFpcnNcblxuICAgIH0pXG5cbiAgICB0aGlzLnF1ZXJpZXMgPSBxdWVyaWVzXG5cbiAgICAvLyB0byBwcmV2ZW50IG1lbW9yeSBsZWFrcyB3ZSBoYXZlIHRvIG1hbmFnZSBvdXIgY2FjaGUuXG4gICAgLy8gd2UgZGVsZXRlIGV2ZXJ5dGhpbmcgd2hpY2ggaXMgb2xkZXIgdGhhbiA1MCBlbnRyaWVzXG4gICAgaWYgKENzc1F1ZXJ5LmNhY2hlS2V5cy5sZW5ndGggPiA1MCkge1xuICAgICAgQ3NzUXVlcnkuY2FjaGUuZGVsZXRlKENzc1F1ZXJ5LmNhY2hlS2V5cy5zaGlmdCgpKVxuICAgIH1cbiAgICBDc3NRdWVyeS5jYWNoZS5zZXQocXVlcnksIHF1ZXJpZXMpXG4gICAgQ3NzUXVlcnkuY2FjaGVLZXlzLnB1c2gocXVlcnkpXG5cbiAgfVxuXG4gIG1hdGNoZXMgKG5vZGUsIHNjb3BlKSB7XG4gICAgZm9yIChsZXQgaSA9IHRoaXMucXVlcmllcy5sZW5ndGg7IGktLTspIHtcbiAgICAgIGlmICh0aGlzLm1hdGNoSGVscGVyKHRoaXMucXVlcmllc1tpXSwgbm9kZSwgc2NvcGUpKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbWF0Y2hIZWxwZXIgKHF1ZXJ5LCBub2RlLCBzY29wZSkge1xuICAgIHF1ZXJ5ID0gcXVlcnkuc2xpY2UoKVxuICAgIGNvbnN0IGxhc3QgPSBxdWVyeS5wb3AoKVxuXG4gICAgaWYgKCFuZXcgQ3NzUXVlcnlOb2RlKGxhc3RbMV0pLm1hdGNoZXMobm9kZSwgc2NvcGUpKSB7IHJldHVybiBmYWxzZSB9XG5cbiAgICBpZiAoIXF1ZXJ5Lmxlbmd0aCkgcmV0dXJuIHRydWVcblxuICAgIGlmIChsYXN0WzBdID09PSAnLCcpIHJldHVybiB0cnVlXG5cbiAgICBpZiAobGFzdFswXSA9PT0gJysnKSB7XG4gICAgICByZXR1cm4gISFub2RlLnByZXZpb3VzU2libGluZyAmJiB0aGlzLm1hdGNoSGVscGVyKHF1ZXJ5LCBub2RlLnByZXZpb3VzU2libGluZywgc2NvcGUpXG4gICAgfVxuXG4gICAgaWYgKGxhc3RbMF0gPT09ICc+Jykge1xuICAgICAgcmV0dXJuICEhbm9kZS5wYXJlbnROb2RlICYmIHRoaXMubWF0Y2hIZWxwZXIocXVlcnksIG5vZGUucGFyZW50Tm9kZSwgc2NvcGUpXG4gICAgfVxuXG4gICAgaWYgKGxhc3RbMF0gPT09ICd+Jykge1xuICAgICAgd2hpbGUgKChub2RlID0gbm9kZS5wcmV2aW91c1NpYmxpbmcpKSB7XG4gICAgICAgIGlmICh0aGlzLm1hdGNoSGVscGVyKHF1ZXJ5LCBub2RlLCBzY29wZSkpIHsgcmV0dXJuIHRydWUgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKGxhc3RbMF0gPT09ICclJykge1xuICAgICAgd2hpbGUgKChub2RlID0gbm9kZS5wYXJlbnROb2RlKSkge1xuICAgICAgICBpZiAodGhpcy5tYXRjaEhlbHBlcihxdWVyeSwgbm9kZSwgc2NvcGUpKSB7IHJldHVybiB0cnVlIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICB9XG59XG5cbkNzc1F1ZXJ5LmNhY2hlID0gbmV3IE1hcCgpXG5Dc3NRdWVyeS5jYWNoZUtleXMgPSBbXVxuXG4vLyBjaGVjayBpZiBbbm9kZV0gaXMgdGhlIFtudGhdIGNoaWxkIG9mIFthcnJdIHdoZXJlIG50aCBjYW4gYWxzbyBiZSBhIGZvcm11bGFcbmNvbnN0IG50aCA9IChub2RlLCBhcnIsIG50aCkgPT4ge1xuXG4gIGlmIChudGggPT09ICdldmVuJykgbnRoID0gJzJuJ1xuICBlbHNlIGlmIChudGggPT09ICdvZGQnKSBudGggPSAnMm4rMSdcblxuICAvLyBjaGVjayBmb3IgZXZhbCBjaGFyc1xuICBpZiAoL1teXFxkXFwtbisqL10rLy50ZXN0KG50aCkpIHJldHVybiBmYWxzZVxuXG4gIG50aCA9IG50aC5yZXBsYWNlKCduJywgJypuJylcblxuICAvLyBldmFsIG50aCB0byBnZXQgdGhlIGluZGV4XG4gIGZvciAodmFyIGksIG4gPSAwLCBubCA9IGFyci5sZW5ndGg7IG4gPCBubDsgKytuKSB7XG4gICAgLyogZXNsaW50IG5vLWV2YWw6IG9mZiAqL1xuICAgIGkgPSBldmFsKG50aClcblxuICAgIGlmIChpID4gbmwpIGJyZWFrXG4gICAgaWYgKGFycltpIC0gMV0gPT09IG5vZGUpIHJldHVybiB0cnVlXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuY29uc3QgbG93ZXIgPSBhID0+IGEudG9Mb3dlckNhc2UoKVxuXG4vLyBjaGVja3MgaWYgYSBhbmQgYiBhcmUgZXF1YWwuIElzIGluc2Vuc2l0aXZlIHdoZW4gaSBpcyB0cnVlXG5jb25zdCBlcSA9IChhLCBiLCBpKSA9PiBpID8gbG93ZXIoYSkgPT09IGxvd2VyKGIpIDogYSA9PT0gYlxuXG4vLyBbaV0gKHByZWJvdW5kKSBpcyB0cnVlIGlmIGluc2Vuc2l0aXZlIG1hdGNoaW5nIGlzIHJlcXVpcmVkXG4vLyBbYV0gKHByZWJvdW5kKSBpcyB0aGUgdmFsdWUgdGhlIGF0dHIgaXMgY29tcGFyZWQgdG9cbi8vIFtiXSAocGFzc2VkKSAgIGlzIHRoZSB2YWx1ZSBvZiB0aGUgYXR0cmlidXRlXG5jb25zdCBhdHRyaWJ1dGVNYXRjaGVyID0ge1xuICAnPSc6IChpLCBhLCBiKSA9PiBlcShhLCBiLCBpKSxcbiAgJ349JzogKGksIGEsIGIpID0+IGIuc3BsaXQocmVnZXguZGVsaW1pdGVyKS5maWx0ZXIoZWwgPT4gZXEoZWwsIGEsIGkpKS5sZW5ndGggPiAwLFxuICAnfD0nOiAoaSwgYSwgYikgPT4gZXEoYi5zcGxpdChyZWdleC5kZWxpbWl0ZXIpWzBdLCBhLCBpKSxcbiAgJ149JzogKGksIGEsIGIpID0+IGkgPyBsb3dlcihiKS5zdGFydHNXaXRoKGxvd2VyKGEpKSA6IGIuc3RhcnRzV2l0aChhKSxcbiAgJyQ9JzogKGksIGEsIGIpID0+IGkgPyBsb3dlcihiKS5lbmRzV2l0aChsb3dlcihhKSkgOiBiLmVuZHNXaXRoKGEpLFxuICAnKj0nOiAoaSwgYSwgYikgPT4gaSA/IGxvd2VyKGIpLmluY2x1ZGVzKGxvd2VyKGEpKSA6IGIuaW5jbHVkZXMoYSksXG4gICcqJzogKGksIGEsIGIpID0+IGIgIT0gbnVsbFxufVxuXG5jb25zdCBnZXRBdHRyaWJ1dGVWYWx1ZSA9IChwcmVmaXgsIG5hbWUsIG5vZGUpID0+IHtcbiAgaWYgKCFwcmVmaXggfHwgcHJlZml4ID09PSAnKicpIHtcbiAgICByZXR1cm4gbm9kZS5nZXRBdHRyaWJ1dGUobmFtZSlcbiAgfVxuICByZXR1cm4gbm9kZS5nZXRBdHRyaWJ1dGUocHJlZml4ICsgJzonICsgbmFtZSlcbn1cblxuLy8gW2FdIChwcmVib3VuZCkgW2Fdcmd1bWVudCBvZiB0aGUgcHNldWRvIHNlbGVjdG9yXG4vLyBbbl0gKHBhc3NlZCkgICBbbl1vZGVcbi8vIFtzXSAocGFzc2VkKSAgIFtzXWNvcGUgLSB0aGUgZWxlbWVudCB0aGlzIHF1ZXJ5IGlzIHNjb3BlZCB0b1xuY29uc3QgcHNldWRvTWF0Y2hlciA9IHtcbiAgJ2ZpcnN0LWNoaWxkJzogKGEsIG4pID0+IG4ucGFyZW50Tm9kZSAmJiBuLnBhcmVudE5vZGUuZmlyc3RDaGlsZCA9PT0gbixcbiAgJ2xhc3QtY2hpbGQnOiAoYSwgbikgPT4gbi5wYXJlbnROb2RlICYmIG4ucGFyZW50Tm9kZS5sYXN0Q2hpbGQgPT09IG4sXG4gICdudGgtY2hpbGQnOiAoYSwgbikgPT4gbi5wYXJlbnROb2RlICYmIG50aChuLCBuLnBhcmVudE5vZGUuY2hpbGROb2RlcywgYSksXG4gICdudGgtbGFzdC1jaGlsZCc6IChhLCBuKSA9PiBuLnBhcmVudE5vZGUgJiYgbnRoKG4sIG4ucGFyZW50Tm9kZS5jaGlsZE5vZGVzLnNsaWNlKCkucmV2ZXJzZSgpLCBhKSxcbiAgJ2ZpcnN0LW9mLXR5cGUnOiAoYSwgbikgPT4gbi5wYXJlbnROb2RlICYmIG4ucGFyZW50Tm9kZS5jaGlsZE5vZGVzLmZpbHRlcihlbCA9PiBlbC5ub2RlTmFtZSA9PT0gbi5ub2RlTmFtZSlbMF0gPT09IG4sXG4gICdsYXN0LW9mLXR5cGUnOiAoYSwgbikgPT4gbi5wYXJlbnROb2RlICYmIG4ucGFyZW50Tm9kZS5jaGlsZE5vZGVzLmZpbHRlcihlbCA9PiBlbC5ub2RlTmFtZSA9PT0gbi5ub2RlTmFtZSkucG9wKCkgPT09IG4sXG4gICdudGgtb2YtdHlwZSc6IChhLCBuKSA9PiBuLnBhcmVudE5vZGUgJiYgbnRoKG4sIG4ucGFyZW50Tm9kZS5jaGlsZE5vZGVzLmZpbHRlcihlbCA9PiBlbC5ub2RlTmFtZSA9PT0gbi5ub2RlTmFtZSksIGEpLFxuICAnbnRoLWxhc3Qtb2YtdHlwZSc6IChhLCBuKSA9PiBuLnBhcmVudE5vZGUgJiYgbnRoKG4sIG4ucGFyZW50Tm9kZS5jaGlsZE5vZGVzLmZpbHRlcihlbCA9PiBlbC5ub2RlTmFtZSA9PT0gbi5ub2RlTmFtZSkucmV2ZXJzZSgpLCBhKSxcbiAgJ29ubHktY2hpbGQnOiAoYSwgbikgPT4gbi5wYXJlbnROb2RlICYmIG4ucGFyZW50Tm9kZS5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMSxcbiAgJ29ubHktb2YtdHlwZSc6IChhLCBuKSA9PiBuLnBhcmVudE5vZGUgJiYgbi5wYXJlbnROb2RlLmNoaWxkTm9kZXMuZmlsdGVyKGVsID0+IGVsLm5vZGVOYW1lID09PSBuLm5vZGVOYW1lKS5sZW5ndGggPT09IDEsXG4gIHJvb3Q6IChhLCBuKSA9PiBuLm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ID09PSBuLFxuICBub3Q6IChhLCBuLCBzKSA9PiAhKG5ldyBDc3NRdWVyeShhKSkubWF0Y2hlcyhuLCBzKSxcbiAgbWF0Y2hlczogKGEsIG4sIHMpID0+IChuZXcgQ3NzUXVlcnkoYSkpLm1hdGNoZXMobiwgcyksXG4gIHNjb3BlOiAoYSwgbiwgcykgPT4gbiA9PT0gc1xufVxuXG5leHBvcnQgY2xhc3MgQ3NzUXVlcnlOb2RlIHtcbiAgY29uc3RydWN0b3IgKG5vZGUpIHtcbiAgICB0aGlzLnRhZyA9ICcnXG4gICAgdGhpcy5pZCA9ICcnXG4gICAgdGhpcy5jbGFzc0xpc3QgPSBbXVxuICAgIHRoaXMuYXR0cnMgPSBbXVxuICAgIHRoaXMucHNldWRvID0gW11cblxuICAgIC8vIG1hdGNoIHRoZSB0YWcgbmFtZVxuICAgIGxldCBtYXRjaGVzID0gbm9kZS5tYXRjaCgvXltcXHctXSt8XlxcKi8pXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIHRoaXMudGFnID0gbWF0Y2hlc1swXVxuICAgICAgbm9kZSA9IG5vZGUuc2xpY2UodGhpcy50YWcubGVuZ3RoKVxuICAgIH1cblxuICAgIC8vIG1hdGNoIHBzZXVkbyBjbGFzc2VzXG4gICAgd2hpbGUgKChtYXRjaGVzID0gLzooW1xcdy1dKykoPzpcXCgoLispXFwpKT8vZy5leGVjKG5vZGUpKSkge1xuICAgICAgdGhpcy5wc2V1ZG8ucHVzaChwc2V1ZG9NYXRjaGVyW21hdGNoZXNbMV1dLmJpbmQodGhpcywgcmVtb3ZlUXVvdGVzKG1hdGNoZXNbMl0gfHwgJycpKSlcbiAgICAgIG5vZGUgPSBub2RlLnNsaWNlKDAsIG1hdGNoZXMuaW5kZXgpICsgbm9kZS5zbGljZShtYXRjaGVzLmluZGV4ICsgbWF0Y2hlc1swXS5sZW5ndGgpXG4gICAgfVxuXG4gICAgLy8gbWF0Y2ggYXR0cmlidXRlc1xuICAgIHdoaWxlICgobWF0Y2hlcyA9IC9cXFsoW1xcdy0qXStcXHwpPyhbXFx3LV0rKSgoWz1efiR8Kl0rKSguKz8pKCArW2lJXSk/KT9cXF0vZy5leGVjKG5vZGUpKSkge1xuICAgICAgY29uc3QgcHJlZml4ID0gbWF0Y2hlc1sxXSA/IG1hdGNoZXNbMV0uc3BsaXQoJ3wnKVswXSA6IG51bGxcbiAgICAgIHRoaXMuYXR0cnMucHVzaCh7XG4gICAgICAgIG5hbWU6IG1hdGNoZXNbMl0sXG4gICAgICAgIGdldFZhbHVlOiBnZXRBdHRyaWJ1dGVWYWx1ZS5iaW5kKHRoaXMsIHByZWZpeCwgbWF0Y2hlc1syXSksXG4gICAgICAgIG1hdGNoZXI6IGF0dHJpYnV0ZU1hdGNoZXJbbWF0Y2hlc1s0XSB8fCAnKiddLmJpbmQoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICAhIW1hdGNoZXNbNl0sIC8vIGNhc2UgaW5zZW5zaXRpdmUgeWVzL25vXG4gICAgICAgICAgcmVtb3ZlUXVvdGVzKChtYXRjaGVzWzVdIHx8ICcnKS50cmltKCkpIC8vIGF0dHJpYnV0ZSB2YWx1ZVxuICAgICAgICApXG4gICAgICB9KVxuICAgICAgbm9kZSA9IG5vZGUuc2xpY2UoMCwgbWF0Y2hlcy5pbmRleCkgKyBub2RlLnNsaWNlKG1hdGNoZXMuaW5kZXggKyBtYXRjaGVzWzBdLmxlbmd0aClcbiAgICB9XG5cbiAgICAvLyBtYXRjaCB0aGUgaWRcbiAgICBtYXRjaGVzID0gbm9kZS5tYXRjaCgvIyhbXFx3LV0rKS8pXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIHRoaXMuaWQgPSBtYXRjaGVzWzFdXG4gICAgICBub2RlID0gbm9kZS5zbGljZSgwLCBtYXRjaGVzLmluZGV4KSArIG5vZGUuc2xpY2UobWF0Y2hlcy5pbmRleCArIG1hdGNoZXNbMF0ubGVuZ3RoKVxuICAgIH1cblxuICAgIC8vIG1hdGNoIGNsYXNzZXNcbiAgICB3aGlsZSAoKG1hdGNoZXMgPSAvXFwuKFtcXHctXSspL2cuZXhlYyhub2RlKSkpIHtcbiAgICAgIHRoaXMuY2xhc3NMaXN0LnB1c2gobWF0Y2hlc1sxXSlcbiAgICAgIG5vZGUgPSBub2RlLnNsaWNlKDAsIG1hdGNoZXMuaW5kZXgpICsgbm9kZS5zbGljZShtYXRjaGVzLmluZGV4ICsgbWF0Y2hlc1swXS5sZW5ndGgpXG4gICAgfVxuICB9XG5cbiAgbWF0Y2hlcyAobm9kZSwgc2NvcGUpIHtcbiAgICBsZXQgaVxuXG4gICAgaWYgKG5vZGUubm9kZVR5cGUgIT09IDEpIHJldHVybiBmYWxzZVxuXG4gICAgLy8gQWx3YXlzIHRoaXMgZXh0cmEgY29kZSBmb3IgaHRtbCAtLi1cbiAgICBpZiAobm9kZS5uYW1lc3BhY2VVUkkgPT09IGh0bWwpIHtcbiAgICAgIHRoaXMudGFnID0gdGhpcy50YWcudG9VcHBlckNhc2UoKVxuICAgIH1cblxuICAgIGlmICh0aGlzLnRhZyAmJiB0aGlzLnRhZyAhPT0gbm9kZS5ub2RlTmFtZSAmJiB0aGlzLnRhZyAhPT0gJyonKSB7IHJldHVybiBmYWxzZSB9XG5cbiAgICBpZiAodGhpcy5pZCAmJiB0aGlzLmlkICE9PSBub2RlLmlkKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBjbGFzc0xpc3QgPSAobm9kZS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJycpLnNwbGl0KHJlZ2V4LmRlbGltaXRlcikuZmlsdGVyKGVsID0+ICEhZWwubGVuZ3RoKVxuICAgIGlmICh0aGlzLmNsYXNzTGlzdC5maWx0ZXIoY2xhc3NOYW1lID0+IGNsYXNzTGlzdC5pbmRleE9mKGNsYXNzTmFtZSkgPCAwKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGZvciAoaSA9IHRoaXMuYXR0cnMubGVuZ3RoOyBpLS07KSB7XG4gICAgICBjb25zdCBhdHRyVmFsdWUgPSB0aGlzLmF0dHJzW2ldLmdldFZhbHVlKG5vZGUpXG4gICAgICBpZiAoYXR0clZhbHVlID09PSBudWxsIHx8ICF0aGlzLmF0dHJzW2ldLm1hdGNoZXIoYXR0clZhbHVlKSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSB0aGlzLnBzZXVkby5sZW5ndGg7IGktLTspIHtcbiAgICAgIGlmICghdGhpcy5wc2V1ZG9baV0obm9kZSwgc2NvcGUpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlXG4gIH1cblxufVxuIiwiaW1wb3J0IHsgU1ZHUG9pbnQgfSBmcm9tICcuLi9kb20vc3ZnL1NWR1BvaW50LmpzJ1xuXG5leHBvcnQgY2xhc3MgUG9pbnQge1xuICAvLyBJbml0aWFsaXplXG4gIGNvbnN0cnVjdG9yICh4LCB5KSB7XG4gICAgY29uc3QgYmFzZSA9IHsgeDogMCwgeTogMCB9XG5cbiAgICAvLyBlbnN1cmUgc291cmNlIGFzIG9iamVjdFxuICAgIGNvbnN0IHNvdXJjZSA9IEFycmF5LmlzQXJyYXkoeClcbiAgICAgID8geyB4OiB4WzBdLCB5OiB4WzFdIH1cbiAgICAgIDogdHlwZW9mIHggPT09ICdvYmplY3QnXG4gICAgICAgID8geyB4OiB4LngsIHk6IHgueSB9XG4gICAgICAgIDogeCAhPSBudWxsXG4gICAgICAgICAgPyB7IHg6IHgsIHk6ICh5ICE9IG51bGwgPyB5IDogeCkgfVxuICAgICAgICAgIDogYmFzZSAvLyBJZiB5IGhhcyBubyB2YWx1ZSwgdGhlbiB4IGlzIHVzZWQgaGFzIGl0cyB2YWx1ZVxuXG4gICAgLy8gbWVyZ2Ugc291cmNlXG4gICAgdGhpcy54ID0gc291cmNlLnhcbiAgICB0aGlzLnkgPSBzb3VyY2UueVxuICB9XG5cbiAgYWJzICgpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMuYWJzUXVhZCgpKVxuICB9XG5cbiAgYWJzUXVhZCAoKSB7XG4gICAgcmV0dXJuIHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueVxuICB9XG5cbiAgYWRkICh4LCB5KSB7XG4gICAgY29uc3QgcCA9IG5ldyBQb2ludCh4LCB5KVxuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICsgcC54LCB0aGlzLnkgKyBwLnkpXG4gIH1cblxuICBhbmdsZVRvIChwKSB7XG4gICAgbGV0IHNpZ24gPSBNYXRoLnNpZ24odGhpcy54ICogcC55IC0gdGhpcy55ICogcC54KVxuICAgIHNpZ24gPSBzaWduIHx8IDFcbiAgICByZXR1cm4gc2lnbiAqIE1hdGguYWNvcyhNYXRoLnJvdW5kKCh0aGlzLmRvdChwKSAvICh0aGlzLmFicygpICogcC5hYnMoKSkpICogMTAwMDAwMCkgLyAxMDAwMDAwKVxuICB9XG5cbiAgLy8gQ2xvbmUgcG9pbnRcbiAgY2xvbmUgKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcylcbiAgfVxuXG4gIGNsb3NlVG8gKHAsIGV0YSA9IDAuMDAwMDEpIHtcbiAgICByZXR1cm4gdGhpcy5lcXVhbHMocCkgfHwgKE1hdGguYWJzKHRoaXMueCAtIHAueCkgPCBldGEgJiYgTWF0aC5hYnModGhpcy55IC0gcC55KSA8IGV0YSlcbiAgfVxuXG4gIGRpdiAoZmFjdG9yKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggLyBmYWN0b3IsIHRoaXMueSAvIGZhY3RvcilcbiAgfVxuXG4gIGRvdCAocCkge1xuICAgIHJldHVybiB0aGlzLnggKiBwLnggKyB0aGlzLnkgKiBwLnlcbiAgfVxuXG4gIGVxdWFscyAocCkge1xuICAgIHJldHVybiB0aGlzLnggPT09IHAueCAmJiB0aGlzLnkgPT09IHAueVxuICB9XG5cbiAgbXVsIChmYWN0b3IpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAqIGZhY3RvciwgdGhpcy55ICogZmFjdG9yKVxuICB9XG5cbiAgLy8gQ29udmVydCB0byBuYXRpdmUgU1ZHUG9pbnRcbiAgbmF0aXZlICgpIHtcbiAgICAvLyBjcmVhdGUgbmV3IHBvaW50XG4gICAgY29uc3QgcG9pbnQgPSBuZXcgU1ZHUG9pbnQoKVxuXG4gICAgLy8gdXBkYXRlIHdpdGggY3VycmVudCB2YWx1ZXNcbiAgICBwb2ludC54ID0gdGhpcy54XG4gICAgcG9pbnQueSA9IHRoaXMueVxuXG4gICAgcmV0dXJuIHBvaW50XG4gIH1cblxuICBub3JtYWwgKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy55LCAtdGhpcy54KVxuICB9XG5cbiAgbm9ybWFsaXplICgpIHtcbiAgICBjb25zdCBhYnMgPSB0aGlzLmFicygpXG4gICAgaWYgKCFhYnMpIHRocm93IG5ldyBFcnJvcignQ2FuXFwndCBub3JtYWxpemUgdmVjdG9yIG9mIHplcm8gbGVuZ3RoJylcbiAgICByZXR1cm4gdGhpcy5kaXYoYWJzKVxuICB9XG5cbiAgcmVmbGVjdEF0IChwKSB7XG4gICAgcmV0dXJuIHAuYWRkKHAuc3ViKHRoaXMpKVxuICB9XG5cbiAgc3ViICh4LCB5KSB7XG4gICAgY29uc3QgcCA9IG5ldyBQb2ludCh4LCB5KVxuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54IC0gcC54LCB0aGlzLnkgLSBwLnkpXG4gIH1cblxuICB0b0FycmF5ICgpIHtcbiAgICByZXR1cm4gWyB0aGlzLngsIHRoaXMueSBdXG4gIH1cblxuICB0b1BhdGggKCkge1xuICAgIHJldHVybiBbICdNJywgdGhpcy54LCB0aGlzLnkgXS5qb2luKCcgJylcbiAgfVxuXG4gIC8vIHRyYW5zZm9ybSBwb2ludCB3aXRoIG1hdHJpeFxuICB0cmFuc2Zvcm0gKG1hdHJpeCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5uYXRpdmUoKS5tYXRyaXhUcmFuc2Zvcm0obWF0cml4KSlcbiAgfVxuXG4gIHRyYW5zZm9ybU8gKG1hdHJpeCkge1xuICAgIGNvbnN0IHsgeCwgeSB9ID0gdGhpcy5uYXRpdmUoKS5tYXRyaXhUcmFuc2Zvcm0obWF0cml4KVxuICAgIHRoaXMueCA9IHhcbiAgICB0aGlzLnkgPSB5XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTm9kZUZpbHRlciB9IGZyb20gJy4uL2RvbS9Ob2RlRmlsdGVyLmpzJ1xuXG5jb25zdCBzaG93VGhpc05vZGUgPSAod2hhdFRvU2hvdywgbm9kZSkgPT4ge1xuICBpZiAod2hhdFRvU2hvdyA9PT0gTm9kZUZpbHRlci5TSE9XX0FMTCkgcmV0dXJuIHRydWVcbiAgaWYgKHdoYXRUb1Nob3cgJiBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCAmJiBub2RlLm5vZGVUeXBlID09PSBub2RlLkVMRU1FTlRfTk9ERSkgcmV0dXJuIHRydWVcbiAgaWYgKHdoYXRUb1Nob3cgJiBOb2RlRmlsdGVyLlNIT1dfVEVYVCAmJiBub2RlLm5vZGVUeXBlID09PSBub2RlLlRFWFRfTk9ERSkgcmV0dXJuIHRydWVcbiAgaWYgKHdoYXRUb1Nob3cgJiBOb2RlRmlsdGVyLlNIT1dfRU5USVRZX1JFRkVSRU5DRSAmJiBub2RlLm5vZGVUeXBlID09PSBub2RlLkVOVElUWV9SRUZFUkVOQ0VfTk9ERSkgcmV0dXJuIHRydWVcbiAgaWYgKHdoYXRUb1Nob3cgJiBOb2RlRmlsdGVyLlNIT1dfRU5USVRZICYmIG5vZGUubm9kZVR5cGUgPT09IG5vZGUuRU5USVRZX05PREUpIHJldHVybiB0cnVlXG4gIGlmICh3aGF0VG9TaG93ICYgTm9kZUZpbHRlci5TSE9XX1BST0NFU1NJTkdfSU5TVFJVQ1RJT04gJiYgbm9kZS5ub2RlVHlwZSA9PT0gbm9kZS5QUk9DRVNTSU5HX0lOU1RSVUNUSU9OX05PREUpIHJldHVybiB0cnVlXG4gIGlmICh3aGF0VG9TaG93ICYgTm9kZUZpbHRlci5TSE9XX0NPTU1FTlQgJiYgbm9kZS5ub2RlVHlwZSA9PT0gbm9kZS5DT01NRU5UX05PREUpIHJldHVybiB0cnVlXG4gIGlmICh3aGF0VG9TaG93ICYgTm9kZUZpbHRlci5TSE9XX0RPQ1VNRU5UICYmIG5vZGUubm9kZVR5cGUgPT09IG5vZGUuRE9DVU1FTlRfTk9ERSkgcmV0dXJuIHRydWVcbiAgaWYgKHdoYXRUb1Nob3cgJiBOb2RlRmlsdGVyLlNIT1dfRE9DVU1FTlRfVFlQRSAmJiBub2RlLm5vZGVUeXBlID09PSBub2RlLkRPQ1VNRU5UX1RZUEVfTk9ERSkgcmV0dXJuIHRydWVcbiAgaWYgKHdoYXRUb1Nob3cgJiBOb2RlRmlsdGVyLlNIT1dfRE9DVU1FTlRfRlJBR01FTlQgJiYgbm9kZS5ub2RlVHlwZSA9PT0gbm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFKSByZXR1cm4gdHJ1ZVxuICBpZiAod2hhdFRvU2hvdyAmIE5vZGVGaWx0ZXIuU0hPV19OT1RBVElPTiAmJiBub2RlLm5vZGVUeXBlID09PSBub2RlLk5PVEFUSU9OX05PREUpIHJldHVybiB0cnVlXG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgY2xhc3MgTm9kZUl0ZXJhdG9yIHtcbiAgY29uc3RydWN0b3IgKHJvb3QsIHdoYXRUb1Nob3cgPSBOb2RlRmlsdGVyLlNIT1dfQUxMLCBmaWx0ZXIgPSAoKSA9PiBOb2RlRmlsdGVyLkZJTFRFUl9BQ0NFUFQsIGluY2x1ZGVQYXJlbnQgPSB0cnVlKSB7XG4gICAgdGhpcy5yb290ID0gaW5jbHVkZVBhcmVudCA/IHsgY2hpbGROb2RlczogWyByb290IF0gfSA6IHJvb3RcbiAgICB0aGlzLndoYXRUb1Nob3cgPSB3aGF0VG9TaG93XG4gICAgdGhpcy5maWx0ZXIgPSBmaWx0ZXJcbiAgfVxuXG4gICogW1N5bWJvbC5pdGVyYXRvcl0gKCkge1xuICAgIGNvbnN0IG5vZGVzID0gdGhpcy5yb290LmNoaWxkTm9kZXNcblxuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xuICAgICAgaWYgKCFzaG93VGhpc05vZGUodGhpcy53aGF0VG9TaG93LCBub2RlKSkgY29udGludWVcblxuICAgICAgY29uc3QgZmlsdGVyUmV0ID0gdGhpcy5maWx0ZXIobm9kZSlcblxuICAgICAgaWYgKGZpbHRlclJldCA9PT0gTm9kZUZpbHRlci5GSUxURVJfUkVKRUNUKSBjb250aW51ZVxuICAgICAgaWYgKGZpbHRlclJldCA9PT0gTm9kZUZpbHRlci5GSUxURVJfQUNDRVBUKSB7XG4gICAgICAgIHlpZWxkIG5vZGVcbiAgICAgIH1cblxuICAgICAgeWllbGQgKiBuZXcgTm9kZUl0ZXJhdG9yKG5vZGUsIHRoaXMud2hhdFRvU2hvdywgdGhpcy5maWx0ZXIsIGZhbHNlKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzXG4gIH1cbn1cbiIsImltcG9ydCB7IEJveCwgTm9Cb3ggfSBmcm9tICcuLi9vdGhlci9Cb3guanMnXG5cbmV4cG9ydCBjbGFzcyBQb2ludENsb3VkIGV4dGVuZHMgQXJyYXkge1xuICBjb25zdHJ1Y3RvciAoLi4uYXJncykge1xuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMSAmJiB0eXBlb2YgYXJnc1swXSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHN1cGVyKGFyZ3Muc2hpZnQoKSlcbiAgICB9IGVsc2Uge1xuICAgICAgc3VwZXIoKVxuICAgIH1cblxuICAgIC8vIGV4Y2VwdCBtdWx0aXBsZSBwb2ludCBhcnJheXMgYXMgaW5wdXQgYW5kIG1lcmdlIHRoZW0gaW50byBvbmVcbiAgICBhcmdzLnJlZHVjZSgobGFzdCwgY3VycikgPT4ge1xuICAgICAgbGFzdC5wdXNoKC4uLmN1cnIpXG4gICAgICByZXR1cm4gdGhpc1xuICAgIH0sIHRoaXMpXG4gIH1cblxuICBiYm94ICgpIHtcbiAgICBpZiAoIXRoaXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbmV3IE5vQm94KClcbiAgICB9XG5cbiAgICBsZXQgeE1pbiA9IEluZmluaXR5XG4gICAgbGV0IHhNYXggPSAtSW5maW5pdHlcbiAgICBsZXQgeU1pbiA9IEluZmluaXR5XG4gICAgbGV0IHlNYXggPSAtSW5maW5pdHlcblxuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbiAocCkge1xuICAgICAgeE1pbiA9IE1hdGgubWluKHhNaW4sIHAueClcbiAgICAgIHhNYXggPSBNYXRoLm1heCh4TWF4LCBwLngpXG4gICAgICB5TWluID0gTWF0aC5taW4oeU1pbiwgcC55KVxuICAgICAgeU1heCA9IE1hdGgubWF4KHlNYXgsIHAueSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIG5ldyBCb3goXG4gICAgICB4TWluLCB5TWluLFxuICAgICAgeE1heCAtIHhNaW4sXG4gICAgICB5TWF4IC0geU1pblxuICAgIClcbiAgfVxuXG4gIG1lcmdlIChjbG91ZCkge1xuICAgIHJldHVybiBuZXcgUG9pbnRDbG91ZCh0aGlzLCBjbG91ZClcbiAgfVxuXG4gIHRyYW5zZm9ybSAobSkge1xuICAgIHJldHVybiBuZXcgUG9pbnRDbG91ZCh0aGlzLm1hcCgocCkgPT4gcC50cmFuc2Zvcm0obSkpKVxuICB9XG5cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhVdGlscyBmcm9tICcuL3BhdGhVdGlscy5qcydcbmltcG9ydCAqIGFzIHJlZ2V4IGZyb20gJy4vcmVnZXguanMnXG5pbXBvcnQgKiBhcyB0ZXh0VXRpbHMgZnJvbSAnLi90ZXh0VXRpbHMuanMnXG5pbXBvcnQgeyBOb0JveCB9IGZyb20gJy4uL290aGVyL0JveC5qcydcbmltcG9ydCB7IE5vZGVJdGVyYXRvciB9IGZyb20gJy4vTm9kZUl0ZXJhdG9yLmpzJ1xuaW1wb3J0IHsgTm9kZUZpbHRlciB9IGZyb20gJy4uL2RvbS9Ob2RlRmlsdGVyLmpzJ1xuXG5jb25zdCBhcHBseVRyYW5zZm9ybWF0aW9uID0gKHNlZ21lbnRzLCBub2RlLCBhcHBseVRyYW5zZm9ybWF0aW9ucykgPT4ge1xuICBpZiAobm9kZS5tYXRyaXhpZnkgJiYgYXBwbHlUcmFuc2Zvcm1hdGlvbnMpIHtcbiAgICByZXR1cm4gc2VnbWVudHMudHJhbnNmb3JtKG5vZGUubWF0cml4aWZ5KCkpXG4gIH1cbiAgcmV0dXJuIHNlZ21lbnRzXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZWdtZW50cyA9IChub2RlLCBhcHBseVRyYW5zZm9ybWF0aW9ucywgcmJveCA9IGZhbHNlKSA9PiB7XG4gIGNvbnN0IHNlZ21lbnRzID0gZ2V0UGF0aFNlZ21lbnRzKG5vZGUsIHJib3gpXG4gIHJldHVybiBhcHBseVRyYW5zZm9ybWF0aW9uKHNlZ21lbnRzLCBub2RlLCBhcHBseVRyYW5zZm9ybWF0aW9ucylcbn1cblxuY29uc3QgZ2V0UGF0aFNlZ21lbnRzID0gKG5vZGUsIHJib3gpID0+IHtcbiAgaWYgKG5vZGUubm9kZVR5cGUgIT09IDEpIHJldHVybiBuZXcgcGF0aFV0aWxzLlBhdGhTZWdtZW50QXJyYXkoKVxuICBjb25zdCBsZW5ndGggPSBub2RlLmNoaWxkTm9kZXMubGVuZ3RoXG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBwYXRoVXRpbHMuUGF0aFNlZ21lbnRBcnJheSgpXG4gIHN3aXRjaCAobm9kZS5ub2RlTmFtZSkge1xuICBjYXNlICdyZWN0JzpcbiAgY2FzZSAnaW1hZ2UnOlxuICBjYXNlICdwYXR0ZXJuJzpcbiAgY2FzZSAnbWFzayc6XG4gIGNhc2UgJ2ZvcmVpZ25PYmplY3QnOlxuICAgIC8vIENyZWF0ZSBQYXRoIGZyb20gcmVjdCBhbmQgY3JlYXRlIFBvaW50Q2xvdWQgZnJvbSBQYXRoXG4gICAgcmV0dXJuIHBhdGhVdGlscy5nZXRQYXRoU2VnbWVudHMocGF0aFV0aWxzLnBhdGhGcm9tLnJlY3Qobm9kZSkpXG4gIGNhc2UgJ3N2Zyc6XG4gIGNhc2UgJ3N5bWJvbCc6XG4gICAgLy8gcmV0dXJuIHBhdGhVdGlscy5nZXRQYXRoU2VnbWVudHMocGF0aFV0aWxzLnBhdGhGcm9tLnJlY3Qobm9kZSkpXG4gICAgaWYgKHJib3gpIHtcbiAgICAgIHJldHVybiBwYXRoVXRpbHMuZ2V0UGF0aFNlZ21lbnRzKHBhdGhVdGlscy5wYXRoRnJvbS5yZWN0KG5vZGUpKVxuICAgIH1cbiAgLy8gQVRURU5USU9OOiBGQUxMIFRIUk9VR0hcbiAgLy8gQmVjYXVzZSBub3JtYWwgYmJveCBpcyBjYWxjdWxhdGVkIGJ5IHRoZSBjb250ZW50IG9mIHRoZSBlbGVtZW50IGFuZCBub3QgaXRzIHdpZHRoIGFuZCBoZWlnaHRcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIGNhc2UgJ2cnOlxuICBjYXNlICdjbGlwUGF0aCc6XG4gIGNhc2UgJ2EnOlxuICBjYXNlICdtYXJrZXInOlxuICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCBhbGwgY2hpbGRyZW4gYW5kIGdldCB0aGUgcG9pbnQgY2xvdWQgb2YgZWFjaFxuICAgIC8vIFRoZW4gdHJhbnNmb3JtIGl0IHdpdGggdmlld2JveCBtYXRyaXggaWYgbmVlZGVkXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY2hpbGQgPSBub2RlLmNoaWxkTm9kZXNbaV1cbiAgICAgIGlmICghY2hpbGQubWF0cml4aWZ5KSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaCguLi5nZXRTZWdtZW50cyhjaGlsZCwgdHJ1ZSkudHJhbnNmb3JtKGNoaWxkLmdlbmVyYXRlVmlld0JveE1hdHJpeCgpKSlcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICBjYXNlICdjaXJjbGUnOlxuICAgIHJldHVybiBwYXRoVXRpbHMuZ2V0UGF0aFNlZ21lbnRzKHBhdGhVdGlscy5wYXRoRnJvbS5jaXJjbGUobm9kZSkpXG4gIGNhc2UgJ2VsbGlwc2UnOlxuICAgIHJldHVybiBwYXRoVXRpbHMuZ2V0UGF0aFNlZ21lbnRzKHBhdGhVdGlscy5wYXRoRnJvbS5lbGxpcHNlKG5vZGUpKVxuICBjYXNlICdsaW5lJzpcbiAgICByZXR1cm4gcGF0aFV0aWxzLmdldFBhdGhTZWdtZW50cyhwYXRoVXRpbHMucGF0aEZyb20ubGluZShub2RlKSlcbiAgY2FzZSAncG9seWxpbmUnOlxuICBjYXNlICdwb2x5Z29uJzpcbiAgICByZXR1cm4gcGF0aFV0aWxzLmdldFBhdGhTZWdtZW50cyhwYXRoVXRpbHMucGF0aEZyb20ucG9seWxpbmUobm9kZSkpXG4gIGNhc2UgJ3BhdGgnOlxuICBjYXNlICdnbHlwaCc6XG4gIGNhc2UgJ21pc3NpbmctZ2x5cGgnOlxuICAgIHJldHVybiBwYXRoVXRpbHMuZ2V0UGF0aFNlZ21lbnRzKG5vZGUuZ2V0QXR0cmlidXRlKCdkJykpXG4gIGNhc2UgJ3VzZSc6IHtcbiAgICAvLyBHZXQgcmVmZXJlbmNlIGZyb20gZWxlbWVudFxuICAgIGNvbnN0IHJlZiA9IG5vZGUuZ2V0QXR0cmlidXRlKCdocmVmJykgfHwgbm9kZS5nZXRBdHRyaWJ1dGUoJ3hsaW5rOmhyZWYnKVxuICAgIC8vIEdldCB0aGUgYWN0dWFsIHJlZmVyZW5jZWQgTm9kZVxuICAgIGNvbnN0IHJlZk5vZGUgPSBub2RlLmdldFJvb3ROb2RlKCkucXVlcnlTZWxlY3RvcihyZWYpXG4gICAgLy8gR2V0IHRoZSBCQm94IG9mIHRoZSByZWZlcmVuY2VkIGVsZW1lbnQgYW5kIGFwcGx5IHRoZSB2aWV3Ym94IG9mIDx1c2U+XG4gICAgLy8gVE9ETzogRG8gd2UgbmVlZCB0byBhcHBseSB0aGUgdHJhbnNmb3JtYXRpb25zIG9mIHRoZSBlbGVtZW50P1xuICAgIC8vIENoZWNrIGJib3ggb2YgdHJhbnNmb3JtZWQgZWxlbWVudCB3aGljaCBpcyByZXVzZWQgd2l0aCA8dXNlPlxuICAgIHJldHVybiBnZXRTZWdtZW50cyhyZWZOb2RlKS50cmFuc2Zvcm0obm9kZS5nZW5lcmF0ZVZpZXdCb3hNYXRyaXgoKSlcbiAgfVxuICBjYXNlICd0c3Bhbic6XG4gIGNhc2UgJ3RleHQnOlxuICBjYXNlICdhbHRHbHlwaCc6IHtcbiAgICBjb25zdCBib3ggPSBnZXRUZXh0QkJveChub2RlKVxuXG4gICAgaWYgKGJveCBpbnN0YW5jZW9mIE5vQm94KSB7XG4gICAgICByZXR1cm4gbmV3IHBhdGhVdGlscy5QYXRoU2VnbWVudEFycmF5KClcbiAgICB9XG5cbiAgICByZXR1cm4gcGF0aFV0aWxzLmdldFBhdGhTZWdtZW50cyhwYXRoVXRpbHMucGF0aEZyb20uYm94KGJveCkpXG4gIH1cbiAgZGVmYXVsdDpcbiAgICByZXR1cm4gbmV3IHBhdGhVdGlscy5QYXRoU2VnbWVudEFycmF5KClcbiAgfVxufVxuXG5jb25zdCBnZXRUZXh0QkJveCA9IChub2RlKSA9PiB7XG4gIGNvbnN0IHRleHRSb290ID0gZmluZFRleHRSb290KG5vZGUpXG4gIGNvbnN0IGJveGVzID0gZ2V0VGV4dEJCb3hlcyhub2RlLCB0ZXh0Um9vdClcbiAgcmV0dXJuIGJveGVzLmZpbHRlcihpc05vdEVtcHR5Qm94KS5yZWR1Y2UoKGxhc3QsIGN1cnIpID0+IGxhc3QubWVyZ2UoY3VyciksIG5ldyBOb0JveCgpKVxufVxuXG5jb25zdCBmaW5kVGV4dFJvb3QgPSAobm9kZSkgPT4ge1xuICB3aGlsZSAobm9kZS5wYXJlbnROb2RlKSB7XG4gICAgaWYgKChub2RlLm5vZGVOYW1lID09PSAndGV4dCcgJiYgbm9kZS5wYXJlbnROb2RlLm5vZGVOYW1lID09PSAndGV4dCcpXG4gICAgfHwgKChub2RlLm5vZGVOYW1lID09PSAndHNwYW4nIHx8IG5vZGUubm9kZU5hbWUgPT09ICd0ZXh0UGF0aCcpICYmIFsgJ3RzcGFuJywgJ3RleHQnLCAndGV4dFBhdGgnIF0uaW5jbHVkZXMobm9kZS5wYXJlbnROb2RlLm5vZGVOYW1lKSkpIHtcbiAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGVcbiAgICB9IGVsc2Uge1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbm9kZVxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIHRha2VzIGEgbm9kZSBvZiB3aGljaCB0aGUgYmJveCBuZWVkcyB0byBiZSBjYWxjdWxhdGVkXG4vLyBJbiBvcmRlciB0byBwb3NpdGlvbiB0aGUgYm94IGNvcnJlY3RseSwgd2UgbmVlZCB0byBrbm93IHdlcmUgdGhlIHBhcmVudCBhbmQgd2VyZSB0aGUgc2libGluZ3MgKmJlZm9yZSogb3VyIG5vZGUgYXJlXG4vLyBUaGF0cyB3aHkgYSB0ZXh0Um9vdCBpcyBwYXNzZWQgd2hpY2ggaXMgdGhlIG1vc3Qgb3V0ZXIgdGV4dEVsZW1lbnQgbmVlZGVkIHRvIGNhbGN1bGF0ZSBhbGwgYm94ZXNcbi8vIFdoZW4gdGhlIGl0ZXJhdG9yIGhpdHMgdGhlIGVsZW1lbnQgd2UgbmVlZCB0aGUgYmJveCBvZiwgaXQgaXMgdGVybWluYXRlZCBhbmQgdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgYWdhaW5cbi8vIG9ubHkgZm9yIHRoZSBzdWJzdHJlZSBvZiBvdXIgbm9kZSBhbmQgd2l0aG91dCB0ZXh0Um9vciBidXQgaW5zdGVhZCBwb3MsIGR4IGFuZCBkeSBhcmUga25vd25cbmNvbnN0IGdldFRleHRCQm94ZXMgPSBmdW5jdGlvbiAodGFyZ2V0LCB0ZXh0Um9vdCA9IHRhcmdldCwgcG9zID0geyB4OiAwLCB5OiAwIH0sIGR4ID0gWyAwIF0sIGR5ID0gWyAwIF0sIGJveGVzID0gW10pIHtcblxuICAvLyBDcmVhdGUgTm9kZUl0ZXJhdG9yLiBPbmx5IHNob3cgZWxlbW50cyBhbmQgdGV4dCBhbmQgc2tpcCBkZXNjcmlwdGl2ZSBlbGVtZW50c1xuICAvLyBUT0RPOiBtYWtlIGFuIGluc3RhbmNlb2YgY2hlY2sgZm9yIERlc2NyaXB0aXZlRWxlbWVudCBpbnN0ZWFkIG9mIHRlc3Rpbmcgb25lIGJ5IG9uZVxuICAvLyBPbmx5IHRpdGxlIGlzIHNraXBwZWQgYXRtXG4gIGNvbnN0IGl0ZXIgPSBuZXcgTm9kZUl0ZXJhdG9yKHRleHRSb290LCBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCB8IE5vZGVGaWx0ZXIuU0hPV19URVhULCAobm9kZSkgPT4ge1xuICAgIGlmIChub2RlLm5vZGVOYW1lID09PSAndGl0bGUnKSByZXR1cm4gTm9kZUZpbHRlci5GSUxURVJfSUdOT1JFXG4gICAgcmV0dXJuIE5vZGVGaWx0ZXIuRklMVEVSX0FDQ0VQVFxuICB9KVxuXG4gIC8vIEl0ZXJhdGUgdHJvdWdoIGFsbCBub2RlcyB0b3AgdG8gYm90dG9tLCBsZWZ0IHRvIHJpZ2h0XG4gIGZvciAoY29uc3Qgbm9kZSBvZiBpdGVyKSB7XG5cbiAgICAvLyBJZiB3ZSBoaXQgb3VyIHRhcmdldCwgd2UgZ2F0aGVyZWQgYWxsIHBvc2l0aW9uYWwgaW5mb3JtYXRpb24gd2UgbmVlZCB0byBtb3ZlIHRoZSBiYm94IHRvIHRoZSBjb3JyZWN0IHNwb3RcbiAgICBpZiAobm9kZSA9PT0gdGFyZ2V0ICYmIG5vZGUgIT09IHRleHRSb290KSB7XG4gICAgICByZXR1cm4gZ2V0VGV4dEJCb3hlcyhub2RlLCBub2RlLCBwb3MsIGR4LCBkeSlcbiAgICB9XG5cbiAgICAvLyBUcmF2ZXJzZSB0cm91Z2ggdGhpcyBub2RlIHVwZGF0aW5nIHBvc2l0aW9ucyBhbmQgYWRkIGJveGVzXG4gICAgZ2V0UG9zaXRpb25EZXRhaWxzRm9yKG5vZGUsIHBvcywgZHgsIGR5LCBib3hlcylcbiAgfVxuXG4gIHJldHVybiBib3hlc1xufVxuXG5jb25zdCBpc05vdEVtcHR5Qm94ID0gYm94ID0+IGJveC54ICE9PSAwIHx8IGJveC55ICE9PSAwIHx8IGJveC53aWR0aCAhPT0gMCB8fCBib3guaGVpZ2h0ICE9PSAwXG5cbi8vIFRoaXMgZnVuY3Rpb24gZWl0aGVyIHVwZGF0ZXMgcG9zLCBkeCBhbmQgZHkgKHdoZW4gaXRzIGFuIGVsZW1lbnQpIG9yIGNhbGN1bGF0ZXMgdGhlIGJveGVzIGZvciB0ZXh0IHdpdGggdGhlIHBhc3NlZCBhcmd1bWVudHNcbi8vIEFsbCBhcmd1bWVudHMgYXJlIHBhc3NlZCBieSByZWZlcmVuY2Ugc28gZG9udCBvdmVyd3JpdGUgdGhlbSAodHJlYXQgdGhlbSBhcyBjb25zdCEpXG4vLyBUT0RPOiBCcmVhayB0aGlzIGludG8gdHdvIGZ1bmN0aW9ucz9cbmNvbnN0IGdldFBvc2l0aW9uRGV0YWlsc0ZvciA9IChub2RlLCBwb3MsIGR4LCBkeSwgYm94ZXMpID0+IHtcbiAgaWYgKG5vZGUubm9kZVR5cGUgPT09IG5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgY29uc3QgeCA9IHBhcnNlRmxvYXQobm9kZS5nZXRBdHRyaWJ1dGUoJ3gnKSlcbiAgICBjb25zdCB5ID0gcGFyc2VGbG9hdChub2RlLmdldEF0dHJpYnV0ZSgneScpKVxuXG4gICAgcG9zLnggPSBpc05hTih4KSA/IHBvcy54IDogeFxuICAgIHBvcy55ID0gaXNOYU4oeSkgPyBwb3MueSA6IHlcblxuICAgIGNvbnN0IGR4MCA9IChub2RlLmdldEF0dHJpYnV0ZSgnZHgnKSB8fCAnJykuc3BsaXQocmVnZXguZGVsaW1pdGVyKS5maWx0ZXIobnVtID0+IG51bSAhPT0gJycpLm1hcChwYXJzZUZsb2F0KVxuICAgIGNvbnN0IGR5MCA9IChub2RlLmdldEF0dHJpYnV0ZSgnZHknKSB8fCAnJykuc3BsaXQocmVnZXguZGVsaW1pdGVyKS5maWx0ZXIobnVtID0+IG51bSAhPT0gJycpLm1hcChwYXJzZUZsb2F0KVxuXG4gICAgLy8gVE9ETzogZXZlbnR1YWxseSByZXBsYWNlIG9ubHkgYXMgbXVjaCB2YWx1ZXMgYXMgd2UgaGF2ZSB0ZXh0IGNoYXJzIChub2RlLnRleHRDb250ZW50Lmxlbmd0aCkgYmVjYXVzZSB3ZSBjb3VsZCBlbmQgdXAgYWRkaW5nIHRvIG11Y2hcbiAgICAvLyByZXBsYWNlIGluaXRpYWwgdmFsdWVzIHdpdGggbm9kZSB2YWx1ZXMgaWYgcHJlc2VudFxuICAgIGR4LnNwbGljZSgwLCBkeDAubGVuZ3RoLCAuLi5keDApXG4gICAgZHkuc3BsaWNlKDAsIGR5MC5sZW5ndGgsIC4uLmR5MClcbiAgfSBlbHNlIHtcbiAgICAvLyBnZXQgdGV4dCBkYXRhXG4gICAgY29uc3QgZGF0YSA9IG5vZGUuZGF0YVxuXG4gICAgbGV0IGogPSAwXG4gICAgY29uc3QgamwgPSBkYXRhLmxlbmd0aFxuICAgIGNvbnN0IGRldGFpbHMgPSBnZXRGb250RGV0YWlscyhub2RlKVxuXG4gICAgLy8gaWYgaXQgaXMgbW9yZSB0aGFuIG9uZSBkeC9keSBzaW5nbGUgbGV0dGVycyBhcmUgbW92ZWQgYnkgdGhlIGFtb3VudCAoaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvU1ZHL0F0dHJpYnV0ZS9keClcbiAgICBpZiAoZHkubGVuZ3RoIHx8IGR4Lmxlbmd0aCkge1xuICAgICAgZm9yICg7aiA8IGpsOyBqKyspIHtcbiAgICAgICAgLy8gQ2FsY3VsYXRlIGEgYm94IGZvciBhIHNpbmdsZSBsZXR0ZXJcbiAgICAgICAgYm94ZXMucHVzaCh0ZXh0VXRpbHMudGV4dEJCb3goZGF0YS5zdWJzdHIoaiwgMSksIHBvcy54LCBwb3MueSwgZGV0YWlscykpXG5cbiAgICAgICAgLy8gQWRkIHRoZSBuZXh0IHBvc2l0aW9uIHRvIGN1cnJlbnQgb25lXG4gICAgICAgIHBvcy54ICs9IGR4LnNoaWZ0KCkgfHwgMFxuICAgICAgICBwb3MueSArPSBkeS5zaGlmdCgpIHx8IDBcblxuICAgICAgICBpZiAoIWR5Lmxlbmd0aCAmJiAhZHgubGVuZ3RoKSBicmVha1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGluIGNhc2UgaXQgd2FzIG9ubHkgb25lIGR4L2R5IG9yIG5vIG1vcmUgZHgvZHkgbW92ZSB0aGUgcmVzdCBvZiB0aGUgdGV4dFxuICAgIGJveGVzLnB1c2godGV4dFV0aWxzLnRleHRCQm94KGRhdGEuc3Vic3RyKGopLCBwb3MueCwgcG9zLnksIGRldGFpbHMpKVxuICAgIHBvcy54ICs9IGJveGVzW2JveGVzLmxlbmd0aCAtIDFdLndpZHRoXG4gIH1cbn1cblxuLypcbi8vIHRoaXMgZnVuY3Rpb24gaXMgcGFzc2luZyBkeCBhbmQgZHkgdmFsdWVzIGJ5IHJlZmVyZW5jZXMuIERvbnQgYXNzaWduIG5ldyB2YWx1ZXMgdG8gaXRcbmNvbnN0IHRleHRJdGVyYXRvciA9IGZ1bmN0aW9uIChub2RlLCBwb3MgPSB7IHg6IDAsIHk6IDAgfSwgZHggPSBbIDAgXSwgZHkgPSBbIDAgXSkge1xuXG4gIHZhciB4ID0gcGFyc2VGbG9hdChub2RlLmdldEF0dHJpYnV0ZSgneCcpKVxuICB2YXIgeSA9IHBhcnNlRmxvYXQobm9kZS5nZXRBdHRyaWJ1dGUoJ3knKSlcblxuICBwb3MueCA9IGlzTmFOKHgpID8gcG9zLnggOiB4XG4gIHBvcy55ID0gaXNOYU4oeSkgPyBwb3MueSA6IHlcblxuICB2YXIgZHgwID0gKG5vZGUuZ2V0QXR0cmlidXRlKCdkeCcpIHx8ICcnKS5zcGxpdChyZWdleC5kZWxpbWl0ZXIpLmZpbHRlcihudW0gPT4gbnVtICE9PSAnJykubWFwKHBhcnNlRmxvYXQpXG4gIHZhciBkeTAgPSAobm9kZS5nZXRBdHRyaWJ1dGUoJ2R5JykgfHwgJycpLnNwbGl0KHJlZ2V4LmRlbGltaXRlcikuZmlsdGVyKG51bSA9PiBudW0gIT09ICcnKS5tYXAocGFyc2VGbG9hdClcbiAgdmFyIGJveGVzID0gW11cbiAgdmFyIGRhdGEgPSAnJ1xuXG4gIC8vIFRPRE86IGV2ZW50dWFsbHkgcmVwbGFjZSBvbmx5IGFzIG11Y2ggdmFsdWVzIGFzIHdlIGhhdmUgdGV4dCBjaGFycyAobm9kZS50ZXh0Q29udGVudC5sZW5ndGgpIGJlY2F1c2Ugd2UgY291bGQgZW5kIHVwIGFkZGluZyB0byBtdWNoXG4gIC8vIHJlcGxhY2UgaW5pdGlhbCB2YWx1ZXMgd2l0aCBub2RlIHZhbHVlcyBpZiBwcmVzZW50XG4gIGR4LnNwbGljZSgwLCBkeDAubGVuZ3RoLCAuLi5keDApXG4gIGR5LnNwbGljZSgwLCBkeTAubGVuZ3RoLCAuLi5keTApXG5cbiAgdmFyIGkgPSAwXG4gIHZhciBpbCA9IG5vZGUuY2hpbGROb2Rlcy5sZW5ndGhcblxuICAvLyBpdGVyYXRlIHRocm91Z2ggYWxsIGNoaWxkcmVuXG4gIGZvciAoOyBpIDwgaWw7ICsraSkge1xuXG4gICAgLy8gc2hpZnQgbmV4dCBjaGlsZFxuICAgIHBvcy54ICs9IGR4LnNoaWZ0KCkgfHwgMFxuICAgIHBvcy55ICs9IGR5LnNoaWZ0KCkgfHwgMFxuXG4gICAgLy8gdGV4dFxuICAgIGlmIChub2RlLmNoaWxkTm9kZXNbaV0ubm9kZVR5cGUgPT09IG5vZGUuVEVYVF9OT0RFKSB7XG5cbiAgICAgIC8vIGdldCB0ZXh0IGRhdGFcbiAgICAgIGRhdGEgPSBub2RlLmNoaWxkTm9kZXNbaV0uZGF0YVxuXG4gICAgICBsZXQgaiA9IDBcbiAgICAgIGNvbnN0IGpsID0gZGF0YS5sZW5ndGhcblxuICAgICAgLy8gaWYgaXQgaXMgbW9yZSB0aGFuIG9uZSBkeC9keSBzaW5nbGUgbGV0dGVycyBhcmUgbW92ZWQgYnkgdGhlIGFtb3VudCAoaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvU1ZHL0F0dHJpYnV0ZS9keClcbiAgICAgIGlmIChkeS5sZW5ndGggfHwgZHgubGVuZ3RoKSB7XG4gICAgICAgIGZvciAoO2ogPCBqbDsgaisrKSB7XG4gICAgICAgICAgYm94ZXMucHVzaCh0ZXh0VXRpbHMudGV4dEJCb3goZGF0YS5zdWJzdHIoaiwgMSksIHBvcy54LCBwb3MueSwgZ2V0Rm9udERldGFpbHMobm9kZSkpKVxuXG4gICAgICAgICAgcG9zLnggKz0gZHguc2hpZnQoKSB8fCAwXG4gICAgICAgICAgcG9zLnkgKz0gZHkuc2hpZnQoKSB8fCAwXG5cbiAgICAgICAgICBpZiAoIWR5Lmxlbmd0aCAmJiAhZHgubGVuZ3RoKSBicmVha1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGluIGNhc2UgaXQgd2FzIG9ubHkgb25lIGR4L2R5IG9yIG5vIG1vcmUgZHgvZHkgbW92ZSB0aGUgcmVzdCBvZiB0aGUgdGV4dFxuXG4gICAgICBib3hlcy5wdXNoKHRleHRVdGlscy50ZXh0QkJveChkYXRhLnN1YnN0cihqKSwgcG9zLngsIHBvcy55LCBnZXRGb250RGV0YWlscyhub2RlKSkpXG4gICAgICBwb3MueCArPSBib3hlc1tib3hlcy5sZW5ndGggLSAxXS53aWR0aFxuXG4gICAgLy8gZWxlbWVudFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbiBjYXNlIG9mIGVsZW1lbnQsIHJlY3Vyc2l2ZWx5IGNhbGwgZnVuY3Rpb24gYWdhaW4gd2l0aCBuZXcgc3RhcnQgdmFsdWVzXG4gICAgICBib3hlcyA9IGJveGVzLmNvbmNhdCh0ZXh0SXRlcmF0b3Iobm9kZS5jaGlsZE5vZGVzW2ldLCBwb3MsIGR4LCBkeSkpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJveGVzXG59ICovXG5cbmNvbnN0IGdldEZvbnREZXRhaWxzID0gKG5vZGUpID0+IHtcbiAgaWYgKG5vZGUubm9kZVR5cGUgPT09IG5vZGUuVEVYVF9OT0RFKSBub2RlID0gbm9kZS5wYXJlbnROb2RlXG5cbiAgbGV0IGZvbnRTaXplID0gbnVsbFxuICBsZXQgZm9udEZhbWlseSA9IG51bGxcbiAgbGV0IHRleHRBbmNob3IgPSBudWxsXG4gIGxldCBkb21pbmFudEJhc2VsaW5lID0gbnVsbFxuXG4gIGNvbnN0IHRleHRDb250ZW50RWxlbWVudHMgPSBbXG4gICAgJ3RleHQnLFxuICAgICd0c3BhbicsXG4gICAgJ3RyZWYnLFxuICAgICd0ZXh0UGF0aCcsXG4gICAgJ2FsdEdseXBoJyxcbiAgICAnZydcbiAgXVxuXG4gIGRvIHtcbiAgICAvLyBUT0RPOiBzdG9wIG9uXG4gICAgaWYgKCFmb250U2l6ZSkgeyBmb250U2l6ZSA9IG5vZGUuc3R5bGUuZm9udFNpemUgfHwgbm9kZS5nZXRBdHRyaWJ1dGUoJ2ZvbnQtc2l6ZScpIH1cbiAgICBpZiAoIWZvbnRGYW1pbHkpIHsgZm9udEZhbWlseSA9IG5vZGUuc3R5bGUuZm9udEZhbWlseSB8fCBub2RlLmdldEF0dHJpYnV0ZSgnZm9udC1mYW1pbHknKSB9XG4gICAgaWYgKCF0ZXh0QW5jaG9yKSB7IHRleHRBbmNob3IgPSBub2RlLnN0eWxlLnRleHRBbmNob3IgfHwgbm9kZS5nZXRBdHRyaWJ1dGUoJ3RleHQtYW5jaG9yJykgfVxuICAgIGlmICghZG9taW5hbnRCYXNlbGluZSkgeyBkb21pbmFudEJhc2VsaW5lID0gbm9kZS5zdHlsZS5kb21pbmFudEJhc2VsaW5lIHx8IG5vZGUuZ2V0QXR0cmlidXRlKCdkb21pbmFudC1iYXNlbGluZScpIH1cbiAgICAvLyBUT0RPOiBjaGVjayBmb3IgYWxpZ25tZW50LWJhc2VsaW5lIGluIHRzcGFuLCB0cmVmLCB0ZXh0UGF0aCwgYWx0R2x5cGhcbiAgICAvLyBUT0RPOiBhbGlnbm1lbnQtYWRqdXN0LCBiYXNlbGluZS1zaGlmdFxuICAgIC8qXG4gICAgaWYoIWFsaWdubWVudEJhc2VsaW5lKVxuICAgIGFsaWdubWVudEJhc2VsaW5lID0gdGhpcy5zdHlsZS5hbGlnbm1lbnRCYXNlbGluZSB8fCB0aGlzLmdldEF0dHJpYnV0ZSgnYWxpZ25tZW50LWJhc2VsaW5lJylcbiAgICAqL1xuXG4gIH0gd2hpbGUgKFxuICAgIChub2RlID0gbm9kZS5wYXJlbnROb2RlKVxuICAgICYmIG5vZGUubm9kZVR5cGUgPT09IG5vZGUuRUxFTUVOVF9OT0RFXG4gICAgJiYgKHRleHRDb250ZW50RWxlbWVudHMuaW5jbHVkZXMobm9kZS5ub2RlTmFtZSkpXG4gIClcblxuICByZXR1cm4ge1xuICAgIGZvbnRGYW1pbHksXG4gICAgZm9udFNpemUsXG4gICAgdGV4dEFuY2hvcjogdGV4dEFuY2hvciB8fCAnc3RhcnQnLFxuICAgIC8vIFRPRE86IHVzZSBjZW50cmFsIGZvciB3cml0aW5nLW1vZGUgPT09IGhvcml6b250YWwgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvU1ZHL0F0dHJpYnV0ZS9kb21pbmFudC1iYXNlbGluZVxuICAgIGRvbWluYW50QmFzZWxpbmU6IGRvbWluYW50QmFzZWxpbmUgfHwgJ2FscGhhYmV0aWNhbCdcbiAgICAvLyBmb250RmFtaWx5TWFwcGluZ3M6IHRoaXMub3duZXJEb2N1bWVudC5mb250RmFtaWx5TWFwcGluZ3MsXG4gICAgLy8gZm9udERpcjogdGhpcy5vd25lckRvY3VtZW50LmZvbnREaXIsXG4gICAgLy8gcHJlbG9hZGVkOiB0aGlzLm93bmVyRG9jdW1lbnQuX3ByZWxvYWRlZFxuICB9XG59XG4iLCJpbXBvcnQgeyBqb2luLCBkaXJuYW1lIH0gZnJvbSAnbm9kZTpwYXRoJ1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ25vZGU6dXJsJ1xuXG5jb25zdCBfX2Rpcm5hbWUgPSBkaXJuYW1lKGZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKSlcblxuZXhwb3J0IGNvbnN0IGZvbnRTaXplID0gMTZcbmV4cG9ydCBjb25zdCBmb250RmFtaWx5ID0gJ3NhbnMtc2VyaWYnXG5leHBvcnQgY29uc3QgZm9udERpciA9IGpvaW4oX19kaXJuYW1lLCAnLi4vLi4vJywgJ2ZvbnRzLycpXG5leHBvcnQgY29uc3QgZm9udEZhbWlseU1hcHBpbmdzID0ge1xuICAnc2Fucy1zZXJpZic6ICdPcGVuU2Fucy1SZWd1bGFyLnR0ZicsXG4gICdPcGVuIFNhbnMnOiAnT3BlblNhbnMtUmVndWxhci50dGYnXG59XG4iLCJpbXBvcnQgeyBkZWNhbWVsaXplIH0gZnJvbSAnLi4vdXRpbHMvc3RyVXRpbHMuanMnXG5cbmV4cG9ydCBjb25zdCBvYmplY3RUb01hcCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgaWYgKG9iaiBpbnN0YW5jZW9mIE1hcCkgcmV0dXJuIG5ldyBNYXAob2JqKVxuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5yZWR1Y2UoKG1hcCwga2V5KSA9PiBtYXAuc2V0KGtleSwgb2JqW2tleV0pLCBuZXcgTWFwKCkpXG59XG5cbmV4cG9ydCBjb25zdCBtYXBUb09iamVjdCA9IGZ1bmN0aW9uIChtYXApIHtcbiAgdmFyIG9iaiA9IHt9XG4gIG1hcC5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZVxuICB9KVxuICByZXR1cm4gb2JqXG59XG5cbmV4cG9ydCBjb25zdCBtYXBNYXAgPSBmdW5jdGlvbiAobWFwLCBjYikge1xuICB2YXIgYXJyID0gW11cbiAgbWFwLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICBhcnIucHVzaChjYih2YWx1ZSwga2V5KSlcbiAgfSlcbiAgcmV0dXJuIGFyclxufVxuXG5leHBvcnQgY29uc3QgbWFwVG9Dc3MgPSBmdW5jdGlvbiAobXlNYXApIHtcbiAgcmV0dXJuIG1hcE1hcChteU1hcCwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICBpZiAoIXZhbHVlKSByZXR1cm4gZmFsc2VcbiAgICByZXR1cm4gZGVjYW1lbGl6ZShrZXkpICsgJzogJyArIHZhbHVlXG4gIH0pLmZpbHRlcihmdW5jdGlvbiAoZWwpIHsgcmV0dXJuICEhZWwgfSkuam9pbignOyAnKSArICc7JyB8fCBudWxsXG59XG5cbmV4cG9ydCBjb25zdCBjc3NUb01hcCA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgcmV0dXJuIG5ldyBNYXAoY3NzLnNwbGl0KC9cXHMqO1xccyovKS5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7IHJldHVybiAhIWVsIH0pLm1hcChmdW5jdGlvbiAoZWwpIHtcbiAgICByZXR1cm4gZWwuc3BsaXQoL1xccyo6XFxzKi8pXG4gIH0pKVxufVxuIiwiXG5leHBvcnQgY29uc3Qgc3ZnID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuZXhwb3J0IGNvbnN0IHhsaW5rID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnXG5leHBvcnQgY29uc3QgaHRtbCA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJ1xuZXhwb3J0IGNvbnN0IG1hdGhtbCA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MJ1xuZXhwb3J0IGNvbnN0IHhtbCA9ICdodHRwOi8vd3d3LnczLm9yZy9YTUwvMTk5OC9uYW1lc3BhY2UnXG5leHBvcnQgY29uc3QgeG1sbnMgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC94bWxucy8nXG4iLCJleHBvcnQgY29uc3Qgbm9kZXNUb05vZGUgPSAobm9kZXMsIGRvY3VtZW50KSA9PiB7XG4gIG5vZGVzID0gbm9kZXMubWFwKChub2RlKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBub2RlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5vZGUpXG4gICAgfVxuICAgIHJldHVybiBub2RlXG4gIH0pXG4gIGlmIChub2Rlcy5sZW5ndGggPT09IDEpIHsgcmV0dXJuIG5vZGVzWzBdIH1cbiAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuICBub2Rlcy5mb3JFYWNoKG5vZGUuYXBwZW5kQ2hpbGQsIG5vZGUpXG4gIHJldHVybiBub2RlXG59XG4iLCJleHBvcnQgY29uc3QgZXh0ZW5kID0gKC4uLm1vZHVsZXMpID0+IHtcbiAgdmFyIG1ldGhvZHMsIGtleSwgaVxuXG4gIC8vIEdldCBvYmplY3Qgd2l0aCBleHRlbnNpb25zXG4gIG1ldGhvZHMgPSBtb2R1bGVzLnBvcCgpXG5cbiAgZm9yIChpID0gbW9kdWxlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGZvciAoa2V5IGluIG1ldGhvZHMpIHsgbW9kdWxlc1tpXS5wcm90b3R5cGVba2V5XSA9IG1ldGhvZHNba2V5XSB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGV4dGVuZFN0YXRpYyA9ICguLi5tb2R1bGVzKSA9PiB7XG4gIHZhciBtZXRob2RzLCBrZXksIGlcblxuICAvLyBHZXQgb2JqZWN0IHdpdGggZXh0ZW5zaW9uc1xuICBtZXRob2RzID0gbW9kdWxlcy5wb3AoKVxuXG4gIGZvciAoaSA9IG1vZHVsZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBmb3IgKGtleSBpbiBtZXRob2RzKSB7IG1vZHVsZXNbaV1ba2V5XSA9IG1ldGhvZHNba2V5XSB9XG4gIH1cbn1cblxuLy8gVE9ETzogcmVmYWN0b3Igc28gdGhhdCBpdCB0YWtlcyBhIGNsYXNzXG5leHBvcnQgY29uc3QgbWl4aW4gPSAobWl4aW4sIF9jbGFzcykgPT4ge1xuICBjb25zdCBkZXNjcmlwdG9ycyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG1peGluKVxuICAvLyBjb25zdCBhbGwgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhtaXhpbilcblxuICAvLyBjb25zdCBwcm9wTmFtZXMgPSBPYmplY3Qua2V5cyhkZXNjcmlwdG9ycylcbiAgLy8gY29uc3QgbWV0aG9kTmFtZXMgPSBhbGwuZmlsdGVyKHAgPT4gIXByb3BOYW1lcy5pbmNsdWRlcyhwKSlcblxuICAvLyBmb3IgKGNvbnN0IG1ldGhvZCBvZiBtZXRob2ROYW1lcykge1xuICAvLyAgIF9jbGFzcy5wcm90b3R5cGVbbWV0aG9kXSA9IG1peGluW21ldGhvZF1cbiAgLy8gfVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKF9jbGFzcy5wcm90b3R5cGUsIGRlc2NyaXB0b3JzKVxufVxuIiwiaW1wb3J0IHsgQm94LCBOb0JveCB9IGZyb20gJy4uL290aGVyL0JveC5qcydcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vb3RoZXIvUG9pbnQuanMnXG5pbXBvcnQgKiBhcyByZWdleCBmcm9tICcuL3JlZ2V4LmpzJ1xuLy8gVE9ETzogdXNlIG93biBtYXRyaXggaW1wbGVtZW50YXRpb25cbmltcG9ydCB7IG1hdHJpeEZhY3RvcnkgfSBmcm9tICcuLy4uL2RvbS9zdmcvU1ZHTWF0cml4LmpzJ1xuaW1wb3J0IHsgUG9pbnRDbG91ZCB9IGZyb20gJy4vUG9pbnRDbG91ZC5qcydcblxuY29uc3QgcGF0aEhhbmRsZXJzID0ge1xuICBNIChjLCBwLCByLCBwMCkge1xuICAgIHAueCA9IHAwLnggPSBjWzBdXG4gICAgcC55ID0gcDAueSA9IGNbMV1cblxuICAgIHJldHVybiBuZXcgTW92ZShwKVxuICB9LFxuICBMIChjLCBwKSB7XG4gICAgY29uc3QgcmV0ID0gbmV3IExpbmUocC54LCBwLnksIGNbMF0sIGNbMV0pLy8gLm9mZnNldChvKVxuICAgIHAueCA9IGNbMF1cbiAgICBwLnkgPSBjWzFdXG4gICAgcmV0dXJuIHJldFxuICB9LFxuICBIIChjLCBwKSB7XG4gICAgcmV0dXJuIHBhdGhIYW5kbGVycy5MKFsgY1swXSwgcC55IF0sIHApXG4gIH0sXG4gIFYgKGMsIHApIHtcbiAgICByZXR1cm4gcGF0aEhhbmRsZXJzLkwoWyBwLngsIGNbMF0gXSwgcClcbiAgfSxcbiAgUSAoYywgcCwgcikge1xuICAgIGNvbnN0IHJldCA9IEN1YmljLmZyb21RdWFkKHAsIG5ldyBQb2ludChjWzBdLCBjWzFdKSwgbmV3IFBvaW50KGNbMl0sIGNbM10pKS8vIC5vZmZzZXQobylcbiAgICBwLnggPSBjWzJdXG4gICAgcC55ID0gY1szXVxuXG4gICAgY29uc3QgcmVmbGVjdCA9IG5ldyBQb2ludChjWzBdLCBjWzFdKS5yZWZsZWN0QXQocClcbiAgICByLnggPSByZWZsZWN0LnhcbiAgICByLnkgPSByZWZsZWN0LnlcblxuICAgIHJldHVybiByZXRcbiAgfSxcbiAgVCAoYywgcCwgciwgcDAsIHJlZmxlY3Rpb25Jc1Bvc3NpYmxlKSB7XG4gICAgaWYgKHJlZmxlY3Rpb25Jc1Bvc3NpYmxlKSB7IGMgPSBbIHIueCwgci55IF0uY29uY2F0KGMpIH0gZWxzZSB7IGMgPSBbIHAueCwgcC55IF0uY29uY2F0KGMpIH1cbiAgICByZXR1cm4gcGF0aEhhbmRsZXJzLlEoYywgcCwgcilcbiAgfSxcbiAgQyAoYywgcCwgcikge1xuICAgIGNvbnN0IHJldCA9IG5ldyBDdWJpYyhwLCBuZXcgUG9pbnQoY1swXSwgY1sxXSksIG5ldyBQb2ludChjWzJdLCBjWzNdKSwgbmV3IFBvaW50KGNbNF0sIGNbNV0pKS8vIC5vZmZzZXQobylcbiAgICBwLnggPSBjWzRdXG4gICAgcC55ID0gY1s1XVxuICAgIGNvbnN0IHJlZmxlY3QgPSBuZXcgUG9pbnQoY1syXSwgY1szXSkucmVmbGVjdEF0KHApXG4gICAgci54ID0gcmVmbGVjdC54XG4gICAgci55ID0gcmVmbGVjdC55XG4gICAgcmV0dXJuIHJldFxuICB9LFxuICBTIChjLCBwLCByLCBwMCwgcmVmbGVjdGlvbklzUG9zc2libGUpIHtcbiAgICAvLyByZWZsZWN0aW9uIG1ha2VzIG9ubHkgc2Vuc2UgaWYgdGhpcyBjb21tYW5kIHdhcyBwcmVjZWVkZWQgYnkgYW5vdGhlciBiZXppZXJlIGNvbW1hbmQgKFFUU0MpXG4gICAgaWYgKHJlZmxlY3Rpb25Jc1Bvc3NpYmxlKSB7IGMgPSBbIHIueCwgci55IF0uY29uY2F0KGMpIH0gZWxzZSB7IGMgPSBbIHAueCwgcC55IF0uY29uY2F0KGMpIH1cbiAgICByZXR1cm4gcGF0aEhhbmRsZXJzLkMoYywgcCwgcilcbiAgfSxcbiAgWiAoYywgcCwgciwgcDApIHtcbiAgICAvLyBGSVhNRTogVGhlIGJlaGF2aW9yIG9mIFogZGVwZW5kcyBvbiB0aGUgY29tbWFuZCBiZWZvcmVcbiAgICByZXR1cm4gcGF0aEhhbmRsZXJzLkwoWyBwMC54LCBwMC55IF0sIHApXG4gIH0sXG4gIEEgKGMsIHAsIHIpIHtcbiAgICBjb25zdCByZXQgPSBuZXcgQXJjKHAsIG5ldyBQb2ludChjWzVdLCBjWzZdKSwgY1swXSwgY1sxXSwgY1syXSwgY1szXSwgY1s0XSlcbiAgICBwLnggPSBjWzVdXG4gICAgcC55ID0gY1s2XVxuICAgIHJldHVybiByZXRcbiAgfVxufVxuXG5jb25zdCBtbGh2cXRjc2EgPSAnbWxodnF0Y3Nheicuc3BsaXQoJycpXG5cbmZvciAobGV0IGkgPSAwLCBpbCA9IG1saHZxdGNzYS5sZW5ndGg7IGkgPCBpbDsgKytpKSB7XG4gIHBhdGhIYW5kbGVyc1ttbGh2cXRjc2FbaV1dID0gKGZ1bmN0aW9uIChpKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjLCBwLCByLCBwMCwgcmVmbGVjdGlvbklzUG9zc2libGUpIHtcbiAgICAgIGlmIChpID09PSAnSCcpIGNbMF0gPSBjWzBdICsgcC54XG4gICAgICBlbHNlIGlmIChpID09PSAnVicpIGNbMF0gPSBjWzBdICsgcC55XG4gICAgICBlbHNlIGlmIChpID09PSAnQScpIHtcbiAgICAgICAgY1s1XSA9IGNbNV0gKyBwLnhcbiAgICAgICAgY1s2XSA9IGNbNl0gKyBwLnlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwLCBqbCA9IGMubGVuZ3RoOyBqIDwgamw7ICsraikge1xuICAgICAgICAgIGNbal0gPSBjW2pdICsgKGogJSAyID8gcC55IDogcC54KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYXRoSGFuZGxlcnNbaV0oYywgcCwgciwgcDAsIHJlZmxlY3Rpb25Jc1Bvc3NpYmxlKVxuICAgIH1cbiAgfSkobWxodnF0Y3NhW2ldLnRvVXBwZXJDYXNlKCkpXG59XG5cbmZ1bmN0aW9uIHBhdGhSZWdSZXBsYWNlIChhLCBiLCBjLCBkKSB7XG4gIHJldHVybiBjICsgZC5yZXBsYWNlKHJlZ2V4LmRvdHMsICcgLicpXG59XG5cbmZ1bmN0aW9uIGlzQmV6aWVyZSAob2JqKSB7XG4gIHJldHVybiBvYmogaW5zdGFuY2VvZiBDdWJpY1xufVxuXG5leHBvcnQgY29uc3QgcGF0aFBhcnNlciA9IChhcnJheSkgPT4ge1xuXG4gIC8vIHByZXBhcmUgZm9yIHBhcnNpbmdcbiAgY29uc3QgcGFyYW1DbnQgPSB7IE06IDIsIEw6IDIsIEg6IDEsIFY6IDEsIEM6IDYsIFM6IDQsIFE6IDQsIFQ6IDIsIEE6IDcsIFo6IDAgfVxuXG4gIGFycmF5ID0gYXJyYXlcbiAgICAucmVwbGFjZShyZWdleC5udW1iZXJzV2l0aERvdHMsIHBhdGhSZWdSZXBsYWNlKSAvLyBjb252ZXJ0IDQ1LjEyMy4xMjMgdG8gNDUuMTIzIC4xMjNcbiAgICAucmVwbGFjZShyZWdleC5wYXRoTGV0dGVycywgJyAkJiAnKSAvLyBwdXQgc29tZSByb29tIGJldHdlZW4gbGV0dGVycyBhbmQgbnVtYmVyc1xuICAgIC5yZXBsYWNlKHJlZ2V4Lmh5cGhlbiwgJyQxIC0nKSAvLyBhZGQgc3BhY2UgYmVmb3JlIGh5cGhlblxuICAgIC50cmltKCkgLy8gdHJpbVxuICAgIC5zcGxpdChyZWdleC5kZWxpbWl0ZXIpIC8vIHNwbGl0IGludG8gYXJyYXlcblxuICAvLyBhcnJheSBub3cgaXMgYW4gYXJyYXkgY29udGFpbmluZyBhbGwgcGFydHMgb2YgYSBwYXRoIGUuZy4gWydNJywgJzAnLCAnMCcsICdMJywgJzMwJywgJzMwJyAuLi5dXG4gIGNvbnN0IGFyciA9IFtdXG4gIGNvbnN0IHAgPSBuZXcgUG9pbnQoKVxuICBjb25zdCBwMCA9IG5ldyBQb2ludCgpXG4gIGNvbnN0IHIgPSBuZXcgUG9pbnQoKVxuICBsZXQgaW5kZXggPSAwXG4gIGNvbnN0IGxlbiA9IGFycmF5Lmxlbmd0aFxuICBsZXQgc1xuXG4gIGRvIHtcbiAgICAvLyBUZXN0IGlmIHdlIGhhdmUgYSBwYXRoIGxldHRlclxuICAgIGlmIChyZWdleC5pc1BhdGhMZXR0ZXIudGVzdChhcnJheVtpbmRleF0pKSB7XG4gICAgICBzID0gYXJyYXlbaW5kZXhdXG4gICAgICArK2luZGV4XG4gICAgLy8gSWYgbGFzdCBsZXR0ZXIgd2FzIGEgbW92ZSBjb21tYW5kIGFuZCB3ZSBnb3Qgbm8gbmV3LCBpdCBkZWZhdWx0cyB0byBbTF1pbmVcbiAgICB9IGVsc2UgaWYgKHMgPT09ICdNJykge1xuICAgICAgcyA9ICdMJ1xuICAgIH0gZWxzZSBpZiAocyA9PT0gJ20nKSB7XG4gICAgICBzID0gJ2wnXG4gICAgfVxuXG4gICAgYXJyLnB1c2goXG4gICAgICBwYXRoSGFuZGxlcnNbc10uY2FsbChudWxsLFxuICAgICAgICBhcnJheS5zbGljZShpbmRleCwgKGluZGV4ID0gaW5kZXggKyBwYXJhbUNudFtzLnRvVXBwZXJDYXNlKCldKSkubWFwKHBhcnNlRmxvYXQpLFxuICAgICAgICBwLCByLCBwMCxcbiAgICAgICAgaXNCZXppZXJlKGFyclthcnIubGVuZ3RoIC0gMV0pXG4gICAgICApXG4gICAgKVxuXG4gIH0gd2hpbGUgKGxlbiA+IGluZGV4KVxuXG4gIHJldHVybiBhcnJcbn1cblxuY2xhc3MgTW92ZSB7XG4gIGNvbnN0cnVjdG9yIChwKSB7XG4gICAgdGhpcy5wMSA9IHAuY2xvbmUoKVxuICB9XG5cbiAgLy8gRklYTUU6IFVzZSBwb2ludGNsb3VkXG4gIGJib3ggKCkge1xuICAgIGNvbnN0IHAgPSB0aGlzLnAxXG4gICAgcmV0dXJuIG5ldyBCb3gocC54LCBwLnksIDAsIDApXG4gIH1cblxuICBnZXRDbG91ZCAoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludENsb3VkKFsgdGhpcy5wMSBdKVxuICB9XG5cbiAgbGVuZ3RoICgpIHsgcmV0dXJuIDAgfVxuXG4gIHRvUGF0aCAoKSB7XG4gICAgcmV0dXJuIFsgJ00nLCB0aGlzLnAxLngsIHRoaXMucDEueSBdLmpvaW4oJyAnKVxuICB9XG5cbiAgdG9QYXRoRnJhZ21lbnQgKCkge1xuICAgIHJldHVybiBbICdNJywgdGhpcy5wMS54LCB0aGlzLnAxLnkgXVxuICB9XG5cbiAgdHJhbnNmb3JtIChtYXRyaXgpIHtcbiAgICB0aGlzLnAxLnRyYW5zZm9ybU8obWF0cml4KVxuICAgIHJldHVybiB0aGlzXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFyYyB7XG4gIGNvbnN0cnVjdG9yIChwMSwgcDIsIHJ4LCByeSwgz4YsIGFyYywgc3dlZXApIHtcbiAgICAvLyBodHRwczovL3d3dy53My5vcmcvVFIvU1ZHL2ltcGxub3RlLmh0bWwjQXJjQ29ycmVjdGlvbk91dE9mUmFuZ2VSYWRpaVxuICAgIGlmICghcnggfHwgIXJ5KSByZXR1cm4gbmV3IExpbmUocDEsIHAyKVxuXG4gICAgcnggPSBNYXRoLmFicyhyeClcbiAgICByeSA9IE1hdGguYWJzKHJ5KVxuXG4gICAgdGhpcy5wMSA9IHAxLmNsb25lKClcbiAgICB0aGlzLnAyID0gcDIuY2xvbmUoKVxuICAgIHRoaXMuYXJjID0gYXJjID8gMSA6IDBcbiAgICB0aGlzLnN3ZWVwID0gc3dlZXAgPyAxIDogMFxuXG4gICAgLy8gQ2FsY3VsYXRlIGNvcyBhbmQgc2luIG9mIGFuZ2xlIHBoaVxuICAgIGNvbnN0IGNvc8+GID0gTWF0aC5jb3Moz4YgLyAxODAgKiBNYXRoLlBJKVxuICAgIGNvbnN0IHNpbs+GID0gTWF0aC5zaW4oz4YgLyAxODAgKiBNYXRoLlBJKVxuXG4gICAgLy8gaHR0cHM6Ly93d3cudzMub3JnL1RSL1NWRy9pbXBsbm90ZS5odG1sI0FyY0NvbnZlcnNpb25FbmRwb2ludFRvQ2VudGVyXG4gICAgLy8gKGVxLiA1LjEpXG4gICAgY29uc3QgcDFfID0gbmV3IFBvaW50KFxuICAgICAgKHAxLnggLSBwMi54KSAvIDIsXG4gICAgICAocDEueSAtIHAyLnkpIC8gMlxuICAgICkudHJhbnNmb3JtKG1hdHJpeEZhY3RvcnkoXG4gICAgICBjb3PPhiwgLXNpbs+GLCBzaW7PhiwgY29zz4YsIDAsIDBcbiAgICApKVxuXG4gICAgLy8gKGVxLiA2LjIpXG4gICAgLy8gTWFrZSBzdXJlIHRoZSByYWRpdXMgZml0IHdpdGggdGhlIGFyYyBhbmQgY29ycmVjdCBpZiBuZWNjZXNzYXJ5XG4gICAgY29uc3QgcmF0aW8gPSAocDFfLnggKiogMiAvIHJ4ICoqIDIpICsgKHAxXy55ICoqIDIgLyByeSAqKiAyKVxuXG4gICAgLy8gKGVxLiA2LjMpXG4gICAgaWYgKHJhdGlvID4gMSkge1xuICAgICAgcnggPSBNYXRoLnNxcnQocmF0aW8pICogcnhcbiAgICAgIHJ5ID0gTWF0aC5zcXJ0KHJhdGlvKSAqIHJ5XG4gICAgfVxuXG4gICAgLy8gKGVxLiA1LjIpXG4gICAgY29uc3QgcnhRdWFkID0gcnggKiogMlxuICAgIGNvbnN0IHJ5UXVhZCA9IHJ5ICoqIDJcblxuICAgIGNvbnN0IGRpdmlzb3IxID0gcnhRdWFkICogcDFfLnkgKiogMlxuICAgIGNvbnN0IGRpdmlzb3IyID0gcnlRdWFkICogcDFfLnggKiogMlxuICAgIGNvbnN0IGRpdmlkZW5kID0gKHJ4UXVhZCAqIHJ5UXVhZCAtIGRpdmlzb3IxIC0gZGl2aXNvcjIpXG5cbiAgICBsZXQgY19cbiAgICBpZiAoTWF0aC5hYnMoZGl2aWRlbmQpIDwgMWUtMTUpIHtcbiAgICAgIGNfID0gbmV3IFBvaW50KDAsIDApXG4gICAgfSBlbHNlIHtcbiAgICAgIGNfID0gbmV3IFBvaW50KFxuICAgICAgICByeCAqIHAxXy55IC8gcnksXG4gICAgICAgIC1yeSAqIHAxXy54IC8gcnhcbiAgICAgICkubXVsKE1hdGguc3FydChcbiAgICAgICAgZGl2aWRlbmQgLyAoZGl2aXNvcjEgKyBkaXZpc29yMilcbiAgICAgICkpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYXJjID09PSB0aGlzLnN3ZWVwKSBjXyA9IGNfLm11bCgtMSlcblxuICAgIC8vIChlcS4gNS4zKVxuICAgIGNvbnN0IGMgPSBjXy50cmFuc2Zvcm0obWF0cml4RmFjdG9yeShcbiAgICAgIGNvc8+GLCBzaW7PhiwgLXNpbs+GLCBjb3PPhiwgMCwgMFxuICAgICkpLmFkZChuZXcgUG9pbnQoXG4gICAgICAocDEueCArIHAyLngpIC8gMixcbiAgICAgIChwMS55ICsgcDIueSkgLyAyXG4gICAgKSlcblxuICAgIGNvbnN0IGFuZ2xlUG9pbnQgPSBuZXcgUG9pbnQoXG4gICAgICAocDFfLnggLSBjXy54KSAvIHJ4LFxuICAgICAgKHAxXy55IC0gY18ueSkgLyByeVxuICAgIClcblxuICAgIC8qIEZvciBlcS4gNS40IHNlZSBhbmdsZVRvIGZ1bmN0aW9uICovXG5cbiAgICAvLyAoZXEuIDUuNSlcbiAgICBjb25zdCDOuCA9IG5ldyBQb2ludCgxLCAwKS5hbmdsZVRvKGFuZ2xlUG9pbnQpXG5cbiAgICAvLyAoZXEuIDUuNilcbiAgICBsZXQgzpTOuCA9IGFuZ2xlUG9pbnQuYW5nbGVUbyhuZXcgUG9pbnQoXG4gICAgICAoLXAxXy54IC0gY18ueCkgLyByeCxcbiAgICAgICgtcDFfLnkgLSBjXy55KSAvIHJ5XG4gICAgKSlcblxuICAgIM6UzrggPSAozpTOuCAlICgyICogTWF0aC5QSSkpXG5cbiAgICBpZiAoIXN3ZWVwICYmIM6UzrggPiAwKSDOlM64IC09IDIgKiBNYXRoLlBJXG4gICAgaWYgKHN3ZWVwICYmIM6UzrggPCAwKSDOlM64ICs9IDIgKiBNYXRoLlBJXG5cbiAgICB0aGlzLmMgPSBjXG4gICAgdGhpcy50aGV0YSA9IM64ICogMTgwIC8gTWF0aC5QSVxuICAgIHRoaXMudGhldGEyID0gKM64ICsgzpTOuCkgKiAxODAgLyBNYXRoLlBJXG5cbiAgICB0aGlzLmRlbHRhID0gzpTOuCAqIDE4MCAvIE1hdGguUElcbiAgICB0aGlzLnJ4ID0gcnhcbiAgICB0aGlzLnJ5ID0gcnlcbiAgICB0aGlzLnBoaSA9IM+GXG4gICAgdGhpcy5jb3PPhiA9IGNvc8+GXG4gICAgdGhpcy5zaW7PhiA9IHNpbs+GXG4gIH1cblxuICBzdGF0aWMgZnJvbUNlbnRlckZvcm0gKGMsIHJ4LCByeSwgz4YsIM64LCDOlM64KSB7XG4gICAgY29uc3QgY29zz4YgPSBNYXRoLmNvcyjPhiAvIDE4MCAqIE1hdGguUEkpXG4gICAgY29uc3Qgc2luz4YgPSBNYXRoLnNpbijPhiAvIDE4MCAqIE1hdGguUEkpXG4gICAgY29uc3QgbSA9IG1hdHJpeEZhY3RvcnkoY29zz4YsIHNpbs+GLCAtc2luz4YsIGNvc8+GLCAwLCAwKVxuXG4gICAgY29uc3QgcDEgPSBuZXcgUG9pbnQoXG4gICAgICByeCAqIE1hdGguY29zKM64IC8gMTgwICogTWF0aC5QSSksXG4gICAgICByeSAqIE1hdGguc2luKM64IC8gMTgwICogTWF0aC5QSSlcbiAgICApLnRyYW5zZm9ybShtKS5hZGQoYylcblxuICAgIGNvbnN0IHAyID0gbmV3IFBvaW50KFxuICAgICAgcnggKiBNYXRoLmNvcygozrggKyDOlM64KSAvIDE4MCAqIE1hdGguUEkpLFxuICAgICAgcnkgKiBNYXRoLnNpbigozrggKyDOlM64KSAvIDE4MCAqIE1hdGguUEkpXG4gICAgKS50cmFuc2Zvcm0obSkuYWRkKGMpXG5cbiAgICBjb25zdCBhcmMgPSBNYXRoLmFicyjOlM64KSA+IDE4MCA/IDEgOiAwXG4gICAgY29uc3Qgc3dlZXAgPSDOlM64ID4gMCA/IDEgOiAwXG5cbiAgICByZXR1cm4gbmV3IEFyYyhwMSwgcDIsIHJ4LCByeSwgz4YsIGFyYywgc3dlZXApXG4gIH1cblxuICBiYm94ICgpIHtcbiAgICBjb25zdCBjbG91ZCA9IHRoaXMuZ2V0Q2xvdWQoKVxuICAgIHJldHVybiBjbG91ZC5iYm94KClcbiAgfVxuXG4gIGNsb25lICgpIHtcbiAgICByZXR1cm4gbmV3IEFyYyh0aGlzLnAxLCB0aGlzLnAyLCB0aGlzLnJ4LCB0aGlzLnJ5LCB0aGlzLnBoaSwgdGhpcy5hcmMsIHRoaXMuc3dlZXApXG4gIH1cblxuICBnZXRDbG91ZCAoKSB7XG4gICAgaWYgKHRoaXMucDEuZXF1YWxzKHRoaXMucDIpKSByZXR1cm4gbmV3IFBvaW50Q2xvdWQoWyB0aGlzLnAxIF0pXG5cbiAgICAvLyBhcmMgY291bGQgYmUgcm90YXRlZC4gdGhlIG1pbiBhbmQgbWF4IHZhbHVlcyB0aGVuIGRvbnQgbGllIG9uIG11bHRpcGxlcyBvZiA5MCBkZWdyZXNzIGJ1dCBhcmUgc2hpZnRlZCBieSB0aGUgcm90YXRpb24gYW5nbGVcbiAgICAvLyBzbyB3ZSBmaXJzdCBjYWxjdWxhdGUgb3VyIDAvOTAgZGVncmVlIGFuZ2xlXG4gICAgbGV0IM64MDEgPSBNYXRoLmF0YW4oLXRoaXMuc2luz4YgLyB0aGlzLmNvc8+GICogdGhpcy5yeSAvIHRoaXMucngpICogMTgwIC8gTWF0aC5QSVxuICAgIGxldCDOuDAyID0gTWF0aC5hdGFuKHRoaXMuY29zz4YgLyB0aGlzLnNpbs+GICogdGhpcy5yeSAvIHRoaXMucngpICogMTgwIC8gTWF0aC5QSVxuICAgIGxldCDOuDEgPSB0aGlzLnRoZXRhXG4gICAgbGV0IM64MiA9IHRoaXMudGhldGEyXG5cbiAgICBpZiAozrgxIDwgMCB8fCDOuDIgPCAwKSB7XG4gICAgICDOuDEgKz0gMzYwXG4gICAgICDOuDIgKz0gMzYwXG4gICAgfVxuXG4gICAgaWYgKM64MiA8IM64MSkge1xuICAgICAgY29uc3QgdGVtcCA9IM64MVxuICAgICAgzrgxID0gzrgyXG4gICAgICDOuDIgPSB0ZW1wXG5cbiAgICB9XG5cbiAgICB3aGlsZSAozrgwMSAtIDkwID4gzrgwMSkgzrgwMSAtPSA5MFxuICAgIHdoaWxlICjOuDAxIDwgzrgxKSDOuDAxICs9IDkwXG4gICAgd2hpbGUgKM64MDIgLSA5MCA+IM64MDIpIM64MDIgLT0gOTBcbiAgICB3aGlsZSAozrgwMiA8IM64MSkgzrgwMiArPSA5MFxuXG4gICAgY29uc3QgYW5nbGVUb1Rlc3QgPSBbIM64MDEsIM64MDIsICjOuDAxICsgOTApLCAozrgwMiArIDkwKSwgKM64MDEgKyAxODApLCAozrgwMiArIDE4MCksICjOuDAxICsgMjcwKSwgKM64MDIgKyAyNzApIF1cblxuICAgIGNvbnN0IHBvaW50cyA9IGFuZ2xlVG9UZXN0LmZpbHRlcihmdW5jdGlvbiAoYW5nbGUpIHtcbiAgICAgIHJldHVybiAoYW5nbGUgPiDOuDEgJiYgYW5nbGUgPCDOuDIpXG4gICAgfSkubWFwKGZ1bmN0aW9uIChhbmdsZSkge1xuICAgICAgd2hpbGUgKHRoaXMudGhldGEgPCBhbmdsZSkgYW5nbGUgLT0gMzYwXG4gICAgICByZXR1cm4gdGhpcy5wb2ludEF0KCgoYW5nbGUgLSB0aGlzLnRoZXRhKSAlIDM2MCkgLyAodGhpcy5kZWx0YSkpIC8vIFRPRE86IHJlcGxhY2UgdGhhdCBjYWxsIHdpdGggcG9pbnRBdEFuZ2xlXG4gICAgfS5iaW5kKHRoaXMpKS5jb25jYXQodGhpcy5wMSwgdGhpcy5wMilcblxuICAgIHJldHVybiBuZXcgUG9pbnRDbG91ZChwb2ludHMpXG4gIH1cblxuICBsZW5ndGggKCkge1xuICAgIGlmICh0aGlzLnAxLmVxdWFscyh0aGlzLnAyKSkgcmV0dXJuIDBcblxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMucDIuc3ViKHRoaXMucDEpLmFicygpXG5cbiAgICBjb25zdCByZXQgPSB0aGlzLnNwbGl0QXQoMC41KVxuICAgIGNvbnN0IGxlbjEgPSByZXRbMF0ucDIuc3ViKHJldFswXS5wMSkuYWJzKClcbiAgICBjb25zdCBsZW4yID0gcmV0WzFdLnAyLnN1YihyZXRbMV0ucDEpLmFicygpXG5cbiAgICBpZiAobGVuMSArIGxlbjIgLSBsZW5ndGggPCAwLjAwMDAxKSB7XG4gICAgICByZXR1cm4gbGVuMSArIGxlbjJcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0WzBdLmxlbmd0aCgpICsgcmV0WzFdLmxlbmd0aCgpXG4gIH1cblxuICBwb2ludEF0ICh0KSB7XG4gICAgaWYgKHRoaXMucDEuZXF1YWxzKHRoaXMucDIpKSByZXR1cm4gdGhpcy5wMS5jbG9uZSgpXG5cbiAgICBjb25zdCB0SW5BbmdsZSA9ICh0aGlzLnRoZXRhICsgdCAqIHRoaXMuZGVsdGEpIC8gMTgwICogTWF0aC5QSVxuICAgIGNvbnN0IHNpbs64ID0gTWF0aC5zaW4odEluQW5nbGUpXG4gICAgY29uc3QgY29zzrggPSBNYXRoLmNvcyh0SW5BbmdsZSlcblxuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICB0aGlzLmNvc8+GICogdGhpcy5yeCAqIGNvc864IC0gdGhpcy5zaW7PhiAqIHRoaXMucnkgKiBzaW7OuCArIHRoaXMuYy54LFxuICAgICAgdGhpcy5zaW7PhiAqIHRoaXMucnkgKiBjb3POuCArIHRoaXMuY29zz4YgKiB0aGlzLnJ4ICogc2luzrggKyB0aGlzLmMueVxuICAgIClcbiAgfVxuXG4gIHNwbGl0QXQgKHQpIHtcbiAgICBjb25zdCBhYnNEZWx0YSA9IE1hdGguYWJzKHRoaXMuZGVsdGEpXG4gICAgY29uc3QgZGVsdGExID0gYWJzRGVsdGEgKiB0XG4gICAgY29uc3QgZGVsdGEyID0gYWJzRGVsdGEgKiAoMSAtIHQpXG5cbiAgICBjb25zdCBwb2ludEF0VCA9IHRoaXMucG9pbnRBdCh0KVxuXG4gICAgcmV0dXJuIFtcbiAgICAgIG5ldyBBcmModGhpcy5wMSwgcG9pbnRBdFQsIHRoaXMucngsIHRoaXMucnksIHRoaXMucGhpLCBkZWx0YTEgPiAxODAsIHRoaXMuc3dlZXApLFxuICAgICAgbmV3IEFyYyhwb2ludEF0VCwgdGhpcy5wMiwgdGhpcy5yeCwgdGhpcy5yeSwgdGhpcy5waGksIGRlbHRhMiA+IDE4MCwgdGhpcy5zd2VlcClcbiAgICBdXG4gIH1cblxuICB0b1BhdGggKCkge1xuICAgIHJldHVybiBbICdNJywgdGhpcy5wMS54LCB0aGlzLnAxLnksICdBJywgdGhpcy5yeCwgdGhpcy5yeSwgdGhpcy5waGksIHRoaXMuYXJjLCB0aGlzLnN3ZWVwLCB0aGlzLnAyLngsIHRoaXMucDIueSBdLmpvaW4oJyAnKVxuICB9XG5cbiAgdG9QYXRoRnJhZ21lbnQgKCkge1xuICAgIHJldHVybiBbICdBJywgdGhpcy5yeCwgdGhpcy5yeSwgdGhpcy5waGksIHRoaXMuYXJjLCB0aGlzLnN3ZWVwLCB0aGlzLnAyLngsIHRoaXMucDIueSBdXG4gIH1cblxuICB0b1N0cmluZyAoKSB7XG4gICAgcmV0dXJuIGBwMTogJHt0aGlzLnAxLngudG9GaXhlZCg0KX0gJHt0aGlzLnAxLnkudG9GaXhlZCg0KX0sIHAyOiAke3RoaXMucDIueC50b0ZpeGVkKDQpfSAke3RoaXMucDIueS50b0ZpeGVkKDQpfSwgYzogJHt0aGlzLmMueC50b0ZpeGVkKDQpfSAke3RoaXMuYy55LnRvRml4ZWQoNCl9IHRoZXRhOiAke3RoaXMudGhldGEudG9GaXhlZCg0KX0sIHRoZXRhMjogJHt0aGlzLnRoZXRhMi50b0ZpeGVkKDQpfSwgZGVsdGE6ICR7dGhpcy5kZWx0YS50b0ZpeGVkKDQpfSwgbGFyZ2U6ICR7dGhpcy5hcmN9LCBzd2VlcDogJHt0aGlzLnN3ZWVwfWBcbiAgfVxuXG4gIHRyYW5zZm9ybSAobWF0cml4KSB7XG4gICAgcmV0dXJuIG5ldyBBcmModGhpcy5wMS50cmFuc2Zvcm0obWF0cml4KSwgdGhpcy5wMi50cmFuc2Zvcm0obWF0cml4KSwgdGhpcy5yeCwgdGhpcy5yeSwgdGhpcy5waGksIHRoaXMuYXJjLCB0aGlzLnN3ZWVwKVxuICB9XG59XG5cbmNsYXNzIEN1YmljIHtcbiAgY29uc3RydWN0b3IgKHAxLCBjMSwgYzIsIHAyKSB7XG4gICAgaWYgKHAxIGluc3RhbmNlb2YgUG9pbnQpIHtcbiAgICAgIHRoaXMucDEgPSBuZXcgUG9pbnQocDEpXG4gICAgICB0aGlzLmMxID0gbmV3IFBvaW50KGMxKVxuICAgICAgdGhpcy5jMiA9IG5ldyBQb2ludChjMilcbiAgICAgIHRoaXMucDIgPSBuZXcgUG9pbnQocDIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucDEgPSBuZXcgUG9pbnQocDEucDEpXG4gICAgICB0aGlzLmMxID0gbmV3IFBvaW50KHAxLmMxKVxuICAgICAgdGhpcy5jMiA9IG5ldyBQb2ludChwMS5jMilcbiAgICAgIHRoaXMucDIgPSBuZXcgUG9pbnQocDEucDIpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21RdWFkIChwMSwgYywgcDIpIHtcbiAgICBjb25zdCBjMSA9IHAxLm11bCgxIC8gMykuYWRkKGMubXVsKDIgLyAzKSlcbiAgICBjb25zdCBjMiA9IGMubXVsKDIgLyAzKS5hZGQocDIubXVsKDEgLyAzKSlcbiAgICByZXR1cm4gbmV3IEN1YmljKHAxLCBjMSwgYzIsIHAyKVxuICB9XG5cbiAgYmJveCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q2xvdWQoKS5iYm94KClcbiAgfVxuXG4gIGZpbmRSb290cyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmluZFJvb3RzWCgpLmNvbmNhdCh0aGlzLmZpbmRSb290c1koKSlcbiAgfVxuXG4gIGZpbmRSb290c1ggKCkge1xuICAgIHJldHVybiB0aGlzLmZpbmRSb290c1hZKHRoaXMucDEueCwgdGhpcy5jMS54LCB0aGlzLmMyLngsIHRoaXMucDIueClcbiAgfVxuXG4gIGZpbmRSb290c1hZIChwMSwgcDIsIHAzLCBwNCkge1xuICAgIGNvbnN0IGEgPSAzICogKC1wMSArIDMgKiBwMiAtIDMgKiBwMyArIHA0KVxuICAgIGNvbnN0IGIgPSA2ICogKHAxIC0gMiAqIHAyICsgcDMpXG4gICAgY29uc3QgYyA9IDMgKiAocDIgLSBwMSlcblxuICAgIGlmIChhID09PSAwKSByZXR1cm4gWyAtYyAvIGIgXS5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7IHJldHVybiBlbCA+IDAgJiYgZWwgPCAxIH0pXG5cbiAgICBpZiAoYiAqIGIgLSA0ICogYSAqIGMgPCAwKSByZXR1cm4gW11cbiAgICBpZiAoYiAqIGIgLSA0ICogYSAqIGMgPT09IDApIHJldHVybiBbIE1hdGgucm91bmQoKC1iIC8gKDIgKiBhKSkgKiAxMDAwMDApIC8gMTAwMDAwIF0uZmlsdGVyKGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gZWwgPiAwICYmIGVsIDwgMSB9KVxuXG4gICAgcmV0dXJuIFtcbiAgICAgIE1hdGgucm91bmQoKC1iICsgTWF0aC5zcXJ0KGIgKiBiIC0gNCAqIGEgKiBjKSkgLyAoMiAqIGEpICogMTAwMDAwKSAvIDEwMDAwMCxcbiAgICAgIE1hdGgucm91bmQoKC1iIC0gTWF0aC5zcXJ0KGIgKiBiIC0gNCAqIGEgKiBjKSkgLyAoMiAqIGEpICogMTAwMDAwKSAvIDEwMDAwMFxuICAgIF0uZmlsdGVyKGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gZWwgPiAwICYmIGVsIDwgMSB9KVxuICB9XG5cbiAgZmluZFJvb3RzWSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmluZFJvb3RzWFkodGhpcy5wMS55LCB0aGlzLmMxLnksIHRoaXMuYzIueSwgdGhpcy5wMi55KVxuICB9XG5cbiAgZmxhdG5lc3MgKCkge1xuICAgIGxldCB1eCA9IE1hdGgucG93KDMgKiB0aGlzLmMxLnggLSAyICogdGhpcy5wMS54IC0gdGhpcy5wMi54LCAyKVxuICAgIGxldCB1eSA9IE1hdGgucG93KDMgKiB0aGlzLmMxLnkgLSAyICogdGhpcy5wMS55IC0gdGhpcy5wMi55LCAyKVxuICAgIGNvbnN0IHZ4ID0gTWF0aC5wb3coMyAqIHRoaXMuYzIueCAtIDIgKiB0aGlzLnAyLnggLSB0aGlzLnAxLngsIDIpXG4gICAgY29uc3QgdnkgPSBNYXRoLnBvdygzICogdGhpcy5jMi55IC0gMiAqIHRoaXMucDIueSAtIHRoaXMucDEueSwgMilcblxuICAgIGlmICh1eCA8IHZ4KSB7IHV4ID0gdnggfVxuICAgIGlmICh1eSA8IHZ5KSB7IHV5ID0gdnkgfVxuXG4gICAgcmV0dXJuIHV4ICsgdXlcbiAgfVxuXG4gIGdldENsb3VkICgpIHtcbiAgICBjb25zdCBwb2ludHMgPSB0aGlzLmZpbmRSb290cygpXG4gICAgICAuZmlsdGVyKHJvb3QgPT4gcm9vdCAhPT0gMCAmJiByb290ICE9PSAxKVxuICAgICAgLm1hcChyb290ID0+IHRoaXMucG9pbnRBdChyb290KSlcbiAgICAgIC5jb25jYXQodGhpcy5wMSwgdGhpcy5wMilcblxuICAgIHJldHVybiBuZXcgUG9pbnRDbG91ZChwb2ludHMpXG4gIH1cblxuICBsZW5ndGggKCkge1xuICAgIHJldHVybiB0aGlzLmxlbmd0aEF0KClcbiAgfVxuXG4gIGxlbmd0aEF0ICh0ID0gMSkge1xuICAgIGNvbnN0IGN1cnZlcyA9IHRoaXMuc3BsaXRBdCh0KVswXS5tYWtlRmxhdCh0KVxuXG4gICAgbGV0IGxlbmd0aCA9IDBcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gY3VydmVzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICBsZW5ndGggKz0gY3VydmVzW2ldLnAyLnN1YihjdXJ2ZXNbaV0ucDEpLmFicygpXG4gICAgfVxuXG4gICAgcmV0dXJuIGxlbmd0aFxuICB9XG5cbiAgbWFrZUZsYXQgKHQpIHtcbiAgICBpZiAodGhpcy5mbGF0bmVzcygpID4gMC4xNSkge1xuICAgICAgcmV0dXJuIHRoaXMuc3BsaXRBdCgwLjUpXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKGVsKSB7IHJldHVybiBlbC5tYWtlRmxhdCh0ICogMC41KSB9KVxuICAgICAgICAucmVkdWNlKGZ1bmN0aW9uIChsYXN0LCBjdXJyZW50KSB7IHJldHVybiBsYXN0LmNvbmNhdChjdXJyZW50KSB9LCBbXSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50X3ZhbHVlID0gdFxuICAgICAgcmV0dXJuIFsgdGhpcyBdXG4gICAgfVxuICB9XG5cbiAgcG9pbnRBdCAodCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICAoMSAtIHQpICogKDEgLSB0KSAqICgxIC0gdCkgKiB0aGlzLnAxLnggKyAzICogKDEgLSB0KSAqICgxIC0gdCkgKiB0ICogdGhpcy5jMS54ICsgMyAqICgxIC0gdCkgKiB0ICogdCAqIHRoaXMuYzIueCArIHQgKiB0ICogdCAqIHRoaXMucDIueCxcbiAgICAgICgxIC0gdCkgKiAoMSAtIHQpICogKDEgLSB0KSAqIHRoaXMucDEueSArIDMgKiAoMSAtIHQpICogKDEgLSB0KSAqIHQgKiB0aGlzLmMxLnkgKyAzICogKDEgLSB0KSAqIHQgKiB0ICogdGhpcy5jMi55ICsgdCAqIHQgKiB0ICogdGhpcy5wMi55XG4gICAgKVxuICB9XG5cbiAgc3BsaXRBdCAoeikge1xuICAgIGNvbnN0IHggPSB0aGlzLnNwbGl0QXRTY2FsYXIoeiwgJ3gnKVxuICAgIGNvbnN0IHkgPSB0aGlzLnNwbGl0QXRTY2FsYXIoeiwgJ3knKVxuXG4gICAgY29uc3QgYSA9IG5ldyBDdWJpYyhcbiAgICAgIG5ldyBQb2ludCh4WzBdWzBdLCB5WzBdWzBdKSxcbiAgICAgIG5ldyBQb2ludCh4WzBdWzFdLCB5WzBdWzFdKSxcbiAgICAgIG5ldyBQb2ludCh4WzBdWzJdLCB5WzBdWzJdKSxcbiAgICAgIG5ldyBQb2ludCh4WzBdWzNdLCB5WzBdWzNdKVxuICAgIClcblxuICAgIGNvbnN0IGIgPSBuZXcgQ3ViaWMoXG4gICAgICBuZXcgUG9pbnQoeFsxXVswXSwgeVsxXVswXSksXG4gICAgICBuZXcgUG9pbnQoeFsxXVsxXSwgeVsxXVsxXSksXG4gICAgICBuZXcgUG9pbnQoeFsxXVsyXSwgeVsxXVsyXSksXG4gICAgICBuZXcgUG9pbnQoeFsxXVszXSwgeVsxXVszXSlcbiAgICApXG5cbiAgICByZXR1cm4gWyBhLCBiIF1cbiAgfVxuXG4gIHNwbGl0QXRTY2FsYXIgKHosIHApIHtcbiAgICBjb25zdCBwMSA9IHRoaXMucDFbcF1cbiAgICBjb25zdCBwMiA9IHRoaXMuYzFbcF1cbiAgICBjb25zdCBwMyA9IHRoaXMuYzJbcF1cbiAgICBjb25zdCBwNCA9IHRoaXMucDJbcF1cblxuICAgIGNvbnN0IHQgPSB6ICogeiAqIHogKiBwNCAtIDMgKiB6ICogeiAqICh6IC0gMSkgKiBwMyArIDMgKiB6ICogKHogLSAxKSAqICh6IC0gMSkgKiBwMiAtICh6IC0gMSkgKiAoeiAtIDEpICogKHogLSAxKSAqIHAxXG5cbiAgICByZXR1cm4gW1xuICAgICAgW1xuICAgICAgICBwMSxcbiAgICAgICAgeiAqIHAyIC0gKHogLSAxKSAqIHAxLFxuICAgICAgICB6ICogeiAqIHAzIC0gMiAqIHogKiAoeiAtIDEpICogcDIgKyAoeiAtIDEpICogKHogLSAxKSAqIHAxLFxuICAgICAgICB0XG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICB0LFxuICAgICAgICB6ICogeiAqIHA0IC0gMiAqIHogKiAoeiAtIDEpICogcDMgKyAoeiAtIDEpICogKHogLSAxKSAqIHAyLFxuICAgICAgICB6ICogcDQgLSAoeiAtIDEpICogcDMsXG4gICAgICAgIHA0XG4gICAgICBdXG4gICAgXVxuICB9XG5cbiAgdG9QYXRoICgpIHtcbiAgICByZXR1cm4gWyAnTScsIHRoaXMucDEueCwgdGhpcy5wMS55IF0uY29uY2F0KHRoaXMudG9QYXRoRnJhZ21lbnQoKSkuam9pbignICcpXG4gIH1cblxuICB0b1BhdGhGcmFnbWVudCAoKSB7XG4gICAgcmV0dXJuIFsgJ0MnLCB0aGlzLmMxLngsIHRoaXMuYzEueSwgdGhpcy5jMi54LCB0aGlzLmMyLnksIHRoaXMucDIueCwgdGhpcy5wMi55IF1cbiAgfVxuXG4gIHRyYW5zZm9ybSAobWF0cml4KSB7XG4gICAgdGhpcy5wMS50cmFuc2Zvcm1PKG1hdHJpeClcbiAgICB0aGlzLmMxLnRyYW5zZm9ybU8obWF0cml4KVxuICAgIHRoaXMuYzIudHJhbnNmb3JtTyhtYXRyaXgpXG4gICAgdGhpcy5wMi50cmFuc2Zvcm1PKG1hdHJpeClcbiAgICByZXR1cm4gdGhpc1xuICB9XG59XG5cbmNsYXNzIExpbmUge1xuICBjb25zdHJ1Y3RvciAoeDEsIHkxLCB4MiwgeTIpIHtcbiAgICBpZiAoeDEgaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgIHRoaXMucDEgPSBuZXcgUG9pbnQoeDEpXG4gICAgICB0aGlzLnAyID0gbmV3IFBvaW50KHkxKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnAxID0gbmV3IFBvaW50KHgxLCB5MSlcbiAgICAgIHRoaXMucDIgPSBuZXcgUG9pbnQoeDIsIHkyKVxuICAgIH1cbiAgfVxuXG4gIGJib3ggKCkge1xuICAgIHJldHVybiB0aGlzLmdldENsb3VkKCkuYmJveCgpXG4gIH1cblxuICBnZXRDbG91ZCAoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludENsb3VkKFsgdGhpcy5wMSwgdGhpcy5wMiBdKVxuICB9XG5cbiAgbGVuZ3RoICgpIHtcbiAgICByZXR1cm4gdGhpcy5wMi5zdWIodGhpcy5wMSkuYWJzKClcbiAgfVxuXG4gIHBvaW50QXQgKHQpIHtcbiAgICBjb25zdCB2ZWMgPSB0aGlzLnAyLnN1Yih0aGlzLnAxKS5tdWwodClcbiAgICByZXR1cm4gdGhpcy5wMS5hZGQodmVjKVxuICB9XG5cbiAgdG9QYXRoICgpIHtcbiAgICByZXR1cm4gWyAnTScsIHRoaXMucDEueCwgdGhpcy5wMS55LCB0aGlzLnAyLngsIHRoaXMucDIueSBdLmpvaW4oJyAnKVxuICB9XG5cbiAgdG9QYXRoRnJhZ21lbnQgKCkge1xuICAgIHJldHVybiBbICdMJywgdGhpcy5wMi54LCB0aGlzLnAyLnkgXVxuICB9XG5cbiAgdHJhbnNmb3JtIChtYXRyaXgpIHtcbiAgICB0aGlzLnAxLnRyYW5zZm9ybU8obWF0cml4KVxuICAgIHRoaXMucDIudHJhbnNmb3JtTyhtYXRyaXgpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcGF0aEJCb3ggPSBmdW5jdGlvbiAoZCkge1xuICByZXR1cm4gcGF0aFBhcnNlcihkKS5yZWR1Y2UoKGwsIGMpID0+IGwubWVyZ2UoYy5iYm94KCkpLCBuZXcgTm9Cb3goKSlcbn1cblxuZXhwb3J0IGNsYXNzIFBhdGhTZWdtZW50QXJyYXkgZXh0ZW5kcyBBcnJheSB7XG4gIGJib3ggKCkge1xuICAgIHJldHVybiB0aGlzLnJlZHVjZSgobCwgYykgPT4gbC5tZXJnZShjLmJib3goKSksIG5ldyBOb0JveCgpKVxuICB9XG5cbiAgY2xvdWQgKCkge1xuICAgIHJldHVybiB0aGlzLnJlZHVjZShcbiAgICAgIChjbG91ZCwgc2VnbWVudCkgPT4gc2VnbWVudC5nZXRDbG91ZCgpLm1lcmdlKGNsb3VkKSxcbiAgICAgIG5ldyBQb2ludENsb3VkKClcbiAgICApXG4gIH1cblxuICBtZXJnZSAob3RoZXIpIHtcbiAgICByZXR1cm4gdGhpcy5jb25jYXQob3RoZXIpXG4gIH1cblxuICB0cmFuc2Zvcm0gKG1hdHJpeCkge1xuICAgIHJldHVybiB0aGlzLm1hcChzZWdtZW50ID0+IHNlZ21lbnQudHJhbnNmb3JtKG1hdHJpeCkpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldFBhdGhTZWdtZW50cyA9IGZ1bmN0aW9uIChkKSB7XG4gIGNvbnN0IHBhcnNlZFBhdGggPSBwYXRoUGFyc2VyKGQpXG4gIGNvbnN0IHBhdGhTZWdtZW50QXJyYXkgPSBuZXcgUGF0aFNlZ21lbnRBcnJheSgpXG4gIGNvbnN0IHBhcnNlZExlbmd0aCA9IHBhcnNlZFBhdGgubGVuZ3RoXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyc2VkTGVuZ3RoOyBpKyspIHtcbiAgICBwYXRoU2VnbWVudEFycmF5LnB1c2gocGFyc2VkUGF0aFtpXSlcbiAgfVxuICByZXR1cm4gcGF0aFNlZ21lbnRBcnJheVxufVxuXG5leHBvcnQgY29uc3QgcG9pbnRBdExlbmd0aCA9IGZ1bmN0aW9uIChkLCBsZW4pIHtcbiAgY29uc3Qgc2VncyA9IHBhdGhQYXJzZXIoZClcblxuICBjb25zdCBzZWdMZW5ndGhzID0gc2Vncy5tYXAoZWwgPT4gZWwubGVuZ3RoKCkpXG5cbiAgY29uc3QgbGVuZ3RoID0gc2VnTGVuZ3Rocy5yZWR1Y2UoKGwsIGMpID0+IGwgKyBjLCAwKVxuXG4gIGxldCBpID0gMFxuXG4gIGxldCB0ID0gbGVuIC8gbGVuZ3RoXG5cbiAgLy8gRklYTUU6IFBvcCBNb3ZlIGJlZm9yZSB1c2luZyBzaG9ydGN1dD9cbiAgLy8gc2hvcnRjdXQgZm9yIHRyaXZpYWwgY2FzZXNcbiAgaWYgKHQgPj0gMSkge1xuICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGEgcDIuIElmIG5vdCwgdXNlIHAxXG4gICAgaWYgKHNlZ3Nbc2Vncy5sZW5ndGggLSAxXS5wMikge1xuICAgICAgcmV0dXJuIHNlZ3Nbc2Vncy5sZW5ndGggLSAxXS5wMi5uYXRpdmUoKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc2Vnc1tzZWdzLmxlbmd0aCAtIDFdLnAxLm5hdGl2ZSgpXG4gICAgfVxuICB9XG5cbiAgaWYgKHQgPD0gMCkgcmV0dXJuIHNlZ3NbMF0ucDEubmF0aXZlKClcblxuICAvLyByZW1vdmUgbW92ZSBjb21tYW5kcyBhdCB0aGUgdmVyeSBlbmQgb2YgdGhlIHBhdGhcbiAgd2hpbGUgKHNlZ3Nbc2Vncy5sZW5ndGggLSAxXSBpbnN0YW5jZW9mIE1vdmUpIHNlZ3MucG9wKClcblxuICBsZXQgc2VnRW5kID0gMFxuXG4gIGZvciAoY29uc3QgaWwgPSBzZWdMZW5ndGhzLmxlbmd0aDsgaSA8IGlsOyArK2kpIHtcbiAgICBjb25zdCBrID0gc2VnTGVuZ3Roc1tpXSAvIGxlbmd0aFxuICAgIHNlZ0VuZCArPSBrXG5cbiAgICBpZiAoc2VnRW5kID4gdCkge1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBjb25zdCByYXRpbyA9IGxlbmd0aCAvIHNlZ0xlbmd0aHNbaV1cbiAgdCA9IHJhdGlvICogKHQgLSBzZWdFbmQpICsgMVxuXG4gIHJldHVybiBzZWdzW2ldLnBvaW50QXQodCkubmF0aXZlKClcbn1cblxuZXhwb3J0IGNvbnN0IGxlbmd0aCA9IGZ1bmN0aW9uIChkKSB7XG4gIHJldHVybiBwYXRoUGFyc2VyKGQpXG4gICAgLnJlZHVjZSgobCwgYykgPT4gbCArIGMubGVuZ3RoKCksIDApXG59XG5cbmV4cG9ydCBjb25zdCBkZWJ1ZyA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIGNvbnN0IHBhcnNlID0gcGF0aFBhcnNlcihub2RlLmdldEF0dHJpYnV0ZSgnZCcpKVxuXG4gIGNvbnN0IHJldCA9IHtcbiAgICBwYXRoczogcGFyc2UubWFwKGVsID0+IGVsLnRvUGF0aCgpKSxcbiAgICBmcmFnbWVudHM6IHBhcnNlLm1hcChlbCA9PiBlbC50b1BhdGhGcmFnbWVudCgpLmpvaW4oJyAnKSksXG4gICAgYmJveHM6IHBhcnNlLm1hcChlbCA9PiB7XG4gICAgICBjb25zdCBib3ggPSBlbC5iYm94KClcbiAgICAgIHJldHVybiBbIGJveC54LCBib3gueSwgYm94LndpZHRoLCBib3guaGVpZ2h0IF1cbiAgICB9KSxcbiAgICBiYm94OiBwYXJzZS5yZWR1Y2UoKGwsIGMpID0+IGwubWVyZ2UoYy5iYm94KCkpLCBuZXcgTm9Cb3goKSksXG4gICAgYmJveHNUcmFuc2Zvcm1lZDogcGFyc2UubWFwKGVsID0+IHtcbiAgICAgIHJldHVybiBlbC5nZXRDbG91ZCgpLnRyYW5zZm9ybShub2RlLm1hdHJpeGlmeSgpKS5iYm94KClcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHJldCwge1xuICAgIGJib3hUcmFuc2Zvcm1lZDogcmV0LmJib3hzVHJhbnNmb3JtZWQucmVkdWNlKChsLCBjKSA9PiBsLm1lcmdlKGMpLCBuZXcgTm9Cb3goKSlcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGdldENsb3VkID0gKGQpID0+IHtcbiAgcmV0dXJuIHBhdGhQYXJzZXIoZCkucmVkdWNlKChjbG91ZCwgc2VnbWVudCkgPT5cbiAgICBzZWdtZW50LmdldENsb3VkKCkubWVyZ2UoY2xvdWQpLCBuZXcgUG9pbnRDbG91ZCgpXG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IHBhdGhGcm9tID0ge1xuICBib3ggKHsgeCwgeSwgd2lkdGgsIGhlaWdodCB9KSB7XG4gICAgcmV0dXJuIGBNICR7eH0gJHt5fSBoICR7d2lkdGh9IHYgJHtoZWlnaHR9IEggJHt4fSBWICR7eX1gXG4gIH0sXG4gIHJlY3QgKG5vZGUpIHtcbiAgICBjb25zdCB3aWR0aCA9IHBhcnNlRmxvYXQobm9kZS5nZXRBdHRyaWJ1dGUoJ3dpZHRoJykpIHx8IDBcbiAgICBjb25zdCBoZWlnaHQgPSBwYXJzZUZsb2F0KG5vZGUuZ2V0QXR0cmlidXRlKCdoZWlnaHQnKSkgfHwgMFxuICAgIGNvbnN0IHggPSBwYXJzZUZsb2F0KG5vZGUuZ2V0QXR0cmlidXRlKCd4JykpIHx8IDBcbiAgICBjb25zdCB5ID0gcGFyc2VGbG9hdChub2RlLmdldEF0dHJpYnV0ZSgneScpKSB8fCAwXG4gICAgcmV0dXJuIGBNICR7eH0gJHt5fSBoICR7d2lkdGh9IHYgJHtoZWlnaHR9IEggJHt4fSBWICR7eX1gXG4gIH0sXG4gIGNpcmNsZSAobm9kZSkge1xuICAgIGNvbnN0IHIgPSBwYXJzZUZsb2F0KG5vZGUuZ2V0QXR0cmlidXRlKCdyJykpIHx8IDBcbiAgICBjb25zdCB4ID0gcGFyc2VGbG9hdChub2RlLmdldEF0dHJpYnV0ZSgnY3gnKSkgfHwgMFxuICAgIGNvbnN0IHkgPSBwYXJzZUZsb2F0KG5vZGUuZ2V0QXR0cmlidXRlKCdjeScpKSB8fCAwXG5cbiAgICBpZiAociA9PT0gMCkgcmV0dXJuICdNMCAwJ1xuXG4gICAgcmV0dXJuIGBNICR7eCAtIHJ9ICR7eX0gQSAke3J9ICR7cn0gMCAwIDAgJHt4ICsgcn0gJHt5fSBBICR7cn0gJHtyfSAwIDAgMCAke3ggLSByfSAke3l9YFxuICB9LFxuICBlbGxpcHNlIChub2RlKSB7XG4gICAgY29uc3QgcnggPSBwYXJzZUZsb2F0KG5vZGUuZ2V0QXR0cmlidXRlKCdyeCcpKSB8fCAwXG4gICAgY29uc3QgcnkgPSBwYXJzZUZsb2F0KG5vZGUuZ2V0QXR0cmlidXRlKCdyeScpKSB8fCAwXG4gICAgY29uc3QgeCA9IHBhcnNlRmxvYXQobm9kZS5nZXRBdHRyaWJ1dGUoJ2N4JykpIHx8IDBcbiAgICBjb25zdCB5ID0gcGFyc2VGbG9hdChub2RlLmdldEF0dHJpYnV0ZSgnY3knKSkgfHwgMFxuXG4gICAgcmV0dXJuIGBNICR7eCAtIHJ4fSAke3l9IEEgJHtyeH0gJHtyeX0gMCAwIDAgJHt4ICsgcnh9ICR7eX0gQSAke3J4fSAke3J5fSAwIDAgMCAke3ggLSByeH0gJHt5fWBcbiAgfSxcbiAgbGluZSAobm9kZSkge1xuICAgIGNvbnN0IHgxID0gcGFyc2VGbG9hdChub2RlLmdldEF0dHJpYnV0ZSgneDEnKSkgfHwgMFxuICAgIGNvbnN0IHgyID0gcGFyc2VGbG9hdChub2RlLmdldEF0dHJpYnV0ZSgneDInKSkgfHwgMFxuICAgIGNvbnN0IHkxID0gcGFyc2VGbG9hdChub2RlLmdldEF0dHJpYnV0ZSgneTEnKSkgfHwgMFxuICAgIGNvbnN0IHkyID0gcGFyc2VGbG9hdChub2RlLmdldEF0dHJpYnV0ZSgneTInKSkgfHwgMFxuXG4gICAgcmV0dXJuIGBNICR7eDF9ICR7eTF9IEwgJHt4Mn0gJHt5Mn1gXG4gIH0sXG4gIHBvbHlnb24gKG5vZGUpIHtcbiAgICByZXR1cm4gYE0gJHtub2RlLmdldEF0dHJpYnV0ZSgncG9pbnRzJyl9IHpgXG4gIH0sXG4gIHBvbHlsaW5lIChub2RlKSB7XG4gICAgcmV0dXJuIGBNICR7bm9kZS5nZXRBdHRyaWJ1dGUoJ3BvaW50cycpfWBcbiAgfVxufVxuIiwiLy8gc3BsaXRzIGEgdHJhbnNmb3JtYXRpb24gY2hhaW5cbmV4cG9ydCBjb25zdCB0cmFuc2Zvcm1zID0gL1xcKVxccyosP1xccyovXG5cbi8vIHNwbGl0IGF0IHdoaXRlc3BhY2UgYW5kIGNvbW1hXG5leHBvcnQgY29uc3QgZGVsaW1pdGVyID0gL1tcXHMsXSsvXG5cbi8vIFRoZSBmb2xsb3dpbmcgcmVnZXggYXJlIHVzZWQgdG8gcGFyc2UgdGhlIGQgYXR0cmlidXRlIG9mIGEgcGF0aFxuXG4vLyBNYXRjaGVzIGFsbCBoeXBoZW5zIHdoaWNoIGFyZSBub3QgYWZ0ZXIgYW4gZXhwb25lbnRcbmV4cG9ydCBjb25zdCBoeXBoZW4gPSAvKFteZV0pLS9naVxuXG4vLyBSZXBsYWNlcyBhbmQgdGVzdHMgZm9yIGFsbCBwYXRoIGxldHRlcnNcbmV4cG9ydCBjb25zdCBwYXRoTGV0dGVycyA9IC9bTUxIVkNTUVRBWl0vZ2lcblxuLy8geWVzIHdlIG5lZWQgdGhpcyBvbmUsIHRvb1xuZXhwb3J0IGNvbnN0IGlzUGF0aExldHRlciA9IC9bTUxIVkNTUVRBWl0vaVxuXG4vLyBtYXRjaGVzIDAuMTU0LjIzLjQ1XG5leHBvcnQgY29uc3QgbnVtYmVyc1dpdGhEb3RzID0gLygoXFxkP1xcLlxcZCsoPzplWystXT9cXGQrKT8pKCg/OlxcLlxcZCsoPzplWystXT9cXGQrKT8pKykpKy9naVxuXG4vLyBtYXRjaGVzIC5cbmV4cG9ydCBjb25zdCBkb3RzID0gL1xcLi9nXG4iLCIvLyBFbnN1cmUgdG8gc2l4LWJhc2VkIGhleFxuZXhwb3J0IGNvbnN0IGZ1bGxIZXggPSBmdW5jdGlvbiAoaGV4KSB7XG4gIHJldHVybiBoZXgubGVuZ3RoID09PSA0XG4gICAgPyBbICcjJyxcbiAgICAgIGhleC5zdWJzdHJpbmcoMSwgMiksIGhleC5zdWJzdHJpbmcoMSwgMiksXG4gICAgICBoZXguc3Vic3RyaW5nKDIsIDMpLCBoZXguc3Vic3RyaW5nKDIsIDMpLFxuICAgICAgaGV4LnN1YnN0cmluZygzLCA0KSwgaGV4LnN1YnN0cmluZygzLCA0KVxuICAgIF0uam9pbignJykgOiBoZXhcbn1cblxuZXhwb3J0IGNvbnN0IGhleFRvUkdCID0gZnVuY3Rpb24gKHZhbE9yTWFwKSB7XG4gIGlmICh0eXBlb2YgdmFsT3JNYXAgaW5zdGFuY2VvZiBNYXApIHtcbiAgICBmb3IgKGNvbnN0IFsga2V5LCB2YWwgXSBvZiB2YWxPck1hcCkge1xuICAgICAgdmFsT3JNYXAuc2V0KGtleSwgaGV4VG9SR0IodmFsKSlcbiAgICB9XG4gICAgcmV0dXJuIHZhbE9yTWFwXG4gIH1cblxuICBpZiAoIS8jWzAtOWEtZl17Myw2fS8udGVzdCh2YWxPck1hcCkpIHsgcmV0dXJuIHZhbE9yTWFwIH1cblxuICB2YWxPck1hcCA9IGZ1bGxIZXgodmFsT3JNYXApXG5cbiAgcmV0dXJuICdyZ2IoJyArIFtcbiAgICBwYXJzZUludCh2YWxPck1hcC5zbGljZSgxLCAzKSwgMTYpLFxuICAgIHBhcnNlSW50KHZhbE9yTWFwLnNsaWNlKDMsIDUpLCAxNiksXG4gICAgcGFyc2VJbnQodmFsT3JNYXAuc2xpY2UoNSwgNyksIDE2KVxuICBdLmpvaW4oJywnKSArICcpJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjYW1lbGl6ZSAocykge1xuICByZXR1cm4gU3RyaW5nKHMpLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csIGZ1bmN0aW9uIChtLCBnMSwgZzIpIHtcbiAgICByZXR1cm4gZzEgKyAnLScgKyBnMi50b0xvd2VyQ2FzZSgpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYW1lbENhc2UgKHMpIHtcbiAgcmV0dXJuIFN0cmluZyhzKS5yZXBsYWNlKC8oW2Etel0pLShbYS16XSkvZywgZnVuY3Rpb24gKG0sIGcxLCBnMikge1xuICAgIHJldHVybiBnMSArIGcyLnRvVXBwZXJDYXNlKClcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVF1b3RlcyAoc3RyKSB7XG4gIGlmIChzdHIuc3RhcnRzV2l0aCgnXCInKSB8fCBzdHIuc3RhcnRzV2l0aChcIidcIikpIHtcbiAgICByZXR1cm4gc3RyLnNsaWNlKDEsIC0xKVxuICB9XG4gIHJldHVybiBzdHJcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh0bWxFbnRpdGllcyAoc3RyKSB7XG4gIHJldHVybiBTdHJpbmcoc3RyKS5yZXBsYWNlKC8mL2csICcmYW1wOycpLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC8+L2csICcmZ3Q7JykucmVwbGFjZSgvXCIvZywgJyZxdW90OycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmh0bWxFbnRpdGllcyAoc3RyKSB7XG4gIHJldHVybiBTdHJpbmcoc3RyKS5yZXBsYWNlKC8mYW1wOy9nLCAnJicpLnJlcGxhY2UoLyZsdDsvZywgJzwnKS5yZXBsYWNlKC8mZ3Q7L2csICc+JykucmVwbGFjZSgnJnF1b3Q7JywgJ1wiJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNkYXRhIChzdHIpIHtcbiAgcmV0dXJuIGA8IVtDREFUQVske3N0cn1dXT5gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21tZW50IChzdHIpIHtcbiAgcmV0dXJuIGA8IS0tJHtzdHJ9LS0+YFxufVxuXG5leHBvcnQgY29uc3Qgc3BsaXROb3RJbkJyYWNrZXRzID0gKHN0ciwgZGVsaW1pdGVyKSA9PiB7XG4gIHZhciByb3VuZEJyYWNrZXRzID0gMFxuXG4gIHZhciBzcXVhcmVCcmFja2V0cyA9IDBcblxuICB2YXIgbGFzdEluZGV4ID0gMFxuXG4gIHZhciBzcGxpdCA9IFtdXG5cbiAgdmFyIGNoOyB2YXIgaTsgdmFyIGlsXG5cbiAgZm9yIChpID0gMCwgaWwgPSBzdHIubGVuZ3RoOyBpIDwgaWw7ICsraSkge1xuICAgIGNoID0gc3RyLmNoYXJBdChpKVxuXG4gICAgaWYgKGNoID09PSBkZWxpbWl0ZXIgJiYgIXJvdW5kQnJhY2tldHMgJiYgIXNxdWFyZUJyYWNrZXRzKSB7XG4gICAgICBzcGxpdC5wdXNoKHN0ci5zbGljZShsYXN0SW5kZXgsIGkpLnRyaW0oKSlcbiAgICAgIGxhc3RJbmRleCA9IGkgKyAxXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGlmIChjaCA9PT0gJygnKSArK3JvdW5kQnJhY2tldHNcbiAgICBlbHNlIGlmIChjaCA9PT0gJyknKSAtLXJvdW5kQnJhY2tldHNcbiAgICBlbHNlIGlmIChjaCA9PT0gJ1snKSArK3NxdWFyZUJyYWNrZXRzXG4gICAgZWxzZSBpZiAoY2ggPT09ICddJykgLS1zcXVhcmVCcmFja2V0c1xuICB9XG5cbiAgc3BsaXQucHVzaChzdHIuc2xpY2UobGFzdEluZGV4KS50cmltKCkpXG4gIHJldHVybiBzcGxpdFxufVxuIiwiY29uc3QgaHRtbEVudGl0aWVzID0gZnVuY3Rpb24gKHN0cikge1xuICByZXR1cm4gU3RyaW5nKHN0cikucmVwbGFjZSgvJi9nLCAnJmFtcDsnKS5yZXBsYWNlKC88L2csICcmbHQ7JykucmVwbGFjZSgvPi9nLCAnJmd0OycpLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKVxufVxuXG52YXIgZW1wdHlFbGVtZW50cyA9IHtcbiAgYnI6IHRydWUsXG4gIGhyOiB0cnVlLFxuICBpbWc6IHRydWUsXG4gIGxpbms6IHRydWVcbn1cblxuZXhwb3J0IGNvbnN0IHRhZyA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIGNvbnN0IGF0dHJzID0gWyAuLi5ub2RlLmF0dHJzIF0ubWFwKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgcmV0dXJuIChub2RlLnByZWZpeCA/IG5vZGUucHJlZml4ICsgJzonIDogJycpICsgbm9kZS5sb2NhbE5hbWUgKyAnPVwiJyArIGh0bWxFbnRpdGllcyhub2RlLnZhbHVlKSArICdcIidcbiAgfSlcblxuICBjb25zdCB7IHByZWZpeCwgbG9jYWxOYW1lIH0gPSBub2RlXG4gIGNvbnN0IHF1YWxpZmllZE5hbWUgPSAocHJlZml4ID8gcHJlZml4ICsgJzonIDogJycpICsgbG9jYWxOYW1lXG5cbiAgcmV0dXJuICc8JyArIFtdLmNvbmNhdChxdWFsaWZpZWROYW1lLCBhdHRycykuam9pbignICcpICsgJz4nICsgKGVtcHR5RWxlbWVudHNbcXVhbGlmaWVkTmFtZS50b0xvd2VyQ2FzZSgpXSA/ICcnIDogbm9kZS5pbm5lckhUTUwgKyAnPC8nICsgcXVhbGlmaWVkTmFtZSArICc+Jylcbn1cblxuZXhwb3J0IGNvbnN0IGNsb25lTm9kZSA9IGZ1bmN0aW9uIChub2RlKSB7XG5cbiAgY29uc3QgeyBwcmVmaXgsIGxvY2FsTmFtZSwgbmFtZXNwYWNlVVJJOiBucywgbm9kZVZhbHVlLCBvd25lckRvY3VtZW50IH0gPSBub2RlXG5cbiAgLy8gQnVpbGQgdXAgdGhlIGNvcnJlY3RseSBjYXNlZCBxdWFsaWZpZWQgbmFtZVxuICBjb25zdCBxdWFsaWZpZWROYW1lID0gKHByZWZpeCA/IHByZWZpeCArICc6JyA6ICcnKSArIGxvY2FsTmFtZVxuXG4gIC8vIENoZWNrIGlmIG5vZGUgd2FzIGNyZWF0ZWQgdXNpbmcgbm9uLW5hbWVzcGFjZSBmdW5jdGlvbiB3aGljaCBjYW4gbGVhZCB0byA6IGluIHRoZSBsb2NhbE5hbWUuXG4gIC8vIFRoaXMgY2hlY2sgYWxsb3dzIGZhbHNlIG5lZ2F0aXZlcyBiZWNhdXNlIGBsb2NhbGAgb25seSBtYXR0ZXJzIElGIHRoZXJlIGFyZSA6IGluIHRoZSBsb2NhbE5hbWVcbiAgLy8gYW5kIHdlIGRvbnQgY2FyZSBhYm91dCBpdCB3aGVuIHRoZXJlIGFyZSBub25cbiAgY29uc3QgbG9jYWwgPSBsb2NhbE5hbWUuaW5jbHVkZXMoJzonKVxuXG4gIHZhciBjbG9uZSA9IG5ldyBub2RlLmNvbnN0cnVjdG9yKHF1YWxpZmllZE5hbWUsIHtcbiAgICBhdHRyczogbmV3IFNldChbIC4uLm5vZGUuYXR0cnMgXS5tYXAobm9kZSA9PiBub2RlLmNsb25lTm9kZSgpKSksXG4gICAgbm9kZVZhbHVlLFxuICAgIG93bmVyRG9jdW1lbnQsXG4gICAgbG9jYWxcbiAgfSwgbnMpXG5cbiAgcmV0dXJuIGNsb25lXG59XG4iLCJpbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnXG5pbXBvcnQgKiBhcyBmb250a2l0IGZyb20gJ2ZvbnRraXQnXG5pbXBvcnQgKiBhcyBkZWZhdWx0cyBmcm9tICcuL2RlZmF1bHRzLmpzJ1xuaW1wb3J0IHsgQm94LCBOb0JveCB9IGZyb20gJy4uL290aGVyL0JveC5qcydcbmltcG9ydCB7IGdldENvbmZpZywgZ2V0Rm9udHMgfSBmcm9tICcuLi9jb25maWcuanMnXG5cbmV4cG9ydCBjb25zdCB0ZXh0QkJveCA9IGZ1bmN0aW9uICh0ZXh0LCB4LCB5LCBkZXRhaWxzKSB7XG5cbiAgaWYgKCF0ZXh0KSByZXR1cm4gbmV3IE5vQm94KClcblxuICBjb25zdCBjb25maWcgPSBnZXRDb25maWcoKVxuICBjb25zdCBwcmVsb2FkZWQgPSBnZXRGb250cygpXG5cbiAgY29uc3QgZmFtaWxpZXMgPSAoZGV0YWlscy5mb250RmFtaWx5IHx8IGRlZmF1bHRzLmZvbnRGYW1pbHkpLnNwbGl0KC9cXHMqLFxccyovKVxuICBjb25zdCBmb250TWFwID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdHMuZm9udEZhbWlseU1hcHBpbmdzLCBjb25maWcuZm9udEZhbWlseU1hcHBpbmdzKVxuICBjb25zdCBmb250U2l6ZSA9IGRldGFpbHMuZm9udFNpemUgfHwgZGVmYXVsdHMuZm9udFNpemVcbiAgY29uc3QgZm9udERpciA9IGNvbmZpZy5mb250RGlyIHx8IGRlZmF1bHRzLmZvbnREaXJcbiAgbGV0IGZvbnRGYW1pbHlcbiAgbGV0IGZvbnRcblxuICBmb3IgKGxldCBpID0gMCwgaWwgPSBmYW1pbGllcy5sZW5ndGg7IGkgPCBpbDsgKytpKSB7XG4gICAgaWYgKGZvbnRNYXBbZmFtaWxpZXNbaV1dKSB7XG4gICAgICBmb250RmFtaWx5ID0gZmFtaWxpZXNbaV1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKCFmb250RmFtaWx5KSB7XG4gICAgZm9udEZhbWlseSA9IGRlZmF1bHRzLmZvbnRGYW1pbHlcbiAgfVxuXG4gIGlmIChwcmVsb2FkZWRbZm9udEZhbWlseV0pIHtcbiAgICBmb250ID0gcHJlbG9hZGVkW2ZvbnRGYW1pbHldXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZmlsZW5hbWUgPSBwYXRoLmpvaW4oZm9udERpciwgZm9udE1hcFtmb250RmFtaWx5XSlcbiAgICB0cnkge1xuICAgICAgZm9udCA9IGZvbnRraXQub3BlblN5bmMoZmlsZW5hbWUpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS53YXJuKGBDb3VsZCBub3Qgb3BlbiBmb250IFwiJHtmb250RmFtaWx5fVwiIGluIGZpbGUgXCIke2ZpbGVuYW1lfVwiLiAke2UudG9TdHJpbmcoKX1gKVxuICAgICAgcmV0dXJuIG5ldyBOb0JveCgpXG4gICAgfVxuXG4gICAgcHJlbG9hZGVkW2ZvbnRGYW1pbHldID0gZm9udFxuICB9XG5cbiAgY29uc3QgZm9udEhlaWdodCA9IGZvbnQuYXNjZW50IC0gZm9udC5kZXNjZW50XG4gIGNvbnN0IGxpbmVIZWlnaHQgPSBmb250SGVpZ2h0ID4gZm9udC51bml0c1BlckVtID8gZm9udEhlaWdodCA6IGZvbnRIZWlnaHQgKyBmb250LmxpbmVHYXBcblxuICBjb25zdCBoZWlnaHQgPSBsaW5lSGVpZ2h0IC8gZm9udC51bml0c1BlckVtICogZm9udFNpemVcbiAgY29uc3Qgd2lkdGggPSBmb250LmxheW91dCh0ZXh0KS5nbHlwaHMucmVkdWNlKChsYXN0LCBjdXJyKSA9PiBsYXN0ICsgY3Vyci5hZHZhbmNlV2lkdGgsIDApIC8gZm9udC51bml0c1BlckVtICogZm9udFNpemVcblxuICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9TVkcvQXR0cmlidXRlL3RleHQtYW5jaG9yXG4gIGxldCB4QWRqdXN0ID0gMFxuICBpZiAoZGV0YWlscy50ZXh0QW5jaG9yID09PSAnZW5kJykge1xuICAgIHhBZGp1c3QgPSAtd2lkdGhcbiAgfSBlbHNlIGlmIChkZXRhaWxzLnRleHRBbmNob3IgPT09ICdtaWRkbGUnKSB7XG4gICAgeEFkanVzdCA9IC13aWR0aCAvIDJcbiAgfVxuXG4gIC8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi8yMDAyL1dELWNzczMtbGluZWJveC0yMDAyMDUxNS9cbiAgLy8gNC4yLiBCYXNlbGluZSBpZGVudGlmaWVyc1xuICBsZXQgeUFkanVzdCA9IGZvbnQuYXNjZW50IC8vIGFscGhhYmV0aWNcbiAgaWYgKGRldGFpbHMuZG9taW5hbnRCYXNlbGluZSA9PT0gJ2JlZm9yZS1lZGdlJyB8fCBkZXRhaWxzLmRvbWluYW50QmFzZWxpbmUgPT09ICd0ZXh0LWJlZm9yZS1lZGdlJykge1xuICAgIHlBZGp1c3QgPSAwXG4gIH0gZWxzZSBpZiAoZGV0YWlscy5kb21pbmFudEJhc2VsaW5lID09PSAnaGFuZ2luZycpIHtcbiAgICB5QWRqdXN0ID0gZm9udC5hc2NlbnQgLSBmb250LnhIZWlnaHQgLSBmb250LmNhcEhlaWdodFxuICB9IGVsc2UgaWYgKGRldGFpbHMuZG9taW5hbnRCYXNlbGluZSA9PT0gJ21hdGhlbWF0aWNhbCcpIHtcbiAgICB5QWRqdXN0ID0gZm9udC5hc2NlbnQgLSBmb250LnhIZWlnaHRcbiAgfSBlbHNlIGlmIChkZXRhaWxzLmRvbWluYW50QmFzZWxpbmUgPT09ICdtaWRkbGUnKSB7XG4gICAgeUFkanVzdCA9IGZvbnQuYXNjZW50IC0gZm9udC54SGVpZ2h0IC8gMlxuICB9IGVsc2UgaWYgKGRldGFpbHMuZG9taW5hbnRCYXNlbGluZSA9PT0gJ2NlbnRyYWwnKSB7XG4gICAgeUFkanVzdCA9IGZvbnQuYXNjZW50IC8gMiArIGZvbnQuZGVzY2VudCAvIDJcbiAgfSBlbHNlIGlmIChkZXRhaWxzLmRvbWluYW50QmFzZWxpbmUgPT09ICdpZGVvZ3JhcGhpYycpIHtcbiAgICB5QWRqdXN0ID0gZm9udC5hc2NlbnQgKyBmb250LmRlc2NlbnRcbiAgfVxuXG4gIHJldHVybiBuZXcgQm94KHggKyB4QWRqdXN0LCB5IC0geUFkanVzdCAvIGZvbnQudW5pdHNQZXJFbSAqIGZvbnRTaXplLCB3aWR0aCwgaGVpZ2h0KVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyBkZWZhdWx0cyBmcm9tICcuL3NyYy91dGlscy9kZWZhdWx0cy5qcydcblxuZXhwb3J0ICogZnJvbSAnLi9zcmMvZG9tL0F0dHIuanMnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9kb20vQ2hhcmFjdGVyRGF0YS5qcydcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2RvbS9Db21tZW50LmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvZG9tL0N1c3RvbUV2ZW50LmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvZG9tL0RvY3VtZW50LmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvZG9tL0RvY3VtZW50RnJhZ21lbnQuanMnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9kb20vRWxlbWVudC5qcydcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2RvbS9FdmVudC5qcydcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2RvbS9FdmVudFRhcmdldC5qcydcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2RvbS9Ob2RlLmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvZG9tL05vZGVGaWx0ZXIuanMnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9kb20vVGV4dC5qcydcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2RvbS9XaW5kb3cuanMnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9kb20vaHRtbC9IVE1MRWxlbWVudC5qcydcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2RvbS9odG1sL0hUTUxJbWFnZUVsZW1lbnQuanMnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9kb20vaHRtbC9IVE1MTGlua0VsZW1lbnQuanMnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9kb20vaHRtbC9IVE1MUGFyc2VyLmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvZG9tL2h0bWwvSFRNTFNjcmlwdEVsZW1lbnQuanMnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9kb20vbWl4aW5zL2VsZW1lbnRBY2Nlc3MuanMnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9kb20vbWl4aW5zL1BhcmVudE5vZGUuanMnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9kb20vc3ZnL1NWR0VsZW1lbnQuanMnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9kb20vc3ZnL1NWR0dyYXBoaWNzRWxlbWVudC5qcydcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2RvbS9zdmcvU1ZHTWF0cml4LmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvZG9tL3N2Zy9TVkdQYXRoRWxlbWVudC5qcydcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2RvbS9zdmcvU1ZHUG9pbnQuanMnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9kb20vc3ZnL1NWR1NWR0VsZW1lbnQuanMnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9kb20vc3ZnL1NWR1RleHRDb250ZW50RWxlbWVudC5qcydcblxuZXhwb3J0ICogZnJvbSAnLi9zcmMvY29uZmlnLmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvZmFjdG9yaWVzLmpzJ1xuZXhwb3J0IHsgZGVmYXVsdHMgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9