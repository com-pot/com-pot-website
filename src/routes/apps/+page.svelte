<script>
/** @type {import('./$types').PageData} */
export let data;
</script>

<div class="page" data-align="text">
    <p>
        Each of the major pieces of the com-pot ecosystem represents a jar
        of <a href="https://en.wikipedia.org/wiki/Compote" target="_blank">compote</a> in
        the ever-growing shelf observable below.
    </p>

    <div class="shelf">
        {#each data.apps as app}
        <div class="slot">
            <div class="jar" style="{app.ui?.height ? `--jar-height: ${8 + app.ui.height * 6}rem;` : ''}">
                <div class="lid"></div>
                <div class="glass">
                    <div class="label">
                        <div class="title">{app.title}</div>
                    </div>
                    <div class="version">{app.version}</div>
                </div>
                
            </div>
        </div>
        {/each}
    </div>
</div>

<style lang="scss">
    .shelf {
        --shelf-height: 20rem;
        --shelf-thickness: 0.5rem;
        --shelf-gap: 2rem;

        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        row-gap: var(--shelf-gap);
        
        background-image: linear-gradient(
            to bottom,
            transparent 0rem,
            transparent var(--shelf-height),
            black var(--shelf-height),
            black calc(var(--shelf-height) + var(--shelf-thickness)),
            transparent calc(var(--shelf-height) + var(--shelf-thickness)),
        );
        // no idea why the gap accounts into the bg only by 0.75 but i take it for now.
        background-size: 100% calc(var(--shelf-height) + var(--shelf-thickness) + var(--shelf-gap) * 0.75);
        background-repeat: repeat;
        padding-block-end: var(--shelf-gap);
        
        .slot {
            height: var(--shelf-height);
            margin-inline-start: var(--gap, 0.5rem);
            display: flex;
            align-items: flex-end;

            &:nth-child(3n) {
                --gap: 0.75rem;
            }

            &:nth-child(5n - 3) {
                --gap: 0.2rem;
            }
        }
    }

    .jar {
        display: flex;
        flex-direction: column;

        .lid {
            height: 1rem;
            background-color: brown;

            transform-origin: 0% 100%;
            transform: rotate(0turn) translate(0rem, 0.5rem);
            transition: transform 0.2s ease-in-out;
            z-index: 2;
            pointer-events: none;
            border-radius: 0.25rem;
            border-bottom-left-radius: 0.1rem;
            border-bottom-right-radius: 0.1rem;
        }

        .glass {
            height: var(--jar-height, 16rem);
            width: 26ch;
            background-color: hsl(0 0% 77% / 0.2);
            backdrop-filter: blur(4px);

            display: grid;
            place-items: center;
            border-radius: 0.5rem;

            > * {
                grid-area: 1 / 1;
            }

            .version {
                place-self: end;
            }
        }

        .label {
            display: grid;
            min-width: 8ch;
            padding: 0.5rem;
            
            background-color: azure;
            border: 4px dashed hotpink;
            text-align: center;
        }

        &:hover {
            .lid {
                transform: rotate(-0.025turn) translate(-0.5rem, 0.02rem);
            }
        }
    }
</style>
