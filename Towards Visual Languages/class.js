class Rectang {
    constructor(px, py, w, h, c) {
        this.px = px;
        this.py = py;
        this.w = w;
        this.h = h;
        this.c = c;
        this.select = false;
        this.drawn = false;
        // this.s = s;
        // this.r = r;
    }


    draw() {

        fill(this.c);
        if (this.select) {
            strokeWeight(4);
            stroke('rgba(0,255,0,0.25)');
        } else {
            noStroke();
        }
        // push();
        //  translate(this.px , this.py);
        //  rotate(this.r);

        // pop();
        // scale(this.s);     

        rect(this.px, this.py, this.w, this.h);
        this.drawn = true;

    }

    isDrawn(){
        return this.drawn;
    }

    // getpx() {
    //     return this.px;
    // }

    // getpy() {
    //     return this.py;
    // }

    // getw() {
    //     return this.w;
    // }

    // geth() {
    //     return this.h;
    // }

    hit(testx, testy) {
        return testx >= this.px && testx <= (this.px + this.w) && testy >= this.py && testy <= (this.py + this.h);
    }


    changeColor(val) {
        this.c = val;
    }

    getColor() {
        return this.c;
    }

    toggled() {
        this.select = !this.select;
    }


    notToggled() {
        this.select = false;
    }


    itsToggled() {
        if (this.select == true) {
            return true;
        } else {
            return false;
        }
    }

    changePosX(a) {
        this.px = a;
    }

    changePosY(b) {
        this.py = b;
    }

    // rotating(c) {
    //     this.r = c;
    // }

    // scaling(d) {
    //    scale(d);
    // }

    shapeTransX(e) {
        this.w = e;
    }

    shapeTransY(f) {
        this.h = f;
    }

}

