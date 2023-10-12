
function firstNonRepeatedChar(sentence)
	{
		let arr = new Array(26);
		for(let i=0;i<sentence.length;i++)
			{
				let code = sentence.charCodeAt(i)-65;
				arr[code]++;
			}
		let ans = "";
		let flag = false;
		for(let i=0;i<sentence.length;i++)
			{
				let code = sentence.charCodeAt(i)-65;
				if(arr[code] == 1)
				{
					alert(sentence.charAt(i);
					flag = true;
					return;
				}
			}
		if(flag==false)
		{
			alert("null");
		}
	}