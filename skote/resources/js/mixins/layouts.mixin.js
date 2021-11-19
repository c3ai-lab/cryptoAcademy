export default {
    data() {
        return {
            layout: {
                type: "vertical",
                sidebar: "dark",
                width: "fluid",
                topbar: "dark",
                loader: false
            }
        };
    },
    created() {
        const layout = JSON.parse(localStorage.getItem("layout")) || {};
        if (layout) {
            this.layout = {
                ...this.layout,
                ...layout,
                sidebar:
                    layout?.type === "horizontal"
                        ? layout?.topbar || this.layout.topbar
                        : layout?.sidebar || this.layout.sidebar
            };
        }
    },
    methods: {
        changeMode(mode) {
            let cssUrl = document.getElementById("layout-css").href;
            cssUrl = cssUrl.split("/");
            cssUrl.pop();
            document.cookie = "layout=" + (mode || "default");
            switch (mode) {
                case "dark":
                    cssUrl.push("app-dark.css");
                    break;
                case "rtl":
                    cssUrl.push("app-rtl.css");
                    break;
                default:
                    cssUrl.push("app.css");
                    break;
            }
            document.getElementById("layout-css").href = cssUrl.join("/");
        },
        changeLayout(change) {
            this.layout = {
                ...this.layout,
                ...change
            };
            localStorage.setItem("layout", JSON.stringify(this.layout));
        },
        changeSidebar(sidebar) {
            switch (sidebar) {
                case "dark":
                    document.body.setAttribute("data-sidebar", "dark");
                    document.body.removeAttribute("data-topbar");
                    document.body.removeAttribute("data-sidebar-size");
                    document.body.removeAttribute("data-layout-scrollable");
                    break;
                case "light":
                    document.body.setAttribute("data-topbar", "dark");
                    document.body.removeAttribute("data-sidebar");
                    document.body.removeAttribute("data-sidebar-size");
                    document.body.classList.remove("vertical-collpsed");
                    document.body.removeAttribute("data-layout-scrollable");
                    break;
                case "compact":
                    document.body.setAttribute("data-sidebar-size", "small");
                    document.body.setAttribute("data-sidebar", "dark");
                    document.body.classList.remove("vertical-collpsed");
                    document.body.removeAttribute("data-topbar", "dark");
                    break;
                case "icon":
                    document.body.setAttribute("data-keep-enlarged", "true");
                    document.body.classList.add("vertical-collpsed");
                    document.body.setAttribute("data-sidebar", "dark");
                    document.body.removeAttribute("data-topbar", "dark");
                    document.body.removeAttribute("data-layout-scrollable");
                    break;
                case "colored":
                    document.body.setAttribute("data-sidebar", "colored");
                    document.body.removeAttribute("data-keep-enlarged");
                    document.body.classList.remove("vertical-collpsed");
                    document.body.removeAttribute("data-sidebar-size");
                    document.body.removeAttribute("data-layout-scrollable");
                    break;
                case "scrollable":
                    document.body.setAttribute(
                        "data-layout-scrollable",
                        "true"
                    );
                    document.body.removeAttribute("data-layout-mode");
                    break;
                default:
                    document.body.setAttribute("data-sidebar", "dark");
                    break;
            }
        },
        changeTopbar(topbar) {
            switch (topbar) {
                case "dark":
                    document.body.setAttribute("data-topbar", "dark");
                    document.body.removeAttribute("data-layout-scrollable");
                    break;
                case "light":
                    document.body.setAttribute("data-topbar", "light");
                    document.body.removeAttribute("data-layout-size", "boxed");
                    document.body.removeAttribute("data-layout-scrollable");
                    break;
                case "colored":
                    document.body.setAttribute("data-topbar", "colored");
                    document.body.removeAttribute("data-layout-size", "boxed");
                    document.body.removeAttribute("data-layout-scrollable");
                    break;
                case "scrollable":
                    document.body.setAttribute(
                        "data-layout-scrollable",
                        "true"
                    );
                    document.body.removeAttribute("data-layout-mode");
                    break;
                default:
                    document.body.setAttribute("data-topbar", "dark");
                    break;
            }
        },
        changeWidth(width) {
            switch (width) {
                case "boxed":
                    document.body.setAttribute("data-layout-size", "boxed");
                    break;
                case "fluid":
                    document.body.setAttribute("data-layout-mode", "fluid");
                    document.body.removeAttribute("data-layout-size");
                    break;
                default:
                    document.body.setAttribute("data-layout-mode", "fluid");
                    break;
            }
        },
    },
    watch: {
        layout: {
            immediate: true,
            handler(newLayout, oldLayout) {
                if (newLayout) {
                    if (
                        newLayout.sidebar !== oldLayout?.sidebar ||
                        newLayout.type !== oldLayout?.type
                    ) {
                        this.changeSidebar(newLayout.sidebar);
                    }
                    if (
                        newLayout.topbar !== oldLayout?.topbar ||
                        newLayout.type !== oldLayout?.type
                    ) {
                        this.changeTopbar(newLayout.topbar);
                    }
                    if (newLayout.width !== oldLayout?.width) {
                        this.changeWidth(newLayout.width);
                    }
                }
            }
        }
    }
};
