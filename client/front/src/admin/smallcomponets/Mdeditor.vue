<template>
    <div>
        <textarea id="editor"></textarea>
    </div>
</template>

<script>
import SimpleMDE from "simplemde";

let simplemde;
export default {
  data() {
    return {
    };
  },
  mounted: function() {
    simplemde = new SimpleMDE({
      autosave: {
            enabled: true,
            uniqueId: "MyUniqueID",
            delay: 1000
        },
        status: ["autosave", "lines", "words"],
        spellChecker: false,
        element: document.getElementById("editor"),
        promptURLs: true,
        toolbar: [
            "bold", "italic", "strikethrough", "heading", "code", "quote", "unordered-list",
            "ordered-list", "clean-block", "link", "image", "table", "horizontal-rule", "preview", "side-by-side", "fullscreen", "guide",
            {
                name: "uploadImage",//自定义按钮
                action: function customFunction(editor) {
                    console.log(editor);
                },
                className: "fa fa-star",
                title: "Upload Image"
            }
        ]
    });
  }
};
</script>

<style lang="stylus" scoped>
@import '..\..\assets\stylus\simplemde.styl'
</style>

