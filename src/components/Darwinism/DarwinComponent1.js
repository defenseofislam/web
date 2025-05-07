import React, { useEffect } from "react";
import { Layout, Typography } from "antd";
import { Tooltip } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

function DarwinComponent1() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Content style={{ padding: "24px" }}>
      <Typography>
        <Title level={2}>
          Is Darwinian evolution hypothesis better than believing in
          Creationism?{" "}
          <Tooltip title="Note: Throughout this article, 'evolution' refers specifically to Darwinian (macro) evolution, not observable microevolution or adaptation.">
            <InfoCircleOutlined style={{ marginLeft: 8, color: "#1890ff" }} />
          </Tooltip>
        </Title>
        ----{" "}
        <Text italic type="secondary">
          Written By Fida Karim[Mbbs Student]
        </Text>
        <Title level={4}>Abstract</Title>
        <Paragraph>
          <Text italic>
            The debate between <Text strong>Darwinian evolution</Text> and{" "}
            <Text strong>Creationism</Text> remains one of the most{" "}
            <Text type="danger">polarizing subjects</Text> in modern science and
            theology.
          </Text>{" "}
          While proponents of evolution argue it is grounded in{" "}
          <Text code>empirical evidence</Text>, critics highlight{" "}
          <Text type="warning">philosophical assumptions</Text>,{" "}
          <Text type="warning">data inconsistencies</Text>, and{" "}
          <Text delete>unproven mechanisms</Text> that underlie evolutionary
          theory.{" "}
          <Text mark>
            Creationism, particularly within the Islamic tradition, offers a
            theocentric explanation of life rooted in divine intent, purpose,
            and design.
          </Text>{" "}
          <Text underline>
            This article critically examines the evidence behind Darwinian
            claims, challenges to its foundational assumptions, and contrasts it
            with the intellectual coherence and metaphysical grounding of the
            Creationist worldview.
          </Text>
        </Paragraph>
        <hr />
        <Title level={4}>
          1. Critique of Evolutionary Transitional Fossils
        </Title>
        <Paragraph>
          <Text italic>
            Many critics of Islamic tradition appeal to evolutionary theory to
            assert the superiority of secular science over religious narratives.
          </Text>{" "}
          However, even evolutionary <Text code>"evidence"</Text> is not immune
          to scrutiny. Several famous transitional fossils, often touted in
          textbooks and media, have been the subject of{" "}
          <Text type="danger">intense scientific debate</Text> and reevaluation:
          {"\n\n"}- <Text mark>Tiktaalik:</Text> Commonly cited as a
          fish-to-tetrapod transitional fossil, yet it was
          <Text strong> fully aquatic </Text>and lacked definitive transitional
          features. <Text underline>More critically</Text>, fossilized trackways
          of fully walking tetrapods found in Poland{" "}
          <Text strong>predate Tiktaalik by 18 million years</Text>, undermining
          its position in the evolutionary sequence.{" "}
          <Text type="secondary">
            [Reference: Niedźwiedzki et al., Nature, 2010]
          </Text>
          {"\n\n"}- <Text mark>Archaeopteryx:</Text> Often hailed as the bridge
          between dinosaurs and birds, but many paleontologists now consider it
          a <Text strong>fully formed bird</Text>. It had flight feathers, a
          wishbone, and perching feet like modern birds. Supposed “reptilian”
          features have been observed in other extinct avian species,
          challenging its transitional status.{" "}
          <Text type="secondary">
            [Source: Feduccia, A., <i>The Origin and Evolution of Birds</i>]
          </Text>
          {"\n\n"}- <Text mark>Australopithecus (e.g., Lucy):</Text> Long
          considered a human ancestor, but her gait was distinct from modern
          humans, and her cranial and manual features fall within the{" "}
          <Text underline>ape range</Text>. Experts like{" "}
          <Text strong>Lord Solly Zuckerman</Text> and{" "}
          <Text strong>Charles Oxnard</Text> argue Australopithecines are not
          direct ancestors but an extinct side branch.{" "}
          <Text type="secondary">
            [References: Zuckerman and Oxnard’s anatomical studies]
          </Text>
          {"\n\n"}- <Text mark>Pakicetus:</Text> Originally reconstructed from
          limited fossil material (<Text code>a jawbone</Text>), and prematurely
          presented as a semi-aquatic whale ancestor. Later, more complete
          fossils revealed it was <Text strong>fully terrestrial</Text> and bore
          little resemblance to whales. The initial portrayal was driven more by{" "}
          <Text delete>evolutionary expectations</Text> than actual data.{" "}
          <Text type="secondary">
            [Reference: Gingerich et al., 2001; criticism by Phillip Johnson]
          </Text>
        </Paragraph>
        <Paragraph>
          <Text strong>This raises an important question:</Text> If scientific
          models can be drastically revised, questioned, or even overturned—why
          are religious traditions not given the same benefit of historical and
          contextual understanding? The bias is glaring: when secular science
          updates, it’s called "progress"; when religion explains context, it’s
          labeled "apologetics."
        </Paragraph>
        <Paragraph>
          Selective skepticism is not scholarship—it’s ideology. Those who
          weaponize science against faith while ignoring its internal
          controversies reveal their agenda: not the pursuit of truth, but the
          preservation of narrative dominance. Islam invites reasoned critique,
          but it demands fairness—something often absent in modern polemics.
        </Paragraph>
        <Title level={4}>
          2. The Microevolution vs. Macroevolution Fallacy
        </Title>
        <Paragraph>
          One of the most frequently employed defenses of Darwinian theory is
          the claim that{" "}
          <Text strong>
            "macroevolution is simply microevolution over long periods of time."
          </Text>{" "}
          While this may appear convincing at first glance, it commits a
          fundamental equivocation fallacy—using one definition of a word to
          prove a distinctly different concept.
        </Paragraph>
        <Paragraph>
          <Text mark>Microevolution</Text> refers to small, observable changes
          within a species—such as variations in beak size among finches or
          changes in fur color. These changes are typically the result of gene
          shuffling, selection, or loss of existing genetic information. They
          are well-documented and undisputed within both scientific and
          creationist circles. However, crucially, they do not introduce new
          functional genetic information, nor do they produce new body plans or
          organs.
        </Paragraph>
        <Paragraph>
          <Text mark>Macroevolution,</Text> on the other hand, refers to the
          emergence of entirely new species, organs, and complex biological
          structures—requiring vast increases in functional genetic information.
          No known natural process has been empirically observed to produce such
          innovations. The mechanisms observed in microevolution often lead to
          specialization or reduction in genetic diversity, not biological
          novelty. For example, antibiotic resistance in bacteria frequently
          involves the loss or disabling of a gene (such as a protein pump), not
          the creation of a new one.
        </Paragraph>
        <Paragraph>
          The extrapolation from microevolution to macroevolution is not a
          conclusion derived from observation—it is a philosophical assumption
          layered over limited data. The two concepts operate on entirely
          different scales, both biologically and informationally, and
          conflating them is scientifically misleading.
        </Paragraph>
        <Paragraph>
          <Text italic>
            “Variation within a type is not evidence for the origin of that
            type.”
          </Text>{" "}
          —{" "}
          <Text italic>Dr. Michael Denton, Evolution: A Theory in Crisis</Text>
        </Paragraph>
        <Title level={4}>3. Can Natural Selection Build Complex Systems?</Title>
        <Paragraph>
          A widely repeated assertion in evolutionary biology is that complexity
          does not require a designer—natural selection can construct it
          incrementally through countless small, beneficial changes. While this
          explanation may sound plausible in theory, it grossly oversimplifies
          the actual challenges and fails to address several critical scientific
          objections:
        </Paragraph>
        <Paragraph>
          - <Text mark>Irreducible Complexity:</Text> Some biological systems
          exhibit an all-or-nothing architecture, where every component is
          essential for functionality. The bacterial flagellum, the blood
          clotting cascade, and ATP synthase are prime examples. If even one
          part is missing, the system ceases to function. Since intermediate
          stages would offer no selective advantage, natural selection has no
          explanatory power in constructing such systems. [Reference: Behe,
          *Darwin’s Black Box*]
        </Paragraph>
        <Paragraph>
          - <Text mark>The Information Problem:</Text> DNA stores complex,
          specified information akin to a digital code. According to information
          theory, random mutations lack the creative capacity to generate the
          kind of meaningful, ordered information required to build new organs
          or body plans. The probability of such highly functional code emerging
          without intelligent input is statistically negligible. [Reference: Dr.
          Werner Gitt, *In the Beginning Was Information*]
        </Paragraph>
        <Paragraph>
          - <Text mark>Mathematical Improbability:</Text> The likelihood of
          accumulating the specific, coordinated mutations necessary to form
          complex structures such as wings, eyes, or lungs—within the timeframe
          allowed by the fossil record—is astronomically low. Mutation and
          selection, even when acting over millions of years, appear
          insufficient when analyzed through realistic probabilistic models.
          [Reference: Sanford, J.C., *Genetic Entropy*]
        </Paragraph>
        <Paragraph>
          <Text strong>
            Design remains the more rational and parsimonious inference when
            confronted with purposeful, integrated complexity—just as we
            attribute software to programmers and machines to engineers.
          </Text>{" "}
          To deny this in biology, while affirming it in every other domain,
          reveals more about philosophical biases than scientific evidence.
        </Paragraph>
        <Title level={4}>
          4. Fraud and Misrepresentation in the Fossil Record
        </Title>
        <Paragraph>
          Evolutionary theory is frequently presented as an unshakable
          scientific consensus, grounded in an objective and self-correcting
          process. However, history reveals that several high-profile forgeries
          and misinterpretations have not only misled the public but also shaped
          academic discourse for decades. These cases expose a deeper issue:
          that ideological commitment can, at times, override scientific rigor.
        </Paragraph>
        <Paragraph>
          - <Text mark>Piltdown Man:</Text> Perhaps the most infamous
          paleoanthropological hoax, Piltdown Man was a fraudulent "missing
          link" created by combining a medieval human skull with an orangutan
          jaw. This forgery misled the scientific community for over 40 years
          and was used to support evolutionary narratives despite early doubts
          about its authenticity.
        </Paragraph>
        <Paragraph>
          - <Text mark>Haeckel’s Embryos:</Text> Ernst Haeckel produced drawings
          of vertebrate embryos that greatly exaggerated their similarities in
          order to support his theory of recapitulation ("ontogeny recapitulates
          phylogeny"). Despite being exposed as fraudulent in the 19th century,
          these drawings were reproduced in biology textbooks well into the 20th
          century and still persist in some modern educational materials.
        </Paragraph>
        <Paragraph>
          - <Text mark>Archaeoraptor:</Text> In 1999, *National Geographic*
          unveiled what it called a "missing link" between dinosaurs and birds.
          This fossil was later exposed as a composite forgery, cobbled together
          from parts of different species. It passed through peer review and was
          celebrated in mainstream media before being debunked.
        </Paragraph>
        <Paragraph>
          <Text strong>
            These incidents are not trivial anomalies—they reflect a pattern
            where confirmation bias, media sensationalism, and ideological
            allegiance have occasionally compromised the integrity of
            evolutionary science.
          </Text>{" "}
          The persistence of such errors in academic and public discourse
          suggests that the narrative, rather than the evidence, is sometimes
          driving the conclusions.
        </Paragraph>
        <Title level={4}>5. Misleading Narratives About “Species Change”</Title>
        <Paragraph>
          A common argument in support of Darwinian evolution is that we have
          observed many species change over time—horses, whales, birds, even
          humans. However, the core issue is not whether change occurs, but{" "}
          <Text strong>what kind of change</Text> it is, and in{" "}
          <Text strong>which direction</Text> it points. The fossil evidence
          often reveals complexity, ambiguity, and discontinuity rather than the
          smooth, linear progression suggested by textbooks.
        </Paragraph>
        <Paragraph>
          - <Text mark>Horse Evolution:</Text> Frequently presented as a classic
          example of linear evolutionary progression, the horse fossil record is
          far more chaotic. It reveals a mosaic of overlapping species with
          diverse sizes and traits, lacking a consistent upward trend. The neat
          sequence from Eohippus to Equus is an oversimplification. [Reference:
          Heribert Nilsson, *Synthetische Artbildung*]
        </Paragraph>
        <Paragraph>
          - <Text mark>Whale Evolution:</Text> The supposed transition from
          land-dwelling mammals to fully aquatic whales requires multiple major
          anatomical transformations: development of blowholes, conversion of
          limbs to flippers, formation of echolocation, and reconfiguration of
          reproductive and respiratory systems. The fossil evidence consists of
          scattered, incomplete specimens and speculative reconstructions—not a
          step-by-step trail.
        </Paragraph>
        <Paragraph>
          - <Text mark>Human Evolution:</Text> The alleged evolutionary tree
          leading from Australopithecus to Homo sapiens is highly contested
          within paleoanthropology itself. New discoveries frequently reshape
          the tree into a bush—full of dead ends, reversals, and uncertain
          relationships. There is no universally accepted lineage that clearly
          bridges the gap from apes to modern humans.
        </Paragraph>
        <Paragraph>
          <Text strong>
            What we observe is variation within kinds or interpretive
            storytelling applied to ambiguous fossils—not empirical evidence of
            macroevolutionary transitions.
          </Text>{" "}
          Scientific humility demands we acknowledge the limits of inference and
          avoid conflating variation with transformation.
        </Paragraph>
        <Title level={4}>
          6. Is Evolution Truly Testable, Predictive, and Self-Correcting?
        </Title>
        <Paragraph>
          Evolutionary proponents often argue that the theory may not be
          perfect, but it is scientific because it is{" "}
          <Text strong>testable</Text>, <Text strong>predictive</Text>, and{" "}
          <Text strong>refined over time.</Text> However, upon closer scrutiny,
          these claims amount more to narrative reassurance than empirical
          reality. Evolutionary theory, particularly in its grand claims,
          operates as a philosophical framework applied to biology—often
          interpreting evidence rather than being derived from it.
        </Paragraph>
        <Paragraph>
          - <Text mark>Testability:</Text> Darwinian evolution deals primarily
          with unrepeatable historical events. Claims about transitions that
          occurred millions of years ago cannot be directly observed, repeated,
          or falsified in the lab. Unlike operational science, which tests
          hypotheses in real time, evolutionary claims rely on assumptions about
          the past that are often beyond verification.
        </Paragraph>
        <Paragraph>
          - <Text mark>Predictive Power:</Text> Many evolutionary predictions
          have failed or been quietly abandoned. So-called “vestigial organs”
          like the appendix or tonsils, once claimed to be useless remnants, are
          now recognized as having important immune functions. “Junk DNA,” too,
          has been shown to contain regulatory elements crucial to gene
          expression. Initial assumptions of simple cell structure have been
          shattered by modern microbiology, which reveals cells as intricate
          factories of interdependent processes.
        </Paragraph>
        <Paragraph>
          - <Text mark>Refinement or Rescue?</Text> When fossil evidence
          contradicts the expected evolutionary timeline, dating methods are
          revised to preserve the theory. When complex, similar features appear
          in unrelated species, they are labeled as “convergent evolution”—a
          descriptive term that lacks mechanistic explanation. These ad hoc
          adjustments reflect theory-protection rather than genuine
          falsifiability.
        </Paragraph>
        <Paragraph>
          <Text strong>
            In essence, evolution is not “science” in the strict empirical
            sense—it functions as a lens through which evidence is interpreted.
            While minor adaptation (microevolution) is observable and testable,
            large-scale macroevolution lacks sufficient fossil, genetic,
            mathematical, and biochemical support.
          </Text>{" "}
          The <Text underline>design inference</Text>, by contrast, offers a
          more coherent, predictive, and empirically consistent model to account
          for the specified complexity and informational architecture observed
          in life.
        </Paragraph>
        <Title level={4}>
          7. Conclusion: Reassessing the Evolutionary Paradigm
        </Title>
        <Paragraph>
          The debate between Darwinian evolution and intelligent design is not
          merely scientific—it is philosophical, ideological, and
          epistemological. While evolution is often presented as an objective,
          self-correcting framework, critical examination reveals a system built
          on extrapolation, reinterpretation, and selective data usage. Its
          foundational claims—whether about transitional fossils,
          macroevolution, or predictive power—face serious scientific and
          logical challenges.
        </Paragraph>
        <Paragraph>
          Historical forgeries, conceptual ambiguities, and reliance on
          narrative rather than empirical falsifiability expose the
          vulnerabilities of evolutionary theory as it is commonly taught.
          Meanwhile, the increasing recognition of biological information,
          irreducible complexity, and fine-tuned systems in living organisms
          points toward a more rational and causally adequate explanation:{" "}
          <Text strong>intelligent design.</Text>
        </Paragraph>
        <Paragraph>
          <Text strong>
            It is not “anti-science” to question evolution—it is pro-science to
            demand testability, clarity, and integrity.
          </Text>{" "}
          If science is truly about following the evidence wherever it leads,
          then the design inference deserves fair consideration rather than
          dismissal through ideological gatekeeping.
        </Paragraph>
        <Paragraph>
          Furthermore, if critics of creationism invoke moral outrage or ethical
          standards to reject divine explanations, they must also turn their
          scrutiny toward materialist assumptions that provide no grounding for
          objective morality, consciousness, or purpose. Why is the focus so
          disproportionately aimed at theism, while naturalistic dogmas are
          shielded from equal scrutiny?
        </Paragraph>
        <Paragraph>
          In an age where science is often conflated with scientism, and
          education sometimes serves ideology more than inquiry, it is essential
          to restore philosophical balance. Evolution may offer a framework, but
          it is not the only one—nor is it the most coherent. Creationism and
          design theory, rooted in both reason and revelation, remain
          intellectually viable and scientifically relevant alternatives in the
          modern discourse.
        </Paragraph>
      </Typography>
    </Content>
  );
}

export default DarwinComponent1;
