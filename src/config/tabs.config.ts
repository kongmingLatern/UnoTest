export interface UserConfig {
  /**
   * @description: 选项卡配置
   * @type {tabConfig}
   */
  tab?: Record<ValueConfig & string, any>[]
}

export interface ValueConfig {
  /**
   * @description: 选项卡配置
   * @type {tabConfig}
   */
  tabsOptions?: 'title' | 'name'
}

type UserExportConfig = UserConfig

declare function backConfig(config: UserExportConfig): UserExportConfig;


export default <T>(options: Partial<T>) => {
  const config = backConfig(options)
  return config
}

