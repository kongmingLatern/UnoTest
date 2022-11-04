export type options = 'tab'

export type UserConfig = Array<Record<string, string>>

export type tabConfig = Record<options, UserConfig>

export declare function backConfig(config: tabConfig): tabConfig;


