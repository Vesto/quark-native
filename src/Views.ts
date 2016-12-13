// import { View, Rect, Color, Shadow, Font, LineBreakMode, TextAlignmentMode } from "quark";

export declare class QKView {
    /* JavaScript Interop */
    // public jsView: View;
    public jsView: any;

    /* Positioning */
    // public jsRect: Rect;
    public jsRect: any;

    /* View hierarchy */
    public readonly jsSubviews: QKView[];
    public readonly jsSuperview?: QKView;
    public jsAddSubview(view: QKView, index: number): void;
    public jsRemoveFromSuperview(): void;

    /* Events */

    /* Layout */

    /* Visibility */
    public jsHidden: boolean;

    /* Style */
    // public jsBackgroundColor: Color;
    public jsBackgroundColor: any;
    public jsAlpha: number;
    // public jsShadow: Shadow | undefined;
    public jsShadow: any | undefined;
    public jsCornerRadius: number;

    /* Initiator */
    /// Creates a new view with a JSView.
    public constructor();
}

export declare class QKButton extends QKView {
    public jsTitle: string;
}

export declare class QKLabel extends QKView {
    public jsText: string;
    // public jsFont: Font;
    public jsFont: any;
    // public jsColor: Color;
    public jsColor: any;
    public jsLineCount: number;
    // public jsLineBreakMode: LineBreakMode;
    public jsLineBreakMode: any;
    // public jsAlignmentMode: TextAlignmentMode;
    public jsAlignmentMode: any;
}
