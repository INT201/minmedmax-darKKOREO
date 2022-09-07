const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
      if(n1>=n2 && n1>=n3){
        if(n2>=n3){
          return objnmdmx = {min:n3,mid:n2,max:n1}
          }else if(n3>=n2){
          return objnmdmx = {min:n2,mid:n3,max:n1}
          }
    }
    if(n2>=n1 && n2>=n3){
        if(n1>=n3){
          return objnmdmx = {min:n3,mid:n1,max:n2}
          }else if(n3>=n1){
          return objnmdmx = {min:n1,mid:n3,max:n2}
          }
    }
    if(n3>=n1 && n3>=n2){
          if(n2>=n1){
              return objnmdmx = {min:n1,mid:n2,max:n3}
              }else if(n1>=n2){
              return objnmdmx = {min:n2,mid:n1,max:n3}
              }
    }  
}
module.exports = minMedMax
