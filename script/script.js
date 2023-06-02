var loadFile = function(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
};


function changeit(){
	let num = Math.floor((Math.random() * 10) + 1);
	console.log(num);



	switch(num){
		case 1:
			document.getElementById('match-img').style.display="block";
			document.getElementById('match-img').src="https://img.freepik.com/premium-photo/monkey-wearing-sunglasses-yellow-background_151606-9.jpg?w=2000";
			break;
		case 2:
			document.getElementById('match-img').style.display="block";
			document.getElementById('match-img').src="https://media.wired.com/photos/593261cab8eb31692072f129/master/w_2560%2Cc_limit/85120553.jpg";

			break;

			case 3:
				document.getElementById('match-img').style.display="block";
				document.getElementById('match-img').src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF3620nhlKrn_G8PNWR9PzVYy_UesDVdNtzg&usqp=CAU";
				break;

				case 4:
					document.getElementById('match-img').style.display="block";
					document.getElementById('match-img').src="https://i.guim.co.uk/img/media/665955f7f484b9f5b15d11a95ba1d0fa8a098873/0_192_3627_2176/master/3627.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=e4e7637ea0cc4382c989a4e56c55c580";
					break;
	
					case 5:
						document.getElementById('match-img').style.display="block";
						document.getElementById('match-img').src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEox_J6xPzDi8Fl6IAi0xG7UUZDwGXxEpEORYGgBs4n5K_8Vjil2JSzm8fujRoqm9wuNY&usqp=CAU";
						break;
		
						case 6:
							document.getElementById('match-img').style.display="block";
							document.getElementById('match-img').src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH6g20SN_uNmMYTz8xAQd_hrUWENScZyBvTQ&usqp=CAU";
							break;
			
							case 7:
								document.getElementById('match-img').style.display="block";
								document.getElementById('match-img').src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6cpJU9ksdkcr6yxcOKmaB9VJAS8tnFBEuLQ&usqp=CAU";
								break;

								case 8:
					document.getElementById('match-img').style.display="block";
					document.getElementById('match-img').src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH_S0m_f0On7C0ohCIZPr7tWq00oBxbqQWw&usqp=CAU";
					break;
	
					case 9:
						document.getElementById('match-img').style.display="block";
						document.getElementById('match-img').src="https://www.columbuszoo.org/sites/default/files/styles/hp_events_385x457_/public/assets/animals/Tiger%20%28Natasha%29%206491%20-%20Amanda%20Carberry%2C%20Columbus%20Zoo%20and%20Aquarium.jpg?h=2e7c44a8&itok=bfD3dc1u";
						break;
		
						case 10:
							document.getElementById('match-img').style.display="block";
							document.getElementById('match-img').src="https://www.paigntonzoo.org.uk/wp-content/uploads/2022/07/NZ_Animal_Photos_04-22_LR-43-1024x683.jpg";
							break;
			
		

							

	}
	// document.getElementById('match-img').style.display="block";
	// document.getElementById('match-img').src="https://img.freepik.com/premium-photo/monkey-wearing-sunglasses-yellow-background_151606-9.jpg?w=2000";
}