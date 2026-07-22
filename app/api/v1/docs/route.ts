import { NextResponse } from "next/server";

export async function GET() {
  const openApiSpec = {
    openapi: "3.0.0",
    info: {
      title: "Campus Cash World REST API",
      version: "v1",
      description: "Versioned REST API for Campus Cash World content, offers, reviews, and survey matching engine.",
    },
    servers: [
      {
        url: "/api/v1",
        description: "Production API Server",
      },
    ],
    paths: {
      "/offers": {
        get: {
          summary: "Get all offers with filtering",
          parameters: [
            { name: "category", in: "query", schema: { type: "string" } },
            { name: "country", in: "query", schema: { type: "string" } },
            { name: "search", in: "query", schema: { type: "string" } },
            { name: "limit", in: "query", schema: { type: "integer" } },
          ],
          responses: { "200": { description: "Successful response" } },
        },
      },
      "/offers/{slug}": {
        get: {
          summary: "Get single offer details by slug",
          parameters: [{ name: "slug", in: "path", required: true, schema: { type: "string" } }],
          responses: { "200": { description: "Successful response" } },
        },
      },
      "/articles": {
        get: {
          summary: "Get all blog posts and reviews",
          responses: { "200": { description: "Successful response" } },
        },
      },
      "/survey-finder": {
        post: {
          summary: "Run intelligent survey matching engine",
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    country: { type: "string" },
                    student: { type: "boolean" },
                    paypal: { type: "boolean" },
                    mobile: { type: "boolean" },
                  },
                },
              },
            },
          },
          responses: { "200": { description: "Scored matches" } },
        },
      },
    },
  };

  return NextResponse.json(openApiSpec);
}
