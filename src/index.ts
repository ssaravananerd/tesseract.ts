import * as TesseractTypes from "tesseract.js";
declare var window: any;
const _instance = window ? require("tesseract.js/dist/tesseract") : require('tesseract.js'); 
export const Tesseract: TesseractTypes.TesseractStatic =  _instance;
