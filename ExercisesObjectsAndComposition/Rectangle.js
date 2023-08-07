function rectangle(widthh, heightt, colorr){
    colorr = colorr.charAt(0).toUpperCase() + colorr.slice(1)
    return {
        width: widthh,
        height: heightt,
        color: colorr,
        calcArea: function(){
            return this.width*this.height;
        }
    };
}

let rect = rectangle(4, 5, "pink");
console.log(rect.color);