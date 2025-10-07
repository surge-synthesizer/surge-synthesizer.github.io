import { marked } from "marked";

marked.setOptions({ breaks: true });

export function renderMarkdown(src: string) {
    return marked.parse(src);
}
