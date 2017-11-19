<template>
    <div>
        <textarea id="editor"></textarea>
    </div>
</template>

<script>
import SimpleMDE from "simplemde";

export default {
  data() {
    return {
      
    };
  },
  mounted: function() {
    simplemde = new SimpleMDE({
      element: document.getElementById("editor"),
      placeholder: "Type here..."
    });
  }
};
</script>
