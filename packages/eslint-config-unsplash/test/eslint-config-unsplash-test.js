// Function spacing
function foo({ name }) {
  // Max line length 80
  const string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
    'Quid est, quod ab ea absolvi et perfici debeat? ' +
    'Omnia contraria, quos etiam insanos esse vultis. ' +
    'Mihi enim erit isdem istis fortasse iam utendum. ' +
    'Duo Reges: constructio interrete.';

  return string + name;
}

// No trailing commas
const user = {
  name: 'Han Solo'
};

// No Yoda
const isHan = user.name === 'Han Solo';
if (isHan) {
  foo(user);
} else {
  foo('Someone else');
}
