class Modification{
    private body: string;
    private changes: Change[];
    private isOn: boolean;
    _isOff: boolean;

    constructor (body: string, changes: Change[]){
        this.body = body;
        this.changes = changes;
        this.isOn = true;
    }

    toggle(){
        this.isOn = !this.isOn;
        //set the modification ui.
        if ( this.isOn)
            this.changes.forEach( function(change:Change){
                change.show(this);
            })
        else
            this.changes.forEach( function(change:Change){
                change.hide(this);
            })
    }

    set on(value:boolean) {
        this.isOn = value;
        //se the modification ui
    }

    get on(){
        return this.isOn;
    }


}

function test(mod: Modification)
{
}

class Change{
    show(parent : Modfication)
    {

    }

    hide(parent: Modification)
    {

    }
}

class AppendChange extends Change{

}