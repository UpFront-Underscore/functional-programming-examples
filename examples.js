//		
//		examples.js - functional programming examples for UpFront-Underscore 
//		discussion materials.  This content is free to use and distribute.
//		
//		Author: Jerrod Long, 5/1/2012
//		
//		https://github.com/UpFront-Underscore/functional-programming-examples


var underscore = _.noConflict();

var Follower = function(userData){
	if (!(this instanceof Follower)) {
		return new Follower(userData);
	}

	this.name = userData.name;
	this.location = userData.location;
	this.friendCount = userData.friends_count;
	this.followerCount = userData.followers_count;	
}

var example = function(_){
	var  publicAccessors = {};
	
	publicAccessors.followers = function(){
		return _.map(mockUserData, Follower)
	}
	
	publicAccessors.followerNames = function(){
		return _.pluck(example.followers(), 'name');
	}

	publicAccessors.followerLocations = function(){
		return _.pluck(example.followers(), 'location');
	}

	publicAccessors.mostFollowers = function(){
		return _.max(example.followers(), function(follower){
			return follower.followerCount;
		});
	}
	
	publicAccessors.followersByLocation = function(){
		return _.groupBy(example.followers(), 'location');
	}

	publicAccessors.followersByLocationConsolidated = function(){
		return _.groupBy(example.followers(), function(follower){
			return follower.location.indexOf("Kansas City")? 
					follower.location : "Kansas City";
		});
	}

	publicAccessors.friendsOfFollowers = function(){
		return _.reduce(example.followers(), function(total, follower){
			return total + follower.friendCount;
		}, 0);
	}
		
	publicAccessors.print = function(string){
		console.log(string);
	}

	return publicAccessors;
	
}(underscore);

