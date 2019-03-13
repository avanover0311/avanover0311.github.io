var data={ "notes": [
  {
    "author": "Lee Iacocca", 
    "quote": "You can have brillant ideas, but if you can't get the across, your ideas won't get you anywhere"
  },
  {
    "author": "Warren G. Bennis",
    "quote": "Leadership is the capacity to translate vision into reality"
  },
  {
    "author": "John Maxwell",
    "quote": "Leadership development is a lifetime journey, not a brief trip"
  },
  {
    "author": "Margaret Thatcher",
    "quote": "Being in power is like being a lady. If you have to tell people you are, you aren't"
  },
  {
    "author": "Andrew Carnegie",
    "quote": "No man will make a great leader who want to do it all himself, or to get all the credit for doing it"
  },
  {
    "author": "Jimmy Fallon",
    "quote": "Thank You..fantasy football draft, for letting me know that even in my fantasies, I am bad at sports"
  },
  {
    "author": "Theodore Roosevelt",
    "quote": "We can best get justice by doing justice."
  },
  {
    "author": "Theodore Roosevelt",
    "quote": "True liberty shows itself to best advantage in protecting the rights of others, and especially of minorities"
  },
  {
    "author": "Theodore Roosevelt",
    "quote": "The one thing I want to leave my children is an honorable name. It is hard to fail, but it is worse never to have tried to succeed"
  },
  {
    "author": "Theodore Roosevelt",
    "quote": "I am part of everything that I have read"
  },
  {
    "author": "Henry Ford",
    "quote": "Failure is the opportunity to begin again, more intelligently"
  },
  {
    "author": "Eugene F. Ware",
    "quote": "All glory comes from daring to begin"
  },
  {
    "author": "Rick Warren",
    "quote": "The moment you stop learning, you stop leading"
  },
  {
    "author": "Henry Ford",
    "quote": "You can't build a reputation on what you're going to do"
  },
  {
    "author": "Aristotle",
    "quote": "We are what we repeatedly do, excellence then is not an act, but a habit"
  },
  {
    "author": "Leonardo da Vinci",
    "quote": "I love those who can smile in trouble"
  }, 
  {
    "author": "Ralph Waldo Emerson",
    "quote": "A great man is always willing to be little"
  },
  {
    "author": "Kevin Kruse",
    "quote": "Life is about making an impact, not making an income"
  },
  {
    "author": "Albert Einstein",
    "quote": "Strive not to be a success, but rather to be of value"
  },
  {
    "author": "Florence Nightingale",
    "quote": "I attribute my success to this: I never gave or took any excuse"
  },
  {
    "author": "Amelia Earhart",
    "quote": "The most difficult thing is the decision to act, the rest is mere tenacity"
  },
  {
    "author": "Socrates",
    "quote": "An unexamined life is not worth living"
  },
  {
    "author": "Stephen Covey",
    "quote": "I am not a product of my circumstances. I am a product of my decisions"
  },
  {
    "author": "Zig Ziglar",
    "quote": "People often say that motivation doesn't last. Well, neither does bathing. That's why we recommend it daily"
  },
  {
    "author": "Dalai Lama",
    "quote": "Happiness is not something ready made. It comes from your own actions"
  },
  {
    "author": "Sheryl Sandberg",
    "quote": "If you're offered a seat on a rocket ship, don't ask what seat! Just get on."
  }
 ]
};

function randomize() {
  var range = data.notes.length;
  var random_index = Math.floor(Math.random() * range);
  var item = data.notes[random_index];
  
  $('.quote-content').html(item.quote); 
  $('.quote-author').html(item.author);
}

function getQuote() {
  var $button = $('.next')

  $button.on('click', randomize);
}

$(document).ready(function() {
  randomize();
  getQuote();
});