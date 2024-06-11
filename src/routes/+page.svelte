<script>
// @ts-nocheck

	import '../app.css';
	import '../global.css';

	import Navbar from '$lib/components/Navbar.svelte';
	// import HamburgerNav from '../lib/components/HamburgerNav.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Profile from '$lib/components/Profile.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import About from '$lib/components/About.svelte';


	// import {profile2Img} from "$lib/assets/profile-pic-2.png"
	import profile1Img from '$lib/assets/profile-pic-1.png';
	import checkmarkImg from '$lib/assets/checkmark.png';
	import linkedinImg from '$lib/assets/linkedin.png';
	import emailImg from '$lib/assets/email.png';
	import aboutImg from '$lib/assets/profile-pic-2.png';
	import pjr1Img from '$lib/assets/project-1.png';
	import pjr2Img from '$lib/assets/project-2.png';
	import pjr3Img from '$lib/assets/project-3.png';
	import arrowImg from '$lib/assets/arrow.png';
	import eduImg from '$lib/assets/education.png';
	import expImg from '$lib/assets/experience.png';
	import gitImg from '$lib/assets/github.png';

</script>

<Navbar/>
<Profile {linkedinImg} {gitImg} {profile1Img} />

<About {aboutImg} {expImg}  {arrowImg}  {eduImg}/>

<Experience {checkmarkImg} {arrowImg} />

<Projects {pjr1Img} {pjr2Img} {pjr3Img} {arrowImg}/>

<Contact {emailImg} {linkedinImg} />

<Footer/>