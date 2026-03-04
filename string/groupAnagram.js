var groupAnagrams = function(strs) {
    let map = {};

    for(let i=0; i<strs.length; i++) {
        let sortedstr = strs[i].split("").sort().join('');

        if(!map[sortedstr]) {
            map[sortedstr] = [strs[i]];
        }
        else{
            map[sortedstr].push(strs[i]);
        }
    }
    return[...Object.values(map)];

};

let s = ["eat","tea","tan","ate","nat","bat"];
const result = groupAnagrams(s);
console.log(result);