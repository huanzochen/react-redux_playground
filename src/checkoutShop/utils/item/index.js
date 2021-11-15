import MallConfig from '../../config/mallConfig'

const { enabled_badge_ids: ENABLED_BADGE_IDS } = MallConfig

export const filterEnabledBadges = (badges = []) => {
  return Object.values(ENABLED_BADGE_IDS).reduce((result, enabledId) => {
    const availableBadge = badges.find(({ badgeId }) => badgeId === enabledId)

    return availableBadge ? [...result, availableBadge] : result
  }, [])
}