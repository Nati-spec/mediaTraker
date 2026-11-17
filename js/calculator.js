// js/calculator.js — Модуль расчета KPI статистики просмотров, прогресса серий и среднего балла
window.StatsCalculator = {
  calculateUserKPI(userId, userLists, reviews) {
    const myItems = userLists || [];
    const listCompleted = myItems.filter(x => x.status === 'completed');
    const totalCompletedCount = listCompleted.length;
    const totalEpisodesWatched = myItems.reduce((acc, item) => acc + (item.episodesWatched || 0), 0);

    const myReviews = (reviews || []).filter(r => r.userId === userId);
    const scoredItems = myItems.filter(x => x.userScore);
    let avgRating = '0.0';
    if (myReviews.length > 0) {
      const sum = myReviews.reduce((s, r) => s + r.score, 0);
      avgRating = (sum / myReviews.length).toFixed(1);
    } else if (scoredItems.length > 0) {
      const sum = scoredItems.reduce((s, x) => s + x.userScore, 0);
      avgRating = (sum / scoredItems.length).toFixed(1);
    }
    return { totalCompletedCount, totalEpisodesWatched, avgRating };
  }
};
