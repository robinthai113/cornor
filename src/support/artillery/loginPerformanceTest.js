
async function artilleryScript(page, userContext, events, test) {
    const { step } = test;
    const url = userContext.vars.url;
    let index = userContext.vars.$processEnvironment.LOCAL_WORKER_ID
    // console.log("================= index", index)
    console.log("================= url", url)
    index = Number(index);
    await test.step('Perfomance test CG Chat', async () => {

        try {
            // const listQuestion = [
            //     "write a 100 word essay about AI testing",
            //     "write an essay 100 word about the it field in vietnam",
            //     "write an essay 100 word about the ecomony in vietnam",
            //     "write an essay 100 word about the problem of the vietnam's economy",
            //     "write an essay 100 word about the problem of AI",
            //     "Write a 100-word essay about the impact of AI on job markets.",
            //     "Write a 100-word essay about the evolution of the tech industry in Vietnam.",
            //     "Write a 100-word essay about the role of tourism in Vietnam's economy.",
            //     "Write a 100-word essay about the challenges facing small businesses in Vietnam.",
            //     "Write a 100-word essay about the ethical implications of AI in surveillance.",
            //     "Write a 100-word essay about the ethical implications of AI IT field",
            //     "Write a 100-word essay about the potential of AI in enhancing cybersecurity measures.",
            //     "Write a 100-word essay about the role of IT startups in the growth of Vietnam's economy.",
            //     "Write a 100-word essay about the influence of foreign investment on Vietnam's tech industry.",
            //     "Write a 100-word essay about the challenges of digital transformation in Vietnam's government services.",
            //     "Write a 100-word essay about the impact of automation on manufacturing jobs in Vietnam.",
            //     "Write a 100-word essay about the significance of data privacy in the age of AI.",
            //     "Write a 100-word essay about the future of remote work in Vietnam's IT sector.",
            //     "Write a 100-word essay about the role of AI in improving healthcare services in Vietnam.",
            //     "Write a 100-word essay about the challenges of maintaining cultural heritage in the face of rapid urbanization in Vietnam.",
            //     "Write a 100-word essay about the implications of AI in educational technologies and their impact on learning outcomes.",
            // ];
            // const listURL = [
            //     "https://cgchat-preview.connorgp.com/chat/51xR1OZZ0laektHmLdlvMMR5vKwUaCuvlwYm",
            //     "https://cgchat-preview.connorgp.com/chat/PsKcTUKvVhtTlbPWXjd74eSmc0coqt7o01Gd",
            //     "https://cgchat-preview.connorgp.com/chat/5U1CiRdU0Ln1Ll43CAQEwBtZ9AvFx9U6it4j",
            //     "https://cgchat-preview.connorgp.com/chat/6Wukq1HlFqlPSODQbj2ypjc1WbCBATRLmpNR",
            //     "https://cgchat-preview.connorgp.com/chat/d1965f6d-8977-4690-9e38-f6ce48c665f9",
            //     "https://cgchat.connorgp.com/chat/PB8t61tc48zt5zpKbkVqWeiSiKOZfQXdxrlG",
            //     "https://cgchat.connorgp.com/chat/5ERs6wZO6z05nPx8iqEGkwnZnhetO2INn7Pd",
            //     "https://cgchat.connorgp.com/chat/PEpEjB9SybEL29eyYGCZcViT2dxw1ch9xtZ1",
            //     "https://cgchat.connorgp.com/chat/ng3Z0vydDEnjogJvmmE8jJomG46aNHFEDxKy",
            //     "https://cgchat.connorgp.com/chat/o6UxxLstfSBlMOSql2BepLHmu1Uj5Zhe78mp"
            // ];
            // console.log("==================", listURL[index - 1])
            // const randomURLIndex = Math.floor(Math.random() * listURL.length);
            // const randomURL = listURL[randomURLIndex]
            // await page.goto(randomURL);
            // for (let i = 0; i < 10; i++) {
            //     e = "Question_" + i
            //     await step("Question __" + i, async () => {
            //         const randomQuestionIndex = Math.floor(Math.random() * listQuestion.length);
            //         await page.locator("//textarea").fill(listQuestion[randomQuestionIndex], { timeout: 45000 });
            //         await page.locator("//button[@aria-label='Submit chat input']").click({ timeout: 45000 });
            //         await page.locator("//button[@aria-label='Stop speech readout']").waitFor({ state: "hidden", timeout: 45000 });
            //         await page.locator("//button[@aria-label='Submit chat input']").waitFor({ state: "visible", timeout: 45000 });
            //     });
            // }
        }

        catch (ex) {
            events.emit('counter', 'vusers.failed', 1);
            events.emit('counter', 'vusers.completed', -1);
            events.emit('counter', 'errors.artilleryScript', 1);
            console.log("===========================================", ex)
            await page.screenshot({ path: `reports/error_${Date.now()}_.png` });

        }
    })
};


module.exports = {
    artilleryScript
};

