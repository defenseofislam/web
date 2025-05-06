import React, { useEffect, useRef } from "react";
import { Layout, Typography } from "antd";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

function IslamComponent1() {
  const topRef = useRef(null);

  useEffect(() => {
    // Scroll to top when component mounts

    // Alternative if scrollIntoView doesn't work in your environment:
    window.scrollTo(0, 0);
  }, []);
  return (
    <Content style={{ padding: "24px" }}>
      <Typography>
        <Title level={2}>
          Is the Quran the Word of God? A Scholarly Examination
        </Title>

        <Title level={4}>Abstract</Title>
        <Paragraph>
          The question of whether the Quran is the literal word of God is one of
          the most significant theological and philosophical debates in
          religious studies. Muslims believe that the Quran is the unaltered,
          divine revelation transmitted to the Prophet Muhammad (peace be upon
          him) through the Angel Gabriel. Critics, however, argue that it is a
          human-authored text influenced by historical, cultural, and religious
          contexts. This paper examines the Quran's divine claims, its
          linguistic and literary uniqueness, historical transmission,
          scientific and prophecies, and responses to criticisms. Through a
          multidisciplinary approach, this study evaluates the evidence for and
          against the Quran's divine origin.
        </Paragraph>

        <hr />

        <Title level={4}>1. Introduction</Title>
        <Paragraph>
          The Quran, the central religious text of Islam, claims to be the
          direct speech of God (Allah) revealed to Prophet Muhammad (PBUH) over
          23 years (610–632 CE). Its adherents regard it as the final and
          complete revelation, superseding previous scriptures like the Torah
          and the Gospel. Skeptics, however, question its divine origin,
          suggesting human authorship or compilation from earlier sources. This
          article explores: The Quran's self-claim of divinity. Linguistic and
          literary miracles. Historical preservation and textual integrity.
          Scientific and prophetic accuracy. Counterarguments and critical
          responses.
        </Paragraph>

        <Title level={4}>2. The Quran's Claim of Divine Authorship</Title>
        <Paragraph>
          The Quran explicitly states its divine origin in numerous verses:
          {"\n\n"}- "Indeed, it is We who sent down the Quran and indeed, We
          will be its guardian." (Quran 15:9)
          {"\n"}- "And if you are in doubt about what We have sent down upon Our
          Servant [Muhammad], then produce a surah like it..." (Quran 2:23)
          {"\n\n"}Unlike the Bible, which contains third-person narratives about
          God, the Quran is written in the first-person voice of God,
          reinforcing its claim as direct revelation.
        </Paragraph>

        <Title level={4}>3. Linguistic and Literary Uniqueness</Title>
        <Title level={5}>
          3.1. The Challenge of Imitation (I'jaz al-Quran)
        </Title>
        <Paragraph>
          The Quran challenges skeptics to produce even a single chapter (surah)
          like it (Quran 2:23, 10:38). Despite the flourishing of Arabic
          literature, no one has successfully replicated its linguistic
          perfection.
          {"\n\n"}Features of Quranic Eloquence:
          {"\n\n"}- Unique Rhyme and Prose (Saj'): Unlike pre-Islamic poetry,
          the Quran's rhythm is neither poetry nor ordinary prose.
          {"\n"}- Lexical Precision: The Quran uses words with unparalleled
          semantic accuracy.
          {"\n"}- Grammatical Consistency: Despite its complexity, the Quran
          maintains flawless Arabic grammar across 114 chapters.
        </Paragraph>

        <Title level={5}>3.2. Historical Influence on Arabic</Title>
        <Paragraph>
          The Quran standardized Arabic grammar and influenced Islamic
          civilization's intellectual development. Early Muslim scholars, such
          as Sibawayh, based Arabic linguistic rules on the Quran.
        </Paragraph>

        <Title level={4}>4. Historical Preservation & Textual Integrity</Title>
        <Paragraph>
          Unlike the Bible, which has multiple variants, the Quran has been
          preserved with minimal textual variation due to:
        </Paragraph>

        <Title level={5}>4.1. Oral and Written Transmission</Title>
        <Paragraph>
          - Memorization (Hifz): Millions of Muslims have memorized the Quran
          verbatim, ensuring its preservation.
          {"\n"}- Early Compilation: Caliph Abu Bakr compiled the Quran into a
          single manuscript, later standardized by Caliph Uthman (644–656 CE).
        </Paragraph>

        <Title level={5}>4.2. Manuscript Evidence</Title>
        <Paragraph>
          The Sana'a Manuscript (discovered in 1972) and the Birmingham Quran
          manuscript (radiocarbon-dated to 568–645 CE) confirm the Quran's early
          written form aligns with the modern text.
        </Paragraph>

        <Title level={4}>5. Scientific and Prophetic Accuracy</Title>
        <Paragraph>
          The Quran contains statements that align with modern science, despite
          being revealed in the 7th century:
        </Paragraph>

        <Title level={5}>5.1. Embryology</Title>
        <Paragraph>
          "We created man from an extract of clay. Then We made him as a drop in
          a place of settlement, firmly fixed..." (Quran 23:12–14) matches
          modern embryological stages.
        </Paragraph>

        <Title level={5}>5.2. Cosmology</Title>
        <Paragraph>
          "Do the disbelievers not see that the heavens and earth were a joined
          entity, then We separated them?" (Quran 21:30) resembles the Big Bang
          theory.
        </Paragraph>

        <Title level={5}>5.3. Historical Prophecies</Title>
        <Paragraph>
          The Quran predicted the Byzantine Empire's victory over Persia (Quran
          30:2–4), which occurred within the prophesied timeframe.
        </Paragraph>

        <Title level={4}>6. Counterarguments and Responses</Title>
        <Title level={5}>
          6.1. Alleged Borrowing from Judeo-Christian Sources
        </Title>
        <Paragraph>
          Some scholars claim the Quran borrows from Syriac Christian texts.
          However:
          {"\n\n"}- The Quran corrects Biblical narratives (e.g., denying
          crucifixion of Jesus in Quran 4:157).
          {"\n"}- Its theological distinctions (strict monotheism, no Trinity)
          set it apart.
        </Paragraph>

        <Title level={5}>6.2. Contradictions and Ethical Criticisms</Title>
        <Paragraph>
          Critics cite verses on warfare (e.g., Quran 9:5) as contradictions.
          Muslim scholars contextualize these within defensive wars of early
          Islam.
        </Paragraph>

        <Title level={5}>6.3. Psychological Explanations</Title>
        <Paragraph>
          Skeptics suggest Muhammad (PBUH) authored the Quran subconsciously.
          However:
          {"\n\n"}- The Prophet was illiterate (Quran 7:157), making complex
          literary production unlikely.
          {"\n"}- His character and consistency over 23 years defy claims of
          deception.
        </Paragraph>

        <Title level={4}>7. Conclusion</Title>
        <Paragraph>
          The Quran presents a compelling case for divine authorship through its
          linguistic excellence, historical preservation, scientific insights,
          and fulfilled prophecies. While skepticism persists, the burden of
          proof remains on critics to explain how an illiterate man in
          7th-century Arabia produced a text of such unparalleled depth and
          consistency. For over a billion Muslims, the Quran is not just a book
          but the eternal, unchanging word of God.
        </Paragraph>

        <Title level={5}>Future Research Directions</Title>
        <Paragraph>
          - Comparative studies with other scriptures.
          {"\n"}- Computational analysis of Quranic linguistics.
          {"\n"}- Archaeological corroboration of Quranic narratives.
        </Paragraph>

        <Title level={4}>References</Title>
        <Paragraph>
          - Abdel Haleem, M. A. S. (2004). The Quran: A New Translation. Oxford
          University Press.
          {"\n"}- Bucaille, M. (1976). The Bible, The Quran and Science.
          {"\n"}- Puin, G. (1996). "Observations on Early Quran Manuscripts."
          Journal of Quranic Studies.
          {"\n"}- Arberry, A. J. (1955). The Quran Interpreted.
        </Paragraph>
      </Typography>
    </Content>
  );
}

export default IslamComponent1;
