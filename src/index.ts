/* Core */
export declare class QKLogger {
    public static output(test: string): void;
}

export declare class QKModule {
    public static delegate: any;
}

/* UI */
export declare class QKWindow {
    public jsRootView: QKView;
}

/* UI Views */
export declare class QKView {
    /* JavaScript Interop */
    public jsView: any; // View

    /* Positioning */
    public jsRect: any; // Rect

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
    public jsBackgroundColor: any; // Color
    public jsAlpha: number;
    public jsShadow: any | undefined; // Shadow | undefined
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
    public jsFont: any; // Font
    public jsColor: any; // Color
    public jsLineCount: number;
    public jsLineBreakMode: any; // LineBreakMode
    public jsAlignmentMode: any; // TextAlignmentMode
}
