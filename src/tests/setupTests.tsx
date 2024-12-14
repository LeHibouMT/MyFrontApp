import "@testing-library/jest-dom";
import { TextEncoder, TextDecoder as NodeTextDecoder } from "util";

global.TextEncoder = TextEncoder;
// it is necessary to use another alias as TypeScript uses TextDecoder as a global type
global.TextDecoder = NodeTextDecoder as typeof TextDecoder;
