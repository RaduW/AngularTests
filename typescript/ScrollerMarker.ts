/// <reference path="../typings/tsd.d.ts" />
enum MarkerType{
    Warning = 1,
    Error,
}

class MarkerElement{
    type : MarkerType;
    element: JQuery;
    container: JQuery;


    constructor(  type: MarkerType, element: JQuery , container:JQuery){
        this.type = type;
        this.element = element;
        this.container = container;
    }

    getPosition(container:JQuery):number{
        var position: number = this.element.position().top;
        var height: number = this.container.height();
        if (height == 0)
            height = 0.1;
        return position/height;
    }
}

class MarkerSign{
    markerElm: MarkerElement;
    markerSign: JQuery;
    parent: MarkerBar;

    constructor( markerElm:MarkerElement, parent:MarkerBar)
    {
        var markerClass: string;

        this.markerElm = markerElm;
        this.parent = parent;
        if (markerElm.type == MarkerType.Error)
            markerClass = 'error';
        else
            markerClass = 'warning';

        this.markerSign = parent.barElement.append("<div></div>").children().last();
        this.markerSign.addClass(markerClass);
    }

    draw():void{
        var width:number = this.parent.barElement.width();
        var relPos:number = this.markerElm.getPosition();
        this.markerSign.css({left: width * relPos});
    }

}

class MarkerBar{
    isVertical: Boolean;
    barElement : JQuery;
    markers: MarkerSign[];

    constructor(isVertical : Boolean, barElement:JQuery){
        this.isVertical = isVertical;
        this.barElement = barElement;
        this.markers = [];
    }

    addMarker(marker: MarkerElement): void{
        this.markers.push(new MarkerSign(marker,this))
    }

    refresh():void{
        this.markers.forEach( function(markerSign:MarkerSign,index:number,array:MarkerSign[]){
            markerSign.draw();
        })
    }


}

$(document).ready(function(){
    var marker1:MarkerElement = new MarkerElement(MarkerType.Warning,$('#warn'),$('body'));
    var marker2:MarkerElement = new MarkerElement(MarkerType.Error,$('#err'),$('body'));
    var markerBar: MarkerBar = new MarkerBar(true, $('.scrollbar'));
    markerBar.addMarker(marker1);
    markerBar.addMarker(marker2);
    markerBar.refresh();

});