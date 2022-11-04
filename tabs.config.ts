type options = 'tab'

type UserConfig = Array<Record<string, string>>

type tabConfig = Record<options, UserConfig>


declare function backConfig(config: tabConfig): tabConfig;


export default backConfig({
  tab: [{
    title: '用户管理',
    name: 'user',
  }, {
    title: '角色管理',
    name: 'role',
  }]
})