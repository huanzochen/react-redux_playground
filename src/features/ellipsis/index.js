import styles from './ellipsis.module.scss'

const breadcrumb = [
  '樂天首頁',
  '電視與家電品牌',
  '遊戲娛樂機種',
  'Playstation 系列',
  'PS5 極致尊貴Tiffany day 特仕版本, 價值$10,0000,0000, 價值$10,0000,0000, 價值$10,0000,0000, 價值$10,0000,0000, 價值$10,0000,0000, 價值$10,0000,0000',
]

const Ellipsis = () => {
  return (
    <>
      <h2>Ellipsis box</h2>
      display: block 本身就可以做到 ellipsis, 如果 inline 要做到，那他的父親必須是 flex, why?
      <div className={styles.parent}>
        <div className={styles.ellipsis_box}>
          <a className={styles.label}>
            one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen
            sixteen seventeen eightteen nineteen twenty twentyone twentytwo twentythree twentyfour
            twentyfive.
          </a>
          <a className={styles.label}>
            one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen
            sixteen seventeen eightteen nineteen twenty twentyone twentytwo twentythree twentyfour
            twentyfive.
          </a>
        </div>
      </div>
      <div className={styles.test}>
        <div className={styles.a_ellipsis}>如何讓你遇見我</div>
        <div className={styles.a_ellipsis}>在我最美麗的時刻 為這</div>
        <div className={styles.a_ellipsis}>我已在佛前求了五百年</div>
        <div className={styles.a_ellipsis}>求他讓我們結一段塵緣</div>
      </div>
      <div className={styles.test2}>
        <div className={styles.name}>
          {
            '我是超長的全家配送店名我他媽常到爆炸你一定切不到我為我是超級世界無敵第一配送我是超長的全家配送店名我他媽常到爆炸你一定切不到我為我是超級世界無敵第一配送'
          }
        </div>
      </div>
      {/* this is a real example that need to test */}
      <ul className={styles.ul_element}>
        {breadcrumb.map((item, index) => {
          return <li className={styles.li_element}>{`${item}>`}</li>
        })}
      </ul>
      {/* this is a solution to solve this real example */}
      <ul className={styles.ellipsis_box_ul}>
        {breadcrumb.map((item, index) => {
          const final = index === breadcrumb.length - 1
          if (!final) return <li className={styles.label_li}>{`${item}>`}</li>
          else {
            return <li className={styles.final}>{`${item}>`}</li>
          }
        })}
      </ul>
    </>
  )
}

export default Ellipsis
