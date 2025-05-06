import React, { useEffect, useRef } from "react";
import { Layout, Typography } from "antd";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

function IslamComponent2() {
  const topRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Content style={{ padding: "24px" }}>
      <Typography>
        {/* Invisible anchor at top */}
        <div ref={topRef} style={{ position: "absolute", top: -24, left: 0 }} />

        <Title level={2}>
          Allegations of Plagiarism Against the Quran: A Critical Examination
        </Title>

        <Title level={4}>Abstract</Title>
        <Paragraph>
          This paper examines historical and contemporary claims that the Quran
          contains material plagiarized from earlier religious traditions. We
          analyze the most common allegations regarding Judeo-Christian sources,
          pre-Islamic Arabian poetry, and Zoroastrian influences. Through
          textual analysis, historical contextualization, and theological
          comparison, we demonstrate that while the Quran engages with prior
          traditions, it transforms them through its unique theological
          framework and literary structure. The study concludes that accusations
          of plagiarism fail to account for the Quran's transformative
          hermeneutics and its self-positioning as a corrective revelation.
        </Paragraph>

        <hr />

        <Title level={4}>1. Introduction</Title>
        <Paragraph>
          Since the advent of Islam, critics have alleged that the Quran
          borrowed substantially from existing religious texts. These claims
          range from suggestions of direct copying to theories of unconscious
          cultural absorption. This article evaluates these allegations through
          three lenses: (1) Textual parallels with Biblical material, (2)
          Similarities to pre-Islamic poetry, and (3) Conceptual overlaps with
          Zoroastrianism. We then present Islamic responses and academic
          perspectives on intertextuality in sacred literature.
        </Paragraph>

        <Title level={4}>2. Major Allegations of Borrowing</Title>
        <Title level={5}>2.1. Biblical Parallels</Title>
        <Paragraph>
          Critics frequently cite similarities between Quranic narratives and
          Biblical stories (e.g., the Flood narrative, Joseph story).
          Orientalist scholars like Theodor Nöldeke identified what they
          considered direct dependencies:
          {"\n\n"}- <strong>Shared Prophetic Stories</strong>: 25 prophets
          mentioned in both texts
          {"\n"}- <strong>Legal Similarities</strong>: Eye-for-eye justice
          (Exodus 21:24 vs Quran 5:45)
          {"\n"}- <strong>Eschatological Imagery</strong>: Day of Judgment
          descriptions
          {"\n\n"}Muslim scholars argue these reflect common divine origins
          rather than plagiarism, noting the Quran's explicit corrections of
          Biblical narratives (e.g., denying the crucifixion in 4:157).
        </Paragraph>

        <Title level={5}>2.2. Pre-Islamic Poetry</Title>
        <Paragraph>
          Some Arabists claim Quranic phrases mirror 6th-century Hijazi poetry:
          {"\n\n"}- The <strong>Hanging Odes (Mu'allaqat)</strong> contain
          similar desert imagery
          {"\n"}- <strong>Liturgical Formulas</strong> resemble pagan soothsayer
          (kāhin) speech patterns
          {"\n\n"}Islamic linguistics scholars (e.g., Mustansir Mir) counter
          that the Quran's linguistic structure differs fundamentally from
          pre-Islamic poetry in its grammatical precision and literary cohesion.
        </Paragraph>

        <Title level={5}>2.3. Zoroastrian Influences</Title>
        <Paragraph>
          Comparative religion scholars (e.g., Richard Frye) note conceptual
          parallels:
          {"\n\n"}- <strong>Dualistic Imagery</strong>: Light/Darkness motifs
          (Quran 24:35 vs Yasna 30)
          {"\n"}- <strong>Eschatology</strong>: Bridge over hell (Quran 36:66 vs
          Chinvat Bridge)
          {"\n"}- <strong>Angelology</strong>: Similar intermediary beings
          {"\n\n"}Theological studies (e.g., by Uri Rubin) suggest these
          represent cultural vocabulary rather than doctrinal borrowing, noting
          the Quran's radical monotheistic transformation of such concepts.
        </Paragraph>

        <Title level={4}>3. Academic Frameworks</Title>
        <Title level={5}>3.1. Intertextuality Theory</Title>
        <Paragraph>
          Modern biblical scholarship (e.g., Kristeva, Boyarin) views all sacred
          texts as engaged in intertextual dialogue. The Quran's engagement with
          prior traditions can be understood as:
          {"\n\n"}- <strong>Dialogic Correction</strong>: Explicitly revising
          earlier narratives (e.g., Mary's genealogy in 3:33-37)
          {"\n"}- <strong>Cultural Translation</strong>: Adapting concepts for
          Arabian context
          {"\n"}- <strong>Theological Supersession</strong>: Positioning itself
          as the final, perfected revelation
        </Paragraph>

        <Title level={5}>3.2. Historical Critical Analysis</Title>
        <Paragraph>
          Scholars like Angelika Neuwirth argue the Quran should be read as:
          {"\n\n"}- A <strong>Liturgical Text</strong> designed for oral
          performance rather than written copying
          {"\n"}- An <strong>Epistemic Break</strong> from existing traditions
          through its unique:
          {"\n"} • Strict monotheism
          {"\n"} • Rejection of tribal genealogies
          {"\n"} • Universal ethical framework
        </Paragraph>

        <Title level={4}>4. Islamic Responses</Title>
        <Paragraph>
          Classical and contemporary Muslim scholars address plagiarism claims
          through:
          {"\n\n"}- <strong>Tawātur Transmission</strong>: The Quran's
          mass-memorization chain ensures textual purity
          {"\n"}- <strong>I'jāz al-Quran</strong>: Its linguistic inimitability
          defies human replication
          {"\n"}- <strong>Theological Framework</strong>: As final revelation,
          it necessarily engages with but corrects prior traditions
          {"\n"}- <strong>Historical Context</strong>: Muhammad's (PBUH)
          illiteracy (ummi) makes direct copying improbable
        </Paragraph>

        <Title level={4}>5. Conclusion</Title>
        <Paragraph>
          While surface-level similarities exist between the Quran and earlier
          traditions, allegations of plagiarism fail to account for: (1) its
          transformative theological innovations, (2) the oral-liturgical nature
          of its composition, and (3) its self-conscious positioning as
          corrective revelation. The Quran's engagement with prior traditions
          parallels how the New Testament interacts with the Hebrew Bible - not
          as plagiarism but as theological dialogue. Future research should
          focus on the mechanics of cultural translation in 7th-century Arabia
          rather than anachronistic plagiarism frameworks.
        </Paragraph>

        <Title level={4}>References</Title>
        <Paragraph>
          - Nöldeke, T. (1860). <em>Geschichte des Qorāns</em>
          {"\n"}- Neuwirth, A. (2014).{" "}
          <em>Scripture, Poetry and the Making of a Community</em>
          {"\n"}- Mir, M. (1986). "The Sura as a Unity: A 20th Century
          Development in Quran Exegesis"
          {"\n"}- Rubin, U. (1995).{" "}
          <em>
            The Eye of the Beholder: The Life of Muhammad as Viewed by the Early
            Muslims
          </em>
          {"\n"}- Boyarin, D. (1990).{" "}
          <em>Intertextuality and the Reading of Midrash</em>
        </Paragraph>
      </Typography>
    </Content>
  );
}

export default IslamComponent2;
