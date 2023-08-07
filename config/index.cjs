/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxa3a768c5c573e43a',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'e92c79f183b3bbfcc982d5ad1d91064e',

  PROVINCE: '成都',
  CITY: '四川',
  to_name: '小仙女',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oO0D-6hihE-YVtXeyO_2ZC2qea2I',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'z_iLdBhk9dnhEPhhrG3QYlJKCgSq4Dg1n_mjjGq8DLQ',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '03-10',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1996', date: '09-09',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: 'syh', year: '2000', date: '03-10',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },
      ],
      FESTIVALS_LIMIT: 3,
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2016-07-27' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
      SLOT_LIST: [
        // 这样配置的话，就会每次发送这句话
        { keyword: 'encourage_oneself', contents: '你主要的问题在于读书太少而想得太多' },
        // 这样配置的话，就会每次随机选一句话发送
        {
          keyword: 'lover_prattle',
          contents: [
            '因为太喜欢你，所以看谁都像是情敌。',
            '申请成为你爱里的永久居民。',
            '你很傻，你很笨，可我还是很羡慕你，因为你有我',
            '遇见你，就好像捡到了100斤的运气'
          ],
        }
        // 你可以不断按格式往下增加
        // ...
      ]
    },
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oO0D-6hihE-YVtXeyO_2ZC2qea2I',//todo
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'TRw5H_6XgFKmAVJZlWPmd9QJTsPtWwr_yBNyki7u1YA',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '03-10',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1996', date: '09-09',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: 'syh', year: '2000', date: '03-10',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },
      ],
      FESTIVALS_LIMIT: 3,
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2016-07-27' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
      SLOT_LIST: [
        // 这样配置的话，就会每次发送这句话
        { keyword: 'encourage_oneself', contents: '你主要的问题在于读书太少而想得太多' },
        // 这样配置的话，就会每次随机选一句话发送
        {
          keyword: 'lover_prattle',
          contents: [
            '因为太喜欢你，所以看谁都像是情敌。',
            '申请成为你爱里的永久居民。',
            '你很傻，你很笨，可我还是很羡慕你，因为你有我',
            '遇见你，就好像捡到了100斤的运气'
          ],
        }
        // 你可以不断按格式往下增加
        // ...
      ]
    },
  ],

  /** 每日一言 */
  // 每日一言的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
  LITERARY_PREFERENCE: '',
  SWITCH: {
    /** 每日天气 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: true,

    /** 节假日 */
    // 下一休息日综合提醒, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    holidaytts: true,

    /** 每日N句 */
    // 金山每日一句, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    CIBA: true,

    // 每日一言, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    oneTalk: true,

    // 土味情话(彩虹屁), 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    earthyLoveWords: true,

    // 朋友圈文案, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    momentCopyrighting: true,

    // 毒鸡汤, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    poisonChickenSoup: true,

    // 古诗古文, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    poetry: true,

    /** 星座运势 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    horoscope: true,

    /** 生日消息和节日消息 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    birthdayMessage: true,

    /** 学生课表 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    courseSchedule: true,
  },


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
    }
  ],

}

module.exports = USER_CONFIG

