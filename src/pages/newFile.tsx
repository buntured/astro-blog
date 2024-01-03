import BaseLayout from "../layouts/BaseLayout.astro";
import { pageTitle, identity, skills, happy, finished, goal } from "./about.astro";

<Fragment>
    <BaseLayout pageTitle={pageTitle}>
        <style define:vars={{ skillColor, fontWeight, textCase }}>{`
        h1 {
            color: purple;
            font-size: 4rem;
        }
        .skill {
            color: var(--skillColor);
            font-weight: var(--fontWeight);
            text-transform: var(--textCase);
        }
    `}</style>
        <h1>{pageTitle}</h1>
        <h2>... and my new Astro site!</h2>
        <p>{`I am working through Astro's introductory tutorial. This is the second page on my website, and it's the first one I built myself!`}</p>
        <p>This site will update as I complete more of the tutorial, so keep checking back and see how my journey is going!</p>
        <p>Here are a few facts about me:</p>
        <ul>
            <li>My name is {identity.firstName}.</li>
            <li>I live in {identity.country} and I work as a {identity.occupation}.</li>
            {identity.hobbies.length >= 2 && (
                <Fragment><li>
                    Two of my hobbies are: {identity.hobbies[0]} and {identity.hobbies[1]}
                </li></Fragment>
            )}
        </ul>
        <p>My skills are:</p>
        <ul>
            {skills.map((skill) => <Fragment><li class="skill">{skill}</li></Fragment>)}
        </ul>

        {happy && <Fragment><p>I am happy to be learning Astro!</p></Fragment>}
        {finished && <Fragment><p>I finished this tutorial!</p></Fragment>}
        {goal === 3 ? <Fragment><p>My goal is to finish in 3 days.</p></Fragment> : <Fragment><p>My goal is not 3 days.</p></Fragment>}
    </BaseLayout>



</Fragment>;
