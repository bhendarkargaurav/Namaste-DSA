
let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 4, 5];

function MeargeArray(nums1, m, nums2, n) {

    let nums1copy = nums1.slice(0,m);
    let p1 = 0;
    let p2 = 0

    for(let i=0; i< m+n; i++){
         if(p2 >= n || (p1 < m && nums1copy[p1] < nums2[p2])) {
            nums1[i] = nums1copy[p1];
            p1++;
        }
        else {
            nums1[i] = nums2[p2];
            p2++
        }
    }
    console.log(nums1);
}

MeargeArray(nums1, 3, nums2, 3);
