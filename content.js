//Grab all the h2 element inner text

let test = document.querySelector('.heading-xx')

//student data object

//finished student object
//this object need to be sent to the extension          
//console.log(student);
//https://www.dropbox.com/work/HyperionDev%20Reviewers/NA22110004668/Software%20Engineer%20Bootcamp
//https://www.dropbox.com/work/HyperionDev%20Reviewers/AB22110005432/Intro%20to%20Programming%20Bootcamp


//prev button
// let dropboxBtn = `<a 
//     class="btn bounce-top"
//     title=${`https://www.dropbox.com/work/HyperionDev%20Reviewers/${student.number}/${student.course.replaceAll(" ", "%20")}`} 
//     href=${`https://www.dropbox.com/work/HyperionDev%20Reviewers/${student.number}/${student.course.replaceAll(" ", "%20")}`} 
//     target="_blank">
//         OPEN DROPBOX

//https://www.dropbox.com/search/work?path=%2F&query=AD22110004876&search_token=wSE2j02tt%2BEzn4Mn5LKCeJ6lTfohi%2BvZxO8aR6zgwL4%3D&typeahead_session_id=13067744558951506456428331496841
//https://www.dropbox.com/search/work?path=%2F&query=CC22110005202&search_token=wSE2j02tt%2BEzn4Mn5LKCeJ6lTfohi%2BvZxO8aR6zgwL4%3D&typeahead_session_id=28751319532716572321479819181797

// (async () => {
//   let s_name = document.getElementById('s-name')
//   console.log(s_name)
//   const response = await chrome.runtime.sendMessage({send: student});
//   // do something with response here, not outside the function
// let res = response.send
// console.count()
// console.log('res.name', res.name)
//   s_name.innerHTML = "hello" + res.name

// })();


// setTimeout(() => {
//   console.log('student.name', student.name)
//     //Get elements
  
//     let s_number = document.querySelector('#s-number')
//     let s_level = document.querySelector('#s-level')
//     let s_task = document.querySelector('#s-task')
 

// }, 200);





//==========chrome extension

const params = {
  active: true,
  currentWindow: true
}

chrome.tabs.query(params, gotTabs)

function gotTabs(tabs){
  console.log(tabs);


  chrome.tabs.sendMessage(tabs[0],"hello")
}

(async () => {
  const response = await chrome.runtime.sendMessage({greeting: "hello"});
  // do something with response here, not outside the function
  console.log(response);
})();

  
  //chrome.runtime.sendMessage(student)

          
          // s_task.textContent = "Task: " + student.task;
          // s_number.textContent = 13156165464
  

  
