window.addEventListener("load", () => {
    options = {
      year: 'numeric', month: 'long', day: '2-digit',
	hour: '2-digit', minute: '2-digit', second: '2-digit',
	timeZone: 'America/Chicago', timeZoneName: 'long', weekday: 'long', era: 'short'
    };
    const clock = () => dateTime.innerText=new Intl.DateTimeFormat('en-EN', options).format(new Date());
    clock();
    setInterval(clock, 1000);
});
	
