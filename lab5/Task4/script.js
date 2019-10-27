function isTimeRangesIntersect(timeRange1, timeRange2) {
  // First interval
  var start1 = new Date('Mon Oct 10 2019 ' + timeRange1[0] + ':00');
  var end1 = new Date('Mon Oct 10 2019 ' + timeRange1[1] + ':00');
  // Second interval
  var start2 = new Date('Mon Oct 10 2019 ' + timeRange2[0] + ':00');
  var end2 = new Date('Mon Oct 10 2019 ' + timeRange2[1] + ':00');

  if ((start1 > start2 && start1 < end2) || (start2 > start1 && start2 < end1)) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isTimeRangesIntersect(['08:30', '09:30'], ['10:30', '12:00']); // return false
isTimeRangesIntersect(['18:30', '19:30'], ['19:00', '21:00']); // return true
