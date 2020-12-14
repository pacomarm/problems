let subset_sum = (arr, wanted) => {
    arr.sort((a,b)=> a - b);
    const rows = arr.length
    const cols = wanted + 1;
    let memo = new Array(rows);
    for(let i =0; i<rows;i++){
        memo[i]= new Array(cols);
    }
    for(let i=0;i<rows;i++){
        memo[i][0]= true;
    }
    for(let j=0; j<cols;j++){
        if(j==arr[0]){
            memo[0][j]=true;
        }  
    }
    for(let i=1; i<rows;i++){
        for(let j=1; j<cols; j++){
            if(memo[i-1][j]){
                memo[i][j]=true;
            }
            else{
                if(j>=arr[i]){
                    memo[i][j]= memo[i-1][j - arr[i]]
                }
            }
        }
    }

    return console.log(memo[rows-1][cols-1])
};