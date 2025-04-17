/**
 * Type representing any Toast UI Editor plugin
 */
export type Plugin = unknown;
/**
 * Available built-in plugin names
 */
export type PluginName = "chart" | "codeSyntaxHighlight" | "colorSyntax" | "tableMergedCell" | "uml";
/**
 * Map of plugin names to their implementations
 */
export declare const pluginMap: Record<PluginName, Plugin>;
/**
 * Maps plugin names to their implementations
 *
 * @param pluginNames - Array of plugin names to map to implementations
 * @returns Array of plugin implementations
 * @throws Error if a plugin name is not found in the map
 */
export declare function mapPlugins(pluginNames: PluginName[]): Plugin[];
