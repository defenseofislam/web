import React, { useEffect, useRef } from "react";
import { Layout, Typography } from "antd";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

function IslamComponent2() {
  const topRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Content style={{ padding: "24px" }}>
      <Typography>
        <div ref={topRef} style={{ position: "absolute", top: -24, left: 0 }} />
        
        <Title level={2}>Debunking the Claims of Plagiarism Against the Quran</Title>

        <Title level={4}>Abstract</Title>
        <Paragraph>
          This article systematically refutes allegations that the Quran contains plagiarized material from earlier religious traditions. Through textual analysis, historical evidence, and theological examination, we demonstrate that the Quran's engagement with prior narratives constitutes deliberate theological correction rather than plagiarism. The study highlights the Quran's unique transformative hermeneutics, its historical context of revelation, and its linguistic inimitability as evidence against plagiarism claims.
        </Paragraph>

        <hr />

        <Title level={4}>1. Introduction: Understanding the Nature of the Allegations</Title>
        <Paragraph>
          Critics of Islam have historically alleged that Prophet Muhammad (PBUH) borrowed or plagiarized content from:
          {"\n\n"}
          <Text strong>- Judeo-Christian scriptures</Text>
          {"\n"}
          <Text strong>- Pre-Islamic Arabian poetry</Text>
          {"\n"}
          <Text strong>- Zoroastrian and other regional traditions</Text>
          {"\n\n"}
          These claims misunderstand the Quran's self-described role as a <Text mark>corrective continuation</Text> of divine revelation rather than an independent text.
        </Paragraph>

        <Title level={4}>2. Refuting Key Plagiarism Claims</Title>

        <Title level={5}>2.1. Biblical Parallels: Correction Not Copying</Title>
        <Paragraph>
          <Text strong>Claim:</Text> The Quran copies stories from the Bible (e.g., Noah, Moses, Jesus)
          {"\n\n"}
          <Text strong>Refutation:</Text>
          {"\n"}- The Quran explicitly states its role as <Text mark>"a confirmation of what came before it and a criterion over it"</Text> (Quran 5:48)
          {"\n"}- Significant theological differences exist:
          {"\n"}  • <Text code>No original sin</Text> in Islam (contra Romans 5:12)
          {"\n"}  • <Text code>Jesus as prophet</Text> not divine (Quran 5:75)
          {"\n"}  • <Text code>Different creation narrative</Text> (Quran 2:29-33)
          {"\n"}- The Quran corrects Biblical details (e.g., denying crucifixion in 4:157)
        </Paragraph>

        <Title level={5}>2.2. Pre-Islamic Poetry: Linguistic Transformation</Title>
        <Paragraph>
          <Text strong>Claim:</Text> Quranic language resembles pre-Islamic poetry
          {"\n\n"}
          <Text strong>Refutation:</Text>
          {"\n"}- The Quran's linguistic structure differs fundamentally:
          {"\n"}  • <Text code>Unique prose-poetry fusion</Text> (not pure poetry)
          {"\n"}  • <Text code>Grammatical precision</Text> exceeding poetic conventions
          {"\n"}  • <Text code>Consistent monotheistic focus</Text> vs. polytheistic poetry
          {"\n"}- The Prophet's illiteracy (<Text mark>ummi</Text> in Quran 7:157) makes direct copying implausible
        </Paragraph>

        <Title level={5}>2.3. Zoroastrian Influces: Shared Cultural Context</Title>
        <Paragraph>
          <Text strong>Claim:</Text> Concepts like Paradise/Hell mirror Zoroastrianism
          {"\n\n"}
          <Text strong>Refutation:</Text>
          {"\n"}- Similarities reflect <Text mark>common ancient Near Eastern motifs</Text> rather than direct borrowing
          {"\n"}- The Quran radically transforms these concepts:
          {"\n"}  • <Text code>Strict monotheism</Text> vs. dualism
          {"\n"}  • <Text code>Ethical rather than ritual purity</Text> focus
          {"\n"}  • <Text code>Different eschatological timeline</Text>
        </Paragraph>

        <Title level={4}>3. Theological and Historical Evidence Against Plagiarism</Title>

        <Title level={5}>3.1. The Quran's Unique Revelatory Mode</Title>
        <Paragraph>
          - <Text strong>Oral Revelation:</Text> Revealed piecemeal over 23 years (unlike edited texts)
          {"\n"}- <Text strong>Consistent Voice:</Text> Maintains first-person divine voice throughout
          {"\n"}- <Text strong>Linguistic Miracle:</Text> Its inimitability (<Text mark>I'jaz</Text>) challenged contemporaries
        </Paragraph>

        <Title level={5}>3.2. Historical Impossibilities</Title>
        <Paragraph>
          - <Text strong>No Access:</Text> Many Biblical stories differ from 7th-century Christian/Jewish versions
          {"\n"}- <Text strong>Arabian Context:</Text> Addressed 7th-century Arabian issues absent in other scriptures
          {"\n"}- <Text strong>Prophet's Character:</Text> Muhammad's (PBUH) known integrity makes deception unlikely
        </Paragraph>

        <Title level={4}>4. Academic Perspectives on Intertextuality</Title>
        <Paragraph>
          Modern scholarship recognizes that:
          {"\n\n"}
          - All sacred texts engage in <Text mark>intertextual dialogue</Text>
          {"\n"}- The Quran's relationship with prior traditions constitutes <Text strong>theological conversation</Text> not plagiarism
          {"\n"}- Its transformative approach parallels how the New Testament interprets the Hebrew Bible
        </Paragraph>

        <Title level={4}>5. Conclusion: The Quran as Corrective Revelation</Title>
        <Paragraph>
          The plagiarism narrative fails because it:
          {"\n\n"}
          1. Ignores the Quran's <Text strong>self-conscious corrective purpose</Text>
          {"\n"}
          2. Overlooks its <Text strong>radical theological innovations</Text>
          {"\n"}
          3. Misunderstands <Text strong>7th-century Arabian oral culture</Text>
          {"\n"}
          4. Neglects its <Text strong>linguistic uniqueness</Text> despite shared narratives
          {"\n\n"}
          The Quran engages prior traditions as the final revelation - affirming, correcting, and perfecting divine guidance for a new context.
        </Paragraph>

        <Title level={4}>References</Title>
        <Paragraph>
          - Rahman, F. (1980). <Text italic>Major Themes of the Quran</Text>
          {"\n"}- Saeed, A. (2008). <Text italic>The Qur'an: An Introduction</Text>
          {"\n"}- Abdel Haleem, M. (2004). <Text italic>Understanding the Qur'an: Themes and Style</Text>
          {"\n"}- Watt, W.M. (1994). <Text italic>Muhammad's Mecca: History in the Quran</Text>
          {"\n"}- Neuwirth, A. (2019). <Text italic>The Quran and Late Antiquity</Text>
        </Paragraph>
      </Typography>
    </Content>
  );
}

export default IslamComponent2;