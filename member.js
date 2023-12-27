function skillsMember() {
  return {
    restrict: 'E',
    scope: {
      skills: '=skills'
    },
    templateUrl: 'app/skills/member.html'
  };
}