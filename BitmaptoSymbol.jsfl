var d = flash.getDocumentDOM(); 

if (d == null) {
    alert("Error: You must have a FLA document open to run this script!");
} else {
    var l = d.library;
    var s = l.getSelectedItems();
    var bitmapPaths = [];
    
    for (var i = 0; i < s.length; i++) {
        if (s[i].itemType == "bitmap") {
            bitmapPaths.push(s[i].name);
        }
    }

    if (bitmapPaths.length > 0) {
        l.newFolder("_Source_Bitmaps");
        
        for (var i = bitmapPaths.length - 1; i >= 0; i--) {
            var originalPath = bitmapPaths[i];
            var p = originalPath.split("/");
            var n = p.pop();
            var g = (p.length ? p.join("/") + "/" : "") + n; 
            var b = "_Source_Bitmaps/" + n; 
            
            if (l.itemExists(originalPath)) {
                l.moveToFolder("_Source_Bitmaps", originalPath, true);
                l.addNewItem("graphic", g);
                l.editItem(g);
                
                l.selectItem(b);
                d.addItem({x:0, y:0}, l.getSelectedItems()[0]);
                
                d.align("horizontal center", true);
                d.align("vertical center", true);
                d.exitEditMode();
            }
        }
    } else {
        alert("Please select at least one bitmap in your Library first.");
    }
}
