---
title: brokerPRIME — a resilient, self-healing, elastic brokerage platform
sidebar_label: brokerPRIME
sidebar_position: 3
description: brokerPRIME is a resilient, self-healing, elastic, and horizontally scalable collection of loosely coupled message-driven microservices, deployed as containers in a clustered environment, backed by a functional database.
image: /img/project-grid/broker-thumb.jpg
keywords: [brokerage, microservices, event sourcing, cqrs, kubernetes, resilience, elasticity]
---

# brokerPRIME

<div className="doc-image-frame">
  <img src="/img/project-grid/broker-thumb.jpg" alt="brokerPRIME" />
</div>

brokerPRIME is a resilient, self-healing, elastic, and horizontally
scalable collection of loosely coupled message-driven microservices,
deployed as containers in a clustered environment, backed by a functional
database.

## The business case

- **Downtime is measured in lost clients.** A brokerage's market share
  depends on being open when the market moves. Self-healing via
  auto-placement, auto-restart, auto-replication, and auto-scaling turns
  infrastructure failures into non-events.
- **Your data model can't drift from your business.** Event sourcing keeps
  the database as a sequence of immutable state-changing events, so
  materialized domain objects always agree with what the business actually
  did — no synchronization project, no reconciliation desk.
- **Change without re-platforming.** CQRS and microservices let teams ship
  new capabilities independently — the difference between a roadmap
  measured in quarters and one measured in weeks.
- **Elasticity is a cost advantage.** Horizontal scaling means you pay for
  the capacity you use during market hours, not for peak-forever.

## Architecture in depth

### No relational database

First and foremost, we ditched the relational database (RDBMS) altogether,
opting instead for a functional database — in particular, Event Sourcing.
The database is essentially a sequence of state-changing events. Event
transactions are immutable. There is no delete operation. The store acts as
the system of record and can be used to materialize the domain objects.
This simplifies complex domains by avoiding the need to synchronize the
data model and the business domain, while improving consistency,
performance, scalability, and responsiveness.

### Command Query Responsibility Segregation (CQRS)

CQRS demands that every method be either a command that performs an action,
or a query that returns data to the caller — but not both. In Bertrand
Meyer's words: *"Asking a question should not change the answer."* Because
CQRS splits the system into separate services, it takes full advantage of
Event Sourcing. The pattern enhances scalability, simplifies the complexity
of the domain, increases flexibility, and provides greater adaptability to
changing business requirements.

### Message-driven

"Message driven" should not be mistaken with "Event driven". A message is an
item of data sent to a specific destination. An event is a signal emitted by
a component upon reaching a given state. A message payload can contain an
encoded event. Using only non-blocking and asynchronous messages among
components guarantees loose coupling, isolation, and decoupling of runtime
instances from their references. It also allows recipients to only consume
resources while active, hence less overhead. Monitoring of message queues
leads to load management, elasticity, and flow control.

### Microservices

Microservices provide agility to a complex development — more so than the
monolithic, large, and hard-to-move codebases that traditionally power
enterprise applications. Nevertheless, beware the challenges ahead:
microservices without orchestration ends in disaster. While microservices is
a variant of the service-oriented architecture (SOA) style, there are a few
differences — microservices is loosely coupled, and the granularity of
functionality and scope is finer. In practice, any single SOA service can be
divided into multiple microservices. Microservices provide autonomy, enable
greater agility, and require orchestration.

### Orchestration

brokerPRIME's microservices span multiple containers, deployed across
multiple server hosts. Kubernetes provides the orchestration and management
capabilities required to deploy containers at scale for these workloads.
Orchestration allows building services that span multiple containers,
scheduling these containers across a cluster, scaling them, and managing
the health of the containers over time. Self-healing is achieved by
auto-placement, auto-restart, auto-replication, and auto-scaling.

### Architecture and design sessions

Traditionally, for such complex domains, it would take weeks to create the
architecture blueprints. This can be reduced to days. "Event storming" is
one way to approach the design and architecture, as explained by Alberto
Brandolini — an exploratory way of finding the problems in a domain. Greg
Young also suggests focusing only on one process, the purpose being to
discover service boundaries.

## Read more

- [Anatomy of a resilient, self-healing, and elastic architecture — LinkedIn article](https://www.linkedin.com/pulse/anatomy-resilient-self-healing-elastic-architecture-hamid-jahanzad/)