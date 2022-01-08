/**
 * The Pixel interface, used to define a pixel (which in actual
 * terms is an '@' symbol in the console)
 * If 'color' is not defined, the pixel defaults to white.
 */
interface Pixel {
    x: number,
    y: number,
    color?: number;
}

export class Window {
    private pixels: Pixel[][] = [];

    constructor(width: number, height: number) {
        for(let w=0;w<width;w++) {
            for(let h=0;h<height;h++) {
                this.pixels[w][h] = {x: w, y: h, color: 1};
            }
        }
    }

    setPixel(x: number, y: number, p: Pixel): void {
        this.pixels[x][y] = p;
    }

    getPixel(x: number, y: number): Pixel {
        return this.pixels[x][y];
    }

    draw() {

    }
}