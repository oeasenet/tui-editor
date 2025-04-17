import chart from "@toast-ui/editor-plugin-chart";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import tableMergedCell from "@toast-ui/editor-plugin-table-merged-cell";
import uml from "@toast-ui/editor-plugin-uml";

/**
 * Type representing any Toast UI Editor plugin
 */
export type Plugin = unknown;

/**
 * Available built-in plugin names
 */
export type PluginName =
    | "chart"
    | "codeSyntaxHighlight"
    | "colorSyntax"
    | "tableMergedCell"
    | "uml";

/**
 * Map of plugin names to their implementations
 */
export const pluginMap: Record<PluginName, Plugin> = {
    chart,
    codeSyntaxHighlight,
    colorSyntax,
    tableMergedCell,
    uml,
};

/**
 * Maps plugin names to their implementations
 *
 * @param pluginNames - Array of plugin names to map to implementations
 * @returns Array of plugin implementations
 * @throws Error if a plugin name is not found in the map
 */
export function mapPlugins(pluginNames: PluginName[]): Plugin[] {
    return pluginNames.map(name => {
        if (!(name in pluginMap)) {
            throw new Error(`Plugin "${name}" not found. Available plugins: ${Object.keys(pluginMap).join(', ')}`);
        }
        return pluginMap[name];
    });
}
