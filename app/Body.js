import styles from './styles.css'
import MusicBox from './musicBox'

export default function Body(){
    return (
        <div className='body-content'>
            <MusicBox name={"Cat"} artist={"C418"} album={"Volume Alpha No. 19"} link={"https:www.youtube.com/watch?v=8kDeQCr14gI"} source={"cat.webp"}/>
            <MusicBox name={"Blocks"} artist={"C418"} album={"Volume Beta No. 28"} link={"https://www.youtube.com/watch?v=GOX-cRbXlgU"} source={"blocks.webp"}/>
            <MusicBox name={"Chirp"} artist={"C418"} album={"Volume Beta No. 20"} link={"https://www.youtube.com/watch?v=qDUESGp-2nM"} source={"chirp.webp"}/>
            <MusicBox name={"Far"} artist={"C418"} album={"Volume Beta No. 29"} link={"https://www.youtube.com/watch?v=CuqeaZZyL48"} source={"far.webp"}/>
            <MusicBox name={"Mall"} artist={"C418"} album={"Volume Beta No. 27"} link={"https://www.youtube.com/watch?v=6xZ6zmCoQk4"} source={"mall.webp"}/>
            <MusicBox name={"Mellohi"} artist={"C418"} album={"Volume Beta No. 22"} link={"https://www.youtube.com/watch?v=seNu0rueWtQ"} source={"Mellohi.webp"}/>
            <MusicBox name={"Stal"} artist={"C418"} album={"Volume Beta No. 23"} link={"https://www.youtube.com/watch?v=YRlIl6K6S88"} source={"stal.webp"}/>
            <MusicBox name={"Strad"} artist={"C418"} album={"Volume Beta No. 24"} link={"https://www.youtube.com/watch?v=3jg0_QPa4xI"} source={"strad.webp"}/>
            <MusicBox name={"Ward"} artist={"C418"} album={"Volume Beta No. 26"} link={"https://www.youtube.com/watch?v=5VuDwU4bW8Q"} source={"ward.webp"}/>
            <MusicBox name={"Wait"} artist={"C418"} album={"Volume Beta No. 21"} link={"https://www.youtube.com/watch?v=rRgzlfMYnzQ"} source={"wait.webp"}/>
            <MusicBox name={"Otherside"} artist={"Lena Raine"} album={"Minecraft: Caves & Cliffs (Original Game Soundtrack) No. 7"} link={"https://www.youtube.com/watch?v=QVph9G72x8E"} source={"otherside.webp"}/>
            <MusicBox name={"Pigstep"} artist={"Lena Raine"} album={"Minecraft: Nether Update (Original Game Soundtrack) No. 4"} link={"https://www.youtube.com/watch?v=n_BxqJFL-28"} source={"pigstep.webp"}/>
            <MusicBox name={"Relic"} artist={"Aaron Cherof"} album={"Minecraft: Trails & Tales (Original Game Soundtrack) No. 5"} link={"https://www.youtube.com/watch?v=iaqKlL0jWk8"} source={"relic.webp"}/>
            <MusicBox name={"Revenge"} artist={"CaptainSparklez"} album={"single"} link={"https://www.youtube.com/watch?v=cPJUBQd-PNM&t=2s"} source={"creeper.webp"} lyric={"Creeper, Oh man"}/>
            <MusicBox name={"Dont mine at night"} artist={"BebopVox YOGSCAST"} album={"single"} link={"https://www.youtube.com/watch?v=X_XGxzMrq04"} source={"pick.webp"} lyric={"Figure out what that zombie said (what?)"}/>
            <MusicBox name={"Technoblade"} artist={"Minecraft Songs"} album={"single"} link={"https://www.youtube.com/watch?v=1Y4MCnAxx6s"} source={"pig.webp"} lyric={"Cause the vids bring back all the memories"}/>
            <MusicBox name={"Save Our Crown"} artist={"Minecraft Songs"} album={"single"} link={"https://www.youtube.com/watch?v=dijMF25byNg"} source={"crown.png"} lyric={"Atlantis can save our crown"}/>                     
        </div>
    )
}

/*
'Cat, C418, Minecraft - Volume Alpha No. 19, https://www.youtube.com/watch?v=8kDeQCr14gI'
'Blocks, C418, Minecraft - Volume Beta No. 28, https://www.youtube.com/watch?v=GOX-cRbXlgU'
'Chirp, C418, Minecraft - Volume Beta No. 20, https://www.youtube.com/watch?v=qDUESGp-2nM'
'Far, C418, Minecraft - Volume Beta No. 29, https://www.youtube.com/watch?v=CuqeaZZyL48'
'Mall, C418, Minecraft - Volume Beta No. 27, https://www.youtube.com/watch?v=6xZ6zmCoQk4'
'Mellohi, C418, Minecraft - Volume Beta No. 22, https://www.youtube.com/watch?v=seNu0rueWtQ'
'Stal, C418, Minecraft - Volume Beta No. 23, https://www.youtube.com/watch?v=YRlIl6K6S88'
'Strad, C418, Minecraft - Volume Beta No. 24, https://www.youtube.com/watch?v=3jg0_QPa4xI'
'Ward, C418, Minecraft - Volume Beta No. 26, https://www.youtube.com/watch?v=5VuDwU4bW8Q'
'Wait, C418, Minecraft - Volume Beta No. 21, https://www.youtube.com/watch?v=rRgzlfMYnzQ'
'Otherside, Lena Raine, Minecraft: Caves & Cliffs (Original Game Soundtrack) No. 7, https://www.youtube.com/watch?v=QVph9G72x8E'
'Pigstep, Lena Raine, Minecraft: Nether Update (Original Game Soundtrack) No. 4, https://www.youtube.com/watch?v=n_BxqJFL-28'
'Relic, Aaron Cherof, Minecraft: Trails & Tales (Original Game Soundtrack) No. 5, https://www.youtube.com/watch?v=iaqKlL0jWk8'
'Revenge, CaptainSparklez, single, https://www.youtube.com/watch?v=cPJUBQd-PNM&t=2s, "Creeper, Oh man"'
'Don't mine at night, BebopVox YOGSCAST, single, https://www.youtube.com/watch?v=X_XGxzMrq04, Figure out what that zombie said (what?)'
*/