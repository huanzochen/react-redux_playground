import styles from './ellipsis.module.scss'

const Ellipsis = () => {
  return (
    <>
      <h2>Ellipsis box</h2>
      display: block 本身就可以做到 ellipsis, 如果 inline 要做到，那他的父親必須是 flex, why?
      <div className={styles.parent}>
        <div className={styles.ellipsis_box}>
          {/* <a className={styles.label}>
            one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen
            sixteen seventeen eightteen nineteen twenty twentyone twentytwo twentythree twentyfour
            twentyfive.
          </a> */}
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
    </>
  )
}

export default Ellipsis
